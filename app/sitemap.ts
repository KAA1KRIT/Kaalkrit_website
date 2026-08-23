import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/content/site";
import { publicProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!absoluteUrl("/")) return [];
  const lastModified = new Date();
  const entry = (path: string, priority: number) => ({
    url: absoluteUrl(path)!,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  });

  return [
    entry("/", 1),
    entry("/projects", 0.9),
    entry("/journey", 0.8),
    ...publicProjects.map((project) =>
      entry(`/projects/${project.slug}`, 0.75),
    ),
    entry("/partners", 0.65),
  ];
}
