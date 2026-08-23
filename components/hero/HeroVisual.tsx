"use client";

import dynamic from "next/dynamic";

const GradientWaves = dynamic(() => import("./GradientWaves"), {
  ssr: false,
  loading: () => <div className="hero-visual__fallback" aria-hidden="true" />,
});

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <GradientWaves
        horizonColor="#05070c"
        waveColor="#13264b"
        crestColor="#377dff"
        speed={0.26}
        detail="medium"
      />
    </div>
  );
}
