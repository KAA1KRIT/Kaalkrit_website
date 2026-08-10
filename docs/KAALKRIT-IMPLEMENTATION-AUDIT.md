# KAALKRIT implementation audit

## Current implementation

- Next.js 16.3.0 App Router, React 19.2.8, TypeScript 5.9, and Tailwind CSS 4.
- Node 24.14.0 is the verified local runtime; normal npm scripts invoke the project binaries.
- Typed factual content remains under `content/`; no public team route is exposed without a verified roster.
- The homepage follows a sponsor-ready editorial narrative: mission, engineering practice, capability, projects, culture, proof, future direction, partnership, and recruitment.

## Visual and interaction audit

- The public design uses a warm buttercream canvas, black ink typography, white contained surfaces, and one marigold primary action.
- Display type uses Roboto Slab; body/UI type uses DM Sans; small labels use DM Mono.
- `ScrollExpandHero` is the only scroll-linked homepage interaction. It uses native document scrolling and one sticky desktop stage; there is no nested scrolling or GSAP controller.
- Desktop expands the local temporary hero image from a rounded editorial frame to a full-bleed composition. Mobile and reduced-motion users receive the stable image composition without pinning.
- Three.js, React Three Fiber, GSAP, particle systems, drone hotspots, and all canvas code were removed.

## Content, privacy, and temporary assets

- The verified contact route is `teamkaalkrit@gmail.com`; verified Instagram and X URLs remain centralized in `content/site.ts`.
- The site has no contact form, analytics, advertising pixels, non-essential cookies, or third-party embeds.
- Legal and system pages use the warm visual system and route questions to the verified email.
- Temporary Pexels and Unsplash assets are local, optimized by Next.js, and documented in `public/images/ATTRIBUTIONS.md`.

## Verification

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Browser QA at 320, 375, 430, 768, 1024, 1280, and 1440 pixels.
- Reduced-motion and no-canvas checks.

See `docs/KAALKRIT-CONTENT-AND-ASSET-REQUESTS.md` for the remaining real-world inputs.
