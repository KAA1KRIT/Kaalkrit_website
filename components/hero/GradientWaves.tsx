"use client";

import { Mesh, Program, Renderer, Triangle } from "ogl";
import { useEffect, useRef } from "react";

type GradientWavesProps = {
  horizonColor: string;
  waveColor: string;
  crestColor: string;
  speed?: number;
  className?: string;
};

const vertex = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

// React Bits GradientWaves, adapted to KAALKRIT's established dark engineering
// palette and to pause safely on reduced-motion, low-power, hidden, and
// off-screen states.
const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform vec3 uHorizonColor;
uniform vec3 uWaveColor;
uniform vec3 uCrestColor;
out vec4 fragColor;

float waveLine(float x, float time) {
  return .48
    + sin(x * 4.3 + time) * .07
    + sin(x * 9.4 - time * .68) * .022
    + sin(x * 17.0 + time * .42) * .008;
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  float aspect = iResolution.x / iResolution.y;
  float x = (uv.x - .5) * aspect;
  float time = iTime * uSpeed;
  float horizon = waveLine(x, time);
  float depth = smoothstep(horizon - .03, horizon + .52, uv.y);
  float crest = 1. - smoothstep(0., .035, abs(uv.y - horizon));
  float ripple = sin((uv.y - horizon) * 54. - time * 1.8) * .5 + .5;
  float rippleMask = smoothstep(horizon + .01, horizon + .27, uv.y);
  vec3 body = mix(uWaveColor, uHorizonColor, depth * .52);
  vec3 color = mix(uHorizonColor, body, smoothstep(horizon - .16, horizon + .22, uv.y));
  color = mix(color, uCrestColor, crest * .42 + ripple * rippleMask * .06);
  float vignette = smoothstep(1.18, .22, length(uv - vec2(.58, .48)));
  fragColor = vec4(color * mix(.72, 1., vignette), .98);
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

export default function GradientWaves({
  horizonColor,
  waveColor,
  crestColor,
  speed = 0.32,
  className = "",
}: GradientWavesProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    delete root.dataset.rendered;
    delete root.dataset.fallback;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const lowPower =
      window.matchMedia("(max-width: 767px) and (pointer: coarse)").matches ||
      (navigator.hardwareConcurrency !== undefined &&
        navigator.hardwareConcurrency <= 2);
    if (reduced || lowPower) {
      root.dataset.fallback = "true";
      return () => delete root.dataset.fallback;
    }

    let frame = 0;
    let hasRendered = false;
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
        if (!hasRendered) {
          root.dataset.rendered = "true";
          hasRendered = true;
        }
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
        delete root.dataset.rendered;
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    } catch {
      root.dataset.fallback = "true";
      return () => {
        delete root.dataset.fallback;
        delete root.dataset.rendered;
      };
    }
  }, [crestColor, horizonColor, speed, waveColor]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={`gradient-waves ${className}`.trim()}
    />
  );
}
