"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { TbSun, TbMoon } from "react-icons/tb";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid a hydration mismatch: the icon depends on the resolved theme,
  // which is only known on the client.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`rounded-md p-2 text-muted transition-colors hover:text-foreground ${className}`}
    >
      {mounted && !isDark ? <TbMoon size={20} /> : <TbSun size={20} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
