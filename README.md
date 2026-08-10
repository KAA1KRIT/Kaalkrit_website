# KAALKRIT Website

The public website for KAALKRIT, the official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru.

## Features

- Warm editorial homepage with a native-scroll image expansion hero.
- Documented projects, engineering capabilities, lifecycle, achievements, future direction, partnership, and recruitment sections.
- Responsive header and mobile navigation.
- Privacy Policy, Terms of Use, Accessibility Statement, custom 404, error, and loading states.
- Local temporary stock imagery with attribution in [`public/images/ATTRIBUTIONS.md`](public/images/ATTRIBUTIONS.md).
- Metadata, Open Graph image, manifest, `robots.txt`, and `sitemap.xml` support.
- No analytics, advertising pixels, contact form, or non-essential cookie feature is configured.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | KAALKRIT homepage and public-site narrative |
| `/projects` | Documented project index and project details |
| `/journey` | KAALKRIT milestones and forward direction |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/accessibility` | Accessibility Statement |
| `/robots.txt` | Robots metadata route |
| `/sitemap.xml` | Sitemap route; populated when `NEXT_PUBLIC_SITE_URL` is set |
| Unknown routes | Custom 404 experience |

A public `/team` route is not exposed because a verified team roster is not available yet.

## Technology stack

- Node.js 24 or newer
- Next.js 16.3.0 with the App Router
- React 19.2.8 and React DOM 19.2.8
- TypeScript 5.9.2 with strict compiler settings
- Tailwind CSS 4.1.13 through `@tailwindcss/postcss`
- ESLint 9.35.0 with `eslint-config-next`
- Local assets served through Next.js image optimization

## Prerequisites

- Node.js `>=24.0.0`
- npm

Check the active versions before installing:

```bash
node --version
npm --version
```

## Installation

```bash
npm install
```

## Environment variables

The site reads one optional environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` for local verification or in the deployment provider’s environment settings. Use the real HTTPS production origin when deploying. It is used for canonical metadata, absolute Open Graph URLs, `robots.txt`, and the sitemap. When it is unset, placeholder URLs are not generated.

## Development

Start the local development server:

```bash
npm run dev
```

The site is then available at `http://localhost:3000`.

Run the production-equivalent server after creating a build:

```bash
npm run build
npm run start
```

## Verification commands

```bash
npm run lint
npm run typecheck
npm run build
npm audit --audit-level=high
```

## Deployment

The project can be deployed to Vercel as a Next.js application. Import the repository into Vercel, set `NEXT_PUBLIC_SITE_URL` to the final production URL in the project environment settings, and deploy. Run the verification commands above before the first public release.

## Project structure

```text
app/                 App Router pages, metadata, manifest, robots, and sitemap
components/editorial/ScrollExpandHero, MaskedHeading, and partnership treatment
components/layout/   Header, mobile navigation, footer, page, and legal layouts
components/sections/ Homepage and shared content sections
components/journey/ Journey timeline
components/system/  Error, loading, and not-found experiences
content/             Typed site, navigation, legal, capability, project, and milestone data
lib/                 Shared types and SEO/schema helpers
public/images/       Temporary local stock imagery and attribution record
styles/              Warm editorial design tokens and global styles
docs/                Implementation, launch, and content/asset documentation
```

## Content and asset limitations

- Homepage imagery is temporary Pexels/Unsplash stock photography and must be replaced with approved KAALKRIT media before final launch.
- No verified team roster is published, so no public team profile route is available.
- Real KAALKRIT project photographs and videos are not yet available.
- Competition context, final project media, Build With Hardware availability, sponsorship narrative, and final institutional/legal inputs still require confirmation.
- Privacy, Terms, and Accessibility pages require final human/legal review before broad public deployment.

See [`docs/KAALKRIT-CONTENT-AND-ASSET-REQUESTS.md`](docs/KAALKRIT-CONTENT-AND-ASSET-REQUESTS.md) for the complete handoff list.

## Contact and social links

- Email: [teamkaalkrit@gmail.com](mailto:teamkaalkrit@gmail.com)
- Instagram: [@team_kaalkrit](https://www.instagram.com/team_kaalkrit/)
- X: [@KAALKRit](https://x.com/KAALKRit)
