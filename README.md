# KAALKRIT Website

The public website for KAALKRIT, the official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru.

## What is included

- A native-scroll GradientWaves landing hero, documented projects, journey, team, partners, and contact routes.
- Privacy, terms, accessibility, loading, error, and custom not-found experiences.
- Typed, status-aware content modules that publish only approved material.
- Local official logo/icon assets, metadata, manifest, robots, sitemap, and optional Vercel Analytics.

## Routes

`/`, `/projects`, `/projects/[slug]`, `/journey`, `/team`, `/partners`, `/contact`, `/privacy`, `/terms`, `/accessibility`, `/robots.txt`, and `/sitemap.xml`.

## Stack

Next.js 16.3 (App Router), React 19, TypeScript, Tailwind CSS 4, GSAP, OGL, and Vercel Analytics. Node.js 24 or newer is required.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set the optional production origin in `.env.local`:

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain
```

This value is used only when available for canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml`; it must be the real HTTPS origin.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Structure

```text
app/                 App Router routes, metadata, sitemap, and system states
components/hero/     Landing hero, GradientWaves, and local scroll logic
components/layout/   Header, footer, navigation, legal/page framing
components/projects/ Project-specific presentation components
components/gallery/  Typed gallery wrappers and their loading/error states
components/motion/   Small reusable visual-motion treatments
components/system/   Global loading, error, empty, and not-found states
components/ui/       Shared UI primitives
content/             Typed verified site, project, journey, partner, and media data
lib/                 Types and SEO helpers
public/images/       Official approved assets and retained replacement media
styles/              The active semantic tokens and global rules
```

## Content workflow

Public rendering must use only `ready` content from `content/`. Material awaiting approval stays out of the public UI. See [CONTENT_REQUIRED.md](CONTENT_REQUIRED.md) for the exact requested copy, media, approval, and proof inputs. Retained image files are not automatically presented as KAALKRIT work.

## Deployment

Deploy as a Next.js application on Vercel. Set `NEXT_PUBLIC_SITE_URL` to the final production domain, then run lint, typecheck, and build before release. No deployment configuration or secrets should be committed.

## Contact

- Email: [teamkaalkrit@gmail.com](mailto:teamkaalkrit@gmail.com)
- Instagram: [@team_kaalkrit](https://www.instagram.com/team_kaalkrit/)
- X: [@KAALKRit](https://x.com/KAALKRit)
