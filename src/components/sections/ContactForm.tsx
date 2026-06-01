"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useT } from "@/lib/i18n/LanguageContext";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const t = useT();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass flex flex-col items-center justify-center rounded-3xl p-12 text-center"
      >
        <CheckCircle className="h-12 w-12 text-primary" />
        <h3 className="mt-4 font-display text-3xl">{t.contactForm.successHeading}</h3>
        <p className="mt-2 text-muted">{t.contactForm.successBody}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
            {t.contactForm.nameLabel}
          </label>
          <input
            required
            type="text"
            placeholder={t.contactForm.namePlaceholder}
            className="w-full rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
            {t.contactForm.phoneLabel}
          </label>
          <input
            required
            type="tel"
            placeholder={t.contactForm.phonePlaceholder}
            className="w-full rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
          {t.contactForm.locationLabel}
        </label>
        <input
          type="text"
          placeholder={t.contactForm.locationPlaceholder}
          className="w-full rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs uppercase tracking-widest text-muted">
          {t.contactForm.messageLabel}
        </label>
        <textarea
          required
          rows={4}
          placeholder={t.contactForm.messagePlaceholder}
          className="w-full resize-none rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink py-4 text-sm font-medium text-white transition-all hover:bg-primary sm:w-auto sm:px-10"
      >
        <span>{t.contactForm.submit}</span>
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="text-xs text-muted text-center">{t.contactForm.disclaimer}</p>
    </form>
  );
}
