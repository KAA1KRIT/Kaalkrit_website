import type { Project } from "@/lib/types";

const placeholderProject = (slug: string, index: number): Project => ({
  slug,
  title: `[PROJECT TITLE PLACEHOLDER ${index}]`,
  shortTitle: `[PROJECT SHORT TITLE PLACEHOLDER ${index}]`,
  programme:
    index < 3 ? (index === 1 ? "nidar-2026" : "nidar-2027") : undefined,
  programmeLabel:
    index < 3 ? `[PROGRAMME LABEL PLACEHOLDER ${index}]` : undefined,
  status: "in-development",
  year: undefined,
  summary: `[PROJECT SUMMARY PLACEHOLDER ${index}]`,
  problem: `[PROJECT PROBLEM PLACEHOLDER ${index}]`,
  significance: `[PROJECT SIGNIFICANCE PLACEHOLDER ${index}]`,
  capabilities: ["uas"],
  contentStatus: "ready",
});

// Stable slugs preserve the existing project routes while their publishable
// copy is replaced with placeholders.
export const projects: Project[] = [
  placeholderProject("uas-nidar-2026", 1),
  placeholderProject("airmos", 2),
  placeholderProject("build-with-hardware", 3),
  placeholderProject("robotic-arm", 4),
  placeholderProject("robot-vacuum", 5),
];

const bySlug = new Map(projects.map((project) => [project.slug, project]));

export const publicProjects = projects.filter(
  (project) => project.contentStatus === "ready",
);
const publicBySlug = new Map(
  publicProjects.map((project) => [project.slug, project]),
);

export function getProject(slug: string): Project | undefined {
  return bySlug.get(slug);
}

export function getPublicProject(slug: string): Project | undefined {
  return publicBySlug.get(slug);
}

export const programmeProjects = publicProjects.filter(
  (project) => project.programme !== undefined,
);
export const roboticsProjects = publicProjects.filter((project) =>
  ["robotic-arm", "robot-vacuum"].includes(project.slug),
);
export const platformProject = publicProjects.find(
  (project) => project.slug === "build-with-hardware",
);

export const statusLabel: Record<Project["status"], string> = {
  completed: "[PROJECT STATUS PLACEHOLDER]",
  "in-development": "[PROJECT STATUS PLACEHOLDER]",
};
