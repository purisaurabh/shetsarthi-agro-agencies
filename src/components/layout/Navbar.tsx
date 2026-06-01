"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  // On any page other than home, always render the solid (scrolled) treatment.
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-500",
          solid
            ? "py-3 backdrop-blur-xl bg-bg/80 border-b border-black/5"
            : "py-6 bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-6 md:px-10">
          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-2.5"
            aria-label={`${SITE.fullName} home`}
          >
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-primary text-white">
              <span className="absolute inset-0 bg-gradient-to-br from-fresh via-primary to-forest" />
              <span className="relative font-display text-xl leading-none">S</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg sm:text-xl text-ink">{SITE.name}</span>
              <span className="hidden xs:inline text-[10px] uppercase tracking-[0.2em] text-muted">
                Maharashtra
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                    active
                      ? "text-ink"
                      : solid
                        ? "text-muted hover:text-ink"
                        : "text-white/85 hover:text-white",
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {active && (
                    <span className="absolute inset-0 -z-0 rounded-full bg-black/[0.04]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              aria-label="Call us"
              className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-ink text-white"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink px-4 lg:px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary hover:scale-[1.03]"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Talk to Expert</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-black/10 bg-white/60 backdrop-blur transition-colors hover:bg-white"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && <FullscreenMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function FullscreenMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 100% 0%)" }}
      animate={{ clipPath: "circle(150% at 100% 0%)" }}
      exit={{ clipPath: "circle(0% at 100% 0%)" }}
      transition={{ duration: 0.85, ease: [0.83, 0, 0.17, 1] }}
      className="fixed inset-0 z-[80] bg-forest text-white"
    >
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-fresh blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-harvest/40 blur-[150px]" />
      </div>

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between p-6 md:p-10">
          <span className="font-display text-2xl">{SITE.name}</span>
          <button
            onClick={onClose}
            className="grid h-12 w-12 place-items-center rounded-full bg-white/10 backdrop-blur transition-colors hover:bg-white/20"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center overflow-y-auto px-6 md:px-20 py-6">
          <ul className="flex flex-col gap-1 md:gap-4">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35 + i * 0.06,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-3 sm:gap-6 border-b border-white/10 py-2.5 sm:py-3 md:py-5"
                >
                  <span className="font-mono text-[10px] sm:text-xs text-fresh/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl transition-transform duration-700 ease-out-expo group-hover:translate-x-4 group-hover:text-fresh">
                    {link.label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col gap-4 border-t border-white/10 p-6 md:flex-row md:items-center md:justify-between md:gap-2 md:p-10"
        >
          <div className="flex flex-col text-xs sm:text-sm text-white/60">
            <span>{SITE.location}</span>
            {SITE.email ? <span>{SITE.email}</span> : null}
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="rounded-full bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-ink transition-colors hover:bg-fresh"
            >
              Call {SITE.phone}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
                SITE.whatsappMsg,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium transition-colors hover:bg-white hover:text-ink"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
