"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useT } from "@/lib/i18n/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Story() {
  const root = useRef<HTMLElement>(null);
  const t = useT();
  const STORY_STAGES = t.story.stages;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stages = gsap.utils.toArray<HTMLElement>(".story-stage");

      stages.forEach((stage) => {
        const img = stage.querySelector(".story-image");
        const text = stage.querySelector(".story-text");

        gsap.fromTo(
          img,
          { scale: 1.2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: stage,
              start: "top 70%",
              end: "top 30%",
              scrub: 0.6,
            },
          },
        );

        gsap.fromTo(
          text?.children ?? [],
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: stage,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Sticky progress bar
      const progress = document.querySelector<HTMLElement>(".story-progress");
      if (progress) {
        gsap.to(progress, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 60%",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="story"
      className="relative overflow-hidden bg-bg py-24 sm:py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Section intro */}
        <div className="mb-16 sm:mb-24 grid gap-6 sm:gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted backdrop-blur">
              {t.story.eyebrow}
            </span>
          </div>
          <div className="lg:col-span-10">
            <h2 className="font-display text-[clamp(2rem,7vw,7rem)] leading-[1.05] sm:leading-[0.95] sm:text-balance">
              {t.story.title1} <br className="hidden sm:block" />
              {t.story.title2}{" "}
              <span className="italic gradient-text">{t.story.titleAccent}</span>{" "}
              {t.story.title3}
            </h2>
            <p className="mt-5 sm:mt-8 max-w-xl text-base sm:text-lg text-muted">
              {t.story.lede}
            </p>
          </div>
        </div>

        {/* Sticky progress line */}
        <div className="sticky top-24 z-10 mb-16 hidden md:block">
          <div className="relative h-px w-full bg-black/10">
            <div className="story-progress absolute inset-y-0 left-0 origin-left h-px scale-x-0 bg-primary" />
          </div>
        </div>

        {/* Stages */}
        <div className="space-y-20 sm:space-y-32 md:space-y-44">
          {STORY_STAGES.map((stage, i) => (
            <div
              key={stage.title}
              className={`story-stage grid gap-6 sm:gap-10 md:gap-16 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="story-image relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <span className="font-mono text-sm tracking-wider">
                    {stage.era}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-xs uppercase tracking-widest backdrop-blur"
                    style={{
                      backgroundColor: `${stage.accent}33`,
                      borderColor: stage.accent,
                      borderWidth: 1,
                    }}
                  >
                    {t.common.chapter} {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="story-text">
                <span
                  className="mb-4 inline-flex h-1.5 w-12 rounded-full"
                  style={{ backgroundColor: stage.accent }}
                />
                <h3 className="font-display text-[clamp(1.75rem,5vw,5rem)] leading-[0.95] text-balance">
                  {stage.title}
                </h3>
                <p className="mt-4 sm:mt-6 max-w-md text-base sm:text-lg leading-relaxed text-muted">
                  {stage.body}
                </p>
                <div className="mt-6 sm:mt-10 flex items-center gap-4 sm:gap-6">
                  <span className="font-mono text-xs sm:text-sm text-muted">
                    {String(i + 1).padStart(2, "0")} / {String(STORY_STAGES.length).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-black/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
