"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "navbar" | "menu";
  solid?: boolean;
};

export default function LanguageToggle({ variant = "navbar", solid = true }: Props) {
  const { locale, setLocale } = useLanguage();

  if (variant === "menu") {
    return (
      <div className="inline-flex items-center gap-1 rounded-full bg-white/10 p-1 backdrop-blur">
        <button
          type="button"
          onClick={() => setLocale("en")}
          aria-pressed={locale === "en"}
          className={cn(
            "rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors",
            locale === "en"
              ? "bg-white text-ink"
              : "text-white/70 hover:text-white",
          )}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLocale("mr")}
          aria-pressed={locale === "mr"}
          className={cn(
            "rounded-full px-4 py-2 text-xs font-medium tracking-wider transition-colors",
            locale === "mr"
              ? "bg-white text-ink"
              : "text-white/70 hover:text-white",
          )}
        >
          मराठी
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex h-9 items-center rounded-full border p-0.5 text-xs font-medium sm:h-auto sm:text-[11px]",
        solid
          ? "border-black/10 bg-white/70 backdrop-blur"
          : "border-white/30 bg-white/10 backdrop-blur",
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "rounded-full px-3 py-1.5 uppercase tracking-wider transition-all sm:px-2.5 sm:py-1",
          locale === "en"
            ? solid
              ? "bg-ink text-white"
              : "bg-white text-ink"
            : solid
              ? "text-muted hover:text-ink"
              : "text-white/80 hover:text-white",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("mr")}
        aria-pressed={locale === "mr"}
        className={cn(
          "rounded-full px-3 py-1.5 tracking-wider transition-all sm:px-2.5 sm:py-1",
          locale === "mr"
            ? solid
              ? "bg-ink text-white"
              : "bg-white text-ink"
            : solid
              ? "text-muted hover:text-ink"
              : "text-white/80 hover:text-white",
        )}
      >
        मराठी
      </button>
    </div>
  );
}
