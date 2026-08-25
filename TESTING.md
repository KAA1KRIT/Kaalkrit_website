# Testing

## Local commands

```bash
npm run test:content    # Node content and deployment integrity checks
npm run test:unit       # Vitest + React Testing Library component tests
npm run test:watch      # Vitest in watch mode
npm run test:coverage   # V8 coverage for components, content, and lib
npm test                # content + unit suites
npm run test:e2e        # production build plus Playwright release suite
```

Install Chromium once when needed:

```bash
npx playwright install chromium
```

The unit suite covers the shared UI primitives, loading skeletons, error and
404 recovery states, content-module integrity, and SEO serialization. The
Playwright suite verifies public routes, navigation, metadata, responsive
layout, media, the team carousel, background behavior, security headers, and
404 behavior against a production server.

Loading routes are deterministic static content in normal production builds,
so their visual skeleton shapes are asserted in unit tests rather than by
artificially delaying public pages in E2E tests.
