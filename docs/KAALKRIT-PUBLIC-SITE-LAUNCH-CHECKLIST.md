# KAALKRIT public-site launch checklist

## Required real-world inputs

- [ ] Real production domain is confirmed.
- [ ] `NEXT_PUBLIC_SITE_URL` is set to the real HTTPS production origin.
- [x] Official public contact email is configured: `teamkaalkrit@gmail.com`.
- [ ] Privacy, Terms and Accessibility pages receive final human/legal review.
- [ ] Verified team roster is supplied before `/team` is exposed.
- [ ] Real project images are supplied with ownership and alt-text approval.
- [ ] Final social-preview image is approved.

## Privacy and measurement

- [ ] Analytics decision is documented.
- [ ] If analytics or other non-essential cookies are enabled, add `/cookies`, consent persistence, blocking before consent, and a footer control to reopen choices.
- [ ] If analytics remains disabled, do not add a cookie banner.

## Quality assurance

- [ ] Browser and mobile visual QA at 320, 375, 430, 768, 1024, 1280 and 1440+.
- [ ] Keyboard QA for header, mobile navigation, hero links, links and footer.
- [ ] Reduced-motion QA for the static hero composition.
- [ ] Console errors and hydration warnings reviewed.
- [ ] Lighthouse Performance target 90+.
- [ ] Lighthouse Accessibility target 95+.
- [ ] Lighthouse Best Practices target 95+.
- [ ] Lighthouse SEO target 95+.
- [ ] Dependency audit result recorded: `npm audit --audit-level=high`.

## Deployment

- [ ] Production-equivalent server tested on the real domain.
- [ ] `/`, `/projects`, `/journey`, `/privacy`, `/terms`, `/accessibility`, `/robots.txt` and `/sitemap.xml` verified.
- [ ] Unknown routes show the custom 404 experience.
- [ ] No placeholder domain, fake contact detail, unsupported social link or unverified content appears in production metadata or page copy.
