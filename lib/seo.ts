import type { Metadata } from "next";
import { absoluteUrl, SITE, SOCIAL_LINKS } from "@/content/site";
import { publicProjects } from "@/content/projects";
import { teamMembers } from "@/content/team";

const TITLE_SUFFIX = "Team KAALKRIT";

export function pageMetadata({
  title,
  description,
  path,
  fullTitle,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  /** Use for the homepage, where the suffix would be redundant. */
  fullTitle?: string;
  /** Exclude content-incomplete routes from search results. */
  index?: boolean;
}): Metadata {
  const resolved = fullTitle ?? `${title} — ${TITLE_SUFFIX}`;
  const url = absoluteUrl(path);
  const socialImage = absoluteUrl("/opengraph-image.svg");

  return {
    // Absolute: `resolved` already carries the suffix, so the root
    // template must not append it a second time.
    title: { absolute: resolved },
    description,
    robots: { index, follow: true },
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title: resolved,
      description,
      ...(url ? { url } : {}),
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
      ...(socialImage
        ? {
            images: [
              {
                url: socialImage,
                width: 1200,
                height: 630,
                alt: "Team KAALKRIT — Engineering the Future Through Innovation, Autonomy, and Intelligent Systems.",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolved,
      description,
      ...(socialImage ? { images: [socialImage] } : {}),
    },
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

/** Organization schema with the two verified social profiles. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.legalName,
    description: SITE.description,
    email: SITE.email,
    ...(SITE.url ? { url: SITE.url } : {}),
    foundingDate: String(SITE.founded),
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: SITE.parentOrganization,
      alternateName: SITE.parentShortName,
    },
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressCountry: "IN",
      },
    },
    ...(SOCIAL_LINKS.length > 0
      ? { sameAs: SOCIAL_LINKS.map((link) => link.href) }
      : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    description: SITE.description,
    ...(SITE.url ? { url: SITE.url } : {}),
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

export function projectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Team KAALKRIT projects",
    itemListElement: publicProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        creator: { "@type": "Organization", name: SITE.name },
        ...(absoluteUrl(`/projects/${project.slug}`)
          ? { url: absoluteUrl(`/projects/${project.slug}`) }
          : {}),
      },
    })),
  };
}

/** Emits nothing while the roster is empty (G1). */
export function teamSchema() {
  if (teamMembers.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: teamMembers.map((member, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        worksFor: { "@type": "Organization", name: SITE.name },
        ...(member.links && member.links.length > 0
          ? { sameAs: member.links.map((link) => link.href) }
          : {}),
      },
    })),
  };
}
