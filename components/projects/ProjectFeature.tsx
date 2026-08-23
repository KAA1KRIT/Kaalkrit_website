import type { Project } from "@/lib/types";
import { domainLabel } from "@/content/domains";
import { Reveal } from "@/components/ui/Reveal";
import { StatusTag } from "@/components/ui/StatusTag";

export function ProjectFeature({
  project,
  reversed = false,
  detail = false,
  headingLevel: Heading = "h3",
}: {
  project: Project;
  reversed?: boolean;
  /** Adds the problem and significance blocks. Used on /projects. */
  detail?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const meta = [
    project.year ? String(project.year) : null,
    project.programmeLabel ?? null,
  ].filter((value): value is string => value !== null);

  return (
    <Reveal>
      <article
        id={project.slug}
        className="scroll-mt-[96px] border-t border-[var(--k-line)] pt-[var(--k-7)] grid gap-[var(--k-6)] md:grid-cols-12 md:gap-[var(--k-5)]"
      >
        <div
          className={`md:col-span-4 ${reversed ? "md:order-2 md:col-start-9" : "md:order-1"} flex flex-col gap-[var(--k-4)]`}
        >
          <div className="flex flex-wrap items-center gap-x-[var(--k-4)] gap-y-[var(--k-2)]">
            <StatusTag status={project.status} />
            {meta.map((item) => (
              <span key={item} className="k-meta">
                {item}
              </span>
            ))}
          </div>

          <div>
            <p className="k-meta">Capabilities</p>
            <ul className="mt-[var(--k-3)] grid gap-[var(--k-2)]">
              {project.capabilities.map((id) => (
                <li
                  key={id}
                  className="text-[var(--k-t-small)] leading-snug text-[var(--k-text-faint)]"
                >
                  {domainLabel(id)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`md:col-span-7 ${reversed ? "md:order-1 md:col-start-1" : "md:order-2"}`}
        >
          <Heading className="k-display text-[length:var(--k-t-h3)] text-[var(--k-text)]">
            {project.title}
          </Heading>
          <p className="k-body mt-[var(--k-4)] text-[var(--k-text)]">
            {project.summary}
          </p>

          {detail ? (
            <dl className="mt-[var(--k-6)] grid gap-[var(--k-5)] border-t border-[var(--k-line)] pt-[var(--k-5)]">
              <div>
                <dt className="k-meta">The problem</dt>
                <dd className="k-body mt-[var(--k-2)]">{project.problem}</dd>
              </div>
              <div>
                <dt className="k-meta">Why it matters</dt>
                <dd className="k-body mt-[var(--k-2)]">
                  {project.significance}
                </dd>
              </div>
            </dl>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}
