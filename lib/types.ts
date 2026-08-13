export type DomainGroupId = 'air' | 'machine' | 'silicon' | 'method';

export type ContentStatus = 'ready' | 'draft' | 'awaiting-content' | 'hidden';

export type GalleryMediaKind = 'image' | 'video' | 'clip' | 'cad' | 'document';

export interface GalleryItem {
  id: string;
  status: ContentStatus;
  kind: GalleryMediaKind;
  src?: string;
  poster?: string;
  alt: string;
  caption?: string;
  title?: string;
  href?: string;
  projectSlug?: Project['slug'];
  width?: number;
  height?: number;
  credit?: string;
  permissionConfirmed?: boolean;
}

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
  contentStatus?: ContentStatus;
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
  contentStatus?: ContentStatus;
}

export interface Achievement {
  id: string;
  title: string;
  detail: string;
  /** Renders as a mono note beneath the item. Used for documented ambiguity. */
  qualifier?: string;
}

/** Structured content shape for the optional interactive activity gallery. */
export interface AchievementGalleryItem {
  title: string;
  label: string;
  date?: string;
  category?: string;
  status: string;
  result?: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
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
  contentStatus?: ContentStatus;
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
  contentStatus?: ContentStatus;
}
