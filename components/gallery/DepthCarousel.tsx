"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type FocusEvent,
  type CSSProperties,
  type WheelEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import type { TeamMemberWithIdCard } from "@/lib/types";
import styles from "./DepthCarousel.module.css";
import { useCarouselAutoplay } from "./useCarouselAutoplay";

type DepthCarouselProps = {
  items: readonly TeamMemberWithIdCard[];
  label: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  interactionGraceDelay?: number;
};

function circularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function memberLabel(member: TeamMemberWithIdCard) {
  return member.area ? `${member.role} / ${member.area}` : member.role;
}

export function DepthCarousel({
  items,
  label,
  autoplay = true,
  autoplayDelay = 2600,
  interactionGraceDelay = 1200,
}: DepthCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [compactLayout, setCompactLayout] = useState(false);
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const pointerType = useRef<string | null>(null);
  const ignoreCardClickUntil = useRef(0);
  const lastWheelAt = useRef(0);
  const statusId = useId();
  const total = items.length;

  const activeMember = items[activeIndex];
  const activeLabel = activeMember ? memberLabel(activeMember) : "";

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(media.matches);
    updateMotionPreference();
    media.addEventListener("change", updateMotionPreference);
    return () => media.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const updateLayout = () => setCompactLayout(media.matches);
    updateLayout();
    media.addEventListener("change", updateLayout);
    return () => media.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const offset = circularOffset(index, activeIndex, total);
        const distance = Math.abs(offset);
        const isActive = distance === 0;
        const spread = compactLayout ? 52 : 64;
        const depth = compactLayout ? 128 : 180;
        const tilt = compactLayout ? -8 : -13;
        const scaleFalloff = compactLayout ? 0.065 : 0.09;
        const opacityFalloff = compactLayout ? 0.19 : 0.23;
        const blurStep = compactLayout ? 1 : 1.5;

        gsap.to(card, {
          xPercent: -50 + offset * spread,
          yPercent: -50,
          z: isActive ? 0 : -distance * depth,
          rotationY: offset * tilt,
          scale: Math.max(0.76, 1 - distance * scaleFalloff),
          opacity: Math.max(0.24, 1 - distance * opacityFalloff),
          filter: distance
            ? `blur(${Math.min(distance * blurStep, 4)}px)`
            : "blur(0px)",
          duration: reducedMotion ? 0 : 0.65,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    });

    return () => context.revert();
  }, [activeIndex, compactLayout, reducedMotion, total]);

  const goTo = useCallback(
    (index: number) => {
      if (!total) return;
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const advanceAutomatically = useCallback(() => {
    if (!total) return;
    setActiveIndex((currentIndex) => (currentIndex + 1) % total);
  }, [total]);

  const {
    beginInteraction,
    endInteraction,
    restartAutoplay,
    setIsFocused,
    setIsHovered,
    shouldAutoplay,
  } = useCarouselAutoplay({
    enabled: autoplay && total > 1,
    delay: autoplayDelay,
    reducedMotion,
    onAdvance: advanceAutomatically,
  });

  const navigateManually = useCallback(
    (index: number, graceDelay?: number) => {
      beginInteraction();
      goTo(index);
      restartAutoplay();
      if (graceDelay !== undefined) endInteraction(graceDelay);
    },
    [beginInteraction, endInteraction, goTo, restartAutoplay],
  );

  const previous = useCallback(
    () => navigateManually(activeIndex - 1, 0),
    [activeIndex, navigateManually],
  );
  const next = useCallback(
    () => navigateManually(activeIndex + 1, 0),
    [activeIndex, navigateManually],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    pointerType.current = event.pointerType;
    beginInteraction();
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const start = pointerStart.current;
    if (!start) return;

    const horizontalDistance = event.clientX - start.x;
    const verticalDistance = event.clientY - start.y;
    if (
      Math.abs(horizontalDistance) < 36 ||
      Math.abs(horizontalDistance) <= Math.abs(verticalDistance)
    ) {
      return;
    }

    pointerStart.current = null;
    ignoreCardClickUntil.current = Date.now() + 350;
    navigateManually(activeIndex + (horizontalDistance > 0 ? -1 : 1));
  };

  const finishPointerInteraction = () => {
    pointerStart.current = null;
    endInteraction(pointerType.current === "touch" ? interactionGraceDelay : 0);
  };

  const handleWheel = (event: WheelEvent<HTMLElement>) => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
    const now = Date.now();
    if (now - lastWheelAt.current < 480) return;
    event.preventDefault();
    lastWheelAt.current = now;
    navigateManually(activeIndex + (event.deltaX > 0 ? 1 : -1), 0);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFocused(false);
    }
  };

  const cardPositions = useMemo(
    () => items.map((_, index) => circularOffset(index, activeIndex, total)),
    [activeIndex, items, total],
  );

  if (!total || !activeMember) return null;

  return (
    <section
      className={styles.carousel}
      data-testid="team-depth-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      aria-describedby={statusId}
      data-autoplay={shouldAutoplay ? "running" : "paused"}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocusCapture={handleFocus}
      onBlurCapture={handleBlur}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setIsHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "touch") setIsHovered(false);
      }}
    >
      <div
        className={styles.stage}
        data-testid="team-depth-carousel-stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointerInteraction}
        onPointerCancel={finishPointerInteraction}
        onWheel={handleWheel}
      >
        {items.map((member, index) => {
          const isActive = index === activeIndex;
          const offset = cardPositions[index] ?? 0;
          return (
            <button
              key={member.name}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              type="button"
              className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
              data-testid="team-id-card"
              data-active={isActive ? "true" : "false"}
              style={
                {
                  "--card-aspect": `${member.idCard.width} / ${member.idCard.height}`,
                  zIndex: total - Math.abs(offset),
                } as CSSProperties
              }
              aria-label={`Show ${member.name} — ${memberLabel(member)}`}
              aria-current={isActive ? "true" : undefined}
              tabIndex={isActive ? 0 : -1}
              onClick={() => {
                if (Date.now() < ignoreCardClickUntil.current) {
                  return;
                }
                const interactionPointerType = pointerType.current;
                navigateManually(
                  index,
                  interactionPointerType === "touch"
                    ? interactionGraceDelay
                    : 0,
                );
                pointerType.current = null;
              }}
            >
              <Image
                src={member.idCard.src}
                alt={member.idCard.alt}
                data-testid="team-id-card-image"
                width={member.idCard.width}
                height={member.idCard.height}
                sizes="(max-width: 767px) 76vw, (max-width: 1199px) 29vw, 360px"
                priority={index === 0}
                loading={
                  index === 0 || Math.abs(offset) <= 1 ? undefined : "lazy"
                }
              />
            </button>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.control}
          aria-label={`Show the previous team member before ${activeMember.name}`}
          onClick={previous}
        >
          <ChevronLeft aria-hidden="true" size={18} />
        </button>
        <p id={statusId} className={styles.status} aria-live="polite">
          <span>{activeMember.name}</span>
          <span aria-hidden="true"> / </span>
          <span>{activeLabel}</span>
          <span aria-hidden="true"> / </span>
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span aria-hidden="true"> of </span>
          <span>{String(total).padStart(2, "0")}</span>
        </p>
        <button
          type="button"
          className={styles.control}
          aria-label={`Show the next team member after ${activeMember.name}`}
          onClick={next}
        >
          <ChevronRight aria-hidden="true" size={18} />
        </button>
      </div>

      <div className={styles.indicators} aria-label="Select a team member">
        {items.map((member, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={member.name}
              type="button"
              className={`${styles.indicator} ${isActive ? styles.indicatorActive : ""}`}
              aria-label={`Show ${member.name} — ${memberLabel(member)}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => navigateManually(index, 0)}
            />
          );
        })}
      </div>

      <p className={styles.hint}>
        Drag, swipe, scroll horizontally, or use the controls to explore.
      </p>
    </section>
  );
}
