import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { galleryItems, readyGalleryItems } from "../content/gallery.ts";
import { footerNav, primaryNav, sectionNav } from "../content/navigation.ts";
import { SITE, SOCIAL_LINKS } from "../content/site.ts";

test("site identity is populated while contact values remain placeholders", () => {
  assert.equal(SITE.name, "Team KAALKRIT");
  assert.equal(SITE.founded, 2024);
  assert.match(SITE.email, /^\[EMAIL PLACEHOLDER\]$/);
  assert.ok(SOCIAL_LINKS.every((link) => link.label.includes("PLACEHOLDER")));
});

test("navigation retains only local routes and standard labels", () => {
  assert.deepEqual(
    primaryNav.map(({ label }) => label),
    ["Projects", "Team", "Journey", "Contact"],
  );
  for (const { href } of [...primaryNav, ...footerNav, ...sectionNav]) {
    assert.ok(href.startsWith("/"));
    if (href.includes("#")) continue;
    assert.ok(existsSync(`app${href}/page.tsx`), `Missing route for ${href}`);
  }
});

test("unprovided individual roster details remain placeholders", () => {
  const content = ["team"]
    .map((name) => readFileSync(`content/${name}.ts`, "utf8"))
    .join("\n");
  assert.doesNotMatch(content, /Rajeev Tiwari|Ankur Pathak/i);
  assert.match(content, /\[TEAM MEMBER NAME PLACEHOLDER \$\{index \+ 1\}\]/);
});

test("gallery publication gate still rejects incomplete and external media", () => {
  const base = {
    id: "approved",
    status: "ready",
    kind: "image",
    src: "/images/placeholder.svg",
    alt: "[IMAGE ALT PLACEHOLDER]",
    width: 1600,
    height: 1200,
    permissionConfirmed: true,
  };
  assert.deepEqual(
    readyGalleryItems([
      base,
      { ...base, id: "external", src: "https://example.com/image.jpg" },
    ]).map(({ id }) => id),
    ["approved"],
  );
});

test("approved NIDAR media is locally hosted, dimensioned, and accessible", () => {
  assert.equal(galleryItems.length, 4);
  for (const item of galleryItems) {
    assert.ok(item.src?.startsWith("/images/approved/"));
    assert.ok(item.width && item.height);
    assert.ok(item.alt.length > 0);
    assert.equal(item.permissionConfirmed, true);
  }
});

test("brand raster assets are replaced with SVG placeholders", () => {
  assert.ok(existsSync("app/icon.svg"));
  assert.ok(existsSync("app/apple-icon.svg"));
  assert.ok(!existsSync("app/icon.jpg"));
  assert.match(
    readFileSync("components/ui/Wordmark.tsx", "utf8"),
    /\[LOGO PLACEHOLDER\]/,
  );
});

test("smooth scrolling uses the current Lenis React provider", () => {
  const providerPath = "components/layout/SmoothScrollProvider.tsx";
  assert.ok(existsSync(providerPath));
  const provider = readFileSync(providerPath, "utf8");
  const layout = readFileSync("app/layout.tsx", "utf8");
  const hero = readFileSync("components/hero/ScrollExpandHero.tsx", "utf8");

  assert.match(provider, /from "lenis\/react"/);
  assert.match(provider, /<ReactLenis\s+root/);
  assert.match(provider, /anchors: true/);
  assert.match(provider, /respectReducedMotion: true/);
  assert.match(provider, /scrollTo\(0, \{ immediate: true \}\)/);
  assert.match(layout, /<SmoothScrollProvider>/);
  assert.match(hero, /useLenis/);
  assert.doesNotMatch(provider, /@studio-freight/);
});
