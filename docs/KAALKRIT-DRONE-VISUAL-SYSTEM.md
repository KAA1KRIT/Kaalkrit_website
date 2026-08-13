# KAALKRIT homepage visual system

The former drone, particle, and MoltenMetal experiments are retired. The active homepage visual is the contained `GradientWaves` background inside `components/hero/`, with all factual hero copy rendered as normal HTML above it.

## Current signature interaction

`ScrollExpandHero` is the only landing-page scroll-linked owner. It observes native document scroll and applies clamped transforms only to local hero elements.

- Desktop uses one sticky stage in ordinary document flow.
- GradientWaves is a dynamically loaded, pointer-inert OGL background; it never owns document scrolling.
- `GradualBlur` is a local bottom boundary, not a fixed page overlay.
- Mobile and reduced-motion users receive a stable fallback with no hero pinning or WebGL requirement.
- Hero copy remains available without the visual effect.

See `ARCHITECTURE.md` for the current component boundaries and `CONTENT_REQUIRED.md` for future approved media.
