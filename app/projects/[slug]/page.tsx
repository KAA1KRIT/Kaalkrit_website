import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button, Arrow } from "@/components/ui/Button";
import { StatusTag } from "@/components/ui/StatusTag";
import { domainLabel } from "@/content/domains";
import { getProject, publicProjects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publicProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageHeader
        eyebrow={project.programmeLabel ?? "Project"}
        heading={project.title}
        lede={project.summary}
        meta={[
          project.year ? String(project.year) : "Current project",
          project.status === "completed" ? "Completed" : "In development",
        ]}
      />
      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="project-scope-heading"
      >
        <div className="k-container grid gap-[var(--k-8)] md:grid-cols-12 md:gap-[var(--k-6)]">
          <div className="md:col-span-4">
            <StatusTag status={project.status} />
            <p className="k-meta mt-[var(--k-6)]">Engineering disciplines</p>
            <ul className="mt-[var(--k-3)] grid gap-[var(--k-2)] text-[var(--k-t-small)] text-[var(--k-text-muted)]">
              {project.capabilities.map((capability) => (
                <li key={capability}>{domainLabel(capability)}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2
              id="project-scope-heading"
              className="k-display text-[length:var(--k-t-h2)]"
            >
              Project scope
            </h2>
            <dl className="mt-[var(--k-6)] grid gap-[var(--k-6)] border-t border-[var(--k-line)] pt-[var(--k-6)]">
              <div>
                <dt className="k-meta">Focus</dt>
                <dd className="k-body mt-[var(--k-2)]">{project.problem}</dd>
              </div>
              <div>
                <dt className="k-meta">Impact</dt>
                <dd className="k-body mt-[var(--k-2)]">
                  {project.significance}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      {project.media ? (
        <section
          className="pb-[var(--k-section-y)]"
          aria-labelledby="project-media-heading"
        >
          <div className="k-container">
            <h2
              id="project-media-heading"
              className="k-display text-[length:var(--k-t-h2)]"
            >
              NIDAR 2026 field testing
            </h2>
            <figure className="mt-[var(--k-6)] max-w-[48rem]">
              <Image
                src={project.media.src}
                alt={project.media.alt}
                width={project.media.width}
                height={project.media.height}
                sizes="(min-width: 768px) 48rem, 100vw"
                className="h-auto w-full rounded-[var(--k-radius)] border border-[var(--k-line)]"
              />
              <figcaption className="k-meta mt-[var(--k-3)]">
                Team KAALKRIT testing its autonomous UAS in an open field.
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}
      <section className="pb-[var(--k-section-y)]" aria-label="Project actions">
        <div className="k-container flex flex-wrap gap-[var(--k-3)]">
          <Button href="/projects" variant="secondary">
            Back to projects <Arrow />
          </Button>
        </div>
      </section>
    </>
  );
}
