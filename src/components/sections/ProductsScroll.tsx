"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductsScroll() {
  const section = useRef<HTMLDivElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const { t, locale } = useLanguage();
  const PRODUCTS = t.products.items;

  // 3D tilt on hover (desktop pointers only)
  useEffect(() => {
    const trackEl = track.current;
    if (!trackEl || window.matchMedia("(hover: none)").matches) return;

    const cards = trackEl.querySelectorAll<HTMLElement>(".product-card");
    const handlers: Array<{
      el: HTMLElement;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }> = [];

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotateY: x * 10,
          rotateX: -y * 10,
          duration: 0.5,
          ease: "power3.out",
          transformPerspective: 1200,
        });
      };

      const leave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.7,
          ease: "expo.out",
        });
      };

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ el: card, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
        gsap.killTweensOf(el);
        gsap.set(el, { clearProps: "transform" });
      });
    };
  }, []);

  // Pinned horizontal scroll (tablet + desktop). Mobile falls back to native swipe.
  useEffect(() => {
    const sectionEl = section.current;
    const pinEl = pin.current;
    const trackEl = track.current;
    if (!sectionEl || !pinEl || !trackEl) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const getDistance = () =>
        Math.max(0, trackEl.scrollWidth - window.innerWidth);

      const tween = gsap.to(trackEl, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pinEl,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(trackEl, { clearProps: "transform" });
      };
    });

    return () => mm.revert();
    // Re-run when language changes — the card text width affects scrollWidth,
    // so the pin distance has to be recomputed.
  }, [locale]);

  return (
    <section
      id="products"
      ref={section}
      className="relative overflow-hidden bg-gradient-to-b from-bg to-[#F0F0EB]"
    >
      <div
        ref={pin}
        className="relative flex h-[100svh] min-h-[640px] flex-col justify-center gap-8 py-12 md:gap-12 md:py-16"
      >
        {/* Header — stays visible during the pinned horizontal scroll */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-block rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted backdrop-blur">
                {t.products.eyebrow}
              </span>
              <h2 className="mt-3 font-display text-[clamp(2rem,5vw,5rem)] leading-[0.95] text-balance sm:mt-4">
                {t.products.title1} <br className="hidden sm:block" /> {t.products.title2}
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted sm:text-base">{t.products.lede}</p>
          </div>
        </div>

        {/* Horizontal track. Native swipe on mobile, GSAP-driven on md+. */}
        <div
          ref={track}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-6 pr-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 md:overflow-visible md:snap-none md:pl-10 md:pr-[12vw] md:will-change-transform"
        >
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="product-card group relative flex h-[460px] w-[78vw] flex-shrink-0 snap-center flex-col overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5 [transform-style:preserve-3d] sm:h-[520px] sm:w-[360px] md:h-[min(520px,60svh)] lg:h-[min(560px,65svh)] lg:w-[420px]"
            >
              <div className="relative h-2/3 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 78vw, 420px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-ink backdrop-blur">
                  {p.category}
                </div>
                <div className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 backdrop-blur transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <p
                    className="text-[10px] sm:text-xs font-medium uppercase tracking-widest"
                    style={{ color: p.color }}
                  >
                    {p.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted line-clamp-2">
                    {p.description}
                  </p>
                </div>
                <div
                  className="mt-4 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-24"
                  style={{ backgroundColor: p.color }}
                />
              </div>
            </div>
          ))}

          <div className="relative flex h-[460px] w-[78vw] flex-shrink-0 snap-center flex-col items-center justify-center overflow-hidden rounded-3xl bg-ink p-8 text-white sm:h-[520px] sm:w-[360px] sm:p-10 md:h-[min(520px,60svh)] lg:h-[min(560px,65svh)] lg:w-[420px]">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-fresh">
              {t.products.moreOnTheWay}
            </p>
            <h3 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl leading-tight text-balance text-center">
              {t.products.ctaLine1}{" "}
              <span className="italic text-fresh">{t.products.ctaLine2}</span>
            </h3>
            <a
              href="/products"
              className="mt-6 sm:mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-ink transition-colors hover:bg-fresh hover:text-white"
            >
              {t.products.ctaButton}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
