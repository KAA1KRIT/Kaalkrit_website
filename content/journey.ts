import type { Milestone } from "@/lib/types";

export const milestones: Milestone[] = Array.from(
  { length: 8 },
  (_, index) => ({
    id: `milestone-${index + 1}`,
    year: null,
    yearLabel: `[MILESTONE YEAR LABEL PLACEHOLDER ${index + 1}]`,
    kind: index === 0 ? "founding" : index === 7 ? "forward" : "project",
    title: `[MILESTONE TITLE PLACEHOLDER ${index + 1}]`,
    description: `[MILESTONE DESCRIPTION PLACEHOLDER ${index + 1}]`,
    projectSlug: index > 0 && index < 6 ? `project-${index}` : undefined,
    contentStatus: "ready",
  }),
);

export const journeyContent = { status: "ready" as const, milestones };
