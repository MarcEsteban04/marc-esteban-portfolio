"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids currently fills the most of the
 * viewport, so nav links can highlight the section the user is actually
 * looking at. Comparing visible height (not a fixed trigger line) avoids
 * getting "stuck" on the previous section when the next one has a lot of
 * top padding, and avoids bias toward short sections vs. tall ones.
 */
export function useScrollSpy(ids: string[], topOffset = 64) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    let raf = 0;
    const update = () => {
      const viewportHeight = window.innerHeight;
      let bestId = "";
      let bestVisible = 0;
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        const top = Math.max(rect.top, topOffset);
        const bottom = Math.min(rect.bottom, viewportHeight);
        const visible = bottom - top;
        if (visible > bestVisible) {
          bestVisible = visible;
          bestId = el.id;
        }
      }
      setActiveId(bestId);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, topOffset]);

  return activeId;
}
