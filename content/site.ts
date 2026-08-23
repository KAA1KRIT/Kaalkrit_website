export type SocialLink = {
  label: "Instagram" | "X";
  href: string;
  ariaLabel: string;
};

function productionSiteUrl(value: string | undefined): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    const privateHost =
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "0.0.0.0" ||
      url.hostname === "::1" ||
      /^10\./.test(url.hostname) ||
      /^192\.168\./.test(url.hostname) ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(url.hostname);

    return url.protocol === "https:" && !privateHost ? url.origin : null;
  } catch {
    return null;
  }
}

export const ANALYTICS_ENABLED =
  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

export const SITE = {
  name: "KAALKRIT",
  legalName: "Team KAALKRIT",
  parentOrganization: "Sir M. Visvesvaraya Institute of Technology",
  parentShortName: "Sir MVIT",
  location: "Bengaluru, India",
  founded: 2024,
  email: "teamkaalkrit@gmail.com",
  instagram: "https://www.instagram.com/team_kaalkrit/",
  x: "https://x.com/KAALKRit",
  /** Set NEXT_PUBLIC_SITE_URL at deployment time; never use a placeholder. */
  url: productionSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  description:
    "KAALKRIT is the official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology, Bengaluru. We engineer autonomous aerial systems, robotics, embedded systems, AI and software.",
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Instagram",
    href: SITE.instagram,
    ariaLabel: "Follow Team KAALKRIT on Instagram",
  },
  {
    label: "X",
    href: SITE.x,
    ariaLabel: "Follow Team KAALKRIT on X",
  },
];

export function absoluteUrl(path: string): string | undefined {
  return SITE.url ? new URL(path, SITE.url).toString() : undefined;
}

export function mailto(subject: string): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}
