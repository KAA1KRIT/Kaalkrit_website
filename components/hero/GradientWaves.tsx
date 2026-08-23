"use client";

import { Mesh, Program, Renderer, Triangle } from "ogl";
import { useEffect, useRef } from "react";

import styles from "./GradientWaves.module.css";

type Detail = "low" | "medium" | "high";

export type GradientWavesProps = {
  horizonColor?: string;
  waveColor?: string;
  crestColor?: string;
  speed?: number;
  amplitude?: number;
  waveScale?: number;
  waveRatio?: number;
  swell?: number;
  turbulence?: number;
  tilt?: number;
  zoom?: number;
  height?: number;
  fogDepth?: number;
  detail?: Detail;
  brightness?: number;
  opacity?: number;
  mouseInteraction?: boolean;
  parallaxStrength?: number;
  grain?: boolean;
  grainIntensity?: number;
  className?: string;
};

type WaveContext = {
  gl: Renderer["gl"];
  renderer: Renderer;
  program: Program;
  mesh: Mesh<Triangle, Program>;
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// React Bits GradientWaves JS-CSS registry shader, retained verbatim.
const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaveScale;
uniform float uWaveRatio;
uniform float uSwell;
uniform float uTurbulence;
uniform float uTilt;
uniform float uZoom;
uniform float uHeight;
uniform float uFogDepth;
uniform float uSteps;
uniform float uBrightness;
uniform float uOpacity;
uniform float uGrain;
uniform float uGrainIntensity;
uniform vec2 uMouse;
uniform float uParallax;
uniform bool uEnableMouse;
uniform vec3 uHorizonColor;
uniform vec3 uWaveColor;
uniform vec3 uCrestColor;
out vec4 fragColor;

const float MAX_DIST = 20000.0;

float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float plasma(vec3 r, vec2 freq, vec4 tc) {
  float mx = r.x + tc.x;
  mx += uSwell * sin((r.y + mx) / 20.0 + tc.y);
  float my = r.y - tc.z;
  my += uTurbulence * cos(r.x / 23.0 + tc.w);
  return r.z - (sin(mx * freq.x) * uAmplitude + sin(my * freq.y) * uAmplitude + uHeight);
}

float raymarch(vec3 pos, vec3 dir, vec2 freq, vec4 tc) {
  float dist = 0.0;
  for (int i = 0; i < 128; i++) {
    if (float(i) >= uSteps) break;
    float dscene = plasma(pos + dist * dir, freq, tc);
    if (abs(dscene) < 0.1) break;
    dist += 0.9 * dscene;
    if (!(abs(dist) < MAX_DIST)) return MAX_DIST;
  }
  return dist;
}

void main() {
  float T = iTime * uSpeed;
  vec2 freq = vec2(uWaveScale / 7.0, (uWaveScale * uWaveRatio) / 3.0);
  vec4 tc = vec4(T / 0.130, T / 0.810, T / 0.200, T / 0.710);
  float c, s;
  float vfov = (3.14159 / 2.3) / max(uZoom, 0.05);
  vec3 cam = vec3(0.0, 0.0, 30.0);
  vec2 uv = (gl_FragCoord.xy / iResolution.xy) - 0.5;
  uv.x *= iResolution.x / iResolution.y;
  uv.y *= -1.0;

  vec3 dir = vec3(0.0, 0.0, -1.0);
  float ulen = length(uv);
  float xrot = vfov * ulen;
  c = cos(xrot); s = sin(xrot);
  dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  vec2 nuv = ulen > 1e-5 ? uv / ulen : vec2(1.0, 0.0);
  c = nuv.x; s = nuv.y;
  dir = mat3(c, -s, 0.0, s, c, 0.0, 0.0, 0.0, 1.0) * dir;
  c = cos(uTilt); s = sin(uTilt);
  dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;

  if (uEnableMouse) {
    float yaw = (uMouse.x - 0.5) * uParallax * 0.4;
    float pitch = (uMouse.y - 0.5) * uParallax * 0.4;
    c = cos(yaw); s = sin(yaw);
    dir = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c) * dir;
    c = cos(pitch); s = sin(pitch);
    dir = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c) * dir;
  }

  float dist = raymarch(cam, dir, freq, tc);
  vec3 pos = cam + dist * dir;
  float t = clamp(uFogDepth / max(dist, 0.001), 0.0, 1.0);
  vec3 body = mix(uWaveColor, uCrestColor, clamp(pos.z * 0.08 + 0.5, 0.0, 1.0));
  vec3 col = mix(uHorizonColor, body, t);
  col *= uBrightness;
  col = clamp(col, 0.0, 1.0);
  float alpha = clamp(t, 0.0, 1.0) * uOpacity;
  if (uGrain > 0.5) {
    float g = hash21(gl_FragCoord.xy + mod(iTime, 64.0) * 11.0);
    alpha += (g - 0.5) * uGrainIntensity;
  }
  alpha = clamp(alpha, 0.0, 1.0);
  fragColor = vec4(col * alpha, alpha);
}
`;

const contexts = new WeakMap<HTMLDivElement, WaveContext>();

function hexToRgb(hex: string): [number, number, number] {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!match) return [1, 1, 1];
  return [
    Number.parseInt(match[1]!, 16) / 255,
    Number.parseInt(match[2]!, 16) / 255,
    Number.parseInt(match[3]!, 16) / 255,
  ];
}

function detailToSteps(detail: Detail) {
  if (detail === "low") return 40;
  if (detail === "high") return 110;
  return 70;
}

export default function GradientWaves({
  horizonColor = "#5227FF",
  waveColor = "#FF9FFC",
  crestColor = "#FFFFFF",
  speed = 0.4,
  amplitude = 2.5,
  waveScale = 0.6,
  waveRatio = 0.9,
  swell = 35,
  turbulence = 20,
  tilt = 1.11,
  zoom = 1,
  height = 5.5,
  fogDepth = 15,
  detail = "medium",
  brightness = 1,
  opacity = 1,
  mouseInteraction = true,
  parallaxStrength = 0.5,
  grain = true,
  grainIntensity = 0.05,
  className = "",
}: GradientWavesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseEnabledRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const compact = window.matchMedia(
      "(max-width: 767px), (pointer: coarse)",
    ).matches;
    const lowPower =
      compact ||
      (navigator.hardwareConcurrency !== undefined &&
        navigator.hardwareConcurrency <= 4);
    if (reducedMotion || lowPower) {
      container.dataset.staticFallback = "true";
      return () => {
        delete container.dataset.staticFallback;
      };
    }

    let animationFrame = 0;
    let visible = true;
    let pageVisible = !document.hidden;
    let resizeObserver: ResizeObserver | undefined;
    let intersectionObserver: IntersectionObserver | undefined;
    const canvasListeners: Array<[keyof HTMLElementEventMap, EventListener]> =
      [];

    try {
      const renderer = new Renderer({
        webgl: 2,
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, lowPower ? 1 : 1.75),
      });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      const canvas = gl.canvas;
      canvas.className = styles.canvas ?? "";
      container.appendChild(canvas);

      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new Float32Array([1, 1]) },
          uSpeed: { value: speed },
          uAmplitude: { value: amplitude },
          uWaveScale: { value: waveScale },
          uWaveRatio: { value: waveRatio },
          uSwell: { value: swell },
          uTurbulence: { value: turbulence },
          uTilt: { value: tilt },
          uZoom: { value: zoom },
          uHeight: { value: height },
          uFogDepth: { value: fogDepth },
          uSteps: { value: detailToSteps(lowPower ? "low" : detail) },
          uBrightness: { value: brightness },
          uOpacity: { value: opacity },
          uGrain: { value: grain && !lowPower ? 1 : 0 },
          uGrainIntensity: { value: grainIntensity },
          uMouse: { value: new Float32Array([0.5, 0.5]) },
          uParallax: { value: parallaxStrength },
          uEnableMouse: { value: false },
          uHorizonColor: { value: new Float32Array([1, 1, 1]) },
          uWaveColor: { value: new Float32Array([1, 1, 1]) },
          uCrestColor: { value: new Float32Array([1, 1, 1]) },
        },
      });
      const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
      const context = { gl, renderer, program, mesh };
      contexts.set(container, context);

      const setSize = () => {
        const rect = container.getBoundingClientRect();
        renderer.setSize(
          Math.max(1, Math.floor(rect.width)),
          Math.max(1, Math.floor(rect.height)),
        );
        const resolution = program.uniforms.iResolution.value as Float32Array;
        resolution[0] = gl.drawingBufferWidth;
        resolution[1] = gl.drawingBufferHeight;
        renderer.render({ scene: mesh });
      };
      resizeObserver = new ResizeObserver(setSize);
      resizeObserver.observe(container);
      setSize();

      const currentMouse: [number, number] = [0.5, 0.5];
      const targetMouse: [number, number] = [0.5, 0.5];
      const mouseEnabled =
        mouseInteraction &&
        !lowPower &&
        window.matchMedia("(pointer: fine)").matches;
      mouseEnabledRef.current = mouseEnabled;
      program.uniforms.uEnableMouse.value = mouseEnabled;
      const pointerMove = ((event: PointerEvent) => {
        const rect = canvas.getBoundingClientRect();
        targetMouse[0] = (event.clientX - rect.left) / rect.width;
        targetMouse[1] = 1 - (event.clientY - rect.top) / rect.height;
      }) as EventListener;
      const pointerLeave = (() => {
        targetMouse[0] = 0.5;
        targetMouse[1] = 0.5;
      }) as EventListener;
      canvas.addEventListener("pointermove", pointerMove);
      canvas.addEventListener("pointerleave", pointerLeave);
      canvasListeners.push(
        ["pointermove", pointerMove],
        ["pointerleave", pointerLeave],
      );

      const startedAt = performance.now();
      const render = (time: number) => {
        program.uniforms.iTime.value = (time - startedAt) / 1000;
        const useMouse = mouseEnabledRef.current;
        currentMouse[0] +=
          0.05 * ((useMouse ? targetMouse[0] : 0.5) - currentMouse[0]);
        currentMouse[1] +=
          0.05 * ((useMouse ? targetMouse[1] : 0.5) - currentMouse[1]);
        const mouse = program.uniforms.uMouse.value as Float32Array;
        mouse[0] = currentMouse[0];
        mouse[1] = currentMouse[1];
        renderer.render({ scene: mesh });
        animationFrame = window.requestAnimationFrame(render);
      };
      const start = () => {
        if (visible && pageVisible && !animationFrame)
          animationFrame = window.requestAnimationFrame(render);
      };
      const stop = () => {
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
          animationFrame = 0;
        }
      };
      intersectionObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (!entry) return;
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      });
      intersectionObserver.observe(container);
      const visibilityChange = () => {
        pageVisible = !document.hidden;
        if (pageVisible) start();
        else stop();
      };
      document.addEventListener("visibilitychange", visibilityChange);
      start();

      return () => {
        stop();
        resizeObserver?.disconnect();
        intersectionObserver?.disconnect();
        document.removeEventListener("visibilitychange", visibilityChange);
        canvasListeners.forEach(([event, listener]) =>
          canvas.removeEventListener(event, listener),
        );
        contexts.delete(container);
        canvas.remove();
      };
    } catch {
      container.dataset.staticFallback = "true";
      return () => {
        delete container.dataset.staticFallback;
      };
    }
  }, [
    amplitude,
    brightness,
    detail,
    fogDepth,
    grain,
    grainIntensity,
    height,
    mouseInteraction,
    opacity,
    parallaxStrength,
    speed,
    swell,
    tilt,
    turbulence,
    waveRatio,
    waveScale,
    zoom,
  ]);

  useEffect(() => {
    const container = containerRef.current;
    const context = container ? contexts.get(container) : undefined;
    if (!context) return;
    const uniforms = context.program.uniforms;
    const waveDetail = window.matchMedia(
      "(max-width: 767px), (pointer: coarse)",
    ).matches
      ? "low"
      : detail;
    uniforms.uSpeed.value = speed;
    uniforms.uAmplitude.value = amplitude;
    uniforms.uWaveScale.value = waveScale;
    uniforms.uWaveRatio.value = waveRatio;
    uniforms.uSwell.value = swell;
    uniforms.uTurbulence.value = turbulence;
    uniforms.uTilt.value = tilt;
    uniforms.uZoom.value = zoom;
    uniforms.uHeight.value = height;
    uniforms.uFogDepth.value = fogDepth;
    uniforms.uSteps.value = detailToSteps(waveDetail);
    uniforms.uBrightness.value = brightness;
    uniforms.uOpacity.value = opacity;
    uniforms.uGrain.value = grain && waveDetail !== "low" ? 1 : 0;
    uniforms.uGrainIntensity.value = grainIntensity;
    uniforms.uParallax.value = parallaxStrength;
    uniforms.uEnableMouse.value = mouseEnabledRef.current && mouseInteraction;
    const colors = [
      [uniforms.uHorizonColor.value as Float32Array, horizonColor],
      [uniforms.uWaveColor.value as Float32Array, waveColor],
      [uniforms.uCrestColor.value as Float32Array, crestColor],
    ] as const;
    colors.forEach(([target, hex]) => {
      const [red, green, blue] = hexToRgb(hex);
      target[0] = red;
      target[1] = green;
      target[2] = blue;
    });
  }, [
    amplitude,
    brightness,
    crestColor,
    detail,
    fogDepth,
    grain,
    grainIntensity,
    height,
    horizonColor,
    mouseInteraction,
    opacity,
    parallaxStrength,
    speed,
    swell,
    tilt,
    turbulence,
    waveColor,
    waveRatio,
    waveScale,
    zoom,
  ]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className}`.trim()}
    />
  );
}
