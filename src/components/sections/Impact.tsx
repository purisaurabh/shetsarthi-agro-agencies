"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Impact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate counters
      const counters = gsap.utils.toArray<HTMLElement>("[data-counter]");
      counters.forEach((el) => {
        const target = Number(el.dataset.counter);
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 2.4,
          ease: "expo.out",
          onUpdate: () => {
            el.textContent = Math.floor(obj.value).toLocaleString("en-IN");
          },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });
      });

      // Headline parallax
      gsap.to(".impact-bg-text", {
        x: -200,
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="impact"
      className="relative overflow-hidden bg-bg py-24 sm:py-32 md:py-44"
    >
      {/* Background giant text */}
      <div
        aria-hidden
        className="impact-bg-text pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 select-none whitespace-nowrap font-display text-[clamp(8rem,20vw,22rem)] leading-none text-primary/[0.05]"
      >
        IMPACT · IMPACT · IMPACT ·
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-2">
          </div>
          <div className="lg:col-span-10">
            <h2 className="font-display text-[clamp(2.25rem,7vw,7rem)] leading-[0.95] text-balance">
              Numbers that <br className="hidden sm:block" />
              <span className="italic gradient-text">mean something.</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 grid gap-px overflow-hidden rounded-2xl sm:rounded-3xl border border-black/5 bg-black/5 grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden bg-bg p-5 sm:p-8 transition-colors hover:bg-white"
            >
              <div className="flex items-baseline">
                <span
                  data-counter={s.value}
                  className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-none text-ink tabular-nums"
                >
                  0
                </span>
                <span className="font-display text-[clamp(1.5rem,5vw,4rem)] leading-none text-primary">
                  {s.suffix}
                </span>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-ink">{s.label}</p>
              <p className="mt-1 text-xs sm:text-sm text-muted">{s.sub}</p>

              {/* Hover ring accent */}
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-fresh/0 blur-2xl transition-all duration-700 group-hover:bg-fresh/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
