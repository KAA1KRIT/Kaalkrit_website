"use client";

import { Mesh, Program, Renderer, Triangle } from "ogl";
import { useEffect, useRef } from "react";

type Detail = "low" | "medium" | "high";

type GradientWavesProps = {
  horizonColor: string;
  waveColor: string;
  crestColor: string;
  speed?: number;
  detail?: Detail;
  className?: string;
};

const vertex = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

// React Bits GradientWaves shader, adapted only to pause safely on reduced-motion,
// low-power, hidden, and off-screen states.
const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uSteps;
uniform vec3 uHorizonColor;
uniform vec3 uWaveColor;
uniform vec3 uCrestColor;
out vec4 fragColor;

float field(vec3 p, float time) {
  float waveA = sin(p.x * .12 + time) * 2.1;
  float waveB = sin(p.y * .18 - time * .73) * 1.55;
  return p.z - (waveA + waveB + 4.9);
}

float march(vec3 ro, vec3 rd, float time) {
  float distance = 0.;
  for (int i = 0; i < 110; i++) {
    if (float(i) >= uSteps) break;
    float current = field(ro + rd * distance, time);
    if (abs(current) < .08) break;
    distance += current * .72;
    if (distance > 120.) return 120.;
  }
  return distance;
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy - .5;
  uv.x *= iResolution.x / iResolution.y;
  vec3 ro = vec3(0., 0., 28.);
  vec3 rd = normalize(vec3(uv.x, -uv.y * .9, -1.1));
  float time = iTime * uSpeed;
  float distance = march(ro, rd, time);
  float fog = clamp(15. / max(distance, .001), 0., 1.);
  vec3 point = ro + rd * distance;
  float crest = clamp(point.z * .07 + .45, 0., 1.);
  vec3 body = mix(uWaveColor, uCrestColor, crest);
  vec3 color = mix(uHorizonColor, body, fog);
  fragColor = vec4(color * fog, fog * .92);
}
`;

function toRgb(hex: string): [number, number, number] {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!match) return [1, 1, 1];
  return [
    Number.parseInt(match[1]!, 16) / 255,
    Number.parseInt(match[2]!, 16) / 255,
    Number.parseInt(match[3]!, 16) / 255,
  ];
}

function steps(detail: Detail) {
  return detail === "low" ? 36 : detail === "high" ? 92 : 64;
}

export default function GradientWaves({
  horizonColor,
  waveColor,
  crestColor,
  speed = 0.32,
  detail = "medium",
  className = "",
}: GradientWavesProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const lowPower =
      window.matchMedia("(max-width: 767px), (pointer: coarse)").matches ||
      (navigator.hardwareConcurrency !== undefined &&
        navigator.hardwareConcurrency <= 4);
    if (reduced || lowPower) {
      root.dataset.fallback = "true";
      return () => delete root.dataset.fallback;
    }

    let frame = 0;
    let visible = true;
    let pageVisible = !document.hidden;
    try {
      const renderer = new Renderer({
        webgl: 2,
        alpha: true,
        premultipliedAlpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 1.5),
      });
      const gl = renderer.gl;
      const canvas = gl.canvas;
      canvas.className = "gradient-waves__canvas";
      root.appendChild(canvas);
      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          iResolution: { value: new Float32Array([1, 1]) },
          iTime: { value: 0 },
          uSpeed: { value: speed },
          uSteps: { value: steps(detail) },
          uHorizonColor: { value: new Float32Array(toRgb(horizonColor)) },
          uWaveColor: { value: new Float32Array(toRgb(waveColor)) },
          uCrestColor: { value: new Float32Array(toRgb(crestColor)) },
        },
      });
      const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
      const resize = () => {
        const bounds = root.getBoundingClientRect();
        renderer.setSize(Math.max(1, bounds.width), Math.max(1, bounds.height));
        const resolution = program.uniforms.iResolution.value as Float32Array;
        resolution[0] = gl.drawingBufferWidth;
        resolution[1] = gl.drawingBufferHeight;
      };
      const render = (time: number) => {
        program.uniforms.iTime.value = time * 0.001;
        renderer.render({ scene: mesh });
        frame = requestAnimationFrame(render);
      };
      const start = () => {
        if (visible && pageVisible && !frame)
          frame = requestAnimationFrame(render);
      };
      const stop = () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
      };
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry?.isIntersecting ?? false;
        if (visible) start();
        else stop();
      });
      const resizeObserver = new ResizeObserver(resize);
      const visibilityChange = () => {
        pageVisible = !document.hidden;
        if (pageVisible) start();
        else stop();
      };
      resizeObserver.observe(root);
      observer.observe(root);
      document.addEventListener("visibilitychange", visibilityChange);
      resize();
      start();
      return () => {
        stop();
        observer.disconnect();
        resizeObserver.disconnect();
        document.removeEventListener("visibilitychange", visibilityChange);
        canvas.remove();
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    } catch {
      root.dataset.fallback = "true";
      return () => delete root.dataset.fallback;
    }
  }, [crestColor, detail, horizonColor, speed, waveColor]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={`gradient-waves ${className}`.trim()}
    />
  );
}
