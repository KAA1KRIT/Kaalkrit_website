import { platformProject } from "@/content/projects";
import { domainLabel } from "@/content/domains";
import { Reveal } from "@/components/ui/Reveal";
import { StatusTag } from "@/components/ui/StatusTag";

export function PlatformFeature({ detail = false }: { detail?: boolean }) {
  const project = platformProject;
  if (!project) return null;

  return (
    <Reveal>
      <article
        id={project.slug}
        className="scroll-mt-[96px] border border-[var(--k-line)] bg-[var(--k-surface)] rounded-[var(--k-radius)] p-[var(--k-6)] md:p-[var(--k-8)]"
      >
        <div className="flex flex-wrap items-center gap-x-[var(--k-4)] gap-y-[var(--k-2)]">
          <p className="k-meta text-[var(--k-signal)]">Platform</p>
          <StatusTag status={project.status} />
        </div>

        <div className="mt-[var(--k-5)] grid gap-[var(--k-6)] md:grid-cols-12 md:gap-[var(--k-5)]">
          <div className="md:col-span-7">
            <h3 className="k-display text-[length:var(--k-t-h2)]">
              {project.title}
            </h3>
            <p className="k-lede mt-[var(--k-5)] text-[var(--k-text)]">
              {project.summary}
            </p>
            {detail ? (
              <>
                <p className="k-body mt-[var(--k-5)]">{project.problem}</p>
                <p className="k-body mt-[var(--k-4)]">{project.significance}</p>
              </>
            ) : null}
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="k-meta">Designed around</p>
            <ul className="mt-[var(--k-3)] grid gap-[var(--k-2)] text-[var(--k-t-small)] text-[var(--k-text-muted)]">
              <li>Structured learning</li>
              <li>Practical hardware projects</li>
              <li>Technical documentation</li>
              <li>Collaborative workspaces</li>
              <li>AI-powered engineering assistance</li>
            </ul>

            <p className="k-meta mt-[var(--k-6)]">Capabilities</p>
            <ul className="mt-[var(--k-3)] grid gap-[var(--k-2)] text-[var(--k-t-small)] text-[var(--k-text-faint)]">
              {project.capabilities.map((id) => (
                <li key={id}>{domainLabel(id)}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
