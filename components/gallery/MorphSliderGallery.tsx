'use client';

import dynamic from 'next/dynamic';
import type { GalleryItem } from '@/lib/types';
import { readyGalleryItems } from '@/content/gallery';
import { GalleryErrorBoundary } from './GalleryErrorBoundary';
import { GalleryEmptyState, GallerySkeleton } from './GalleryStates';

const MorphSliderRegistry = dynamic(
  () => import('./MorphSliderRegistry').then((module) => module.MorphSliderRegistry),
  { ssr: false, loading: () => <GallerySkeleton label="Loading project media" /> },
);

export function MorphSliderGallery({ items }: { items: GalleryItem[] }) {
  const readyItems = readyGalleryItems(items);
  if (readyItems.length < 2) {
    return <GalleryEmptyState description="Project documentation is shared when it is ready for publication." />;
  }
  return <GalleryErrorBoundary label="Project media"><MorphSliderRegistry items={readyItems} /></GalleryErrorBoundary>;
}
