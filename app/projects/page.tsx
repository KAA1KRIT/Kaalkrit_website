import { PageHeader } from "@/components/layout/PageHeader";
import { ProgrammeSpine } from "@/components/projects/ProgrammeSpine";
import { PlatformFeature } from "@/components/projects/PlatformFeature";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { Rule } from "@/components/ui/Rule";
import { roboticsProjects } from "@/content/projects";
import { pageMetadata, projectsSchema, serializeJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Explore Team KAALKRIT's autonomous aerial systems, robotics, and engineering platform projects.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        heading="Intelligent engineering solutions in action."
        lede="Explore Team KAALKRIT's autonomous aerial systems, robotics, and engineering platform projects."
        meta={[
          "Autonomous aerial systems",
          "Robotics",
          "Intelligent engineering",
        ]}
      />

      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="programme-heading"
      >
        <div className="k-container">
          <h2
            id="programme-heading"
            className="k-display text-[length:var(--k-t-h2)]"
          >
            Autonomous aerial systems
          </h2>
          <p className="k-lede mt-[var(--k-5)]">
            Team KAALKRIT is developing intelligent aerial systems through
            advanced sensing technologies, autonomous capabilities, and
            mission-oriented design.
          </p>
          <div className="mt-[var(--k-8)]">
            <ProgrammeSpine detail />
          </div>
        </div>
      </section>

      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="platform-heading"
      >
        <div className="k-container">
          <Rule />
          <h2
            id="platform-heading"
            className="k-display mt-[var(--k-7)] text-[length:var(--k-t-h2)]"
          >
            Build With Hardware
          </h2>
          <p className="k-lede mt-[var(--k-5)]">
            Team KAALKRIT's flagship engineering platform designed to make
            hardware innovation more accessible.
          </p>
          <div className="mt-[var(--k-8)]">
            <PlatformFeature detail />
          </div>
        </div>
      </section>

      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="robotics-heading"
      >
        <div className="k-container">
          <Rule />
          <h2
            id="robotics-heading"
            className="k-display mt-[var(--k-7)] text-[length:var(--k-t-h2)]"
          >
            Robotics & Automation
          </h2>
          <p className="k-lede mt-[var(--k-5)]">
            Intelligent robotics, embedded systems, sensor integration, and
            autonomous navigation for real-world applications.
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(projectsSchema()) }}
      />
    </>
  );
}
