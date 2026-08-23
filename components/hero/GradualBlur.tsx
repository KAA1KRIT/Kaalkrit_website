"use client";

import {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";

import styles from "./GradualBlur.module.css";

type GradualBlurPosition = "top" | "bottom" | "left" | "right";
type GradualBlurCurve =
  "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
type GradualBlurAnimation = false | true | "scroll";

type ResponsiveDimensions = {
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  mobileWidth?: string;
  tabletWidth?: string;
  desktopWidth?: string;
};

export type GradualBlurProps = ResponsiveDimensions & {
  position?: GradualBlurPosition;
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  curve?: GradualBlurCurve;
  opacity?: number;
  animated?: GradualBlurAnimation;
  duration?: string;
  easing?: string;
  hoverIntensity?: number;
  target?: "parent" | "page";
  preset?: keyof typeof PRESETS;
  responsive?: boolean;
  zIndex?: number;
  onAnimationComplete?: () => void;
  className?: string;
  style?: CSSProperties;
};

type ResolvedConfig = Required<
  Omit<
    GradualBlurProps,
    keyof ResponsiveDimensions | "preset" | "onAnimationComplete" | "style"
  >
> &
  ResponsiveDimensions & {
    onAnimationComplete?: () => void;
    style: CSSProperties;
  };

const DEFAULT_CONFIG: ResolvedConfig = {
  position: "bottom",
  strength: 2,
  height: "6rem",
  width: "",
  divCount: 5,
  exponential: false,
  curve: "linear",
  opacity: 1,
  animated: false,
  duration: "0.3s",
  easing: "ease-out",
  hoverIntensity: 0,
  target: "parent",
  responsive: false,
  zIndex: 1000,
  className: "",
  onAnimationComplete: undefined,
  style: {},
};

const PRESETS = {
  top: { position: "top", height: "6rem" },
  bottom: { position: "bottom", height: "6rem" },
  left: { position: "left", height: "6rem" },
  right: { position: "right", height: "6rem" },
  subtle: { height: "4rem", strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: "10rem", strength: 4, divCount: 8, exponential: true },
  smooth: { height: "8rem", curve: "bezier", divCount: 10 },
  sharp: { height: "5rem", curve: "linear", divCount: 4 },
  header: { position: "top", height: "8rem", curve: "ease-out" },
  footer: { position: "bottom", height: "8rem", curve: "ease-out" },
  sidebar: { position: "left", height: "6rem", strength: 2.5 },
  "page-header": {
    position: "top",
    height: "10rem",
    target: "page",
    strength: 3,
  },
  "page-footer": {
    position: "bottom",
    height: "10rem",
    target: "page",
    strength: 3,
  },
} satisfies Record<string, Partial<GradualBlurProps>>;

const CURVE_FUNCTIONS: Record<GradualBlurCurve, (progress: number) => number> =
  {
    linear: (progress) => progress,
    bezier: (progress) => progress * progress * (3 - 2 * progress),
    "ease-in": (progress) => progress * progress,
    "ease-out": (progress) => 1 - (1 - progress) ** 2,
    "ease-in-out": (progress) =>
      progress < 0.5
        ? 2 * progress * progress
        : 1 - (-2 * progress + 2) ** 2 / 2,
  };

function mergeConfigs(...configs: Partial<ResolvedConfig>[]): ResolvedConfig {
  return Object.assign({}, ...configs) as ResolvedConfig;
}

function getGradientDirection(position: GradualBlurPosition) {
  return {
    top: "to top",
    bottom: "to bottom",
    left: "to left",
    right: "to right",
  }[position];
}

function useResponsiveDimension(
  responsive: boolean,
  config: ResolvedConfig,
  key: "height" | "width",
) {
  const [value, setValue] = useState(config[key]);

  useEffect(() => {
    if (!responsive) return;

    const dimensionKey = key === "height" ? "Height" : "Width";
    const calculate = () => {
      const viewportWidth = window.innerWidth;
      const responsiveValue =
        viewportWidth <= 480
          ? config[`mobile${dimensionKey}`]
          : viewportWidth <= 768
            ? config[`tablet${dimensionKey}`]
            : viewportWidth <= 1024
              ? config[`desktop${dimensionKey}`]
              : undefined;

      setValue(responsiveValue ?? config[key]);
    };

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const onResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(calculate, 100);
    };

    calculate();
    window.addEventListener("resize", onResize);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("resize", onResize);
    };
  }, [config, key, responsive]);

  return responsive ? value : config[key];
}

function useIntersectionObserver(
  ref: RefObject<HTMLElement | null>,
  shouldObserve: boolean,
) {
  const [isVisible, setIsVisible] = useState(!shouldObserve);

  useEffect(() => {
    if (!shouldObserve || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry?.isIntersecting ?? false),
      { threshold: 0.1 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, shouldObserve]);

  return isVisible;
}

function durationToMilliseconds(duration: string) {
  const parsed = Number.parseFloat(duration);
  return duration.trim().endsWith("ms") ? parsed : parsed * 1000;
}

function GradualBlurComponent({ preset, ...props }: GradualBlurProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const config = useMemo(
    () => mergeConfigs(DEFAULT_CONFIG, preset ? PRESETS[preset] : {}, props),
    [preset, props],
  );
  const responsiveHeight = useResponsiveDimension(
    config.responsive,
    config,
    "height",
  );
  const responsiveWidth = useResponsiveDimension(
    config.responsive,
    config,
    "width",
  );
  const isVisible = useIntersectionObserver(
    containerRef,
    config.animated === "scroll",
  );

  const blurLayers = useMemo(() => {
    const layers = [];
    const count = Math.max(1, Math.min(Math.floor(config.divCount), 12));
    const increment = 100 / count;
    const currentStrength =
      isHovered && config.hoverIntensity
        ? config.strength * config.hoverIntensity
        : config.strength;
    const curveFunction =
      CURVE_FUNCTIONS[config.curve] ?? CURVE_FUNCTIONS.linear;
    const direction = getGradientDirection(config.position);

    for (let index = 1; index <= count; index += 1) {
      const progress = curveFunction(index / count);
      const blurValue = config.exponential
        ? 2 ** (progress * 4) * 0.0625 * currentStrength
        : 0.0625 * (progress * count + 1) * currentStrength;
      const p1 = Math.round((increment * index - increment) * 10) / 10;
      const p2 = Math.round(increment * index * 10) / 10;
      const p3 = Math.round((increment * index + increment) * 10) / 10;
      const p4 = Math.round((increment * index + increment * 2) * 10) / 10;
      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      layers.push(
        <div
          className={styles.layer}
          key={index}
          style={{
            maskImage: `linear-gradient(${direction}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
            backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            opacity: config.opacity,
            transition:
              config.animated && config.animated !== "scroll"
                ? `backdrop-filter ${config.duration} ${config.easing}`
                : undefined,
          }}
        />,
      );
    }

    return layers;
  }, [config, isHovered]);

  const containerStyle = useMemo(() => {
    const isVertical =
      config.position === "top" || config.position === "bottom";
    const isPageTarget = config.target === "page";
    const style: CSSProperties = {
      position: isPageTarget ? "fixed" : "absolute",
      pointerEvents: config.hoverIntensity ? "auto" : "none",
      opacity: isVisible ? 1 : 0,
      transition: config.animated
        ? `opacity ${config.duration} ${config.easing}`
        : undefined,
      zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
      ...config.style,
    };

    if (isVertical) {
      style.height = responsiveHeight;
      style.width = responsiveWidth || "100%";
      style[config.position] = 0;
      style.left = 0;
      style.right = 0;
    } else {
      style.width = responsiveWidth || responsiveHeight;
      style.height = "100%";
      style[config.position] = 0;
      style.top = 0;
      style.bottom = 0;
    }

    return style;
  }, [config, isVisible, responsiveHeight, responsiveWidth]);

  useEffect(() => {
    if (
      !isVisible ||
      config.animated !== "scroll" ||
      !config.onAnimationComplete
    )
      return;

    const timeoutId = setTimeout(
      config.onAnimationComplete,
      durationToMilliseconds(config.duration),
    );
    return () => clearTimeout(timeoutId);
  }, [config.animated, config.duration, config.onAnimationComplete, isVisible]);

  return (
    <div
      ref={containerRef}
      className={`${styles.root} ${config.target === "page" ? styles.page : styles.parent} ${config.className}`}
      style={containerStyle}
      aria-hidden="true"
      data-component="gradual-blur"
      data-target={config.target}
      data-position={config.position}
      onMouseEnter={
        config.hoverIntensity ? () => setIsHovered(true) : undefined
      }
      onMouseLeave={
        config.hoverIntensity ? () => setIsHovered(false) : undefined
      }
    >
      <div className={styles.inner}>{blurLayers}</div>
    </div>
  );
}

export const GradualBlur = memo(GradualBlurComponent);
GradualBlur.displayName = "GradualBlur";
