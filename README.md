# KAALKRIT Website

Public website for KAALKRIT, the official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru.

## Features and routes

- Native-scroll landing hero with a dynamically loaded GradientWaves visual and reduced-motion fallback.
- Typed, approval-aware project, journey, team, partner, contact, and gallery content.
- Responsive navigation, route loading/error states, custom 404, legal pages, metadata, manifest, robots, and sitemap.
- Public routes: `/`, `/projects`, `/projects/[slug]`, `/journey`, `/team`, `/partners`, `/contact`, `/privacy`, `/terms`, and `/accessibility`.
- The empty team route is excluded from the sitemap and marked `noindex` until an approved roster exists.

## Stack

- Next.js 16.3 App Router and React 19
- TypeScript 5 and Tailwind CSS 4
- OGL for the isolated GradientWaves canvas
- Optional Vercel Web Analytics

Node.js 24 or newer is required.

## Setup

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Environment variables:

```text
NEXT_PUBLIC_SITE_URL=https://your-real-production-domain
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

`NEXT_PUBLIC_SITE_URL` must be the final HTTPS origin. Invalid, localhost, and private-network values are deliberately omitted from canonical and social metadata. Set analytics to `true` only after Vercel Web Analytics is configured and the privacy copy has been reviewed.

For LAN testing, the development server can be exposed with:

```bash
npm run dev -- --hostname 0.0.0.0
```

`next.config.ts` explicitly permits `10.67.84.166`, `localhost`, and `127.0.0.1` during development; it does not broaden production CORS.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm run start
```

## Structure

```text
app/                 App Router pages, metadata, and system routes
components/hero/     Scroll-expanded hero, GradientWaves, and GradualBlur
components/layout/   Header, mobile navigation, footer, and page framing
components/gallery/  Lazy gallery adapters and loading/empty/error states
components/projects/ Project presentation building blocks
components/system/   Route loading, error, and not-found experiences
components/ui/       Shared interface primitives
content/             Typed verified content and publication states
lib/                 Shared types and SEO helpers
public/images/       Approved public assets only
styles/              Semantic theme tokens and global component rules
tests/               Content and route-integrity tests
```

## Content and assets

Only approved `ready` content and local, permission-confirmed gallery media may render publicly. No stock or placeholder media is included. The canonical official mark is `logo_favicon.jpg`; `predev` and `prebuild` synchronize it to the public logo and App Router icons. See [CONTENT_REQUIRED.md](CONTENT_REQUIRED.md) for remaining approved media, roster, proof, and sponsor material.

## Deployment

Deploy as a Next.js application on Vercel after completing [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md). Do not commit `.env.local` or platform credentials.

## Contact

- [teamkaalkrit@gmail.com](mailto:teamkaalkrit@gmail.com)
- [Instagram](https://www.instagram.com/team_kaalkrit/)
- [X](https://x.com/KAALKRit)
