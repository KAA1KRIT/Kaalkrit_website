import { PageHeader } from "@/components/layout/PageHeader";
import { ProgrammeSpine } from "@/components/projects/ProgrammeSpine";
import { PlatformFeature } from "@/components/projects/PlatformFeature";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { Rule } from "@/components/ui/Rule";
import { roboticsProjects } from "@/content/projects";
import { pageMetadata, projectsSchema, serializeJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "[PROJECTS PAGE TITLE PLACEHOLDER]",
  description: "[PROJECTS META DESCRIPTION PLACEHOLDER]",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="[PROJECTS EYEBROW PLACEHOLDER]"
        heading="[PROJECTS HEADLINE PLACEHOLDER]"
        lede="[PROJECTS LEDE PLACEHOLDER]"
        meta={[
          "[PROJECTS META PLACEHOLDER 1]",
          "[PROJECTS META PLACEHOLDER 2]",
          "[PROJECTS META PLACEHOLDER 3]",
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
            [PROGRAMME HEADING PLACEHOLDER]
          </h2>
          <p className="k-lede mt-[var(--k-5)]">
            [PROGRAMME BODY COPY PLACEHOLDER]
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
            [PLATFORM HEADING PLACEHOLDER]
          </h2>
          <p className="k-lede mt-[var(--k-5)]">
            [PLATFORM BODY COPY PLACEHOLDER]
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
            [PROJECT CATEGORY HEADING PLACEHOLDER]
          </h2>
          <p className="k-lede mt-[var(--k-5)]">
            [PROJECT CATEGORY BODY COPY PLACEHOLDER]
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
