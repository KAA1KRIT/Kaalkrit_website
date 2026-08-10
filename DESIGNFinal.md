# KAALKRIT — Design System

> **STATUS: PROPOSED.** The `DESIGN.md` supplied with the brief contained the build instructions, not a design system — no colours, type, spacing, or motion values were defined. This file fills that gap so implementation can proceed. **If a real design system exists, replace this file and re-derive tokens from it.**

---

## 1. Direction

The brief fixes the register: dark, refined, minimal, typography-led, high contrast, technical, premium. That leaves the *character* free, and character is where a site stops looking generated.

The character here comes from the subject's own world: **ground-station instrumentation.** Telemetry readouts, mission logs, altitude scales, PCB silkscreen. Not "futuristic" — futuristic reads as costume. Instrumentation reads as competence, which is exactly the impression a sponsor needs in ten seconds.

Two consequences run through everything below:

- **Amber, not acid.** The accent is instrument-panel amber, drawn from ground-station and CRT readouts. Deliberately not the acid-green or vermilion that near-black sites default to.
- **The scale rule is the signature.** One hairline, ticked like a measuring scale, carries the whole page: it divides sections on `/`, becomes the timeline spine on `/journey`, and settles into place under the hero headline on load like an artificial horizon. It is the only element permitted to be memorable. Everything else stays quiet.

Numbering (`01 / 02 / 03`) appears **only** where order is real — the journey timeline and the NIDAR programme sequence. Not on domains, not on sections. Decorative numbering is the tell of a template.

---

## 2. Colour

Near-black with a cool cast, because a pure neutral black reads as a default and a warm black reads as editorial rather than technical.

```css
:root {
  /* Base */
  --k-void:        #07090B;  /* page background */
  --k-surface:     #0D1013;  /* raised panel, nav on scroll */
  --k-surface-2:   #141A1F;  /* hover / pressed surface */

  /* Line */
  --k-line:        rgba(255,255,255,0.09);  /* hairline divider, default border */
  --k-line-strong: rgba(255,255,255,0.18);  /* active / hover border */

  /* Text */
  --k-text:        #F2F4F5;  /* headings, body — 17.4:1 on --k-void */
  --k-text-muted:  #A3ADB4;  /* supporting copy — 7.9:1 */
  --k-text-faint:  #6C777E;  /* metadata, labels — 4.6:1, never body */

  /* Accent — instrument amber. Under 5% of surface area, always. */
  --k-signal:      #E9A63B;  /* 9.1:1 on --k-void */
  --k-signal-dim:  rgba(233,166,59,0.14);  /* fills, focus halo */

  /* Functional only — never decorative */
  --k-live:        #4FD08A;  /* "in development" status */
  --k-alert:       #E5544B;  /* form errors */
}
```

**Rules**
- Amber is reserved for: primary button fill, active nav state, focus ring, timeline progress, and the ticks on the scale rule. Nothing else.
- Status colours never carry meaning alone — always paired with text.
- No gradients as decoration. One exception: a single vertical `--k-void → --k-surface` wash behind the hero, ≤8% delta, invisible as a gradient and present only as depth.
- No glow, no shadow spread, no glassmorphism. Elevation is expressed by hairline and spacing, not blur.

---

## 3. Typography

Three roles, two families, chosen to avoid the Inter/Space-Grotesk default pairing.

| Role | Family | Use |
|---|---|---|
| Display | **Archivo** (variable, width + weight axes) | H1–H3. Width axis pushed to ~112 on the hero only — engineered, drawn-to-spec feel. |
| Body | **IBM Plex Sans** | All running copy, buttons, nav. Engineering pedigree, quiet, high legibility at small sizes. |
| Utility | **IBM Plex Mono** | Eyebrows, metadata, years, project codes, timeline labels, table headers. Uppercase, tracked +0.08em. |

Self-hosted, variable, subset to `latin`. Preload Archivo only.

```css
:root {
  --k-font-display: 'Archivo Variable', system-ui, sans-serif;
  --k-font-body:    'IBM Plex Sans', system-ui, sans-serif;
  --k-font-mono:    'IBM Plex Mono', ui-monospace, monospace;

  /* Fluid scale — 320px → 1440px */
  --k-t-hero:  clamp(2.75rem, 1.6rem + 5.8vw, 5.75rem);   /* H1 */
  --k-t-h2:    clamp(2rem,   1.4rem + 3vw,   3.25rem);
  --k-t-h3:    clamp(1.375rem, 1.15rem + 1.1vw, 1.875rem);
  --k-t-lede:  clamp(1.0625rem, 1rem + 0.5vw, 1.3125rem);
  --k-t-body:  1rem;
  --k-t-small: 0.875rem;
  --k-t-meta:  0.75rem;
}
```

**Rules**
- Display: weight 600, `letter-spacing: -0.025em`, `line-height: 0.98` at hero size, 1.08 elsewhere.
- Body: weight 400, `line-height: 1.65`, measure 60–75ch. Muted colour for supporting copy.
- Utility: uppercase, weight 500, `letter-spacing: 0.08em`, `--k-text-faint`.
- One display element per viewport. Two competing headlines is the failure mode this system exists to prevent.
- Hero headline ≤12 words. Never let display type exceed 5.75rem — oversized type that harms reading is explicitly out of scope.

---

## 4. Spacing and layout

8px base, 4px sub-grid.

```css
:root {
  --k-1: 4px;   --k-2: 8px;   --k-3: 12px;  --k-4: 16px;
  --k-5: 24px;  --k-6: 32px;  --k-7: 48px;  --k-8: 64px;
  --k-9: 96px;  --k-10: 128px; --k-11: 160px;

  --k-container: 1280px;
  --k-container-wide: 1440px;
  --k-gutter: clamp(20px, 5vw, 64px);
  --k-section-y: clamp(80px, 10vw, 160px);
}
```

12-column grid on desktop, 6 on tablet, 4 on mobile; 24px column gap. Content column for running prose spans 7 of 12 and sits on column 1 — asymmetry, not centring, because centred blocks on a dark page read as a landing-page template.

Breakpoints: `320 · 375 · 430 · 768 · 1024 · 1280 · 1440`.

---

## 5. Borders, radius, elevation

```css
:root {
  --k-radius: 2px;         /* everything */
  --k-radius-pill: 999px;  /* filter chips only */
  --k-border: 1px solid var(--k-line);
}
```

Radius never exceeds 2px. Rounded cards are the club-website tell; hairline-bounded panels are the lab tell. No box-shadows anywhere — depth comes from `--k-surface` steps and spacing.

**The scale rule** (signature element):

```css
.k-rule {
  height: 1px;
  background: var(--k-line);
  position: relative;
}
.k-rule::before {                 /* tick marks, mono-labelled where meaningful */
  content: '';
  position: absolute; inset: -4px 0 auto 0;
  height: 9px;
  background-image: linear-gradient(90deg, var(--k-line-strong) 1px, transparent 1px);
  background-size: 48px 100%;
}
.k-rule[data-active]::after {     /* amber progress, journey timeline only */
  content: '';
  position: absolute; left: 0; top: 0; height: 1px;
  width: var(--k-progress, 0%);
  background: var(--k-signal);
}
```

---

## 6. Components

**Buttons** — 44px min height, 20px horizontal padding, `--k-radius`, body font 500.
- *Primary:* `--k-signal` fill, `--k-void` text. One per viewport.
- *Secondary:* transparent, `--k-line-strong` border, `--k-text`; border goes `--k-signal` on hover.
- *Ghost:* text + trailing arrow, 1px underline on hover.

**Links** — `--k-text` with `text-underline-offset: 4px`, underline colour `--k-line-strong` → `--k-signal` on hover.

**Focus (non-negotiable)** — `outline: 2px solid var(--k-signal); outline-offset: 2px;` on every interactive element. `outline: none` never appears in this codebase without a replacement ring.

**Section header** — mono eyebrow · display heading · muted lede at `--k-t-lede`, max 60ch. Preceded by a `.k-rule`.

**Navigation** — transparent over hero; on scroll, `--k-surface` at 92% with `backdrop-filter: blur(8px)` and a bottom hairline. Active route marked with an amber underline, not a colour swap.

**Project feature** — alternating asymmetric two-column: media 7 cols / copy 5 cols, reversed on alternate items. No card wrapper. Mono metadata line above the title: year · status · programme.

**Timeline** — centred spine on desktop, 24px left rail on mobile. Year in mono at 2.5rem `--k-text-faint`, milestone title in display, description muted. Amber node on the active milestone.

**Team member** — portrait at 4:5, hairline-bounded, greyscale at 88% opacity, full colour on hover/focus. Name in display, role in mono. Expandable detail panel, not a modal.

**Footer** — heavy top hairline, 4 columns → 1. Wordmark, nav, contact, partnership and recruitment CTAs, copyright in mono at `--k-t-meta`.

---

## 7. Motion

```css
:root {
  --k-dur-fast: 120ms;
  --k-dur: 180ms;
  --k-dur-slow: 260ms;
  --k-ease: cubic-bezier(0.2, 0, 0, 1);
}
```

- Reveals: `opacity 0→1` + `translateY(12px→0)` over `--k-dur-slow`, once, at 20% intersection. Stagger 60ms, maximum 4 children.
- Hover/focus: `--k-dur-fast`, colour and border only.
- Page-load sequence (once, on `/` only): headline → sub-copy → scale rule draws left-to-right → actions. Total ≤700ms.
- Scroll-linked: timeline progress only.
- Forbidden: parallax on text, looping ambient motion, animation on every element, scroll hijacking, loaders longer than 300ms.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 80ms !important;
    scroll-behavior: auto !important;
  }
  /* transforms and scroll-linked effects disabled; all content visible immediately */
}
```

---

## 8. Imagery

Photograph the actual hardware — airframes, boards, workbench, test flights. No stock, no rendered "AI drone" imagery, no gradient meshes.

Treatment: 88% opacity over `--k-void`, slight desaturation, 1px `--k-line` bound, `--k-radius`. Aspect ratios 16:9 (project), 4:5 (portrait), 3:2 (editorial). Every image carries descriptive alt text; decorative images carry `alt=""`. AVIF/WebP, explicit dimensions, lazy below the fold.

**Until brand assets exist:** wordmark-only identity — `KAALKRIT` set in Archivo at width 112, weight 700, `letter-spacing: 0.02em`, with a single amber tick under the K. No invented logo mark.

---

## 9. Do not

Glassmorphism · glow and neon · rounded cards above 2px · gradient decoration · logo walls · icon-per-feature grids · centred everything · full-width carousels · counter animations on numbers · more than one accent colour · display type above 5.75rem · body text below 14px · colour-only status · dead CTAs · any component that exists only to fill space.
