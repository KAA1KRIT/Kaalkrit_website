import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { domainLabel } from "@/content/domains";
import { publicProjects, statusLabel } from "@/content/projects";
import { pageMetadata, projectsSchema, serializeJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "KAALKRIT project work across autonomous aerial systems, robotics, and hardware engineering.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects / Engineering briefs"
        heading="Project work with a systems view."
        lede="Five active and completed projects across autonomous aerial systems, robotics, and engineering platforms."
        meta={["Autonomy", "Robotics", "Embedded systems"]}
      />
      <section className="system-section" aria-label="Project index">
        <div className="k-container project-brief-list">
          {publicProjects.map((project, index) => (
            <article key={project.slug} className="project-brief">
              <div className="project-brief__rail">
                <span>0{index + 1}</span>
                <span>{statusLabel[project.status]}</span>
              </div>
              <div>
                <p className="technical-label">
                  {project.programmeLabel ?? "Engineering project"}
                </p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <dl>
                  <div>
                    <dt>Context</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>Purpose</dt>
                    <dd>{project.significance}</dd>
                  </div>
                </dl>
                <ul className="capability-tags">
                  {project.capabilities.map((capability) => (
                    <li key={capability}>{domainLabel(capability)}</li>
                  ))}
                </ul>
                <Link href={`/projects/${project.slug}`} className="text-link">
                  Open project brief <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(projectsSchema()) }}
      />
    </>
  );
}
