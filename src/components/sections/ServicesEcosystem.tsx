"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useT } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesEcosystem() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const t = useT();
  const SERVICES = t.services.items;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".eco-node",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".eco-line",
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          stagger: 0.05,
          ease: "expo.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 65%",
          },
        },
      );

      gsap.fromTo(
        ".eco-center",
        { scale: 0, rotate: -90 },
        {
          scale: 1,
          rotate: 0,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
          },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  // Position services around a circle
  const radius = 270;
  const positions = SERVICES.map((_, i) => {
    const angle = (i / SERVICES.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });

  return (
    <section
      ref={root}
      id="services"
      className="relative overflow-hidden bg-ink py-32 md:py-44 text-white"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-harvest/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-2">
          </div>
          <div className="lg:col-span-10">
            <h2 className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] text-balance">
              {t.services.title1} <br />
              {t.services.title2}{" "}
              <span className="italic text-fresh">{t.services.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/70">{t.services.lede}</p>
          </div>
        </div>

        {/* Ecosystem map — desktop only (lg+) */}
        <div className="relative mx-auto mt-20 hidden h-[700px] w-full max-w-[700px] lg:block [perspective:1500px]">
          {/* connecting lines SVG */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="-400 -400 800 800"
          >
            {positions.map((p, i) => (
              <line
                key={i}
                className="eco-line"
                x1={0}
                y1={0}
                x2={p.x}
                y2={p.y}
                stroke="url(#eco-grad)"
                strokeWidth={1}
                strokeDasharray="1000"
              />
            ))}
            <defs>
              <linearGradient id="eco-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F9A825" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="eco-center relative grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-primary via-fresh to-harvest p-[2px] animate-pulse-glow">
              <div className="grid h-full w-full place-items-center rounded-full bg-ink">
                <div className="text-center">
                  <p className="font-display text-2xl leading-tight">{t.services.centerLine1}</p>
                  <p className="font-display text-2xl italic leading-tight text-fresh">
                    {t.services.centerLine2}
                  </p>
                </div>
              </div>
              {/* orbital ring */}
              <div className="absolute inset-[-30px] rounded-full border border-white/10" />
              <div className="absolute inset-[-60px] rounded-full border border-white/5" />
            </div>
          </div>

          {/* Nodes */}
          {SERVICES.map((s, i) => {
            const p = positions[i];
            const isActive = active === i;
            return (
              <button
                key={s.id}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="eco-node group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))`,
                }}
              >
                <div
                  className={cn(
                    "relative grid h-24 w-24 place-items-center rounded-full transition-all duration-500",
                    isActive
                      ? "scale-110 bg-white text-ink shadow-2xl"
                      : "bg-white/[0.06] text-white backdrop-blur-md hover:scale-105 border border-white/10",
                  )}
                >
                  <span className="text-3xl">{s.icon}</span>
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow: isActive ? `0 0 40px ${s.color}` : "none",
                    }}
                  />
                </div>
                <p className="mt-3 text-center text-xs font-medium uppercase tracking-wider text-white/80">
                  {s.title}
                </p>
              </button>
            );
          })}

          {/* Active service detail */}
          <AnimatePresence mode="wait">
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-32 left-1/2 w-[420px] max-w-[90vw] -translate-x-1/2 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl text-2xl"
                    style={{ backgroundColor: `${SERVICES[active].color}33` }}
                  >
                    {SERVICES[active].icon}
                  </div>
                  <div>
                    <p className="font-display text-2xl">{SERVICES[active].title}</p>
                    <p className="mt-2 text-sm text-white/70">
                      {SERVICES[active].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile + tablet grid */}
        <div className="mt-12 sm:mt-16 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:bg-white/[0.08]"
            >
              <div
                className="grid h-10 w-10 place-items-center rounded-xl text-xl"
                style={{ backgroundColor: `${s.color}33` }}
              >
                {s.icon}
              </div>
              <p className="mt-3 font-display text-xl">{s.title}</p>
              <p className="mt-1 text-xs text-white/60">{s.short}</p>
              <p className="mt-3 text-xs text-white/50 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
