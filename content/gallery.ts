import type { GalleryItem } from '@/lib/types';

/**
 * Public gallery source of truth. New media must be locally hosted, approved,
 * dimensioned, and marked ready before any gallery renders it.
 */
export const galleryItems: GalleryItem[] = [];

export const teamGallery: GalleryItem[] = [];
export const journeyGallery: GalleryItem[] = [];
export const projectGallery: GalleryItem[] = [];
export const archiveGallery: GalleryItem[] = [];

export function readyGalleryItems(items: GalleryItem[]): GalleryItem[] {
  return items.filter(
    (item) =>
      item.status === 'ready' &&
      item.permissionConfirmed === true &&
      Boolean(item.src?.startsWith('/')) &&
      Boolean(item.alt.trim()) &&
      Boolean(item.width && item.height),
  );
}
