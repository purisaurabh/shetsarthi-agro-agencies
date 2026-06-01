import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about SHETSARTHI AGRO AGENCIES in Maharashtra.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions"
        italic="answered."
        description="Everything Maharashtra farmers ask us most — from soil testing to government schemes."
        image="https://images.unsplash.com/photo-1463123081488-789f998ac9c4?w=2400&q=85&auto=format&fit=crop"
      />
      <section className="bg-bg py-24 sm:py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <FAQAccordion />
          <div className="mt-12 sm:mt-20 text-center">
            <p className="text-muted">Still have a question?</p>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-[#25D366] px-8 py-4 text-sm font-medium text-white hover:bg-[#1eb558] transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
