import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Tiro_Devanagari_Marathi,
  Noto_Sans_Devanagari,
} from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display-en",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-en",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const displayMr = Tiro_Devanagari_Marathi({
  subsets: ["devanagari"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display-mr",
  display: "swap",
});

const sansMr = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-mr",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2E7D32",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Agricultural Service Center Maharashtra",
    "Seeds and Fertilizers Maharashtra",
    "Crop Advisory Maharashtra",
    "Farmer Support Maharashtra",
    "Agriculture Solutions Maharashtra",
    "SHETSARTHI AGRO AGENCIES",
    "शेतसारथी ॲग्रो",
    "महाराष्ट्र शेती",
  ],
  authors: [{ name: SITE.fullName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["mr_IN"],
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.fullName,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phoneRaw,
  ...(SITE.email ? { email: SITE.email } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No 01, Vavi To Nandur Road",
    addressLocality: "Manori",
    addressRegion: "Maharashtra",
    postalCode: "422606",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.coordinates.lat,
    longitude: SITE.coordinates.lng,
  },
  areaServed: "Maharashtra, India",
  priceRange: "$$",
};

// Inline script that runs before React hydration so the correct font kicks in
// immediately and we avoid a flash of English on Marathi-preferring visitors.
const localeBootstrap = `
(function () {
  try {
    var key = 'shetsarthi-locale';
    var stored = window.localStorage.getItem(key);
    if (!stored) {
      var m = document.cookie.match(/(?:^|; )shetsarthi-locale=([^;]*)/);
      if (m) stored = decodeURIComponent(m[1]);
    }
    var locale = stored === 'mr' ? 'mr' : 'en';
    var html = document.documentElement;
    html.lang = locale;
    html.classList.remove('lang-en', 'lang-mr');
    html.classList.add('lang-' + locale);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`lang-en ${display.variable} ${sans.variable} ${mono.variable} ${displayMr.variable} ${sansMr.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: localeBootstrap }} />
      </head>
      <body className="grain bg-bg text-ink antialiased">
        <LanguageProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingActions />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
