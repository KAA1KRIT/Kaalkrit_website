import type { GalleryItem } from "@/lib/types";

const nidarGalleryItems: GalleryItem[] = [
  {
    id: "nidar-field-testing",
    status: "ready",
    kind: "image",
    src: "/images/approved/nidar-field-testing.jpg",
    alt: "Team KAALKRIT members field-testing the autonomous UAS in an open field.",
    title: "Autonomous UAS field testing",
    projectSlug: "uas-nidar-2026",
    width: 479,
    height: 378,
    permissionConfirmed: true,
  },
  {
    id: "nidar-team-signage",
    status: "ready",
    kind: "image",
    src: "/images/approved/nidar-2026-team-signage.jpg",
    alt: "Team KAALKRIT members standing in front of the NIDAR 2026 event signage at Gautam Buddha University.",
    title: "NIDAR 2026 team signage",
    width: 1438,
    height: 753,
    permissionConfirmed: true,
  },
  {
    id: "nidar-team-group",
    status: "ready",
    kind: "image",
    src: "/images/approved/nidar-2026-team-group.jpg",
    alt: "Team KAALKRIT group photo at the NIDAR 2026 national drone innovation competition.",
    title: "NIDAR 2026 team group",
    width: 1438,
    height: 753,
    permissionConfirmed: true,
  },
  {
    id: "nidar-presentation-room",
    status: "ready",
    kind: "image",
    src: "/images/approved/nidar-presentation-room.jpg",
    alt: "Team KAALKRIT with faculty mentor after their presentation at NIDAR 2026.",
    title: "NIDAR 2026 presentation room",
    width: 1438,
    height: 753,
    permissionConfirmed: true,
  },
];

export const galleryItems = nidarGalleryItems;
export const teamGallery = nidarGalleryItems.filter(
  (item) => item.id !== "nidar-field-testing",
);
export const journeyGallery = nidarGalleryItems;
export const projectGallery = nidarGalleryItems;
export const archiveGallery = nidarGalleryItems;

export function readyGalleryItems(items: GalleryItem[]): GalleryItem[] {
  return items.filter(
    (item) =>
      item.status === "ready" &&
      item.permissionConfirmed === true &&
      Boolean(item.src?.startsWith("/")) &&
      Boolean(item.alt.trim()) &&
      Boolean(item.width && item.height),
  );
}
