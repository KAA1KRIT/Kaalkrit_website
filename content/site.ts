const EXAMPLE_DOMAIN = ["example", "com"].join(".");
const INVALID_DOMAIN_SUFFIX = "." + "invalid";

export function productionSiteUrl(value: string | undefined): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    const privateHost =
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "0.0.0.0" ||
      url.hostname === "::1" ||
      url.hostname === EXAMPLE_DOMAIN ||
      url.hostname.endsWith(INVALID_DOMAIN_SUFFIX) ||
      /^10\./.test(url.hostname) ||
      /^192\.168\./.test(url.hostname) ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(url.hostname) ||
      (url.hostname.endsWith(".vercel.app") &&
        url.hostname !== "kaalkrit.vercel.app");

    return url.protocol === "https:" && !privateHost ? url.origin : null;
  } catch {
    return null;
  }
}

function configuredProductionSiteUrl(): string | null {
  // Vercel makes configured environment variables available to previews too.
  // Never emit the production canonical origin from a preview deployment.
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return null;
  }

  return productionSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
}

export const ANALYTICS_ENABLED =
  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

/** The verified public channel for enquiries and collaboration conversations. */
export const PUBLIC_CONTACT = {
  label: "Instagram",
  href: "https://www.instagram.com/team_kaalkrit/",
  ariaLabel: "Open Team KAALKRIT on Instagram",
} as const;

export const SITE = {
  name: "Team KAALKRIT",
  legalName: "Team KAALKRIT",
  parentOrganization: "Sir M. Visvesvaraya Institute of Technology",
  parentShortName: "Sir MVIT",
  location: "Bengaluru",
  founded: 2024,
  url: configuredProductionSiteUrl(),
  contact: PUBLIC_CONTACT,
  description:
    "Team KAALKRIT is the official Drone & Robotics Innovation Team of Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru. Established in 2024, it brings autonomous systems, robotics, embedded technology, AI, and software together through practical engineering.",
  mission:
    "To turn research, experimentation, and multidisciplinary engineering into autonomous systems and intelligent technology with real-world relevance.",
} as const;

export function absoluteUrl(path: string): string | undefined {
  return SITE.url ? new URL(path, SITE.url).toString() : undefined;
}
