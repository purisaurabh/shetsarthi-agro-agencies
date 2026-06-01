# Shetsarthi Agro — SHETSARTHI AGRO AGENCIES

An immersive, award-style 3D website for **SHETSARTHI AGRO AGENCIES**, an Agricultural Service Center based in Manori, Maharashtra, India.

> Built to feel like fromfauna.org / Apple / Awwwards winners — cinematic scrolling, 3D crops, parallax storytelling, glassmorphism, and premium motion.

## Business

| Field | Value |
|---|---|
| Name | SHETSARTHI AGRO AGENCIES (शेत्सार्थी एग्रो एजेंसीज) |
| Address | Shop No 01, Vavi To Nandur Road, Manori, Maharashtra 422606, India |
| Phone / WhatsApp | +91 93594 99856 |
| Plus Code | P5W3+6F Manori, Maharashtra |
| Coordinates | 19.745578, 74.1536694 |

All business info lives in `src/lib/constants.ts` under the `SITE` constant — update there to propagate across the navbar, footer, hero, contact page and JSON-LD schema.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 15** (App Router, React 19, Turbopack) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS 3.4** + custom design tokens |
| 3D | **Three.js** + **React Three Fiber** + **Drei** + **Postprocessing** |
| Animation | **GSAP** + **ScrollTrigger** |
| Smooth Scroll | **Lenis** |
| UI Motion | **Framer Motion** |
| Vector Animation | **Lottie** |
| Icons | **Lucide React** |
| Hosting | **Vercel** (free) |

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx           # Root layout, fonts, JSON-LD schema
│   ├── page.tsx             # Home (hero, story, services, products...)
│   ├── icon.tsx             # Auto-generated 32×32 favicon
│   ├── apple-icon.tsx       # Auto-generated 180×180 Apple touch icon
│   ├── services/
│   ├── products/
│   ├── advisory/
│   ├── faq/
│   └── contact/
├── components/
│   ├── three/               # 3D scenes & shaders (HeroScene)
│   ├── sections/            # Page sections (Hero, Story, Impact, ...)
│   ├── ui/                  # Reusable UI primitives
│   └── layout/              # Navbar, Footer, SmoothScrollProvider, FloatingActions
├── hooks/                   # Custom React hooks (useMagnetic, useReveal, useMediaQuery)
└── lib/                     # Utilities & site-wide constants
```

## Pages

- `/` — Hero with 3D crop scene, brand story, services ecosystem, impact stats, products, crop journey, testimonials, final CTA
- `/services` — Service cards
- `/products` — Product catalogue with WhatsApp enquiry buttons
- `/advisory` — Crop advisory program for Maharashtra districts
- `/faq` — Accordion FAQ
- `/contact` — Contact form, contact cards and embedded Google Map of the Manori shop

## Brand

| Token | Color |
|---|---|
| Primary Green | `#2E7D32` |
| Deep Forest | `#1B5E20` |
| Fresh Green | `#66BB6A` |
| Earth Brown | `#6D4C41` |
| Golden Harvest | `#F9A825` |
| Background | `#FAFAF8` |
| Dark Text | `#111111` |

## Favicon

The favicon is generated at build time from `src/app/icon.tsx` (browser tab) and `src/app/apple-icon.tsx` (iOS home screen) using Next.js `ImageResponse` — no static binary asset required. Edit those files to change the mark.

## Contact CTAs

`Call` and `WhatsApp` buttons are present in the navbar, footer, hero, floating action dock and contact page — all driven by `SITE.phoneRaw` and `SITE.whatsapp` in `src/lib/constants.ts`.

## Map Embed

The contact page uses a coordinate-based Google Maps embed (no API key required) that pins the SHETSARTHI AGRO AGENCIES storefront. The URL is centralised as `SITE.mapEmbedUrl`.

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com). Zero config needed.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo>
git push -u origin main
```
