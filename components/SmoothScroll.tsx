"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect users who prefer reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      // Keep it smooth but close to native
      smoothWheel: true,
      wheelMultiplier: 1,
      duration: 0.85,

      // Makes wheel feel consistent instead of “accelerating”
      // (Some Lenis versions support normalizeWheel; harmless if ignored)
      // @ts-ignore
      normalizeWheel: true,

      // Avoid weird touch behavior (safe defaults)
      smoothTouch: false,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      // @ts-ignore
      lenis.destroy?.();
    };
  }, []);

  return <>{children}</>;
}