# KAALKRIT Deployment Checklist

## Completed locally

- [x] Lint, TypeScript, focused tests, production build, dependency audit, route crawl, responsive browser matrix, reduced-motion fallback, menu focus/scroll restoration, and LAN static-asset access verified on 13 August 2026.
- [x] Public routes are statically generated; unknown routes return the custom 404.
- [x] No localhost canonical/social metadata is emitted when the production URL is absent or invalid.
- [x] Security headers and production CSP are present on the local production server.
- [x] Official email, Instagram, X, favicon, manifest, robots, sitemap, and legal/footer links resolve locally.

## Requires credentials or platform configuration

- [ ] Create/link the intended Vercel project without committing `.vercel` credentials.
- [ ] Confirm the final HTTPS domain and set `NEXT_PUBLIC_SITE_URL` for Production and relevant Preview environments.
- [ ] Decide whether Vercel Web Analytics is enabled. If approved, configure it in Vercel and set `NEXT_PUBLIC_ENABLE_ANALYTICS=true`; otherwise leave it false.
- [ ] Configure DNS and any domain redirect policy (for example, apex versus `www`).
- [ ] Assign the legal/privacy approver and approve the current informational-site wording.
- [ ] Decide whether production monitoring/error reporting is required; none is currently configured.

## Must be verified on a Vercel preview

- [ ] Run `npm ci`, `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` in the deployment environment.
- [ ] Check every public route, all five project routes, 404, icons, manifest, `robots.txt`, and `sitemap.xml`.
- [ ] Confirm the CSP permits Next.js assets, GradientWaves, and same-origin analytics without console violations.
- [ ] Verify mobile menu focus trapping, Escape/backdrop/navigation close behavior, and scroll restoration on iOS Safari and Android Chrome.
- [ ] Verify hero forward/reverse scrolling, reduced motion, no horizontal overflow, and no layout shift on representative devices.
- [ ] Run Lighthouse or equivalent mobile audits and record Performance, Accessibility, Best Practices, SEO, LCP, INP, and CLS.
- [ ] Confirm preview environments are not accidentally indexed if the preview URL is public.

## Must be verified after production deployment

- [ ] Confirm canonical and Open Graph URLs use the final domain and the social image renders on Instagram/X-compatible debuggers.
- [ ] Submit the production sitemap in Google Search Console and request indexing for the homepage, projects, and journey pages.
- [ ] Inspect Google URL Inspection for canonical selection, robots access, and rendered content; do not promise ranking.
- [ ] Verify DNS/HTTPS redirects, security headers, 404s, and all mail/social outbound links from the public domain.
- [ ] If analytics is enabled, verify page views and approved event names without personal data; recheck the published Privacy Policy.
- [ ] Monitor initial Core Web Vitals, browser errors, uptime, and broken links after launch.

## Not applicable to the current site

- Cookie-consent banner: no non-essential cookies are used. Reassess before adding any cookie-based analytics, advertising, embeds, or tracking.
- Contact-form backend, submission caching, rate limiting, and spam controls: there is no form; contact uses `mailto:` links.
- Team roster indexing: intentionally disabled until approved member data and consent exist.
- Product checkout, accounts, authentication, database migrations, and private/draft content caching: not implemented.
