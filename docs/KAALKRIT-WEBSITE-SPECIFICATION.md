# KAALKRIT — Website Product & UX Specification

> **Historical planning record.** This document preserves the original factual inventory and gap analysis, but its proposed component inventory, contact gaps, and visual direction are superseded by the implemented repository. See [`ARCHITECTURE.md`](../ARCHITECTURE.md), [`CONTENT_REQUIRED.md`](../CONTENT_REQUIRED.md), and `content/` for current sources of truth.

**Status:** Draft v1.0 — Phase 1 deliverable
**Sources of truth:** `documentation.md` (content, verified facts) · `DESIGN.md` (visual system — *see §21, the supplied file did not contain a design system*)
**Rule applied throughout:** nothing in this document asserts a fact that is not present in `documentation.md`. Every gap is marked `[GAP]` rather than filled.

---

## 0. Verified content inventory

This is the complete set of facts the site is allowed to state. If a claim is not on this list, it does not ship.

| # | Verified fact |
|---|---|
| F1 | Official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru |
| F2 | Established 2024 |
| F3 | Multidisciplinary — students from diverse engineering domains |
| F4 | 11 documented capability domains (UAS, drone tech, robotics & automation, embedded, AI & CV, PCB design, mechanical design & rapid prototyping, sensor integration & control, flight control & autonomous navigation, software & full-stack, research & product engineering) |
| F5 | Project — Autonomous UAS, NIDAR 2026: airframe design, embedded electronics, flight controller integration, mission planning, payload management, autonomous flight |
| F6 | Project — AirMOS, NIDAR 2027: in development; advanced sensing, autonomy, mission-oriented design |
| F7 | Project — Build With Hardware (BWH): flagship platform; structured learning, hardware projects, documentation, collaborative workspaces, AI-powered engineering assistance |
| F8 | Project — Intelligent Robotic Arm: in development; servo-based control, precision motion, control algorithms |
| F9 | Project — Autonomous Robot Vacuum Cleaner: developed; navigation, obstacle detection, motion control |
| F10 | Achievement — 11th place, Business Evaluation, national-level competition |
| F11 | Achievement — represented Sir MVIT at national-level drone innovation competitions |
| F12 | Future scope — swarm intelligence, CV-driven autonomy, advanced embedded platforms, robotic manipulators, integrated autonomous ecosystems |
| F13 | Target sectors — agriculture, healthcare, infrastructure inspection, environmental monitoring, disaster response, logistics, manufacturing, smart cities |
| F14 | Intent — contribute to India's deep-tech ecosystem, indigenous technology, inspire future engineers |

### Documented gaps — content that does not exist and must not be invented

| ID | Gap | Blocks |
|---|---|---|
| G1 | No team members, roles, leadership, divisions, faculty, or mentors named | `/team` (entire page) |
| G2 | No contact email, phone, or address | Footer, all CTAs, `/contact` |
| G3 | No social links | Footer, team profiles, SEO `sameAs` |
| G4 | No sponsors, partners, or testimonials | Sponsor logo wall, testimonials section |
| G5 | No numeric metrics beyond F2 and F10 (no team size, flight hours, budget, event dates) | Impact statistics section |
| G6 | No images, logo, wordmark, or brand assets | Hero, project cards, OG images, favicon |
| G7 | No sponsorship tiers, deliverables, or ask amount | Sponsor value proposition |
| G8 | Competition name behind F10 not stated; NIDAR 2026 written in past tense — completion status unconfirmed | Achievements copy, journey dates |
| G9 | BWH availability (live / private / concept) not stated | BWH CTA — no "Try it" link until confirmed |

---

## 1. Executive summary

KAALKRIT has the substance of a research lab and the web presence of a club. The site's job is to close that gap in under ten seconds for a stranger with money, a job opening, or a research partnership.

The constraint that shapes every decision below: **the content is deep on engineering and empty on people, proof, and contact.** A conventional club site would paper over that with stock photos, fake stats, and a sponsor tier table. This specification does the opposite — it builds the site around the one thing that is genuinely verifiable and genuinely rare, which is **a documented two-cycle engineering programme (NIDAR 2026 → AirMOS 2027) plus a platform product (BWH)** — and treats the missing pieces as content debt with a named owner, not as design problems.

Homepage narrative and `/journey` ship on verified content today. `/team` is gated on G1: the component system is built, the page ships when the roster exists. Fabricated bios are a disqualifying failure, not a shortcut.

## 2. Brand positioning

**Category:** student-led deep-tech engineering lab.
**Not:** a college club, a competition team, a hackathon collective.

Positioning statement, derived only from F1–F14:

> KAALKRIT is Sir MVIT's drone and robotics lab, running full-lifecycle engineering — research, architecture, manufacturing, electronics, software, validation — across autonomous aerial systems, robotics, and a hardware-learning platform.

Three differentiators the documentation actually supports:

1. **Full lifecycle, not prototypes.** Research → architecture → design → manufacturing → electronics → software → testing → validation → iteration.
2. **Multi-year programme, not one-off entries.** NIDAR 2026 explicitly named as the foundation for AirMOS 2027.
3. **Hardware plus platform.** BWH means the team ships tooling for other builders, not only its own machines.

Positioning risk to manage: the source document is written in high-abstraction promotional register ("engineer the future", "define its future"). On the site this must be converted into concrete engineering statements. Ambition is credible only when it sits next to specifics.

## 3. Mission and vision interpretation

**Mission (site voice):** design intelligent technologies that solve real-world challenges through research and engineering excellence.
**Vision (site voice):** become one of India's leading university engineering teams and contribute to India's deep-tech self-reliance.

Interpretation rules for copy:
- Sector claims (F13) are stated as *intended application areas*, never as deployments.
- Vision language appears once, in the Vision section, in first person plural. It does not leak into the hero or project copy.
- Every abstract sentence must be adjacent to a verifiable one. Never two abstractions in a row.

## 4. Website goals

| Goal | Measure |
|---|---|
| G-1 Convert sponsor and partner interest into a conversation | Partner CTA → contact completions |
| G-2 Establish technical credibility within the first viewport | Hero → Projects scroll-through rate |
| G-3 Recruit students | Join CTA completions |
| G-4 Serve as the canonical reference for judges, faculty, and press | Direct + referral traffic to `/journey`, `/projects` |
| G-5 Make the engineering legible to non-engineers | Time on Projects; sponsor CTA reached from a project page |

## 5. Business and communication objectives

- Reframe funding as **research investment and talent access**, not donation.
- Give a recruiter a route from a project to a named engineer in ≤2 clicks (blocked by G1).
- Give a judge a citable, dated record of work (`/journey`).
- Make BWH discoverable as a distinct asset, since it is the only project with an audience beyond the team.
- Keep every claim defensible under scrutiny — a sponsor's diligence check must not find an unsupported number.

## 6. Target audiences

**Primary:** sponsors and industry partners; prospective students at Sir MVIT.
**Secondary:** recruiters and hiring managers; competition judges and faculty; research collaborators.
**Tertiary:** press; the broader Indian hardware community (BWH).

## 7. User personas

**P1 — Sponsorship / CSR lead, Indian deep-tech or industrial firm.** Arrives from a cold email or call. Two minutes, on mobile, deciding whether to reply. Needs: is this real, who is behind it, what will my money do, what do I get. Fails on: no team page, no numbers, generic ask.

**P2 — Engineering hiring manager.** Wants evidence of individual contribution: what did *this student* own. Fails on: group achievements with no attribution.

**P3 — First-year Sir MVIT student.** Wants to know if they are good enough to apply and what they would work on. Fails on: elitist tone, no entry path.

**P4 — Competition judge / faculty reviewer.** Verifying claims against a submission. Fails on: undated, unattributed, or inflated claims.

**P5 — Hardware builder outside Sir MVIT.** Arrived via BWH. Wants access. Fails on: no status, no waitlist (G9).

## 8. Sponsor journey

Entry: cold outreach link, LinkedIn, or QR on a deck → `/`.

`Hero` (what it is, who runs it) → `Mission` (why) → `Why KAALKRIT` (lifecycle claim) → `Domains` (breadth) → `Projects` (depth, NIDAR programme) → `Achievements` (F10, F11) → `Vision` (F12, F13 — where the money goes) → `Partner` (specific collaboration modes) → contact.

Design requirement: a sponsor must be able to reach the Partner section in one deliberate jump. Persistent nav includes a **Partner with us** action styled as the primary CTA on every page.

Partner section states only what is true: collaboration modes (funding a build cycle, component and equipment sponsorship, mentorship, research collaboration, campus access to talent). No tier table, no logo placement promises, no valuation figures until G7 is filled.

## 9. Recruiter journey

`/projects` or `/team` (usually deep-linked) → project detail → engineers who built it → external profile.
Requires the `TeamMember → projects[]` relation in the content model (§28). Until G1 and G3 are filled this journey is broken; that is the single strongest argument for prioritising the roster collection.

## 10. Student recruitment journey

`/` hero → `Projects` (aspiration) → `Journey` (the team is only two years old — this is the reassurance) → `Join` section: what divisions exist, what a first-year can contribute, what the process is `[GAP — process undocumented]`.

Copy principle: recruit on *learning and ownership*, supported by F3 and the documented BWH learning intent. Do not recruit on prestige.

## 11. Industry collaboration journey

Researcher or startup arrives via BWH or the domains list → `Domains` → relevant project → `Partner` section, "Research collaboration" mode → contact with a subject preset.

## 12. Information architecture

```
/                 Home — full narrative
/projects         Project index + per-project detail sections
/team             People  [GATED on G1]
/journey          Timeline 2024 → present → forward
/#partner         Partner section (anchor, not a route — insufficient content for a page)
/#join            Recruitment (anchor)
```

Routes deliberately **not** created: `/sponsors` (G7), `/contact` (G2), `/about` (fully covered by `/` and `/journey`). Creating them would produce empty or padded pages, which the brief forbids.

Navigation: `Projects · Team · Journey` + primary action `Partner with us`. Four items maximum. `Team` is hidden from nav until the page ships.

## 13. Page hierarchy

| Route | Priority | Render | Purpose |
|---|---|---|---|
| `/` | 1.0 | Static | Full narrative and conversion |
| `/projects` | 0.9 | Static | Technical depth |
| `/journey` | 0.8 | Static | Credibility over time |
| `/team` | 0.8 | Static | People and attribution |

## 14. Landing page narrative

Hero → Mission → Why KAALKRIT → Engineering domains → Projects → Achievements → Vision → Partner → Join → Footer.

**Hero.** Headline states category and scope. Sub-copy states what is being built now. Two actions: *See the work* (primary) / *Partner with us* (secondary). One line of factual metadata is set in the utility face — established 2024 · Sir MVIT, Bengaluru · drones, robotics, embedded systems. No slogan-only hero.

**Mission.** Short. Why the team exists, in engineering terms, not aspiration terms.

**Why KAALKRIT.** Three claims, each with its evidence attached: full lifecycle (list the nine documented stages), multidisciplinary (F3), multi-year programme (F5 → F6).

**Engineering domains.** The 11 domains (F4) as a typographic index, not a logo wall. Grouped: *Air* (UAS, drone tech, flight control, autonomous navigation) · *Machine* (robotics, mechanical design, sensor integration, control systems) · *Silicon & Software* (embedded, PCB, AI/CV, full-stack) · *Method* (research & product engineering). Grouping is an editorial reading of F4 and adds no new claims.

**Projects.** Editorial, not a card grid. NIDAR 2026 and AirMOS 2027 presented as one continuous programme with a shared spine; BWH given its own full-width treatment as the platform outlier; the robotic arm and vacuum cleaner presented as a paired robotics track. Each project answers: what it is · what problem · why it matters · the capability demonstrated.

**Achievements.** Two verified items (F10, F11) presented with restraint and context. Two honest achievements outrank six padded ones. F10 must carry the competition name once G8 is resolved.

**Vision.** F12 and F13, framed as direction and explicitly labelled as intent.

**Partner.** See §8.

**Join.** Divisions, what you would build, how to apply `[GAP]`.

**Impact statistics — replaced.** Under G5 there are no honest numbers. Substituted with four qualitative proof points drawn from F5–F9: five documented systems · two NIDAR cycles · one open hardware platform · full-lifecycle in-house build. Presented as statements, not as a counter row.

**Testimonials — omitted.** G4. No placeholder ships to production.

## 15. Team page experience

Editorial, department-led, not a uniform grid.

Structure: leadership → engineering divisions (derived from F4 groupings) → faculty/mentors → alumni.
Per member: name, role, division, what they own, projects, skills, links — every field supplied by the person, never inferred.

Interaction: division filter (real anchors, works without JS), expandable profile panel, scroll reveals. Keyboard-operable, touch targets ≥44px, filter state in the URL.

**Gate:** this page does not ship until at least the leadership tier and one full division are supplied. Until then `/team` is not linked and not built. Collection schema is in §28 — the fastest unblock is a form with exactly those fields.

## 16. Our Journey page experience

A vertical spine with dated milestones. Documented milestones only:

`2024 — founded` → `NIDAR 2026 — UAS designed, built, integrated, flown` → `11th place, Business Evaluation` → `Robotics track — robotic arm, autonomous vacuum` → `BWH — platform development` → `NIDAR 2027 — AirMOS in development` → `Forward — swarm, CV autonomy, manipulators, ecosystems`.

Dates are year-granular because that is all the documentation supports. No invented months. Each milestone cross-links to the relevant project. Scroll progress drives the spine; reveals are position-only and short. No parallax on text, no scroll hijacking.

## 17. Content strategy

Voice: engineer explaining their work to a respected outsider. Precise, plain, unhurried. First person plural.

Rules:
1. Every section opens with a concrete statement, never an abstraction.
2. No adjective survives unless it changes meaning — cut *cutting-edge, revolutionary, world-class, next-generation*.
3. Numbers only from F2 and F10.
4. Tense discipline: built / in development / intended. Never blur them.
5. Body copy ≤3 sentences per block. The source document's paragraph length does not transfer to screen.
6. Sector lists (F13) appear once, as intent.

## 18. Content hierarchy

Per viewport, one dominant element only: hero headline · section heading · project title · milestone. Supporting copy at body scale, metadata in the utility face at small scale. No section may compete with its neighbour for the same attention weight.

## 19. Call-to-action strategy

| CTA | Placement | Priority |
|---|---|---|
| Partner with us | Nav (persistent), hero secondary, partner section, footer | Primary |
| See the work | Hero primary, journey end | Secondary |
| Join KAALKRIT | Join section, footer, team page end | Secondary |
| Explore BWH | BWH block only, gated on G9 | Tertiary |

One primary action per viewport. All CTAs resolve to a real destination — until G2 is filled, `mailto:` with a preset subject; no dead buttons, no "coming soon".

## 20. Component inventory

`SiteHeader` · `MobileNav` · `Hero` · `SectionHeader` (eyebrow + heading + lede) · `MetaLine` · `DomainIndex` · `ProjectFeature` (editorial, alternating) · `ProjectProgramme` (NIDAR two-cycle spine) · `ProofPoints` · `AchievementList` · `VisionStatement` · `PartnerSection` · `CollaborationMode` · `JoinSection` · `Timeline` + `TimelineMilestone` + `TimelineProgress` · `TeamDivision` + `MemberProfile` + `DivisionFilter` · `Rule` (the shared hairline/tick divider) · `Button` (primary/secondary/ghost) · `SiteFooter`.

No component ships in two visual variants without a documented reason. No card wrapper is used where a rule and spacing would do.

## 21. Design system interpretation

**Blocking issue:** the supplied `DESIGN.md` contains the build brief, not a design system. It defines no colours, type scale, spacing, radii, or motion values. Phase 3 therefore has no source of truth.

Resolution path, in order of preference:
1. Supply the real `DESIGN.md` and re-derive tokens from it.
2. Adopt the proposed token set delivered alongside this specification (`DESIGN.md`, marked **PROPOSED**), which is derived from the brief's stated adjectives — dark, refined, minimal, typography-led, high contrast, technical, premium — and from the subject matter.
3. Do not proceed to implementation on an undefined visual system.

Whichever is adopted, the constraints stand: near-black base, one accent used under 5% of surface area, radius ≤2px, hairline dividers, type and spacing carry the design, no glassmorphism, no ambient glow, no gradient decoration.

## 22. Responsive strategy

Mobile-first. Verified at 320 / 375 / 430 / 768 / 1024 / 1280 / 1440+.

Recomposition, not scaling:
- Hero: stacked, metadata line wraps to two lines, actions full-width below 430px.
- Domain index: 4 columns → 2 → 1, group headings persist.
- Project features: alternating two-column → single column, media above copy.
- Timeline: centred spine (desktop) → left rail at 24px (mobile), milestones full-width.
- Team: division columns → stacked accordion; filter becomes a horizontal scroll rail.
- Footer: 4 columns → 2 → 1.

Guards: no horizontal overflow at 320px; touch targets ≥44px; line length 60–75ch body, ≤20 words on display lines.

## 23. Motion strategy

Purpose only: entrance hierarchy, scroll progress, state feedback, route transition.

Durations 120–260ms; one easing curve; reveals are opacity + ≤12px translate, triggered once at 20% viewport intersection; stagger ≤60ms and capped at 4 children. No parallax on text. No scroll hijacking. No looping ambient motion. `prefers-reduced-motion: reduce` disables transforms and scroll-linked effects, keeps opacity ≤80ms, and keeps all content immediately readable.

## 24. Accessibility strategy

WCAG 2.2 AA. Semantic landmarks; one `h1` per route; no skipped heading levels; skip-to-content link; visible focus ring on every interactive element (2px accent + 2px offset, never `outline: none`); body contrast ≥7:1, all text ≥4.5:1, non-text UI ≥3:1; descriptive alt text on every image, empty alt on decorative; no colour-only status (pair with text or shape); filters and accordions operable by keyboard with correct `aria-expanded` / `aria-controls`; forms with real `<label>`s, inline errors, and error text that says what to fix; motion respects reduced-motion; zoom to 200% without loss of content.

## 25. SEO strategy

Unique title and meta description per route. Titles: `KAALKRIT — Drone & Robotics Innovation Team, Sir MVIT` / `Projects` / `Team` / `Our Journey`. OG and Twitter cards per route with a generated OG image once brand assets exist (G6). `sitemap.xml` and `robots.txt` from the route table. Canonicals once the domain is known.

Structured data: `Organization` (name, alternate name, founding date 2024, parent organization Sir MVIT, location Bengaluru), `Person` per team member (gated on G1), `CreativeWork` per project. `sameAs` gated on G3.

Copy is written for humans first; no keyword stuffing. Primary query intents: *KAALKRIT*, *Sir MVIT drone team*, *NIDAR team Bengaluru*, *Build With Hardware*, *student drone team India*.

## 26. Performance strategy

Lighthouse ≥90 on mobile. Static rendering for all four routes. Client components only for: mobile nav, team filter, scroll progress. Self-hosted variable fonts, subset to `latin`, `font-display: swap`, preload the display face only. Images as AVIF/WebP through the framework image pipeline with explicit dimensions; hero image priority, everything below the fold lazy. No animation library on the critical path — CSS and the Intersection Observer cover the reveal set; if a motion library is used, it is loaded only on `/journey`. No carousel, no icon library imported wholesale. Budget: ≤120KB JS on `/` after compression; CLS 0; LCP <2.0s on 4G mobile.

## 27. Analytics and success metrics

Privacy-respecting analytics, no third-party ad pixels. Events: `partner_cta_click` (with source section), `join_cta_click`, `project_view`, `journey_complete` (last milestone reached), `contact_open`.

Targets for the first 90 days: sponsor CTA click-through ≥4% of sessions · median scroll depth on `/` ≥60% · `/projects` reached by ≥30% of homepage sessions · mobile bounce <60%.

## 28. Technical architecture

Next.js (App Router) · TypeScript strict · Tailwind with tokens from `DESIGN.md` as the single source · CSS/Intersection Observer motion, optional Framer Motion scoped to `/journey` · self-hosted fonts · ESLint + Prettier.

```
app/            layout.tsx, page.tsx, projects/, team/, journey/, sitemap.ts, robots.ts, opengraph-image.tsx
components/     layout/ sections/ ui/
content/        projects.ts, team.ts, milestones.ts, achievements.ts, domains.ts, navigation.ts, social.ts
lib/            types.ts, seo.ts, motion.ts
styles/         tokens.css
public/         brand/ projects/ team/
```

Typed content models — no content in JSX:

```ts
type ProjectStatus = 'completed' | 'in-development';

interface Project {
  slug: string;
  title: string;
  programme?: 'NIDAR 2026' | 'NIDAR 2027';
  status: ProjectStatus;
  summary: string;          // what it is
  problem: string;          // what it addresses
  significance: string;     // why it matters
  capabilities: DomainId[]; // must exist in domains.ts
  year?: number;
  media?: MediaAsset;
}

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  division: DivisionId;
  tier: 'leadership' | 'core' | 'faculty' | 'alumni';
  responsibilities: string[];
  skills: string[];
  projects: Project['slug'][];
  links?: { label: string; href: string }[];
  photo?: MediaAsset;
}

interface Milestone {
  year: number;
  title: string;
  description: string;
  projectSlug?: Project['slug'];
  kind: 'founding' | 'competition' | 'project' | 'achievement' | 'forward';
}
```

`TeamMember` doubles as the roster collection form — one field per line, filled by each member, no inference.

## 29. Risks and open questions

| ID | Risk | Impact | Mitigation |
|---|---|---|---|
| R1 | `DESIGN.md` contains no design system | Blocks Phase 3 | §21 |
| R2 | Zero team data (G1) | `/team` cannot ship; recruiter journey broken | Roster collection using the §28 schema; page gated |
| R3 | No contact channel (G2) | Every CTA is a dead end | Interim `mailto:` with preset subject; blocks launch |
| R4 | No brand assets (G6) | No logo, favicon, OG image, project imagery | Wordmark-only identity as interim; photograph the hardware |
| R5 | Promotional source register | Copy reads generic; sponsors discount it | §17 rewrite rules; every abstraction paired with a fact |
| R6 | F10 competition unnamed; NIDAR 2026 tense ambiguous (G8) | A verifiable-looking claim that cannot be verified | Confirm before launch or state without the placement |
| R7 | BWH status unknown (G9) | Overclaiming a product that may be a concept | No external link, no "available" language, until confirmed |
| R8 | No repository supplied | Phase 0 audit and Phase 4 verification not executable | Run implementation inside the repo with the build agent |

**Open questions for the team**
1. Does a real `DESIGN.md` exist, or is the visual system to be authored?
2. Which repository, and does it already contain a framework and brand assets?
3. Which competition produced the 11th place, and is NIDAR 2026 complete?
4. Is BWH live, private, or a concept?
5. What is the public contact address, and who owns replies?
6. Which social accounts are official?
7. What is the sponsorship ask — funding a build cycle, components, equipment, or all three?

## 30. Acceptance criteria

**Content**
- [ ] Every on-page claim maps to F1–F14 or to newly supplied, verified content.
- [ ] No invented person, statistic, sponsor, testimonial, partnership, or date.
- [ ] No placeholder text in production; no section shipped empty.

**Design**
- [ ] Tokens derived from a single `DESIGN.md`; no ad-hoc hex, spacing, or radius in components.
- [ ] Accent under 5% of surface area on every route.

**Engineering**
- [ ] `lint`, `tsc --noEmit`, and production build pass with zero errors and zero warnings.
- [ ] No console errors or hydration warnings on any route.
- [ ] Content lives in `content/`, typed; no duplicated data; no dead components or unused imports.

**Responsive**
- [ ] No horizontal overflow at 320–1440px+.
- [ ] All touch targets ≥44px.

**Accessibility**
- [ ] Full keyboard traversal of every route including team filter and mobile nav.
- [ ] Visible focus on every interactive element.
- [ ] Reduced-motion honoured; all content readable with motion disabled.
- [ ] Automated audit passes with zero critical violations.

**Performance**
- [ ] Lighthouse mobile ≥90 performance, ≥95 accessibility, ≥95 best practices, ≥95 SEO.
- [ ] CLS 0; LCP <2.0s on simulated 4G.

**SEO**
- [ ] Unique title, description, and OG metadata per route; sitemap and robots present.

**Launch gates**
- [ ] G2 resolved — a working contact route exists.
- [ ] G1 resolved *or* `/team` unlinked and unbuilt.
- [ ] G8 resolved or the unverifiable claim removed.
