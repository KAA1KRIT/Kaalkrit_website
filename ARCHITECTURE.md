# KAALKRIT repository architecture

## Application boundaries

This is a Next.js App Router project rooted at `app/`. The root App Router location is intentionally retained rather than moving every route into `src/`: it keeps the active deployment/configuration paths stable. Route files compose server-rendered content by default. Client boundaries are limited to interactive presentation: the mobile navigation, scroll-expanded hero, GradientWaves background, galleries, and focused feedback states.

`app/layout.tsx` owns global metadata, the shared header/footer, analytics when deployed on Vercel, and organisation JSON-LD. Individual routes own their page metadata through `lib/seo.ts`.

## Routes

- Marketing: `/`, `/projects`, `/projects/[slug]`, `/journey`, `/team`, `/partners`, `/contact`.
- Support and system: `/privacy`, `/terms`, `/accessibility`, route loading states, `error.tsx`, `global-error.tsx`, and `not-found.tsx`.
- Search and installability: `robots.ts`, `sitemap.ts`, `manifest.ts`, `icon.png`, and `apple-icon.png`.

## Components

- `components/layout`: site chrome and legal/page framing.
- `components/hero`: the single landing hero owner. Its local scroll calculation only transforms children; it never owns document scrolling. `GradientWavesLayer` dynamically loads its OGL canvas, and `GradualBlur` is a local decorative boundary.
- `components/sections`: reusable marketing sections and the home composition.
- `components/projects`: programme, platform, and project feature blocks.
- `components/gallery`: typed wrappers around optional React Bits galleries, with static, empty, and error fallbacks.
- `components/motion`: contained, non-route motion treatments.
- `components/system`: global loading, error, not-found, and skeleton building blocks.
- `components/ui`: project UI primitives; avoid feature logic here.

## Content and media

`content/` is the only public factual source. Entries use `ContentStatus` from `lib/types.ts`; public components must render only approved `ready` material. `content/journey.ts` and `content/partners.ts` own their records directly. `content/gallery.ts` enforces local, permission-confirmed media before it renders.

The canonical incoming logo is the root `logo_favicon.png`. `scripts/sync-brand-assets.mjs` copies it to the public brand asset and App Router icons. The website references `/images/approved/logo_favicon.png`; changing the canonical file and running the script updates the derived logo/icon files.

## Styles and motion

`styles/tokens.css` is the single semantic token source. `styles/globals.css` owns the page-level typography, scrollbar, focus, layout, and reduced-motion rules. Feature CSS modules remain adjacent to their component. Do not add competing global palettes or transform `html`, `body`, or `main`.

## Caching and deployment

Static public routes are build-rendered where possible. `next.config.ts` sets image formats and intentionally short revalidation for the stable official logo filename. `NEXT_PUBLIC_SITE_URL` is optional locally and required for production canonical/search metadata.
