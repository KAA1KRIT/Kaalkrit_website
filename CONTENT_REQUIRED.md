# KAALKRIT content and asset requests

This repository now has the public structure and typed state model for the remaining content. Only entries marked `ready` in the central content files should be published. No request below should be filled with inferred or stock material.

## Required before public launch

### Brand and shared media

- The current official 160×160 PNG is integrated. Supply a transparent/vector wordmark, a high-resolution light-background variant, a 512×512 app icon, and a 180×180 Apple touch icon with usage guidance.
- Approved social-preview artwork at 1200 × 630px (PNG, JPG, or SVG-safe equivalent).
- Real team/workshop photography with publication permission. Recommended editorial captures: 2400px wide minimum, JPG/WebP, plus vertical 4:5 crops for galleries.
- A record of photographer/creator credit and permission for every image or clip.

### Home and shared sections

- Final approval of the public organisation description and hero supporting copy.
- Approved media for the hero, built-through-practice section, and any featured project visual. Recommended hero: 2400 × 1600px or wider; section media: 1600 × 1200px minimum.
- Approved captions and alt text for every media item selected for public display.

### Navigation and contact

- Confirmation of the public navigation labels and destination anchors.
- Official domain for `NEXT_PUBLIC_SITE_URL`.
- Final legal approver and any institution-approved legal wording.
- Confirmation of the official institutional/legal identity and jurisdiction wording, if any, that may be used in public terms.

## Required before sponsor outreach

### Partnership page and CTA

- Approved sponsor narrative explaining what support can enable.
- Approved collaboration options and partner value proposition.
- Sponsor deck, budget summary, and any partner tiers if KAALKRIT wants them published or linked.
- Approved partner logos only if a real partnership exists, with written logo-use permission and SVG/PNG files.

### Proof and achievements

- Exact competition/event name, date, location/context, and proof link or document for the 11th-place Business Evaluation result.
- Approved wording for national-level representation and any public event photographs or video clips.
- Confirmation of Build With Hardware as public, private, or concept-stage, plus an official URL only if public access is approved.

## Required before a project case study is published

For each project (Autonomous UAS — NIDAR 2026, AirMOS — NIDAR 2027, Build With Hardware, Intelligent Robotic Arm, and Autonomous Robot Vacuum Cleaner), provide:

- Approved title, slug, status, dates, one-sentence summary, problem statement, approach, engineering disciplines, results, and next milestone.
- Technical details cleared for public use; do not submit confidential design files, credentials, or unapproved performance numbers.
- Real project images: 1600 × 1200px minimum for editorial media, 1200 × 1500px minimum for vertical gallery media, WebP/AVIF preferred with original archive retained privately.
- Approved video or clip files and posters: H.264/MP4 or WebM, poster at the same aspect ratio, captions/transcript where speech is present.
- CAD/render files only if publication is approved: PNG/WebP previews at 1600px wide; never upload proprietary source files to `public/`.
- Event proof, documentation links, captions, image credits, and permission confirmation for every asset.

## Team page

- Public roster with names, roles, divisions, project ownership, short bios, approved skills, and public social links.
- Portraits or approved workshop images with consent. Recommended portrait: 1000 × 1250px minimum, JPG/WebP.
- Confirmation of who may be identified as leadership, core engineering, faculty/mentor, or alumni.

## Journey and archive

- Approved timeline dates, event names, captions, and links for any milestone beyond the verified current record.
- Journey photographs, build logs, event clips, and CAD/document previews with credits and permissions.
- Recommended archive tile media: 1200 × 800px minimum for landscape, 1200 × 1500px for portrait.

## Optional enhancement

- Closed-captioned build/test video clips.
- Approved downloadable technical briefs or public documentation.
- Press or publication links that KAALKRIT has verified.
- A named communications owner for future content review and social-preview updates.
- Final social-profile imagery and the public communications owner responsible for approving updates.

## Where to add the data

- Shared identity and contact: `content/site.ts`, `content/contact.ts`.
- Project facts: `content/projects.ts` and project detail routes.
- Team: `content/team.ts`.
- Journey: `content/journey.ts`.
- Partner information: `content/partners.ts`.
- Gallery metadata and permissions: `content/gallery.ts`.
- Approved optimized media: `public/images/approved/`.

Mark an entry `ready` only after the text, source, dimensions, alt text, credit, and publication permission are confirmed. Use `awaiting-content` or `hidden` while material is incomplete; never use an external placeholder URL.
