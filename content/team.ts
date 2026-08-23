import type { TeamMember, DivisionId } from "@/lib/types";
import { domainGroups } from "./domains";

/**
 * Public roster from "Team KAALKRIT — Project & Team Overview".
 * The PDF labels some LinkedIn profiles, but does not provide actual URLs;
 * no placeholder links are added. Portraits remain absent until approved
 * images and consent records are supplied.
 */
export const teamMembers: TeamMember[] = [
  {
    slug: "rajeev-tiwari",
    name: "Rajeev Tiwari",
    role: "Technical Lead — Development & Engineering",
    division: "silicon",
    tier: "leadership",
    responsibilities: ["Development", "Engineering"],
    skills: [],
    projects: [],
    contentStatus: "ready",
  },
  {
    slug: "ankur-pathak",
    name: "Ankur Pathak",
    role: "Business, Marketing & Outreach Lead",
    division: "method",
    tier: "leadership",
    responsibilities: ["Business", "Marketing", "Outreach"],
    skills: [],
    projects: [],
    contentStatus: "ready",
  },
  {
    slug: "shantanu-pawade",
    name: "Shantanu Pawade",
    role: "Design Support",
    division: "method",
    tier: "core",
    responsibilities: ["Design support"],
    skills: [],
    projects: [],
    contentStatus: "ready",
  },
  {
    slug: "manas-yadu",
    name: "Manas Yadu",
    role: "Technical Team",
    division: "method",
    tier: "core",
    responsibilities: ["Technical team"],
    skills: [],
    projects: [],
    contentStatus: "ready",
  },
  {
    slug: "raunit-singh",
    name: "Raunit Singh",
    role: "Technical Team",
    division: "method",
    tier: "core",
    responsibilities: ["Technical team"],
    skills: [],
    projects: [],
    contentStatus: "ready",
  },
  {
    slug: "shubham-kumar",
    name: "Shubham Kumar",
    role: "Sponsorship & Social Media",
    division: "method",
    tier: "core",
    responsibilities: ["Sponsorship", "Social media"],
    skills: [],
    projects: [],
    contentStatus: "ready",
  },
  {
    slug: "aditi-kiran",
    name: "Aditi Kiran",
    role: "Content Planning & Management",
    division: "method",
    tier: "core",
    responsibilities: ["Content planning", "Content management"],
    skills: [],
    projects: [],
    contentStatus: "ready",
  },
  {
    slug: "hardhik-bhatia",
    name: "Hardhik Bhatia",
    role: "Video Production & Editing",
    division: "method",
    tier: "core",
    responsibilities: ["Video production", "Editing"],
    skills: [],
    projects: [],
    contentStatus: "ready",
  },
  {
    slug: "suraj-verma",
    name: "Suraj Verma",
    role: "Design & Creatives",
    division: "method",
    tier: "core",
    responsibilities: ["Design", "Creatives"],
    skills: [],
    projects: [],
    contentStatus: "ready",
  },
  {
    slug: "kaavya-sharma",
    name: "Kaavya Sharma",
    role: "Design & Creatives",
    division: "method",
    tier: "core",
    responsibilities: ["Design", "Creatives"],
    skills: [],
    projects: [],
    contentStatus: "ready",
  },
];

export const hasRoster = teamMembers.length > 0;

/** Divisions mirror the documented capability groupings (F4). */
export const divisions: { id: DivisionId; label: string; note: string }[] =
  domainGroups;

export const tierOrder = ["leadership", "core", "faculty", "alumni"] as const;

export const tierLabels: Record<(typeof tierOrder)[number], string> = {
  leadership: "Leadership",
  core: "Core engineering",
  faculty: "Faculty and mentors",
  alumni: "Alumni",
};

export function membersByDivision(division: DivisionId): TeamMember[] {
  return teamMembers.filter((member) => member.division === division);
}
