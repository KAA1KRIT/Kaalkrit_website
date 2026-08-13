'use client';

import dynamic from 'next/dynamic';

import styles from './GradientWaves.module.css';

const GradientWaves = dynamic(() => import('./GradientWaves'), {
  ssr: false,
  loading: () => <div className={styles.container} aria-hidden="true" />,
});

export function GradientWavesLayer() {
  return (
    <GradientWaves
      horizonColor="#5227FF"
      waveColor="#FF9FFC"
      crestColor="#FFFFFF"
      speed={0.4}
      amplitude={2.5}
      waveScale={0.6}
      waveRatio={0.9}
      swell={35}
      turbulence={20}
      tilt={1.11}
      zoom={1}
      height={5.5}
      fogDepth={15}
      detail="medium"
      brightness={1}
      opacity={1}
      mouseInteraction
      parallaxStrength={0.5}
      grain
      grainIntensity={0.05}
      className={styles.container}
    />
  );
}
