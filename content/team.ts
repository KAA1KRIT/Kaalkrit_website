import type { DivisionId, TeamMember } from "@/lib/types";
import { domainGroups } from "./domains";

export const teamMembers: TeamMember[] = Array.from(
  { length: 10 },
  (_, index) => ({
    slug: `team-member-${index + 1}`,
    name: `[TEAM MEMBER NAME PLACEHOLDER ${index + 1}]`,
    role: `[TEAM MEMBER ROLE PLACEHOLDER ${index + 1}]`,
    division: (["air", "machine", "silicon", "method"] as DivisionId[])[
      index % 4
    ]!,
    tier: index < 2 ? "leadership" : "core",
    responsibilities: [`[TEAM MEMBER RESPONSIBILITY PLACEHOLDER ${index + 1}]`],
    skills: [`[TEAM MEMBER SKILL PLACEHOLDER ${index + 1}]`],
    projects: [],
    contentStatus: "ready",
  }),
);

export const hasRoster = teamMembers.length > 0;
export const divisions: { id: DivisionId; label: string; note: string }[] =
  domainGroups;
export const tierOrder = ["leadership", "core", "faculty", "alumni"] as const;
export const tierLabels: Record<(typeof tierOrder)[number], string> = {
  leadership: "[TEAM TIER PLACEHOLDER 1]",
  core: "[TEAM TIER PLACEHOLDER 2]",
  faculty: "[TEAM TIER PLACEHOLDER 3]",
  alumni: "[TEAM TIER PLACEHOLDER 4]",
};

export function membersByDivision(division: DivisionId): TeamMember[] {
  return teamMembers.filter((member) => member.division === division);
}
