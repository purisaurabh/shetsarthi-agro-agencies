"use client";

import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { SITE } from "@/lib/constants";
import { useT } from "@/lib/i18n/LanguageContext";

export default function ProductsContent() {
  const t = useT();
  const PRODUCTS = t.products.items;

  return (
    <>
      <PageHero
        eyebrow={t.pages.products.eyebrow}
        title={t.pages.products.title}
        italic={t.pages.products.italic}
        description={t.pages.products.description}
        image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=2400&q=85&auto=format&fit=crop"
      />

      <section className="bg-bg py-24 sm:py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/5 transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur">
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <p
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: p.color }}
                  >
                    {p.tagline}
                  </p>
                  <h2 className="mt-2 font-display text-3xl">{p.title}</h2>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {p.description}
                  </p>
                  <a
                    href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(`${t.pages.products.whatsappEnquiry} ${p.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-forest"
                  >
                    {t.pages.products.ctaEnquire} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
