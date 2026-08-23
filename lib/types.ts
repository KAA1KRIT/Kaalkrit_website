export type DomainGroupId = "air" | "machine" | "silicon" | "method";

export type DomainId =
  | "uas"
  | "drone-tech"
  | "flight-control"
  | "robotics"
  | "mechanical"
  | "sensors"
  | "embedded"
  | "pcb"
  | "ai-cv"
  | "software"
  | "research";

export interface Domain {
  id: DomainId;
  label: string;
  group: DomainGroupId;
}

export interface DomainGroup {
  id: DomainGroupId;
  label: string;
  /** One line of editorial framing. Adds no claim beyond F4. */
  note: string;
}

export type ProjectStatus = "completed" | "in-development";

export type ProgrammeId = "nidar-2026" | "nidar-2027";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  programme?: ProgrammeId;
  programmeLabel?: string;
  status: ProjectStatus;
  /** what it is */
  summary: string;
  /** what problem it addresses */
  problem: string;
  /** why it matters */
  significance: string;
  /** must exist in content/domains.ts */
  capabilities: DomainId[];
  year?: number;
  media?: MediaAsset;
}

export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TeamMember {
  name: string;
  role: string;
  area?: string;
}

export interface LegalPageContent {
  title: string;
  description: string;
  sections: Array<{ heading: string; body: string }>;
}

export type MilestoneKind =
  "founding" | "competition" | "project" | "achievement" | "forward";

export interface Milestone {
  id: string;
  year: number | null;
  yearLabel: string;
  title: string;
  description: string;
  kind: MilestoneKind;
}

export interface Achievement {
  id: string;
  title: string;
  detail: string;
  /** Renders as a mono note beneath the item. Used for documented ambiguity. */
  qualifier?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
