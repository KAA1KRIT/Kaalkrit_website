export type SiteBackgroundVariant = "hero" | "standard" | "technical" | "quiet";

/**
 * GradientWaves accepts concrete RGB values for its WebGL uniforms. These are
 * the existing KAALKRIT semantic token values from styles/tokens.css, kept in
 * one place so page presets never introduce a second palette.
 */
export const SITE_WAVE_COLORS = {
  horizon: "#05070c",
  wave: "#13264b",
  crest: "#377dff",
} as const;

export function backgroundVariantForPath(pathname: string | null) {
  if (!pathname || pathname === "/")
    return "hero" satisfies SiteBackgroundVariant;
  if (pathname.startsWith("/projects") || pathname === "/journey") {
    return "technical" satisfies SiteBackgroundVariant;
  }
  if (
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/accessibility"
  ) {
    return "quiet" satisfies SiteBackgroundVariant;
  }
  return "standard" satisfies SiteBackgroundVariant;
}
