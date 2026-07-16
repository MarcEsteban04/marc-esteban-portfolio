"use client";

import { useEffect, useState } from "react";

type Options = {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
};

/**
 * Cycles through `words`, typing and deleting each one character-by-character.
 * Honors prefers-reduced-motion by showing the first word statically.
 */
export function useTypewriter(
  words: string[],
  { typingSpeed = 90, deletingSpeed = 45, pauseTime = 1600 }: Options = {},
): string {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduced || words.length === 0) return;

    const current = words[wordIndex % words.length];

    // Pause fully typed word before deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    // Move to next word once fully deleted.
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, reduced, typingSpeed, deletingSpeed, pauseTime]);

  if (reduced) return words[0] ?? "";
  return text;
}
