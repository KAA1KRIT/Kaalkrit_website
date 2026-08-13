# KAALKRIT Testing Report

Audit date: 13 August 2026. Local Node.js: 24.14.0. Framework: Next.js 16.3.0.

## Automated commands

| Command | Result |
| --- | --- |
| `npm test` | Pass — 4 content/publication integrity tests |
| `npm run lint` | Pass — no ESLint errors or warnings |
| `npm run typecheck` | Pass — strict TypeScript check |
| `npm run build` | Pass — 21 static/SSG outputs generated |
| `npm audit --audit-level=high` | Pass — 0 vulnerabilities |
| `git diff --check` | Pass |

The tests protect verified contact channels, navigation destinations, unique/public-ready project records, valid capability references, and the gallery publication gate.

## Production route verification

The production server was checked at `/`, `/projects`, all five `/projects/[slug]` pages, `/journey`, `/team`, `/partners`, `/contact`, `/privacy`, `/terms`, `/accessibility`, `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/icon.png`, and `/apple-icon.png`. Expected routes returned 200 and an unknown route returned the custom 404.

Browser crawling found:

- exactly one `h1` on every HTML route;
- no duplicate IDs, broken loaded images, localhost/example links, failed subresource requests, or horizontal overflow;
- all 14 discovered internal destinations returned a successful response and all same-page anchors had real targets;
- `/team` emits `noindex, follow`; the custom 404 emits `noindex`.

## Responsive and interaction coverage

Chromium was exercised at 320×700, 375×812, 768×900, 1024×800, 1440×900, 1920×1080, and 844×390 landscape.

- Native document scrolling and a visible scrollbar were present; the footer was reachable at every size.
- The compact hero had no detected text/control overlap. Desktop/tablet hero progress reached `0.9720`, expanded text remained inside the viewport with separated title/summary/action bounds, and reverse scrolling returned progress to `0.0000`.
- Mobile used the stable zero-canvas hero. Desktop used one canvas. Reduced motion used a 680px stable hero, zero canvas, zero running animations, and no overflow.
- The mobile menu set only the body overflow while open, made main content inert, focused the first navigation item, closed on Escape and anchor navigation, restored body scrolling, and returned focus to the trigger.
- Production pages produced no console, hydration, CSP, or WebGL errors. The expected browser console entry for the deliberately requested 404 document was excluded from application-error counts.
- LAN development access returned 200 for the page and a `/_next/static` asset from `http://10.67.84.166:3000`.

## Security and performance observations

- Production responses include CSP, `nosniff`, strict referrer policy, frame denial, and a restrictive permissions policy.
- Largest generated JavaScript chunks were inspected; GradientWaves and gallery implementations remain split behind dynamic imports. No formal bundle-budget failure was observed.
- The active foreground/primary, muted/background, accent/background, inverse, and destructive color pairs measured 5.21:1 to 17.10:1 (minimum tested pair above WCAG AA for normal text).

## Coverage limitations

- No formal Lighthouse run, screen-reader session, Safari/Firefox session, real touch-device run, throttled-network trace, or production-domain test was available locally.
- 200% zoom behavior is partially represented by narrow responsive checks but still requires a manual browser zoom review on the Vercel preview.
- Analytics delivery cannot be verified until the Vercel project and optional environment flag are configured.
