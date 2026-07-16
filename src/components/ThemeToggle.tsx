"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { TbSun, TbMoon } from "react-icons/tb";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The theme is only known on the client, so keep theme-dependent
  // attributes/icon stable until mounted to avoid a hydration mismatch.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== "light";
  const label = mounted
    ? `Switch to ${isDark ? "light" : "dark"} theme`
    : "Toggle theme";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Apply the class synchronously so it's captured by the transition
    // snapshot, and sync next-themes (persist + keep state in sync).
    const apply = () => {
      root.classList.remove("light", "dark");
      root.classList.add(next);
      root.style.colorScheme = next;
      setTheme(next);
    };

    // View Transitions API gives a smooth, GPU-composited crossfade of a
    // viewport snapshot — no per-element repaint, so no lag. Fall back to
    // an instant switch where it's unsupported or motion is reduced.
    if (reduce || typeof document.startViewTransition !== "function") {
      apply();
      return;
    }
    document.startViewTransition(apply);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`rounded-md p-2 text-muted transition-colors hover:text-foreground ${className}`}
    >
      {mounted && !isDark ? <TbMoon size={20} /> : <TbSun size={20} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
