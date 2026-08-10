import type { Achievement, ProofPoint } from '@/lib/types';

/**
 * Two verified achievements (F10, F11). Two honest items outrank six
 * padded ones — the remaining bullets in documentation.md restate
 * capability rather than record an outcome, so they live in Domains
 * and Projects instead.
 */
export const achievements: Achievement[] = [
  {
    id: 'business-evaluation',
    title: '11th place — Business Evaluation',
    detail: 'Placed 11th in Business Evaluation at a national-level competition.',
  },
  {
    id: 'national-representation',
    title: 'National-level drone innovation competitions',
    detail: 'Represented Sir MVIT at national-level drone innovation competitions.',
  },
];

/**
 * Substitutes for the impact-statistics row. The documentation records no
 * team size, flight hours, budget or event dates (gap G5), so these are
 * counts of documented work — statements, not animated counters.
 */
export const proofPoints: ProofPoint[] = [
  { value: '05', statement: 'Documented systems across aerial, robotics and learning work' },
  { value: '02', statement: 'NIDAR cycles in one continuous programme' },
  { value: '01', statement: 'Flagship hardware-learning platform in development' },
  { value: '09', statement: 'Lifecycle stages spanning research through validation' },
];
