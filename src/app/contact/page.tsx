import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.fullName} — call, WhatsApp or visit our Manori center.`,
};

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Call Us",
    value: SITE.phone,
    href: `tel:${SITE.phoneRaw}`,
  },
  ...(SITE.email
    ? [
        {
          icon: Mail,
          label: "Email",
          value: SITE.email,
          href: `mailto:${SITE.email}`,
        },
      ]
    : []),
  {
    icon: MapPin,
    label: "Visit Us",
    value: SITE.address,
    href: SITE.mapUrl,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 8am – 7pm · Sun: 9am – 2pm",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here"
        italic="for you."
        description="Walk in, call, or WhatsApp — our agronomists are ready to help with your crop, soil or product questions."
        image="https://images.unsplash.com/photo-1486328228599-85db4443971f?w=2400&q=85&auto=format&fit=crop"
      />

      <section className="bg-bg py-24 sm:py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
                Get in <span className="italic gradient-text">touch.</span>
              </h2>
              <p className="mt-6 text-muted leading-relaxed">
                Whether you need a soil test, crop advice or just want to know what
                fertilizer to use this season — reach out. No appointment needed.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {CONTACT_CARDS.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl border border-black/5 bg-white p-6 transition-all hover:shadow-lg"
                  >
                    <c.icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-xs uppercase tracking-widest text-muted">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="mt-1 block text-sm font-medium transition-colors hover:text-primary"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium">{c.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-primary transition-colors"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white hover:bg-[#1eb558] transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <ContactForm />
          </div>

          {/* Map embed */}
          <div className="mt-12 sm:mt-20 overflow-hidden rounded-2xl sm:rounded-3xl border border-black/5 shadow-xl">
            <iframe
              title={`${SITE.fullName} location`}
              src={SITE.mapEmbedUrl}
              width="100%"
              className="h-[280px] sm:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
