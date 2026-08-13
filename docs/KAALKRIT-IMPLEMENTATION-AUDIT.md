# KAALKRIT implementation audit

> Historical audit updated after the current repository cleanup. For the live architecture, use [`ARCHITECTURE.md`](../ARCHITECTURE.md); for requested material, use [`CONTENT_REQUIRED.md`](../CONTENT_REQUIRED.md).

## Current implementation

- Next.js 16.3.0 App Router, React 19.2.8, TypeScript 5.9, and Tailwind CSS 4.
- Node 24.14.0 is the verified local runtime; normal npm scripts invoke the project binaries.
- Typed factual content remains under `content/`; the public team route renders only approved material and a safe no-roster state.
- The homepage follows a sponsor-ready editorial narrative: mission, engineering practice, capability, projects, culture, proof, future direction, partnership, and recruitment.

## Visual and interaction audit

- `styles/tokens.css` is the active semantic UI token source; older warm/palette notes are not implementation instructions.
- `ScrollExpandHero` remains the only scroll-linked homepage interaction. It uses native document scrolling and one sticky desktop stage; there is no nested scrolling or GSAP controller.
- The controlled `GradientWaves` OGL canvas is dynamically loaded beneath the hero copy. It has a static fallback for reduced-motion and unsupported contexts.
- Three.js, React Three Fiber, particle systems, drone hotspots, and the old deployment sequence are removed.

## Content, privacy, and temporary assets

- The verified contact route is `teamkaalkrit@gmail.com`; verified Instagram and X URLs remain centralized in `content/site.ts`.
- Vercel Analytics is rendered only on Vercel deployments. The site has no public contact form, advertising pixels, non-essential cookies, or third-party embeds.
- Legal and system pages route questions to the verified email.
- Media remains opt-in: only approved local media with a ready content status can render publicly.

## Verification

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Browser QA at 320, 375, 430, 768, 1024, 1280, and 1440 pixels.
- Reduced-motion and no-canvas checks.

See `docs/KAALKRIT-CONTENT-AND-ASSET-REQUESTS.md` for the remaining real-world inputs.
