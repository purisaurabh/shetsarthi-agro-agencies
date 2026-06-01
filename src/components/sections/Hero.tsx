"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/lib/constants";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      const lines = headlineRef.current?.querySelectorAll<HTMLElement>(".hero-line > span");
      if (lines && lines.length > 0) {
        gsap.fromTo(
          lines,
          { y: "115%" },
          {
            y: "0%",
            duration: 1.4,
            stagger: 0.12,
            ease: "expo.out",
            delay: 0.4,
          },
        );
      }

      // Sunset → daytime transition on scroll (overlay fade)
      gsap.to(overlay.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Pin a slight scale on hero
      gsap.to(".hero-content", {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
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
      className="relative h-[100svh] min-h-[600px] sm:min-h-[700px] w-full overflow-hidden"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Sunrise warm overlay (fades on scroll) */}
      <div
        ref={overlay}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFE5B4]/30 via-transparent to-[#FFD08A]/40"
      />

      {/* Readability overlay — stronger on mobile so 3D doesn't drown the copy */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 sm:from-black/20 sm:via-transparent sm:to-black/30" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] sm:bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />

      {/* Content */}
      <div className="hero-content relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 sm:mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fresh opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-fresh" />
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-white/90">
            {SITE.location}
          </span>
        </motion.div>

        <h1
          ref={headlineRef}
          className="font-display text-[clamp(2.25rem,11vw,9rem)] leading-[0.95] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.45)] sm:text-balance max-w-[16ch] px-2"
        >
          <span className="hero-line block overflow-hidden">
            <span className="inline-block translate-y-[115%]">Modern Agriculture</span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span className="inline-block translate-y-[115%] italic">
              Begins Here
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 sm:mt-8 max-w-2xl text-pretty text-sm sm:text-base md:text-lg text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          Helping Maharashtra farmers grow better crops through knowledge,
          quality products and expert guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex w-full max-w-md flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition-all hover:bg-fresh hover:text-white hover:scale-[1.03]"
          >
            <span>Talk to Expert</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#story"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/20"
          >
            <span>Explore Journey</span>
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative h-10 w-[1px] overflow-hidden bg-white/30">
          <motion.div
            className="absolute top-0 left-0 h-1/2 w-full bg-white"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
