import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { readyGalleryItems } from "../content/gallery.ts";
import { primaryNav, footerNav, sectionNav } from "../content/navigation.ts";
import { domains } from "../content/domains.ts";
import { projects } from "../content/projects.ts";
import { mailto, SITE, SOCIAL_LINKS } from "../content/site.ts";

test("verified public contact channels remain exact", () => {
  assert.equal(SITE.email, "teamkaalkrit@gmail.com");
  assert.equal(SITE.instagram, "https://www.instagram.com/team_kaalkrit/");
  assert.equal(SITE.x, "https://x.com/KAALKRit");
  assert.deepEqual(
    SOCIAL_LINKS.map(({ href }) => href),
    [SITE.instagram, SITE.x],
  );
  assert.equal(
    mailto("Partnership with Team KAALKRIT"),
    "mailto:teamkaalkrit@gmail.com?subject=Partnership%20with%20Team%20KAALKRIT",
  );
});

test("navigation contains only real local, mail, or verified social destinations", () => {
  const links = [...primaryNav, ...footerNav, ...sectionNav];
  for (const { href } of links) {
    assert.ok(!href.includes("localhost") && !href.includes("example.com"));
    assert.ok(href.startsWith("/") || href.startsWith("mailto:"));
    if (href.startsWith("/#")) continue;
    const route = href.split("#")[0];
    if (route === "/") continue;
    assert.ok(existsSync(`app${route}/page.tsx`), `Missing route for ${href}`);
  }
});

test("project records are unique, public-ready, and use documented domains", () => {
  const slugs = new Set();
  const domainIds = new Set(domains.map(({ id }) => id));
  for (const project of projects) {
    assert.equal(project.contentStatus, "ready");
    assert.ok(
      !slugs.has(project.slug),
      `Duplicate project slug: ${project.slug}`,
    );
    slugs.add(project.slug);
    assert.ok(existsSync("app/projects/[slug]/page.tsx"));
    project.capabilities.forEach((capability) =>
      assert.ok(domainIds.has(capability)),
    );
  }
});

test("team roster uses only PDF-provided names and no placeholder profiles", () => {
  const teamContent = readFileSync("content/team.ts", "utf8");
  const expected = [
    ["Rajeev Tiwari", "Technical Lead — Development & Engineering"],
    ["Ankur Pathak", "Business, Marketing & Outreach Lead"],
    ["Shantanu Pawade", "Design Support"],
    ["Manas Yadu", "Technical Team"],
    ["Raunit Singh", "Technical Team"],
    ["Shubham Kumar", "Sponsorship & Social Media"],
    ["Aditi Kiran", "Content Planning & Management"],
    ["Hardhik Bhatia", "Video Production & Editing"],
    ["Suraj Verma", "Design & Creatives"],
    ["Kaavya Sharma", "Design & Creatives"],
  ];

  for (const [name, role] of expected) {
    assert.match(teamContent, new RegExp(`name:\\s*"${name}"`));
    assert.match(
      teamContent,
      new RegExp(
        `role:\\s*"${role.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}"`,
      ),
    );
  }

  assert.doesNotMatch(
    teamContent,
    /https:\/\/www\.linkedin\.com|LinkedIn Profile|photo:\s*\{/,
  );
});

test("gallery publication gate rejects incomplete and external media", () => {
  const base = {
    id: "approved",
    status: "ready",
    kind: "image",
    src: "/images/approved/project.webp",
    alt: "Approved KAALKRIT project documentation",
    width: 1600,
    height: 1200,
    permissionConfirmed: true,
  };
  const candidates = [
    base,
    { ...base, id: "draft", status: "draft" },
    { ...base, id: "external", src: "https://example.com/placeholder.jpg" },
    { ...base, id: "unapproved", permissionConfirmed: false },
    { ...base, id: "missing-alt", alt: "" },
    { ...base, id: "missing-size", width: undefined },
  ];
  assert.deepEqual(
    readyGalleryItems(candidates).map(({ id }) => id),
    ["approved"],
  );
});

test("shared wordmark has a transparent presentation and a distinct footer scale", () => {
  const component = readFileSync("components/ui/Wordmark.tsx", "utf8");
  const styles = readFileSync("styles/globals.css", "utf8");

  assert.match(component, /alt="KAALKRIT"/);
  assert.match(component, /src="\/images\/approved\/kaalkrit-emblem\.png"/);
  assert.match(component, /unoptimized/);
  assert.match(component, /wordmark--header/);
  assert.match(component, /wordmark--footer/);
  assert.match(styles, /\.wordmark\s*\{[^}]*background:\s*transparent/s);
  assert.match(styles, /\.wordmark\s*\{[^}]*overflow:\s*hidden/s);
  assert.match(styles, /\.wordmark--header/);
  assert.match(styles, /\.wordmark--footer/);
  assert.match(styles, /\.wordmark__image\s*\{[^}]*object-fit:\s*contain/s);
});

test("navbar uses the approved logo image and a compact direct route set", () => {
  const header = readFileSync("components/layout/SiteHeader.tsx", "utf8");

  assert.match(header, /<Wordmark priority variant="header" \/>/);
  assert.doesNotMatch(
    header,
    /site-header__brand-soft|site-header__brand-accent/,
  );
  assert.deepEqual(primaryNav, [
    { label: "Work", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Journey", href: "/journey" },
    { label: "Contact", href: "/contact" },
  ]);
});
