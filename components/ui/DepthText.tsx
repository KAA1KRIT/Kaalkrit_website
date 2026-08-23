"use client";

import { useEffect, useMemo, useRef, type CSSProperties } from "react";

export interface DepthTextProps {
  text: string;
  layers?: number;
  depth?: number;
  faceColor?: string;
  depthColor?: string;
  tilt?: number;
  pointerTracking?: boolean;
  smoothing?: number;
  perspective?: number;
  autoOrbit?: boolean;
  orbitSpeed?: number;
  fontSize?: string;
  fontWeight?: number | string;
  shadow?: boolean;
  className?: string;
  decorative?: boolean;
}

const MAX_LAYERS = 40;
const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/**
 * Adapted from React Bits DepthText: rendered as a decorative layer while a
 * neighbouring semantic heading carries the accessible text.
 */
export function DepthText({
  text,
  layers = 24,
  depth = 1.8,
  faceColor = "var(--foreground)",
  depthColor = "var(--primary)",
  tilt = 4,
  pointerTracking = true,
  smoothing = 0.14,
  perspective = 900,
  autoOrbit = false,
  orbitSpeed = 0.2,
  fontSize = "clamp(3rem, 12vw, 8rem)",
  fontWeight = 700,
  shadow = true,
  className = "",
  decorative = true,
}: DepthTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const stageRef = useRef<HTMLSpanElement>(null);
  const safeLayers = clamp(Math.round(layers), 2, MAX_LAYERS);
  const safeDepth = clamp(depth, 0, 8);
  const safeTilt = clamp(tilt, 0, 10);
  const safeSmoothing = clamp(smoothing, 0.04, 0.35);
  const safeOrbitSpeed = clamp(orbitSpeed, 0, 1);
  const baseRotation = useMemo(
    () => ({ x: -safeTilt * 0.26, y: safeTilt * 0.3 }),
    [safeTilt],
  );

  const depthLayers = useMemo(
    () =>
      Array.from({ length: safeLayers }, (_, offset) => {
        const index = safeLayers - offset;
        const progress = index / safeLayers;
        return {
          index,
          color: `color-mix(in srgb, ${faceColor} ${Math.round((1 - progress * progress) * 70 + 6)}%, ${depthColor})`,
          transform: `translateZ(${-index * safeDepth}px)`,
        };
      }),
    [depthColor, faceColor, safeDepth, safeLayers],
  );

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const canTrack = pointerTracking && finePointer && !reducedMotion;
    const current = { ...baseRotation };
    const target = { ...baseRotation };
    let frame = 0;
    let active = false;
    let orbitStartedAt = 0;

    const apply = () => {
      stage.style.transform = `rotateX(${current.x.toFixed(3)}deg) rotateY(${current.y.toFixed(3)}deg)`;
    };
    const tick = (time: number) => {
      if (autoOrbit && !active) {
        const orbit =
          (time - orbitStartedAt) * 0.001 * safeOrbitSpeed * Math.PI * 2;
        target.x = baseRotation.x + Math.sin(orbit) * safeTilt * 0.18;
        target.y = baseRotation.y + Math.cos(orbit * 0.85) * safeTilt * 0.18;
      }
      current.x += (target.x - current.x) * safeSmoothing;
      current.y += (target.y - current.y) * safeSmoothing;
      apply();
      const settled =
        Math.abs(target.x - current.x) < 0.01 &&
        Math.abs(target.y - current.y) < 0.01;
      frame = autoOrbit || active || !settled ? requestAnimationFrame(tick) : 0;
    };
    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const move = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      active = true;
      target.x =
        baseRotation.x -
        clamp(
          (event.clientY - rect.top - rect.height / 2) / (rect.height * 0.8),
          -1,
          1,
        ) *
          safeTilt;
      target.y =
        baseRotation.y +
        clamp(
          (event.clientX - rect.left - rect.width / 2) / (rect.width * 0.8),
          -1,
          1,
        ) *
          safeTilt;
      start();
    };
    const leave = () => {
      active = false;
      target.x = baseRotation.x;
      target.y = baseRotation.y;
      start();
    };

    apply();
    if (reducedMotion) return;
    orbitStartedAt = performance.now();
    if (canTrack) {
      root.addEventListener("pointermove", move);
      root.addEventListener("pointerleave", leave);
    }
    if (autoOrbit) start();
    return () => {
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [
    autoOrbit,
    baseRotation,
    pointerTracking,
    safeOrbitSpeed,
    safeSmoothing,
    safeTilt,
  ]);

  const style = {
    "--depth-text-perspective": `${clamp(perspective, 300, 1600)}px`,
    "--depth-text-font-size": fontSize,
    "--depth-text-font-weight": fontWeight,
    "--depth-text-face-color": faceColor,
    "--depth-text-shadow": shadow
      ? `0 18px 30px color-mix(in srgb, ${depthColor} 28%, transparent)`
      : "none",
  } as CSSProperties;

  return (
    <span
      ref={rootRef}
      aria-hidden={decorative}
      className={`depth-text ${className}`.trim()}
      style={style}
    >
      <span ref={stageRef} className="depth-text__stage">
        {depthLayers.map((layer) => (
          <span
            key={layer.index}
            className="depth-text__layer"
            style={{ color: layer.color, transform: layer.transform }}
          >
            {text}
          </span>
        ))}
        <span className="depth-text__face">{text}</span>
      </span>
    </span>
  );
}
