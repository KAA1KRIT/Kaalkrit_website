import type { Achievement } from '@/lib/types';

/**
 * Verified public achievements. Exact event details remain a launch-content
 * requirement and must not be inferred here.
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
