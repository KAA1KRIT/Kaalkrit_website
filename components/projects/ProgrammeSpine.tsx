import type { CSSProperties } from 'react';
import { programmeProjects } from '@/content/projects';
import { domainLabel } from '@/content/domains';
import { Reveal } from '@/components/ui/Reveal';
import { StatusTag } from '@/components/ui/StatusTag';

/**
 * The two NIDAR cycles presented as one continuous programme on a shared
 * spine. Numbering appears here because the order is real — 2026 is the
 * foundation for 2027. It appears nowhere that the order is decorative.
 */
export function ProgrammeSpine({ detail = false }: { detail?: boolean }) {
  return (
    <div className="grid gap-[var(--k-5)] md:grid-cols-12">
      <div className="md:col-span-3">
        <p className="k-meta">The aerial programme</p>
        <p className="k-body mt-[var(--k-3)] text-[var(--k-t-small)]">
          Two cycles, one spine. The second is built on the first by design.
        </p>
      </div>

      <div className="md:col-span-9 relative">
        {/* The scale rule, turned vertical, carrying the programme. */}
        <div
          aria-hidden="true"
          className="k-rule-v absolute left-0 top-[var(--k-2)] bottom-[var(--k-2)]"
          style={{ '--k-progress': '100%' } as CSSProperties}
        />

        <ol className="grid gap-[var(--k-8)] pl-[var(--k-6)]">
          {programmeProjects.map((project, index) => (
            <li key={project.slug} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(var(--k-6)+3px)] top-[10px] block size-[7px] rounded-[var(--k-radius-pill)] bg-[var(--k-signal)]"
              />
              <Reveal delay={index * 60}>
                <article id={detail ? project.slug : undefined} className="scroll-mt-[96px]">
                  <div className="flex flex-wrap items-baseline gap-x-[var(--k-4)] gap-y-[var(--k-1)]">
                    <span className="k-meta text-[var(--k-signal)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="k-meta">{project.programmeLabel}</span>
                    <StatusTag status={project.status} />
                  </div>

                  <h3 className="k-display mt-[var(--k-3)] text-[length:var(--k-t-h3)]">
                    {project.title}
                  </h3>
                  <p className="k-body mt-[var(--k-4)] text-[var(--k-text)]">{project.summary}</p>

                  {detail ? (
                    <dl className="mt-[var(--k-5)] grid gap-[var(--k-4)]">
                      <div>
                        <dt className="k-meta">The problem</dt>
                        <dd className="k-body mt-[var(--k-2)]">{project.problem}</dd>
                      </div>
                      <div>
                        <dt className="k-meta">Why it matters</dt>
                        <dd className="k-body mt-[var(--k-2)]">{project.significance}</dd>
                      </div>
                      <div>
                        <dt className="k-meta">Capabilities</dt>
                        <dd className="mt-[var(--k-2)] text-[var(--k-t-small)] text-[var(--k-text-faint)]">
                          {project.capabilities.map((id) => domainLabel(id)).join(' · ')}
                        </dd>
                      </div>
                    </dl>
                  ) : null}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
