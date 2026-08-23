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

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin when deploying. This enables canonical metadata, Open Graph URLs, `robots.txt`, and `sitemap.xml`. Set `NEXT_PUBLIC_ENABLE_ANALYTICS=true` only when analytics is intentionally configured for the deployment.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run format:check
npm test
npm run build
npm run start
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
```

## Brand and assets

The public site uses a dark engineering system: near-black surfaces, off-white type, electric blue technical accents, fine schematic lines, and angular framing inspired by the approved KAALKRIT ID-card reference.

- `public/brand/` contains the canonical KAALKRIT logo. Do not recreate, crop, or substitute it.
- `public/images/projects/` contains approved project media.
- `public/images/team/` contains approved team/event media.
- Raw supplied media belongs in ignored `image_content/`; optimize and move only approved outputs into `public/`.

## Deployment checklist

Before public launch, provide a real HTTPS `NEXT_PUBLIC_SITE_URL`. It enables canonical metadata, Open Graph URLs, indexing, robots, and the sitemap. Add a verified public contact method only when it is approved; the site intentionally does not invent one. If analytics is enabled, review the Privacy page against the deployed analytics configuration.

Do not commit `.env.local`, credentials, raw media, or unapproved assets.
