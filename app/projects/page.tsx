import { PageHeader } from '@/components/layout/PageHeader';
import { ProgrammeSpine } from '@/components/projects/ProgrammeSpine';
import { PlatformFeature } from '@/components/projects/PlatformFeature';
import { ProjectFeature } from '@/components/projects/ProjectFeature';
import { PartnershipSection } from '@/components/sections/PartnershipSection';
import { Rule } from '@/components/ui/Rule';
import { projects, roboticsProjects } from '@/content/projects';
import { pageMetadata, projectsSchema } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Projects',
  description:
    'Five documented KAALKRIT projects: a NIDAR 2026 unmanned aerial system, AirMOS for NIDAR 2027, Build With Hardware, an intelligent robotic arm and an autonomous robot vacuum cleaner.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        heading="Five documented systems, from airframe to firmware."
        lede="Each entry states what the system is, its current status and the engineering capability it demonstrates."
        meta={[`${projects.length} documented systems`, '2 NIDAR cycles', '1 platform']}
      />

      <section className="pb-[var(--k-section-y)]" aria-labelledby="programme-heading">
        <div className="k-container">
          <h2 id="programme-heading" className="k-display text-[length:var(--k-t-h2)]">
            The aerial programme
          </h2>
          <p className="k-lede mt-[var(--k-5)]">
            One programme across two competition cycles. The 2026 system is the foundation the 2027
            system is built on — stated in that order because that is how the work runs.
          </p>
          <div className="mt-[var(--k-8)]">
            <ProgrammeSpine detail />
          </div>
        </div>
      </section>

      <section className="pb-[var(--k-section-y)]" aria-labelledby="platform-heading">
        <div className="k-container">
          <Rule />
          <h2 id="platform-heading" className="k-display mt-[var(--k-7)] text-[length:var(--k-t-h2)]">
            The platform
          </h2>
          <p className="k-lede mt-[var(--k-5)]">
            KAALKRIT’s flagship engineering-learning platform, currently in development.
          </p>
          <div className="mt-[var(--k-8)]">
            <PlatformFeature detail />
          </div>
        </div>
      </section>

      <section className="pb-[var(--k-section-y)]" aria-labelledby="robotics-heading">
        <div className="k-container">
          <Rule />
          <h2 id="robotics-heading" className="k-display mt-[var(--k-7)] text-[length:var(--k-t-h2)]">
            Ground robotics
          </h2>
          <p className="k-lede mt-[var(--k-5)]">
            Navigation, sensing, motion control and precision automation off the airframe: one
            developed system and one in development.
          </p>
          <div className="mt-[var(--k-8)] grid gap-[var(--k-9)]">
            {roboticsProjects.map((project, index) => (
              <ProjectFeature
                key={project.slug}
                project={project}
                reversed={index % 2 === 1}
                headingLevel="h3"
                detail
              />
            ))}
          </div>
        </div>
      </section>

      <PartnershipSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema()) }}
      />
    </>
  );
}
