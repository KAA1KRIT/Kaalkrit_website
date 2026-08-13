import type { NavItem } from '@/lib/types';

export type FlyoutNavigationItem = {
  label: string;
  href: string;
  description: string;
};

export type FlyoutNavigationGroup = {
  id: 'work' | 'capabilities';
  label: string;
  ariaLabel: string;
  items: readonly FlyoutNavigationItem[];
};
export const primaryNav: NavItem[] = [
  { label: 'Work', href: '/#projects' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Projects', href: '/projects' },
  { label: 'Journey', href: '/journey' },
  { label: 'Contact', href: '/#partnership' },
];

/** Desktop-only navigation groups. Each destination is already public. */
export const flyoutNavigation: readonly FlyoutNavigationGroup[] = [
  {
    id: 'work',
    label: 'Work',
    ariaLabel: "Explore KAALKRIT's work",
    items: [
      {
        label: 'Current work',
        href: '/#projects',
        description: "Explore KAALKRIT's public project overview.",
      },
      {
        label: 'Project portfolio',
        href: '/projects',
        description: 'View the documented records for current projects.',
      },
    ],
  },
  {
    id: 'capabilities',
    label: 'Capabilities',
    ariaLabel: 'Explore KAALKRIT capabilities',
    items: [
      {
        label: 'Capability index',
        href: '/#capabilities',
        description: 'Browse the engineering disciplines that shape each system.',
      },
      {
        label: 'Journey',
        href: '/journey',
        description: "Read KAALKRIT's documented journey so far.",
      },
    ],
  },
];

export const footerNav: NavItem[] = [
  { label: 'Work', href: '/#projects' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Projects', href: '/projects' },
  { label: 'Journey', href: '/journey' },
  { label: 'Team', href: '/team' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
];

export const sectionNav: NavItem[] = [
  { label: 'Partner with us', href: '/#partnership' },
  { label: 'Join KAALKRIT', href: '/#join' },
];
