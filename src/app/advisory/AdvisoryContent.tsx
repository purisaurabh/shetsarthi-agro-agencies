"use client";

import PageHero from "@/components/ui/PageHero";
import SplitText from "@/components/ui/SplitText";
import { SITE } from "@/lib/constants";
import { useT } from "@/lib/i18n/LanguageContext";

export default function AdvisoryContent() {
  const t = useT();
  const CROPS = t.pages.advisory.crops;
  const STEPS = t.pages.advisory.steps;

  return (
    <>
      <PageHero
        eyebrow={t.pages.advisory.eyebrow}
        title={t.pages.advisory.title}
        italic={t.pages.advisory.italic}
        description={t.pages.advisory.description}
        image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=2400&q=85&auto=format&fit=crop"
      />

      <section className="bg-bg py-24 sm:py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SplitText
            as="h2"
            className="font-display text-[clamp(2.25rem,6vw,6rem)] leading-[0.95] text-balance mb-10 sm:mb-16"
          >
            {t.pages.advisory.cropsHeading}
          </SplitText>
          <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CROPS.map((c) => (
              <div
                key={c.name}
                className="group rounded-2xl border border-black/5 bg-white p-5 sm:p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <span className="text-2xl sm:text-3xl">{c.icon}</span>
                <h3 className="mt-3 sm:mt-4 font-display text-xl sm:text-2xl">{c.name}</h3>
                <p className="mt-1 text-xs text-muted">{c.zone}</p>
                <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
                  {c.season}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SplitText
            as="h2"
            className="font-display text-[clamp(2.25rem,6vw,6rem)] leading-[0.95] mb-12 sm:mb-20"
          >
            {t.pages.advisory.worksHeading}
          </SplitText>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.step} className="relative">
                <span className="font-mono text-5xl sm:text-6xl font-bold text-white/10">
                  {s.step}
                </span>
                <h3 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl">{s.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm text-white/70 leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 text-center">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-block rounded-full bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium text-ink hover:bg-fresh hover:text-white transition-colors"
            >
              {t.pages.advisory.ctaButton}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
