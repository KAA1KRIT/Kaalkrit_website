# KAALKRIT homepage visual system

The former procedural drone visual system was retired during the warm editorial redesign. The public homepage no longer loads a WebGL canvas, Three.js, React Three Fiber, mesh particles, hotspots, or a GSAP deployment timeline.

## Current signature interaction

`ScrollExpandHero` is the homepage's only scroll-linked visual. It uses native document scroll and CSS custom properties to expand a locally stored temporary editorial image from a rounded frame to the full viewport.

- Desktop uses a single sticky stage in the regular document flow.
- Mobile uses the stable image composition without pinning.
- Reduced-motion users receive the final static image state.
- Hero copy is normal HTML and remains available independently of the image.

The temporary image and its required replacement are documented in `public/images/ATTRIBUTIONS.md`.
