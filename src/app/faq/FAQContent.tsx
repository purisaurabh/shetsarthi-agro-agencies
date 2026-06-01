"use client";

import PageHero from "@/components/ui/PageHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { SITE } from "@/lib/constants";
import { useT } from "@/lib/i18n/LanguageContext";

export default function FAQContent() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t.pages.faq.eyebrow}
        title={t.pages.faq.title}
        italic={t.pages.faq.italic}
        description={t.pages.faq.description}
        image="https://images.unsplash.com/photo-1463123081488-789f998ac9c4?w=2400&q=85&auto=format&fit=crop"
      />
      <section className="bg-bg py-24 sm:py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <FAQAccordion />
          <div className="mt-12 sm:mt-20 text-center">
            <p className="text-muted">{t.common.stillQuestion}</p>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(t.site.whatsappMsg)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-[#25D366] px-8 py-4 text-sm font-medium text-white hover:bg-[#1eb558] transition-colors"
            >
              {t.common.askWhatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
