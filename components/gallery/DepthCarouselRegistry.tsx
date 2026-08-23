"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/lib/types";

/** Typed adapter for the DepthCarousel registry component. */
export function DepthCarouselRegistry({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = media.matches;
    const onChange = () => {
      reducedRef.current = media.matches;
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedRef.current || !rootRef.current) return;
    const animations = Array.from(
      rootRef.current.querySelectorAll<HTMLElement>(".depth-carousel-card"),
    ).map((card, index) =>
      card.animate(
        [
          { opacity: 0, transform: "translateY(18px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 420,
          delay: index * 55,
          easing: "cubic-bezier(0.2, 0, 0, 1)",
          fill: "backwards",
        },
      ),
    );
    return () => animations.forEach((animation) => animation.cancel());
  }, [items]);

  const move = (delta: number) =>
    setActive((value) => (value + delta + items.length) % items.length);

  return (
    <div
      ref={rootRef}
      className="registry-depth-carousel"
      tabIndex={0}
      aria-label="Team KAALKRIT NIDAR 2026 media gallery"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
        if (event.key === "Home") {
          event.preventDefault();
          setActive(0);
        }
        if (event.key === "End") {
          event.preventDefault();
          setActive(items.length - 1);
        }
      }}
    >
      <div className="registry-depth-carousel__stage">
        {items.map((item, index) => {
          const distance = index - active;
          return (
            <figure
              key={item.id}
              className="depth-carousel-card"
              style={
                {
                  "--depth": `${distance * -170}px`,
                  "--spread": `${distance * 78}px`,
                  "--opacity": Math.abs(distance) > 3 ? 0 : 1,
                } as React.CSSProperties
              }
              aria-hidden={index !== active}
            >
              <Image
                src={item.src!}
                alt={item.alt}
                fill
                sizes="(max-width: 767px) 72vw, 300px"
              />
              {item.caption ? <figcaption>{item.caption}</figcaption> : null}
            </figure>
          );
        })}
      </div>
      <button
        type="button"
        className="registry-gallery-control registry-gallery-control--prev"
        onClick={() => move(-1)}
        aria-label="Previous gallery item"
      >
        ←
      </button>
      <button
        type="button"
        className="registry-gallery-control registry-gallery-control--next"
        onClick={() => move(1)}
        aria-label="Next gallery item"
      >
        →
      </button>
      <p className="sr-only" aria-live="polite">
        Item {active + 1} of {items.length}
      </p>
    </div>
  );
}
