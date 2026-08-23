"use client";

import dynamic from "next/dynamic";
import type { GalleryItem } from "@/lib/types";
import { readyGalleryItems } from "@/content/gallery";
import { GalleryErrorBoundary } from "./GalleryErrorBoundary";
import { GalleryEmptyState, GallerySkeleton } from "./GalleryStates";

const DriftWallRegistry = dynamic(
  () =>
    import("./DriftWallRegistry").then((module) => module.DriftWallRegistry),
  {
    ssr: false,
    loading: () => <GallerySkeleton label="Loading visual archive" />,
  },
);

export function DriftWallGallery({ items }: { items: GalleryItem[] }) {
  const readyItems = readyGalleryItems(items);
  if (readyItems.length === 0) {
    return (
      <GalleryEmptyState description="The archive will surface visual documentation as it is ready for publication." />
    );
  }
  return (
    <GalleryErrorBoundary label="The visual archive">
      <DriftWallRegistry items={readyItems} />
    </GalleryErrorBoundary>
  );
}
