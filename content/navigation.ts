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
  { label: 'Work', href: '/projects' },
  { label: 'Team', href: '/team' },
  { label: 'Journey', href: '/journey' },
  { label: 'Contact', href: '/contact' },
];

/** Kept for footer/test compatibility; the top bar is intentionally direct. */
export const flyoutNavigation: readonly FlyoutNavigationGroup[] = [];

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
