"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalCTA() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".cta-bg", {
        scale: 1.15,
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      const lines = root.current?.querySelectorAll<HTMLElement>(".cta-line span");
      if (lines && lines.length > 0) {
        gsap.fromTo(
          lines,
          { y: "115%" },
          {
            y: "0%",
            duration: 1.4,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: root.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="contact"
      className="relative h-[110svh] min-h-[700px] w-full overflow-hidden"
    >
      {/* Sunset landscape background */}
      <div className="cta-bg absolute inset-0 origin-center will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2400&q=85&auto=format&fit=crop"
          alt="Maharashtra farm at sunset"
          fill
          sizes="100vw"
          priority={false}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/40 via-[#2E7D32]/30 to-[#0d1f0d]/80" />
      </div>

      {/* Animated sun glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-harvest/40 blur-[100px]"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fresh opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-fresh" />
          </span>
          <span className="text-xs uppercase tracking-[0.25em]">Ready when you are</span>
        </motion.span>

        <h2 className="cta-line mt-6 sm:mt-8 font-display text-[clamp(2.5rem,11vw,11rem)] leading-[0.9] drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-balance">
          <span className="block overflow-hidden">
            <span className="inline-block translate-y-[115%]">Let&apos;s grow</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block translate-y-[115%] italic text-fresh">
              together.
            </span>
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 sm:mt-8 max-w-xl text-pretty text-base sm:text-lg text-white/90"
        >
          A 20-minute call with our agronomist could change this season for you.
          No commitment. Just farmer-to-farmer talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 flex w-full max-w-md flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 sm:px-8 py-4 text-ink transition-all hover:scale-[1.03]"
          >
            <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-fresh transition-transform duration-700 group-hover:scale-x-100" />
            <Phone className="relative z-10 h-4 w-4 transition-colors group-hover:text-white" />
            <span className="relative z-10 font-medium transition-colors group-hover:text-white">
              Call {SITE.phone}
            </span>
            <ArrowUpRight className="relative z-10 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 sm:px-8 py-4 text-white transition-all hover:scale-[1.03] hover:bg-[#1eb558]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="font-medium">WhatsApp Us</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
