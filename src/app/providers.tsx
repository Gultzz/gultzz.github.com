"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, anchors: true });
    let frame = 0;
    let active = !document.hidden;
    const raf = (time: number) => {
      if (!active) return;
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    const visibility = () => {
      active = !document.hidden;
      cancelAnimationFrame(frame);
      if (active) frame = requestAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", visibility);
    frame = requestAnimationFrame(raf);
    return () => { document.removeEventListener("visibilitychange", visibility); cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
