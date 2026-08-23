import type { CollaborationMode } from "@/lib/types";

export const collaborationModes: CollaborationMode[] = Array.from(
  { length: 4 },
  (_, index) => ({
    id: `collaboration-mode-${index + 1}`,
    title: `[COLLABORATION TITLE PLACEHOLDER ${index + 1}]`,
    description: `[COLLABORATION DESCRIPTION PLACEHOLDER ${index + 1}]`,
    subject: `[EMAIL SUBJECT PLACEHOLDER ${index + 1}]`,
    contentStatus: "ready",
  }),
);

export const targetSectors = Array.from(
  { length: 8 },
  (_, index) => `[TARGET SECTOR PLACEHOLDER ${index + 1}]`,
);
export const futureDirections = Array.from(
  { length: 5 },
  (_, index) => `[FUTURE DIRECTION PLACEHOLDER ${index + 1}]`,
);
export const partnersContent = {
  status: "ready" as const,
  collaborationModes,
  futureDirections,
  targetSectors,
};
