"use client";

import PageHero from "@/components/ui/PageHero";
import SplitText from "@/components/ui/SplitText";
import { SITE } from "@/lib/constants";
import { useT } from "@/lib/i18n/LanguageContext";

export default function ServicesContent() {
  const t = useT();
  const SERVICES = t.services.items;

  return (
    <>
      <PageHero
        eyebrow={t.pages.services.eyebrow}
        title={t.pages.services.title}
        italic={t.pages.services.italic}
        description={t.pages.services.description}
        image="https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=2400&q=85&auto=format&fit=crop"
      />

      <section className="bg-bg py-24 sm:py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="space-y-4 sm:space-y-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                className="group flex flex-col gap-5 overflow-hidden rounded-2xl sm:rounded-3xl border border-black/5 bg-white p-6 sm:p-8 lg:p-12 transition-all hover:shadow-xl hover:shadow-black/5 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8"
              >
                <div className="flex items-center gap-4 lg:contents">
                  <span className="font-mono text-sm text-muted lg:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="grid h-14 w-14 sm:h-20 sm:w-20 lg:h-20 lg:w-20 place-items-center rounded-2xl text-2xl sm:text-4xl lg:col-span-2"
                    style={{ backgroundColor: `${s.color}22` }}
                  >
                    {s.icon}
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
                    {s.title}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm font-medium uppercase tracking-widest text-muted">
                    {s.short}
                  </p>
                  <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-muted leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-all group-hover:bg-ink group-hover:text-white"
                  >
                    {t.common.enquire} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-24 text-white text-center">
        <div className="mx-auto max-w-2xl px-6">
          <SplitText
            as="h2"
            className="font-display text-5xl md:text-7xl leading-[0.95]"
          >
            {t.pages.services.ctaHeading}
          </SplitText>
          <p className="mt-6 text-white/70">{t.pages.services.ctaBody}</p>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-medium text-ink hover:bg-fresh hover:text-white transition-colors"
          >
            {t.pages.services.ctaButton} — {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
