# Website repository

Next.js App Router website template with content held in `content/` and clearly labelled placeholders ready for replacement.

## Requirements

- Node.js 24 or newer
- npm

## Setup

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin when deploying. Set `NEXT_PUBLIC_ENABLE_ANALYTICS=true` only when analytics is intentionally configured and the related legal content is approved.

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
content/      Typed content schemas and placeholder values
lib/          Shared types and SEO helpers
public/       Publishable static assets
styles/       Theme tokens and global CSS
tests/        Content and route-integrity tests
```

Do not commit `.env.local`, credentials, raw media, or unapproved assets.
