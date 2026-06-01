"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xTo = gsap.quickTo(ring, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(ring, "y", { duration: 0.6, ease: "power3.out" });
    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.18, ease: "power3.out" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.18, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
    };

    const onEnter = () => document.documentElement.classList.add("cursor-hover");
    const onLeave = () => document.documentElement.classList.remove("cursor-hover");

    window.addEventListener("mousemove", onMove);

    const observer = new MutationObserver(() => bind());

    function bind() {
      const els = document.querySelectorAll<HTMLElement>(
        'a, button, [role="button"], .cursor-hoverable, input, textarea',
      );
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    }
    bind();
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
