# Team KAALKRIT website

Public Next.js App Router website for Team KAALKRIT, the drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru.

## Requirements

- Node.js 24 or newer
- npm

## Setup

```bash
npm ci
cp .env.example .env.local
npm run dev
```

For Vercel production deployments, `vercel.json` supplies `NEXT_PUBLIC_SITE_URL=https://kaalkrit.vercel.app`. This enables canonical metadata, Open Graph URLs, `robots.txt`, and `sitemap.xml`; preview deployments intentionally omit those production URLs. Set `NEXT_PUBLIC_ENABLE_ANALYTICS=true` only when analytics is intentionally configured for the deployment.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run format:check
npm test
npm run build
npm run start
npm run e2e
npm run test:deployment
```

## Content and brand architecture

```text
app/          App Router pages and metadata routes
components/   Shared layout, UI, animation, and feature components
content/      Typed factual content: site, projects, domains, achievements, journey, team, legal, navigation
lib/          Shared types and SEO helpers
public/       Publishable static assets
styles/       Theme tokens and global CSS
tests/        Content and route-integrity tests
tests/e2e/    Production-server Playwright release checks
```

## Brand and assets

The public site preserves its dark engineering system: near-black surfaces, off-white type, electric-blue technical accents, fine schematic lines, and angular framing inspired by the approved KAALKRIT ID-card reference.

- Crimson Text is reserved for editorial display headings and narrative statements.
- Palanquin Dark carries navigation, controls, project titles, and technical structure.
- Mukta Vaani is the readable body and supporting-information face.
- `components/ui/DepthText.tsx` is the decorative KAALKRIT typographic signature. Pair it with a semantic heading or label; do not use it for body copy.
- `components/hero/GradientWaves.tsx` is used only in the hero. It dynamically loads, pauses off-screen and in hidden tabs, and falls back to static CSS for reduced-motion and low-power contexts.
- `components/ui/loader.tsx` provides the shared `LoaderFour` loading primitive used by `LoadingExperience`.

- `public/brand/` contains the canonical KAALKRIT logo. Do not recreate, crop, or substitute it.
- `public/images/projects/` contains approved project media.
- `public/images/team/` contains approved team/event media.
- Raw supplied media belongs in ignored `image_content/`; optimize and move only approved outputs into `public/`.

## Deployment checklist

`https://kaalkrit.vercel.app` is the configured production origin. The verified public enquiry channel is [Team KAALKRIT on Instagram](https://www.instagram.com/team_kaalkrit/). If analytics is enabled, review the Privacy page against the deployed analytics configuration.

Do not commit `.env.local`, credentials, raw media, or unapproved assets.

`npm run e2e` builds the production application and runs Playwright against a
temporary production server. Install the Chromium browser once with
`npx playwright install chromium` when it is not already available.

## Vercel Git deployment

The Vercel project is connected to `KAA1KRIT/Kaalkrit_website`; pushes to
`main` automatically create production deployments at
`https://kaalkrit.vercel.app`. Other branches receive Vercel preview
deployments.

After `npx vercel login` and `npx vercel link --yes --project kaalkrit --scope rossonerians-projects`, run:

```bash
npm run test:deployment
```

This authenticated integration check verifies the Git connection, `main` as
the production branch, enabled Git deployments, a ready production target, and
the canonical alias. After a push, use `npm run test:deployment:current` to
also confirm production has reached the current commit.
