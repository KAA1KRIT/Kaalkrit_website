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

## Structure

```text
app/          App Router pages and metadata routes
components/   Shared layout, UI, animation, and feature components
content/      Typed editorial content and project data
lib/          Shared types and SEO helpers
public/       Publishable static assets
styles/       Theme tokens and global CSS
tests/        Content and route-integrity tests
```

Do not commit `.env.local`, credentials, raw media, or unapproved assets.
