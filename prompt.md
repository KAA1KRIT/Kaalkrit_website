You are a Principal Product Designer, Creative Director, Brand Strategist, UX Architect, Design Systems Lead, Senior Frontend Engineer, and Production-Readiness Reviewer.

Your task is to design and build the official KAALKRIT website as a premium, sponsor-focused engineering and innovation platform.

Do not begin by immediately writing UI code. First understand the brand, content, audience, and design system completely. Then create the product specification and UX direction. Only after completing the specification should you implement the website.

==================================================
SOURCE DOCUMENTS
================

You have been provided:

1. `documentation.md`
2. `DESIGN.md`

Read both files completely before making any design or implementation decision.

`documentation.md` is the single source of truth for:

* KAALKRIT’s mission
* Vision
* Brand story
* Projects
* Team
* Achievements
* Engineering capabilities
* Future roadmap
* Sponsorship value
* Recruitment and collaboration opportunities

`DESIGN.md` is the single source of truth for:

* Colours
* Typography
* Spacing
* Layout principles
* Components
* Motion
* Visual hierarchy
* Responsive behaviour
* Brand expression

Do not invent facts, achievements, projects, statistics, team members, sponsors, testimonials, partnerships, or technical capabilities.

If content is missing, use a clearly marked placeholder or omit the section. Never present invented information as real.

==================================================
CORE WEBSITE OBJECTIVE
======================

Create a website that communicates within the first few seconds that KAALKRIT is:

* Serious about engineering
* Research-driven
* Technically capable
* Ambitious
* Professional
* Future-oriented
* Worth supporting, collaborating with, or joining

The website should persuade:

* Sponsors
* Industry partners
* Researchers
* Judges
* Recruiters
* Prospective students
* Future collaborators

The website must position KAALKRIT as a deep-tech student innovation lab, not merely as a student club.

The emotional progression should be:

Curiosity → Trust → Capability → Innovation → Scale → Vision → Action

The overall tone must be:

* Professional
* Minimal
* Bold
* Premium
* Engineering-first
* Research-driven
* Confident
* Human
* Precise

Avoid making the website feel:

* Corporate
* Generic
* Flashy
* Overly futuristic
* Startup-bro styled
* Like a SaaS template
* Like a university club template
* Like a collection of unrelated cards

==================================================
MANDATORY EXECUTION PROCESS
===========================

Follow these phases in order.

Do not skip the specification phase.

PHASE 0 — Repository and Documentation Audit

Before implementation:

1. Inspect the repository structure.
2. Identify the existing framework, package manager, routes, components, assets, fonts, and configuration.
3. Read `documentation.md` completely.
4. Read `DESIGN.md` completely.
5. Inspect existing images, logos, icons, and brand assets.
6. Identify what can be reused safely.
7. Identify incomplete, conflicting, or missing information.
8. Preserve existing functionality unless it conflicts with the new website direction.

Create a short audit summary before coding.

PHASE 1 — Product and UX Specification

Create a complete specification document at:

`docs/KAALKRIT-WEBSITE-SPECIFICATION.md`

The document must contain:

1. Executive Summary
2. Brand Positioning
3. Mission and Vision Interpretation
4. Website Goals
5. Business and Communication Objectives
6. Target Audiences
7. User Personas
8. Sponsor Journey
9. Recruiter Journey
10. Student Recruitment Journey
11. Industry Collaboration Journey
12. Information Architecture
13. Page Hierarchy
14. Landing Page Narrative
15. Team Page Experience
16. Our Journey Page Experience
17. Content Strategy
18. Content Hierarchy
19. Call-to-Action Strategy
20. Component Inventory
21. Design System Interpretation
22. Responsive Strategy
23. Motion Strategy
24. Accessibility Strategy
25. SEO Strategy
26. Performance Strategy
27. Analytics and Success Metrics
28. Technical Architecture
29. Risks and Open Questions
30. Acceptance Criteria

The specification must be based strictly on the two source documents.

Before writing code, show the completed specification in the implementation summary or commit it to the repository. Then continue with implementation unless a critical source document is missing.

PHASE 2 — Wireframes and Layout Planning

Before building detailed visual components, define the layout structure for:

* Desktop
* Tablet
* Mobile

Describe the hierarchy and purpose of every major section.

Use layout planning to answer:

* What does the visitor see first?
* What information builds trust?
* Where are projects introduced?
* Where is technical capability demonstrated?
* Where is the sponsor value proposition explained?
* Where does recruitment appear?
* What is the primary CTA?
* How does the site guide users between pages?

Avoid designing every section as an isolated card.

PHASE 3 — Design System Implementation

Translate `DESIGN.md` into reusable design tokens and components.

Create or update:

* Colour tokens
* Typography scale
* Font configuration
* Spacing system
* Border and radius rules
* Shadows and gradients
* Container widths
* Breakpoints
* Focus states
* Button variants
* Link styles
* Section heading styles
* Navigation styles
* Timeline styles
* Project presentation patterns
* Team member presentation patterns
* Footer patterns

Do not introduce a new visual language that conflicts with `DESIGN.md`.

Use visual restraint. Typography, spacing, composition, contrast, and intentional motion should carry the design.

PHASE 4 — Website Implementation

Build the website using the existing project architecture where possible.

Preferred technologies:

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion or the motion system already used by the repository
* Semantic HTML
* Reusable React components
* Optimized local assets
* Accessible interactions

Use a clean component structure. Avoid duplicated markup and page-specific hacks.

==================================================
REQUIRED WEBSITE STRUCTURE
==========================

Implement the following primary routes:

* `/` — Home
* `/team` — Team
* `/journey` — Our Journey

If the documentation contains enough verified content, you may also create:

* `/projects`
* `/sponsors`
* `/contact`
* `/about`

Do not create empty or artificially populated pages. If these areas are not sufficiently documented, represent them through well-designed sections on the homepage instead.

The main navigation should remain simple and intentional.

==================================================
HOME PAGE REQUIREMENTS
======================

The homepage should follow this narrative:

Hero → Mission → Credibility → Capability → Projects → Impact → Vision → Partnership → Action

Include the following where supported by the documentation:

1. Hero Section

The hero must communicate:

* What KAALKRIT is
* What it builds or explores
* Why it matters
* The primary next action

The hero should not be a generic slogan with no meaning.

Use a strong headline, concise supporting copy, and clear CTAs.

Possible CTA categories:

* Explore Our Work
* Meet the Team
* Partner With Us
* Join KAALKRIT

Use only wording supported by the documentation.

2. Mission Section

Explain why KAALKRIT exists and what problem or opportunity it is addressing.

3. Why KAALKRIT Section

Communicate the organisation’s distinct strengths, such as:

* Engineering depth
* Interdisciplinary collaboration
* Research mindset
* Practical experimentation
* Long-term ambition
* Student-led innovation

Only include claims supported by the source documents.

4. Engineering Domains

Present the documented technical domains or areas of work.

Do not turn this into a generic technology-logo wall.

5. Featured Projects

Showcase the most important documented projects.

For every project, communicate:

* What it is
* What problem it addresses
* Why it matters
* The relevant engineering or research capability

Use editorial layouts, visual storytelling, diagrams, timelines, or focused feature panels where appropriate.

6. Impact Statistics

Only use verified statistics from the documentation.

If no reliable statistics exist, replace this with qualitative proof points instead of fabricating numbers.

7. Achievements

Present documented achievements with appropriate hierarchy and context.

8. Future Vision

Explain where KAALKRIT is going and what it is trying to build over time.

9. Sponsor and Partner Section

Explain clearly:

* Why organisations should support KAALKRIT
* What kind of collaboration is possible
* What value sponsors or partners receive
* How support contributes to engineering, research, talent, or innovation

This section should feel specific and credible, not like a generic “Become a sponsor” banner.

10. Testimonials

Only include testimonials if real content exists.

Otherwise, create no fabricated testimonials. A clearly marked internal placeholder is acceptable during development.

11. Recruitment CTA

Give students a clear reason to join, contribute, learn, or build with KAALKRIT.

12. Footer

Include:

* Brand identity
* Navigation
* Relevant contact details from the documentation
* Social links if available
* Partnership CTA
* Recruitment CTA
* Copyright information

==================================================
TEAM PAGE REQUIREMENTS
======================

Do not create a boring repeated grid as the primary experience.

Create a premium editorial team experience containing, where documented:

* Leadership
* Core team
* Engineering divisions
* Faculty or mentors
* Responsibilities
* Skills
* Technical interests
* Achievements
* Social links

Use hierarchy to distinguish leadership, teams, and departments.

Possible presentation patterns include:

* Editorial profiles
* Department-based sections
* Interactive team filtering
* Scroll-based reveals
* Focused profile panels
* Expandable details
* Organisational storytelling

Do not invent biographies or skills.

All interactive elements must remain understandable and usable on mobile and with keyboard navigation.

==================================================
OUR JOURNEY PAGE REQUIREMENTS
=============================

The Journey page should tell the organisation’s story visually.

Include documented milestones such as:

* Founding or starting point
* First team
* NIDAR
* Organisational growth
* AirMOS
* Major projects
* Achievements
* Future direction

Use a clear timeline or narrative structure.

Possible interactions:

* Scroll progress
* Timeline activation
* Section reveals
* Carefully restrained parallax
* Milestone transitions
* Project cross-links

Motion must support comprehension. Avoid excessive animation that delays or distracts from the story.

==================================================
DESIGN REQUIREMENTS
===================

Follow `DESIGN.md` faithfully.

The visual system should feel:

* Dark
* Refined
* Minimal
* Typography-led
* High contrast
* Technical
* Premium
* Intentional

Use:

* Strong typography
* Generous whitespace
* Precise alignment
* Controlled colour accents
* Subtle gradients
* Editorial composition
* Carefully designed dividers
* Purposeful motion
* High-quality image treatment

Avoid:

* Excessive glassmorphism
* Excessive rounded cards
* Generic dashboard layouts
* Unnecessary gradients
* Random glowing effects
* Stock imagery that does not support the story
* Decorative animations with no purpose
* Oversized text that harms usability
* Dense walls of text
* Repeated identical sections
* Fake metrics
* Fake testimonials
* Unverified claims

Do not copy Linear, Vercel, Apple, SpaceX, OpenAI, Rivian, or Anduril. Use them only as quality references for clarity, restraint, and polish.

==================================================
MOTION REQUIREMENTS
===================

Use motion to communicate:

* Hierarchy
* Progress
* Spatial relationships
* Interaction feedback
* Page transitions
* Story progression

Motion must be:

* Subtle
* Fast enough to feel responsive
* Consistent
* Accessible
* Disabled or reduced when `prefers-reduced-motion` is enabled

Avoid:

* Constant movement
* Distracting parallax
* Long loading animations
* Animation on every element
* Motion that prevents reading
* Scroll hijacking

==================================================
RESPONSIVE REQUIREMENTS
=======================

Design mobile-first and verify at minimum:

* 320px
* 375px
* 430px
* 768px
* 1024px
* 1280px
* 1440px and above

The website must remain coherent across all sizes.

Check:

* Navigation
* Typography wrapping
* Hero composition
* Timeline usability
* Team presentation
* Project layouts
* Button sizes
* Touch targets
* Image cropping
* Section spacing
* Horizontal overflow
* Footer layout

Do not simply shrink the desktop version. Recompose sections where needed.

==================================================
ACCESSIBILITY REQUIREMENTS
==========================

Meet WCAG 2.2 AA expectations wherever possible.

Include:

* Semantic HTML
* Correct heading hierarchy
* Keyboard navigation
* Visible focus states
* Accessible buttons and links
* Descriptive image alt text
* Sufficient colour contrast
* Reduced-motion support
* No colour-only communication
* Accessible navigation landmarks
* Proper form labels
* Mobile-friendly touch targets
* Meaningful loading and error states

Interactive effects must never make content inaccessible.

==================================================
SEO REQUIREMENTS
================

Implement:

* Unique page titles
* Meta descriptions
* Open Graph metadata
* Twitter/X metadata where appropriate
* Canonical URLs if the deployment domain is known
* Semantic content structure
* Proper heading hierarchy
* Descriptive URLs
* Sitemap support
* Robots configuration
* Structured data where appropriate
* Optimized image metadata

Use accurate copy based on the documentation.

Do not use keyword stuffing.

==================================================
PERFORMANCE REQUIREMENTS
========================

Target:

* Lighthouse performance score of 90+
* Fast first load
* Minimal client-side JavaScript
* Optimized images
* Lazy loading below-the-fold assets
* No unnecessary dependencies
* No layout shift
* Responsive image sizing
* Efficient animation
* Good mobile performance

Prefer server-rendered or statically rendered content where appropriate.

Use client components only when interactivity requires them.

==================================================
ENGINEERING REQUIREMENTS
========================

Maintain:

* Strict TypeScript
* Reusable components
* Clean file organisation
* Clear naming
* No duplicated data
* No hardcoded repeated UI
* No unused imports
* No dead components
* No unnecessary state
* No console errors
* No broken links
* No hydration errors
* No placeholder content presented as final content

Keep content data separate from presentation where practical.

Use typed content models for:

* Projects
* Team members
* Milestones
* Achievements
* Navigation items
* Social links

Preserve existing project functionality unless it directly conflicts with the requested website.

==================================================
VERIFICATION PROCESS
====================

After implementation:

1. Run the project’s lint command.
2. Run TypeScript checks.
3. Run the production build.
4. Start the development server.
5. Verify every route.
6. Test all navigation links.
7. Test mobile and desktop layouts.
8. Test keyboard navigation.
9. Test reduced motion.
10. Inspect the browser console for errors.
11. Check for horizontal overflow.
12. Check images, fonts, and loading behaviour.
13. Run Lighthouse or an equivalent audit if available.
14. Fix all issues discovered.
15. Re-run verification after fixes.

If browser automation or Playwright is available, use it to inspect the rendered website at the required viewport sizes.

Do not declare the project complete while known build errors, broken routes, severe layout issues, accessibility failures, or console errors remain.

==================================================
FINAL DELIVERABLES
==================

At completion, provide:

1. A summary of the implemented experience.
2. The final route list.
3. The location of the product specification.
4. The main components created or updated.
5. The design decisions and their purpose.
6. The verification commands executed.
7. The verification results.
8. Any remaining limitations or content that requires real information.
9. A concise list of recommended next steps.

Most importantly, the final result must feel like KAALKRIT: a credible, ambitious, engineering-led innovation organisation with a clear story, strong visual identity, and a compelling reason for sponsors, collaborators, and students to engage.
