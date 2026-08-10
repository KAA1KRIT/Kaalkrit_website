export type SocialLink = {
  label: 'Instagram' | 'X';
  href: string;
  ariaLabel: string;
};

export const SITE = {
  name: 'KAALKRIT',
  legalName: 'Team KAALKRIT',
  parentOrganization: 'Sir M. Visvesvaraya Institute of Technology',
  parentShortName: 'Sir MVIT',
  location: 'Bengaluru, India',
  founded: 2024,
  email: 'teamkaalkrit@gmail.com',
  instagram: 'https://www.instagram.com/team_kaalkrit/',
  x: 'https://x.com/KAALKRit',
  /** Set NEXT_PUBLIC_SITE_URL at deployment time; never use a placeholder. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? null,
  description:
    'KAALKRIT is the official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology, Bengaluru. We engineer autonomous aerial systems, robotics, embedded systems, AI and software.',
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    href: SITE.instagram,
    ariaLabel: 'Follow Team KAALKRIT on Instagram',
  },
  {
    label: 'X',
    href: SITE.x,
    ariaLabel: 'Follow Team KAALKRIT on X',
  },
];

export function absoluteUrl(path: string): string | undefined {
  return SITE.url ? new URL(path, SITE.url).toString() : undefined;
}

export function mailto(subject: string): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}
