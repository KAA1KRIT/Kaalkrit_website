import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button, Arrow } from '@/components/ui/Button';
import { StatusTag } from '@/components/ui/StatusTag';
import { GalleryEmptyState } from '@/components/gallery/GalleryStates';
import { MorphSliderGallery } from '@/components/gallery/MorphSliderGallery';
import { projectGallery } from '@/content/gallery';
import { getProject, projects } from '@/content/projects';
import { pageMetadata } from '@/lib/seo';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({ title: project.title, description: project.summary, path: `/projects/${project.slug}` });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.contentStatus === 'hidden') notFound();

  return (
    <>
      <PageHeader
        eyebrow={project.programmeLabel ?? 'Project'}
        heading={project.title}
        lede={project.summary}
        meta={[project.year ? String(project.year) : 'Undated', project.status === 'completed' ? 'Completed' : 'In development']}
      />
      <section className="pb-[var(--k-section-y)]" aria-labelledby="project-scope-heading">
        <div className="k-container grid gap-[var(--k-8)] md:grid-cols-12 md:gap-[var(--k-6)]">
          <div className="md:col-span-4">
            <StatusTag status={project.status} />
            <p className="k-meta mt-[var(--k-6)]">Engineering disciplines</p>
            <ul className="mt-[var(--k-3)] grid gap-[var(--k-2)] text-[var(--k-t-small)] text-[var(--k-text-muted)]">
              {project.capabilities.map((capability) => <li key={capability}>{capability.replaceAll('-', ' ')}</li>)}
            </ul>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2 id="project-scope-heading" className="k-display text-[length:var(--k-t-h2)]">The documented scope.</h2>
            <dl className="mt-[var(--k-6)] grid gap-[var(--k-6)] border-t border-[var(--k-line)] pt-[var(--k-6)]">
              <div><dt className="k-meta">The problem</dt><dd className="k-body mt-[var(--k-2)]">{project.problem}</dd></div>
              <div><dt className="k-meta">Why it matters</dt><dd className="k-body mt-[var(--k-2)]">{project.significance}</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="pb-[var(--k-section-y)]" aria-labelledby="project-media-heading">
        <div className="k-container">
          <h2 id="project-media-heading" className="k-display text-[length:var(--k-t-h2)]">System media.</h2>
          <div className="mt-[var(--k-6)]">
            {projectGallery.filter((item) => item.projectSlug === project.slug).length > 0 ? (
              <MorphSliderGallery items={projectGallery.filter((item) => item.projectSlug === project.slug)} />
            ) : (
              <GalleryEmptyState title="Project media" description="Visual documentation is shared when it is ready for publication." />
            )}
          </div>
        </div>
      </section>
      <section className="pb-[var(--k-section-y)]" aria-label="Project actions">
        <div className="k-container flex flex-wrap gap-[var(--k-3)]">
          <Button href="/projects" variant="secondary">Back to projects <Arrow /></Button>
          <Button href="/#partnership" variant="primary">Discuss collaboration <Arrow /></Button>
        </div>
      </section>
    </>
  );
}
