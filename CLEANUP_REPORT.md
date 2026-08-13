# KAALKRIT Cleanup Report

## Files moved

No source relocations were required in this pass. The existing feature-oriented `components/hero`, `layout`, `gallery`, `projects`, `system`, and `ui` boundaries were retained to avoid churn.

## Files removed after reference audit

- Six unreferenced stock photographs and their attribution file. They were absent from every route/import and conflict with the approved-media-only policy.
- Duplicate `public/images/opengraph-image.svg`; it was byte-identical to the active App Router `app/opengraph-image.svg`.
- `components/system/ContentSkeletons.tsx` and its dead CSS selectors; no importer existed and static content must not show decorative loaders.
- `content/capabilities.ts`; its older panel model had no importer and duplicated the active verified domain model in `content/domains.ts`.
- `app/icon.svg`; the official synchronized PNG now owns the App Router icon route.
- Historical prompt/design/planning/audit Markdown files after their useful setup, architecture, content, testing, and launch information was consolidated into the six retained root documents.

## Code consolidated and bugs fixed

- Removed old palette aliases; components now resolve through the active semantic theme.
- Centralized analytics enablement and made the privacy page reflect the actual build flag.
- Added production URL validation, escaped JSON-LD, WebSite schema, correct project-detail schema URLs, and no-index handling for the unapproved roster.
- Added a `publicProjects` publication gate across routes, static params, sitemap, homepage, and schema.
- Corrected journey links from obsolete project anchors to real project-detail routes.
- Replaced the gallery’s GSAP entrance with the Web Animations API and added Arrow/Home/End keyboard controls.
- Corrected logo intrinsic dimensions to the current 160×160 official asset.
- Added focused content/publication integrity tests and accessible loading announcements.

## Dependencies

- Removed `gsap`; it had one non-essential gallery importer and is no longer required.
- Retained `ogl` for the isolated GradientWaves visual and `@vercel/analytics` for explicitly enabled production analytics.
- No package was added. `npm audit --audit-level=high` reports zero vulnerabilities.

## Intentionally retained

- Root `logo_favicon.jpg`, synchronized public/app icons, and `public/images/approved/kaalkrit-logo.png` are approved brand assets and were not deleted.
- Empty gallery/team structures remain because they safely hide unavailable material and are ready for approved content.
- The ignored local `logo_favicon.psd` was left untouched; it is not tracked or shipped.
- Generated `.next`, `node_modules`, `output`, Playwright artifacts, and TypeScript build info remain local and ignored, not tracked.

## Ambiguities left untouched

- No official asset was removed merely because it is currently unused.
- No external service, production credential, deployment project, DNS record, or analytics account was changed.
