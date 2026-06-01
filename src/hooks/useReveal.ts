"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Options = {
  y?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
};

export function useReveal<T extends HTMLElement = HTMLElement>(
  options: Options = {},
) {
  const ref = useRef<T | null>(null);
  const {
    y = 60,
    delay = 0,
    duration = 1.1,
    stagger = 0.06,
    start = "top 85%",
    once = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-reveal]");
    const targets = items.length > 0 ? Array.from(items) : [el];

    const ctx = gsap.context(() => {
      gsap.set(targets, { y, opacity: 0 });
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, delay, duration, stagger, start, once]);

  return ref;
}
