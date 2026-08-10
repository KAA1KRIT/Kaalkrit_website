export type DomainGroupId = 'air' | 'machine' | 'silicon' | 'method';

export type DomainId =
  | 'uas'
  | 'drone-tech'
  | 'flight-control'
  | 'robotics'
  | 'mechanical'
  | 'sensors'
  | 'embedded'
  | 'pcb'
  | 'ai-cv'
  | 'software'
  | 'research';

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

export type ProjectStatus = 'completed' | 'in-development';

export type ProgrammeId = 'nidar-2026' | 'nidar-2027';

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

export type MilestoneKind = 'founding' | 'competition' | 'project' | 'achievement' | 'forward';

export interface Milestone {
  id: string;
  year: number | null;
  yearLabel: string;
  title: string;
  description: string;
  projectSlug?: Project['slug'];
  kind: MilestoneKind;
}

export interface Achievement {
  id: string;
  title: string;
  detail: string;
  /** Renders as a mono note beneath the item. Used for documented ambiguity. */
  qualifier?: string;
}

export type DivisionId = DomainGroupId;

export type MemberTier = 'leadership' | 'core' | 'faculty' | 'alumni';

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  division: DivisionId;
  tier: MemberTier;
  responsibilities: string[];
  skills: string[];
  projects: Project['slug'][];
  links?: { label: string; href: string }[];
  photo?: MediaAsset;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CollaborationMode {
  id: string;
  title: string;
  description: string;
  /** Preset mailto subject, so an enquiry arrives already classified. */
  subject: string;
}

export interface ProofPoint {
  value: string;
  statement: string;
}
