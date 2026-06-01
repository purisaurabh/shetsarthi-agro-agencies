"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { useT } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const t = useT();
  return (
    <footer className="relative overflow-hidden bg-forest text-white">
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div className="absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-fresh blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-harvest/40 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-20 sm:pt-24 pb-10">
        <div className="grid gap-12 sm:gap-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-6">
            <h3 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] text-balance">
              {t.footer.headingLine1}
              <br />
              <span className="italic text-fresh">{t.footer.headingLine2}</span>
            </h3>
            <p className="mt-6 max-w-md text-white/70">{t.footer.lede}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-ink transition-colors hover:bg-fresh"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">
                  {t.common.call} {SITE.phone}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(t.site.whatsappMsg)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 transition-colors hover:bg-white hover:text-ink"
              >
                {t.common.whatsapp}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-3 sm:mb-4 text-xs uppercase tracking-[0.25em] text-fresh/80">
              {t.footer.sitemap}
            </p>
            <ul className="space-y-2.5">
              {t.nav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-fresh/80">
              {t.footer.reachUs}
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-fresh" />
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {t.site.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-fresh" />
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              {SITE.email ? (
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 flex-shrink-0 text-fresh" />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {SITE.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {t.site.fullName}. {t.footer.rights}
          </p>
          <p className="text-xs text-white/50">{t.footer.crafted}</p>
        </div>
      </div>
    </footer>
  );
}
