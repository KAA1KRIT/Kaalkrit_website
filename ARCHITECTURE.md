# KAALKRIT Architecture

## Rendering boundaries

The project uses the Next.js App Router rooted at `app/`. Routes and static marketing composition are Server Components by default. Client boundaries are limited to navigation state, tracked links, the scroll-expanded hero, GradientWaves, galleries, timeline/reveal behavior, roster filtering, and error recovery.

All current public pages are statically rendered; project detail pages use `generateStaticParams`. There is no form backend, authentication, database, preview mode, or personalized response to cache.

## Routes and system pages

- Marketing: `/`, `/projects`, `/projects/[slug]`, `/journey`, `/team`, `/partners`, `/contact`.
- Legal/support: `/privacy`, `/terms`, `/accessibility`.
- System: `loading.tsx`, `error.tsx`, `global-error.tsx`, and `not-found.tsx`.
- Discovery/installability: `robots.ts`, `sitemap.ts`, `manifest.ts`, `icon.png`, `apple-icon.png`, and `opengraph-image.svg`.

The team route remains useful as an honest empty state, but is `noindex`, disallowed in `robots.txt`, and absent from the sitemap until an approved roster exists.

## Component ownership

- `components/hero`: one scroll owner (`ScrollExpandHero`), one dynamically imported OGL visual (`GradientWavesLayer`), and one local decorative blur boundary (`GradualBlur`). Only local hero children transform; document scrolling remains native.
- `components/layout`: shared header, accessible mobile dialog/sheet behavior, footer, and page/legal framing.
- `components/gallery`: typed lazy adapters. Heavy gallery code loads only when approved media passes `readyGalleryItems`; otherwise a stable public empty state renders.
- `components/projects`, `components/journey`, `components/team`, and `components/sections`: feature-level composition.
- `components/system` and `components/ui`: shared loading/error/not-found and interface primitives.

## Content and publication safety

`content/` is the factual source of truth. `ContentStatus` supports `ready`, `draft`, `awaiting-content`, and `hidden`. Public project routes, metadata, sitemap entries, schema, and homepage cards consume `publicProjects`, not the unrestricted source array. Gallery entries must be ready, local, dimensioned, have meaningful alt text, confirm permission, and pass `readyGalleryItems`.

Contact details and analytics state are centralized in `content/site.ts`. `NEXT_PUBLIC_SITE_URL` is normalized to a non-private HTTPS origin before it can enter metadata.

## Theme, media, and motion

`styles/tokens.css` is the sole semantic theme source. `styles/globals.css` owns shared spacing, buttons, focus, native scrollbar, reduced-motion, and feature layout rules. Old palette aliases have been removed.

The canonical logo is root `logo_favicon.jpg`. `scripts/sync-brand-assets.mjs` copies it to `public/logo_favicon.jpg`, the approved image path, and App Router icon files before development/build. A separate transparent/vector wordmark remains desirable.

GradientWaves is decorative and pointer-inert. It skips WebGL on reduced-motion, coarse-pointer, and low-core devices; pauses off-screen or when the document is hidden; and disposes its canvas, observers, listeners, frame, and WebGL context on unmount.

## SEO, analytics, and security

`lib/seo.ts` owns page metadata, safe absolute URLs, and escaped JSON-LD. Organization and WebSite schema use verified facts only. Vercel Web Analytics loads only in production when `NEXT_PUBLIC_ENABLE_ANALYTICS=true`; custom events contain interaction names and non-personal placement labels only.

`next.config.ts` supplies `nosniff`, strict referrer policy, clickjacking protection, a restrictive permissions policy, and a production CSP compatible with current local assets, OGL, and same-origin Vercel Analytics. HSTS is intentionally deferred until the final HTTPS domain is confirmed.
