"use client";

import { useMemo, useState } from "react";
import type { DivisionId, TeamMember } from "@/lib/types";
import { divisions, tierLabels, tierOrder } from "@/content/team";
import { getPublicProject } from "@/content/projects";

type Filter = DivisionId | "all";

/**
 * Department-led and editorial, not a uniform grid. The filter is a real
 * control: keyboard-operable, 44px targets, and it never hides the tier
 * headings that give the roster its structure.
 */
export function TeamRoster({ members }: { members: TeamMember[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const available = useMemo(() => {
    const present = new Set(members.map((member) => member.division));
    return divisions.filter((division) => present.has(division.id));
  }, [members]);

  const visible =
    filter === "all" ? members : members.filter((m) => m.division === filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter by division"
        className="flex flex-wrap gap-[var(--k-2)]"
      >
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
          All ({members.length})
        </FilterChip>
        {available.map((division) => (
          <FilterChip
            key={division.id}
            active={filter === division.id}
            onClick={() => setFilter(division.id)}
          >
            {division.label} (
            {members.filter((m) => m.division === division.id).length})
          </FilterChip>
        ))}
      </div>

      <div className="mt-[var(--k-9)] grid gap-[var(--k-9)]">
        {tierOrder.map((tier) => {
          const tierMembers = visible.filter((member) => member.tier === tier);
          if (tierMembers.length === 0) return null;

          return (
            <section key={tier} aria-labelledby={`tier-${tier}`}>
              <div className="k-rule" />
              <h2
                id={`tier-${tier}`}
                className="k-display mt-[var(--k-5)] text-[length:var(--k-t-h3)]"
              >
                {tierLabels[tier]}
              </h2>

              <ul className="mt-[var(--k-7)] grid gap-px bg-[var(--k-line)] border-y border-[var(--k-line)]">
                {tierMembers.map((member) => {
                  const open = openSlug === member.slug;
                  const publicProjectTitles = member.projects
                    .map((slug) => getPublicProject(slug)?.shortTitle)
                    .filter((title): title is string => Boolean(title));
                  return (
                    <li key={member.slug} className="bg-[var(--k-void)]">
                      <div className="grid gap-[var(--k-3)] py-[var(--k-5)] md:grid-cols-12 md:items-baseline md:gap-[var(--k-5)]">
                        <p className="md:col-span-4 text-[length:var(--k-t-lede)] text-[var(--k-text)]">
                          {member.name}
                        </p>
                        <p className="k-meta md:col-span-4">{member.role}</p>
                        <p className="k-meta md:col-span-2">
                          {
                            divisions.find((d) => d.id === member.division)
                              ?.label
                          }
                        </p>
                        <div className="md:col-span-2 md:justify-self-end">
                          <button
                            type="button"
                            aria-expanded={open}
                            aria-controls={`member-${member.slug}`}
                            onClick={() =>
                              setOpenSlug(open ? null : member.slug)
                            }
                            className="inline-flex items-center min-h-[44px] px-[var(--k-2)] -mx-[var(--k-2)] text-[var(--k-t-small)] text-[var(--k-text-muted)] hover:text-[var(--k-signal)] transition-colors duration-[var(--k-dur-fast)]"
                          >
                            {open ? "Close" : "Detail"}
                          </button>
                        </div>
                      </div>

                      <div
                        id={`member-${member.slug}`}
                        hidden={!open}
                        className="pb-[var(--k-6)] grid gap-[var(--k-5)] md:grid-cols-12 md:gap-[var(--k-5)]"
                      >
                        <dl className="md:col-span-8 md:col-start-5 grid gap-[var(--k-4)]">
                          {member.responsibilities.length > 0 ? (
                            <div>
                              <dt className="k-meta">Owns</dt>
                              <dd className="k-body mt-[var(--k-2)] text-[var(--k-t-small)]">
                                {member.responsibilities.join(" · ")}
                              </dd>
                            </div>
                          ) : null}
                          {member.skills.length > 0 ? (
                            <div>
                              <dt className="k-meta">Skills</dt>
                              <dd className="k-body mt-[var(--k-2)] text-[var(--k-t-small)]">
                                {member.skills.join(" · ")}
                              </dd>
                            </div>
                          ) : null}
                          {publicProjectTitles.length > 0 ? (
                            <div>
                              <dt className="k-meta">Projects</dt>
                              <dd className="k-body mt-[var(--k-2)] text-[var(--k-t-small)]">
                                {publicProjectTitles.join(" · ")}
                              </dd>
                            </div>
                          ) : null}
                          {member.links && member.links.length > 0 ? (
                            <div>
                              <dt className="k-meta">Elsewhere</dt>
                              <dd className="mt-[var(--k-2)] flex flex-wrap gap-[var(--k-4)]">
                                {member.links.map((link) => (
                                  <a
                                    key={link.href}
                                    href={link.href}
                                    rel="noreferrer noopener"
                                    target="_blank"
                                    className="inline-flex items-center min-h-[44px] text-[var(--k-t-small)] text-[var(--k-text)] underline decoration-[var(--k-line-strong)] underline-offset-4 hover:decoration-[var(--k-signal)]"
                                  >
                                    {link.label}
                                  </a>
                                ))}
                              </dd>
                            </div>
                          ) : null}
                        </dl>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center min-h-[44px] px-[var(--k-4)] rounded-[var(--k-radius-pill)] border text-[var(--k-t-small)] transition-colors duration-[var(--k-dur-fast)] ${
        active
          ? "border-[var(--k-signal)] text-[var(--k-signal)] bg-[var(--k-signal-dim)]"
          : "border-[var(--k-line)] text-[var(--k-text-muted)] hover:border-[var(--k-line-strong)] hover:text-[var(--k-text)]"
      }`}
    >
      {children}
    </button>
  );
}
