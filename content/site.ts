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
  name: "Team KAALKRIT",
  legalName: "Team KAALKRIT",
  parentOrganization: "Sir M. Visvesvaraya Institute of Technology",
  parentShortName: "Sir MVIT",
  location: "Bengaluru",
  founded: 2024,
  url: productionSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  description:
    "Team KAALKRIT is the official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru — building autonomous aerial systems, robotics, and intelligent engineering solutions.",
} as const;

export function absoluteUrl(path: string): string | undefined {
  return SITE.url ? new URL(path, SITE.url).toString() : undefined;
}
