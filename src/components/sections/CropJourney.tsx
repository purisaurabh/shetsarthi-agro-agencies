"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CROP_JOURNEY } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CropJourney() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".journey-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 50%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        },
      );

      const items = gsap.utils.toArray<HTMLElement>(".journey-item");
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            x: isDesktop ? (i % 2 === 0 ? -80 : 80) : 0,
            y: isDesktop ? 0 : 40,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="journey"
      className="relative overflow-hidden bg-gradient-to-b from-[#F0F0EB] to-bg py-24 sm:py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 sm:mb-24 grid gap-6 sm:gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted backdrop-blur">
              Crop Journey
            </span>
          </div>
          <div className="lg:col-span-10">
            <h2 className="font-display text-[clamp(2.25rem,7vw,7rem)] leading-[0.95] text-balance">
              Seven stages. <br />
              <span className="italic gradient-text">One harvest.</span>
            </h2>
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line — left on mobile, center on md+ */}
          <div className="absolute top-0 bottom-0 w-px bg-black/10 left-5 md:left-1/2 md:-translate-x-1/2">
            <div className="journey-line absolute inset-0 origin-top bg-gradient-to-b from-primary via-fresh to-harvest" />
          </div>

          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {CROP_JOURNEY.map((step, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={step.step}
                  className="journey-item relative grid grid-cols-[3rem_1fr] md:grid-cols-2 gap-6 md:gap-8"
                >
                  {/* Mobile: dot + icon column */}
                  <div className="md:hidden relative">
                    <div className="absolute top-1.5 left-3.5">
                      <div className="relative grid h-4 w-4 place-items-center rounded-full bg-primary">
                        <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-50" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile: text + icon stacked */}
                  <div className="md:hidden">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs text-muted">
                          {step.step}
                        </span>
                        <h3 className="mt-1 font-display text-2xl sm:text-3xl leading-tight">
                          {step.title}
                        </h3>
                      </div>
                      <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-white shadow-md text-2xl">
                        {step.icon}
                      </div>
                    </div>
                    <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                      {step.body}
                    </p>
                  </div>

                  {/* Desktop: alternating layout */}
                  <div
                    className={`hidden md:block ${reverse ? "order-2 pl-12" : "text-right pr-12"}`}
                  >
                    <span className="font-mono text-xs text-muted">
                      {step.step}
                    </span>
                    <h3 className="mt-2 font-display text-4xl md:text-5xl leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-muted">{step.body}</p>
                  </div>

                  <div className={`hidden md:block relative ${reverse ? "order-1" : ""}`}>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2">
                      <div className="relative grid h-4 w-4 place-items-center rounded-full bg-primary">
                        <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-50" />
                      </div>
                    </div>
                    <div
                      className={`flex ${reverse ? "justify-end pr-12" : "justify-start pl-12"}`}
                    >
                      <div className="grid h-20 w-20 lg:h-24 lg:w-24 place-items-center rounded-3xl bg-white shadow-lg shadow-black/5 text-3xl lg:text-4xl">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
