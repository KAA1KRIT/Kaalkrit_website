import type { CollaborationMode } from '@/lib/types';

/**
 * Collaboration modes only. No tier table, no logo placement promise, no
 * ask amount — the documentation defines none of those (gap G7), and a
 * sponsor's diligence check must not find an unsupported number.
 */
export const collaborationModes: CollaborationMode[] = [
  {
    id: 'engineering',
    title: 'Engineering collaboration',
    description: 'Explore a focused engineering conversation around autonomous systems, robotics, embedded systems or software.',
    subject: 'KAALKRIT — engineering collaboration',
  },
  {
    id: 'hardware',
    title: 'Hardware and electronics',
    description: 'Discuss engineering needs around airframes, electronics, sensors, control systems and rapid prototyping.',
    subject: 'KAALKRIT — hardware and electronics',
  },
  {
    id: 'mentorship',
    title: 'Engineering mentorship',
    description:
      'Share engineering perspective around flight control, embedded systems, manufacturing or related disciplines.',
    subject: 'KAALKRIT — engineering mentorship',
  },
  {
    id: 'research',
    title: 'Research collaboration',
    description:
      'Explore shared research questions in autonomy, computer vision, embedded systems or robotics.',
    subject: 'KAALKRIT — research collaboration',
  },
];

/**
 * Target sectors (F13). Stated once, as intended application areas —
 * never as deployments.
 */
export const targetSectors: string[] = [
  'Agriculture',
  'Healthcare',
  'Infrastructure inspection',
  'Environmental monitoring',
  'Disaster response',
  'Logistics',
  'Manufacturing',
  'Smart cities',
];

/** Forward research directions (F12). Direction, not roadmap. */
export const futureDirections: string[] = [
  'Swarm intelligence',
  'Computer-vision-driven autonomy',
  'Advanced embedded platforms',
  'Intelligent robotic manipulators',
  'Integrated autonomous ecosystems',
];
