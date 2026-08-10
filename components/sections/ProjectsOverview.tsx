import { roboticsProjects } from '@/content/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { Button, Arrow } from '@/components/ui/Button';
import { ProgrammeSpine } from './ProgrammeSpine';
import { PlatformFeature } from './PlatformFeature';
import { ProjectFeature } from './ProjectFeature';

/**
 * The homepage cut: what each system is, in one paragraph. The problem,
 * significance and capability breakdown live on /projects, so the two
 * pages do not restate one another.
 */
export function ProjectsOverview() {
  return (
    <section id="projects" className="k-section scroll-mt-[96px]" aria-labelledby="projects-heading">
      <div className="k-container">
        <SectionHeader
          eyebrow="Projects"
          id="projects-heading"
          heading="Five documented systems across air, ground and engineering learning."
          lede="An aerial programme, a hardware-learning platform, and a ground-robotics track."
        />

        <div className="mt-[var(--k-9)]">
          <ProgrammeSpine />
        </div>

        <div className="mt-[var(--k-9)]">
          <PlatformFeature />
        </div>

        <div className="mt-[var(--k-9)] grid gap-[var(--k-8)]">
          <p className="k-meta">Ground robotics</p>
          {roboticsProjects.map((project, index) => (
            <ProjectFeature key={project.slug} project={project} reversed={index % 2 === 1} />
          ))}
        </div>

        <Reveal className="mt-[var(--k-8)]">
          <Button href="/projects" variant="ghost" trailing={<Arrow />}>
            Read the full project detail
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
