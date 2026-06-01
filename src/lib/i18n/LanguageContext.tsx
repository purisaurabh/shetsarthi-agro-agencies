"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import dictionaries, {
  DEFAULT_LOCALE,
  LOCALES,
  type Dict,
  type Locale,
} from "./dictionaries";

const STORAGE_KEY = "shetsarthi-locale";
const COOKIE_NAME = "shetsarthi-locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

type LanguageContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  t: Dict;
  ready: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale | null {
  if (typeof document === "undefined") return null;
  try {
    const fromStorage = window.localStorage.getItem(STORAGE_KEY);
    if (fromStorage && LOCALES.includes(fromStorage as Locale)) {
      return fromStorage as Locale;
    }
    const match = document.cookie.match(
      new RegExp("(?:^|; )" + COOKIE_NAME + "=([^;]*)"),
    );
    if (match) {
      const decoded = decodeURIComponent(match[1]);
      if (LOCALES.includes(decoded as Locale)) {
        return decoded as Locale;
      }
    }
  } catch {
    // ignore — fall back to default
  }
  return null;
}

function persistLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
      locale,
    )}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
  } catch {
    // ignore
  }
}

function applyLocaleToDocument(locale: Locale) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.lang = locale;
  LOCALES.forEach((l) => root.classList.remove(`lang-${l}`));
  root.classList.add(`lang-${locale}`);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  // Hydrate from storage / cookie after mount.
  useEffect(() => {
    const stored = readStoredLocale();
    if (stored && stored !== DEFAULT_LOCALE) {
      setLocaleState(stored);
      applyLocaleToDocument(stored);
    } else {
      applyLocaleToDocument(DEFAULT_LOCALE);
    }
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
    applyLocaleToDocument(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === "en" ? "mr" : "en";
      persistLocale(next);
      applyLocaleToDocument(next);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: dictionaries[locale],
      ready,
    }),
    [locale, setLocale, toggleLocale, ready],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback so dynamically-imported components that render before the
    // provider mounts (or during early SSR) don't crash.
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      toggleLocale: () => {},
      t: dictionaries[DEFAULT_LOCALE],
      ready: false,
    };
  }
  return ctx;
}

export function useT(): Dict {
  return useLanguage().t;
}
