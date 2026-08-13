# KAALKRIT cleanup report

## Files moved

- `components/editorial/ScrollExpandHero.tsx` → `components/hero/ScrollExpandHero.tsx`.
- Active GradientWaves and GradualBlur source/CSS now live beside the hero in `components/hero/`.
- `components/editorial/BorderGlow.tsx` and `MaskedHeading.tsx` → `components/motion/`.
- `components/sections/WarmLandingPage.tsx` → `components/sections/LandingPage.tsx`.
- Project-specific `ProgrammeSpine`, `PlatformFeature`, and `ProjectFeature` → `components/projects/`.
- Journey and partnership records were consolidated into `content/journey.ts` and `content/partners.ts`.

## Removed after reference audit

- Generated paths were removed from the Git index only: `.next/`, `node_modules/`, `output/`, `.playwright-cli/`, and `tsconfig.tsbuildinfo`. They remain locally available and are already ignored.
- The retired `components/sections` implementations were removed after `rg` confirmed they had zero importers: `AchievementList`, `Achievements`, `CapabilityIndex`, `DomainIndex`, `EngineeringLifecycle`, `FutureTrajectory`, `HardwarePlatformSection`, `JoinSection`, `Mission`, `MissionStatement`, `ProjectProgramme`, `ProjectsOverview`, `ProofPoints`, `RoboticsTrack`, `VisionStatement`, and `WhyKaalkrit`.
- `PartnerSection` was removed because it was only a one-line alias. The active project route now imports `PartnershipSection` directly.
- `content/milestones.ts` and `content/partner.ts` were removed after their facts moved verbatim into their named central modules.

## Consolidation and dependencies

- No production dependency was removed: `gsap` is used by the DepthCarousel wrapper, `ogl` powers GradientWaves, and `@vercel/analytics` is integrated in the root layout.
- No MoltenMetal source or import remains.
- Global token, scrollbar, and motion rules remain centralized in `styles/tokens.css` and `styles/globals.css`.

## Intentionally retained

- `logo_favicon.png` is the canonical incoming brand file; derived app/public icons are retained for Next.js delivery.
- `public/images/*` replacement media is not currently referenced by the public UI, but is retained because its replacement/approval status is ambiguous and documented in `CONTENT_REQUIRED.md`.
- `DESIGN.md`, `DESIGNFinal.md`, `documentation.md`, and `prompt.md` are historical/reference documents; they are retained for provenance and are not the live implementation source of truth.
- Gallery wrappers remain even where ready media is unavailable, because they provide safe empty and error states for approved future content.

## Ambiguities left untouched

- No unreferenced media was deleted without a confirmed retention decision.
- No historical documentation was deleted; current architecture and content workflow are documented in `ARCHITECTURE.md` and `CONTENT_REQUIRED.md` instead.
