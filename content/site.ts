export type SocialLink = {
  label: string;
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
  name: "[SITE NAME PLACEHOLDER]",
  legalName: "[LEGAL ENTITY NAME PLACEHOLDER]",
  parentOrganization: "[PARENT ORGANIZATION PLACEHOLDER]",
  parentShortName: "[PARENT ORGANIZATION SHORT NAME PLACEHOLDER]",
  location: "[LOCATION PLACEHOLDER]",
  founded: "[FOUNDED YEAR PLACEHOLDER]",
  email: "[EMAIL PLACEHOLDER]",
  instagram: "https://social-link-placeholder.invalid/instagram",
  x: "https://social-link-placeholder.invalid/x",
  url: productionSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  description: "[SITE DESCRIPTION PLACEHOLDER]",
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "[SOCIAL PLATFORM PLACEHOLDER 1]",
    href: SITE.instagram,
    ariaLabel: "[SOCIAL LINK ARIA LABEL PLACEHOLDER 1]",
  },
  {
    label: "[SOCIAL PLATFORM PLACEHOLDER 2]",
    href: SITE.x,
    ariaLabel: "[SOCIAL LINK ARIA LABEL PLACEHOLDER 2]",
  },
];

export function absoluteUrl(path: string): string | undefined {
  return SITE.url ? new URL(path, SITE.url).toString() : undefined;
}

export function mailto(subject: string): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}
