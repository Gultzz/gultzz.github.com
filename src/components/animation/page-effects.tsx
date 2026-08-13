"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import { InteractiveBackground } from "./interactive-background";

export function PageEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.25 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let disposed = false;
    let gsapCleanup = () => {};
    const animations: Animation[] = [];
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const supportsViewTimeline = CSS.supports("animation-timeline", "view()");
    const observer = supportsViewTimeline ? null : new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        const direction = element.dataset.reveal;
        const from = direction === "left"
          ? "translate3d(-24px, 0, 0)"
          : direction === "right"
            ? "translate3d(24px, 0, 0)"
            : direction === "scale"
              ? "scale(.96)"
              : "translate3d(0, 24px, 0)";
        animations.push(element.animate(
          [{ opacity: 0, transform: from, filter: "blur(5px)" }, { opacity: 1, transform: "none", filter: "blur(0)" }],
          { duration: 760, easing: "cubic-bezier(.22, 1, .36, 1)", fill: "both" },
        ));
        observer?.unobserve(element);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6%" });

    revealElements.forEach((element) => observer?.observe(element));

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      if (disposed) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.fromTo(".timeline-line", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".experience-list", start: "top 75%", end: "bottom 70%", scrub: 0.5 } });
      });
      gsapCleanup = () => { context.revert(); ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
    });
    return () => {
      disposed = true;
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      gsapCleanup();
    };
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <InteractiveBackground />
    </>
  );
}
