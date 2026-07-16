"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 up to `target` once the element scrolls into view.
 * Skips the animation for users who prefer reduced motion.
 */
export function useCountUp(target: number, duration = 1500) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        let raf = 0;
        // rAF timestamps are relative, so the first frame seeds the start.
        let start: number | null = null;
        const tick = (now: number) => {
          if (start === null) start = now;
          const progress = Math.min((now - start) / duration, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        el.dataset.rafCleanup = String(raf);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}
