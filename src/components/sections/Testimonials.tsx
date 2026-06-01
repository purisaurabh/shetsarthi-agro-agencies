"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".tcard");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, rotation: i % 2 === 0 ? -3 : 3 },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // Subtle continuous float
        gsap.to(card, {
          y: "+=12",
          duration: 4 + (i % 3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32 md:py-44 bg-gradient-to-b from-bg via-[#EAF3E6] to-bg"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-fresh/30 blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-harvest/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mx-auto mb-12 sm:mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted backdrop-blur">
            Voices from the field
          </span>
          <h2 className="mt-4 sm:mt-6 font-display text-[clamp(2rem,6.5vw,6rem)] leading-[0.95] text-balance">
            Maharashtra&apos;s farmers <br className="hidden sm:block" />
            <span className="italic gradient-text">in their own words.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className={`tcard glass relative flex flex-col gap-4 sm:gap-5 rounded-2xl sm:rounded-3xl p-6 sm:p-7 will-change-transform ${
                i === 1 || i === 4 ? "lg:translate-y-10" : ""
              } ${i === 2 ? "lg:-translate-y-6" : ""}`}
            >
              <Quote className="h-7 w-7 sm:h-8 sm:w-8 text-primary/60" strokeWidth={1.5} />
              <p className="text-pretty text-base sm:text-lg leading-relaxed text-ink">
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-auto flex items-center gap-4 border-t border-black/5 pt-4 sm:pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.crop} · {t.village}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
