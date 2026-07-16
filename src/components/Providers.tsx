"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * App-wide providers:
 * - next-themes drives the light/dark class on <html> (dark by default).
 * - Lenis adds momentum smooth scrolling and smoothly handles in-page
 *   anchor links, offset for the sticky navbar height.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ReactLenis
        root
        options={{ lerp: 0.1, smoothWheel: true, anchors: { offset: -72 } }}
      >
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
