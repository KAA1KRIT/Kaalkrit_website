"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/lib/types";

/** Typed, low-power-safe KAALKRIT adaptation of the React Bits MorphSlider registry component. */
export function MorphSliderRegistry({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState(0);
  const move = (delta: number) =>
    setActive((value) => (value + delta + items.length) % items.length);
  return (
    <div
      className="registry-morph-slider"
      aria-label="Flagship project media"
      tabIndex={0}
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
      {items.map((item, index) => (
        <figure
          key={item.id}
          className={`registry-morph-slide ${index === active ? "is-active" : ""}`}
          aria-hidden={index !== active}
        >
          <Image
            src={item.src!}
            alt={item.alt}
            fill
            sizes="(max-width: 767px) 100vw, 70vw"
          />
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
      <div className="registry-gallery-controls">
        <button
          type="button"
          className="registry-gallery-control"
          onClick={() => move(-1)}
          aria-label="Previous project media"
        >
          ←
        </button>
        <button
          type="button"
          className="registry-gallery-control"
          onClick={() => move(1)}
          aria-label="Next project media"
        >
          →
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        Item {active + 1} of {items.length}
      </p>
    </div>
  );
}
