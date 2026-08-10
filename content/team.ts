import type { TeamMember, DivisionId } from '@/lib/types';
import { domainGroups } from './domains';

/**
 * Documented gap G1: the source documentation names no team member, role,
 * leadership position, faculty member or mentor. Nothing is inferred and
 * nothing is placeholdered.
 *
 * Add entries here and the roster renders, /team joins the navigation and
 * the sitemap, and Person structured data is emitted — no other change is
 * required. The TeamMember interface doubles as the collection form:
 * one field per line, filled in by each member.
 */
export const teamMembers: TeamMember[] = [];

export const hasRoster = teamMembers.length > 0;

/** Divisions mirror the documented capability groupings (F4). */
export const divisions: { id: DivisionId; label: string; note: string }[] = domainGroups;

export const tierOrder = ['leadership', 'core', 'faculty', 'alumni'] as const;

export const tierLabels: Record<(typeof tierOrder)[number], string> = {
  leadership: 'Leadership',
  core: 'Core engineering',
  faculty: 'Faculty and mentors',
  alumni: 'Alumni',
};

export function membersByDivision(division: DivisionId): TeamMember[] {
  return teamMembers.filter((member) => member.division === division);
}
