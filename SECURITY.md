# Security

## Controls in this repository

- Production responses set CSP, `X-Frame-Options: DENY`,
  `X-Content-Type-Options: nosniff`, `Referrer-Policy`,
  `Permissions-Policy`, and HSTS through `next.config.ts`.
- The CI quality gate runs `npm audit --audit-level=high` and scans built
  client JavaScript for common credential patterns.
- Pull requests run GitHub's Dependency Review action.
- Public assets are local, reviewed files; external links use safe
  `noopener noreferrer` handling in the shared button component.
- The contact page deliberately exposes only the verified Instagram route.
  It has no form, API route, Server Action, or user-controlled input surface;
  rate limiting, CSRF handling, and server-side form validation are therefore
  not applicable until a real contact form is approved and implemented.

## Out of scope

This static public site does not implement authentication, payment handling,
or a data store. If any are added, perform a dedicated threat model and add
server-side validation, rate limiting, CSRF protection, monitoring, and
privacy updates before publishing them.

## Reporting

Do not commit credentials, private keys, or `.env` files. Report suspected
security issues privately to the project maintainers rather than filing a
public issue with exploitable details.
