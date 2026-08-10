import type { Project } from '@/lib/types';

/**
 * Five documented systems (F5–F9). Every field is a restatement of
 * documentation.md — no capability, date or outcome is added.
 */
export const projects: Project[] = [
  {
    slug: 'uas-nidar-2026',
    title: 'Autonomous Unmanned Aerial System',
    shortTitle: 'Autonomous UAS',
    programme: 'nidar-2026',
    programmeLabel: 'NIDAR 2026',
    status: 'completed',
    year: 2026,
    summary:
      'A fully integrated unmanned aerial system, designed and built end to end: airframe, embedded electronics, flight controller integration, mission planning, payload management and autonomous flight.',
    problem: 'Documented engineering scope: bringing airframe design, embedded electronics, flight control, mission planning and payload management into one autonomous system.',
    significance: 'Represents KAALKRIT’s full-lifecycle work across design, integration, software, testing and autonomous flight.',
    capabilities: ['uas', 'flight-control', 'embedded', 'mechanical', 'pcb'],
  },
  {
    slug: 'airmos',
    title: 'AirMOS',
    shortTitle: 'AirMOS',
    programme: 'nidar-2027',
    programmeLabel: 'NIDAR 2027',
    status: 'in-development',
    year: 2027,
    summary: 'Currently in development; advanced sensing, autonomy and mission-oriented design.',
    problem: 'Documented engineering scope: advanced sensing, autonomy and mission-oriented design for the next aerial programme cycle.',
    significance: 'Continues the NIDAR aerial programme into 2027.',
    capabilities: ['uas', 'drone-tech', 'flight-control', 'sensors', 'ai-cv'],
  },
  {
    slug: 'build-with-hardware',
    title: 'Build With Hardware',
    shortTitle: 'BWH',
    status: 'in-development',
    summary:
      'The team’s flagship engineering platform: structured learning, practical hardware projects, technical documentation, collaborative workspaces and AI-powered engineering assistance in one environment.',
    problem: 'Documented platform scope: structured learning, projects, documentation, collaborative workspaces and AI-powered engineering assistance.',
    significance: 'Extends KAALKRIT’s engineering practice into a flagship learning and collaboration platform.',
    capabilities: ['software', 'ai-cv', 'research', 'embedded'],
  },
  {
    slug: 'robotic-arm',
    title: 'Intelligent Robotic Arm',
    shortTitle: 'Robotic Arm',
    status: 'in-development',
    summary:
      'A servo-driven manipulator in development, combining mechanical engineering, electronics and control algorithms for precision motion.',
    problem: 'Documented engineering scope: servo control, precision motion and control algorithms.',
    significance: 'Applies mechanical design, electronics and control to an intelligent robotic arm.',
    capabilities: ['robotics', 'mechanical', 'embedded', 'sensors'],
  },
  {
    slug: 'robot-vacuum',
    title: 'Autonomous Robot Vacuum Cleaner',
    shortTitle: 'Robot Vacuum',
    status: 'completed',
    summary: 'Developed system covering navigation, obstacle detection, motion control, sensor integration and autonomous mobility.',
    problem: 'Documented engineering scope: navigation, obstacle detection, motion control, sensor integration and autonomous mobility.',
    significance: 'Demonstrates autonomous robotics beyond the aerial programme.',
    capabilities: ['robotics', 'sensors', 'embedded', 'ai-cv'],
  },
];

const bySlug = new Map(projects.map((project) => [project.slug, project]));

export function getProject(slug: string): Project | undefined {
  return bySlug.get(slug);
}

/** The two-cycle aerial programme, in sequence. */
export const programmeProjects = projects.filter((project) => project.programme !== undefined);

/** The paired ground-robotics track. */
export const roboticsProjects = projects.filter((project) =>
  ['robotic-arm', 'robot-vacuum'].includes(project.slug),
);

export const platformProject = getProject('build-with-hardware');

export const statusLabel: Record<Project['status'], string> = {
  completed: 'Built',
  'in-development': 'In development',
};
