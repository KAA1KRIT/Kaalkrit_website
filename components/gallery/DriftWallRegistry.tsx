"use client";

import Image from "next/image";
import type { GalleryItem } from "@/lib/types";

/** Typed adapter for the DriftWall registry component. */
export function DriftWallRegistry({ items }: { items: GalleryItem[] }) {
  return (
    <div
      className="registry-drift-wall"
      aria-label="[VISUAL ARCHIVE ARIA LABEL PLACEHOLDER]"
    >
      {items.map((item) => (
        <figure key={item.id}>
          <Image
            src={item.src!}
            alt={item.alt}
            width={item.width!}
            height={item.height!}
            sizes="(max-width: 767px) 45vw, 200px"
          />
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
