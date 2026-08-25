import { describe, expect, it } from "vitest";
import { achievements } from "@/content/achievements";
import { domainGroups, domains, lifecycleStages } from "@/content/domains";
import { milestones } from "@/content/journey";
import { collaborationFocus } from "@/content/partners";
import { footerNav, primaryNav } from "@/content/navigation";
import { publicProjects } from "@/content/projects";
import { SITE, productionSiteUrl } from "@/content/site";
import { teamIdCards, teamMembers } from "@/content/team";
import {
  organizationSchema,
  pageMetadata,
  projectsSchema,
  serializeJsonLd,
  websiteSchema,
} from "@/lib/seo";

describe("central public content", () => {
  it("keeps the organization record complete", () => {
    expect(SITE.name).toBeTruthy();
    expect(SITE.description.length).toBeGreaterThan(40);
    expect(SITE.founded).toBe(2024);
    expect(SITE.parentOrganization).toContain("Sir");
  });

  it("keeps projects uniquely addressable and tied to documented domains", () => {
    expect(publicProjects).toHaveLength(5);
    expect(new Set(publicProjects.map((project) => project.slug)).size).toBe(
      publicProjects.length,
    );
    const domainIds = new Set(domains.map((domain) => domain.id));
    for (const project of publicProjects) {
      expect(project.title).toBeTruthy();
      expect(project.summary.length).toBeGreaterThan(30);
      expect(project.problem).toBeTruthy();
      expect(project.significance).toBeTruthy();
      expect(project.capabilities.length).toBeGreaterThan(0);
      project.capabilities.forEach((id) =>
        expect(domainIds.has(id)).toBe(true),
      );
    }
  });

  it("keeps the team roster and approved ID-card assets one-to-one", () => {
    expect(teamMembers).toHaveLength(10);
    expect(new Set(teamMembers.map((member) => member.name)).size).toBe(
      teamMembers.length,
    );
    expect(teamIdCards).toHaveLength(teamMembers.length);
    for (const member of teamIdCards) {
      expect(member.idCard.src).toMatch(/^\/images\/team\/id-cards\/.+\.webp$/);
      expect(member.idCard.alt).toContain(member.name);
      expect(member.idCard.width).toBeGreaterThan(0);
      expect(member.idCard.height).toBeGreaterThan(0);
    }
  });

  it("keeps journey, capabilities, partnership focus, and achievements usable", () => {
    expect(lifecycleStages).toHaveLength(9);
    expect(domainGroups).toHaveLength(4);
    expect(
      domains.every((domain) =>
        domainGroups.some((group) => group.id === domain.group),
      ),
    ).toBe(true);
    expect(
      milestones.every((milestone) => milestone.title && milestone.description),
    ).toBe(true);
    expect(collaborationFocus.every((item) => item.length > 20)).toBe(true);
    expect(new Set(achievements.map((item) => item.id)).size).toBe(
      achievements.length,
    );
  });

  it("keeps navigation on real internal routes", () => {
    [...primaryNav, ...footerNav].forEach((item) => {
      expect(item.label).toBeTruthy();
      expect(item.href.startsWith("/")).toBe(true);
      expect(item.href).not.toContain("#");
    });
  });
});

describe("SEO utilities", () => {
  it("creates safe route metadata for each published route", () => {
    const metadata = [
      pageMetadata({
        title: "Home",
        description: SITE.description,
        path: "/",
        fullTitle: "Team KAALKRIT",
      }),
      ...publicProjects.map((project) =>
        pageMetadata({
          title: project.title,
          description: project.summary,
          path: `/projects/${project.slug}`,
        }),
      ),
    ];
    metadata.forEach((entry) => {
      expect(entry.description).toBeTruthy();
      expect(entry.openGraph?.siteName).toBe(SITE.name);
      expect(entry.twitter).toMatchObject({ card: "summary_large_image" });
    });
  });

  it("serializes JSON-LD without allowing a script terminator", () => {
    expect(
      serializeJsonLd({ value: "</script><script>bad()</script>" }),
    ).not.toContain("</script>");
    expect(organizationSchema()).toMatchObject({
      "@type": "Organization",
      name: SITE.name,
    });
    expect(websiteSchema()).toMatchObject({
      "@type": "WebSite",
      name: SITE.name,
    });
    expect(projectsSchema().itemListElement).toHaveLength(
      publicProjects.length,
    );
  });

  it("accepts only safe HTTPS deployment URLs", () => {
    expect(productionSiteUrl("https://kaalkrit.vercel.app")).toBe(
      "https://kaalkrit.vercel.app",
    );
    [
      "http://kaalkrit.vercel.app",
      "https://localhost:3000",
      "https://example.com",
      "https://192.168.0.1",
    ].forEach((value) => {
      expect(productionSiteUrl(value)).toBeNull();
    });
  });
});
