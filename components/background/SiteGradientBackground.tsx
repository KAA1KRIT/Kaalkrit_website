"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { backgroundVariantForPath, SITE_WAVE_COLORS } from "./backgroundConfig";

const GradientWaves = dynamic(() => import("@/components/hero/GradientWaves"), {
  ssr: false,
});

/**
 * The one WebGL atmosphere for the active public page. The root layout keeps
 * this instance mounted through App Router navigation, while the route only
 * changes the restrained CSS treatment around it.
 */
export function SiteGradientBackground() {
  const pathname = usePathname();
  const variant = backgroundVariantForPath(pathname);

  return (
    <div
      aria-hidden="true"
      className={`site-gradient-background site-gradient-background--${variant}`}
      data-testid="site-gradient-background"
      data-variant={variant}
    >
      <GradientWaves
        crestColor={SITE_WAVE_COLORS.crest}
        horizonColor={SITE_WAVE_COLORS.horizon}
        speed={0.2}
        waveColor={SITE_WAVE_COLORS.wave}
      />
    </div>
  );
}
