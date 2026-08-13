'use client';

import dynamic from 'next/dynamic';
import type { GalleryItem } from '@/lib/types';
import { readyGalleryItems } from '@/content/gallery';
import { GalleryErrorBoundary } from './GalleryErrorBoundary';
import { GalleryEmptyState, GallerySkeleton } from './GalleryStates';

const DepthCarouselRegistry = dynamic(
  () => import('./DepthCarouselRegistry').then((module) => module.DepthCarouselRegistry),
  { ssr: false, loading: () => <GallerySkeleton label="Loading media gallery" /> },
);

export function DepthCarouselGallery({ items }: { items: GalleryItem[] }) {
  const readyItems = readyGalleryItems(items);
  if (readyItems.length < 2) {
    return <GalleryEmptyState description="Curated visual documentation is shared when it is ready for publication." />;
  }
  return <GalleryErrorBoundary label="The media gallery"><DepthCarouselRegistry items={readyItems} /></GalleryErrorBoundary>;
}
