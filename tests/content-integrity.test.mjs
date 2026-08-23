import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import {
  collaborationCta,
  footerNav,
  primaryNav,
} from "../content/navigation.ts";
import { publicProjects } from "../content/projects.ts";
import { SITE } from "../content/site.ts";

const publicSourceRoots = ["app", "components", "content", "lib"];
const forbiddenPublicText = new RegExp(
  [
    "place" + "holder",
    "lorem" + " ipsum",
    "\\bTO" + "DO\\b",
    "\\bTB" + "D\\b",
    "coming" + " soon",
    "under" + " construction",
    "replace" + " this",
    "add" + " content",
    "\\.in" + "valid",
    "example" + "\\.com",
  ].join("|"),
  "i",
);

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(path) : [path];
  });
}

test("public source contains no unfinished or demo copy", () => {
  for (const root of publicSourceRoots) {
    for (const file of sourceFiles(root).filter((path) =>
      /\.(?:ts|tsx|svg)$/.test(path),
    )) {
      assert.doesNotMatch(
        readFileSync(file, "utf8"),
        forbiddenPublicText,
        file,
      );
    }
  }
});

test("identity is factual and does not publish an unverified contact channel", () => {
  assert.equal(SITE.name, "Team KAALKRIT");
  assert.equal(SITE.parentShortName, "Sir MVIT");
  assert.equal(SITE.location, "Bengaluru");
  assert.equal(SITE.founded, 2024);
  assert.equal("email" in SITE, false);
  assert.equal("instagram" in SITE, false);
  assert.equal("x" in SITE, false);
});

test("metadata waits to permit indexing until a canonical origin is configured", () => {
  const seo = readFileSync("lib/seo.ts", "utf8");
  assert.match(seo, /index: index && Boolean\(SITE\.url\)/);
});

test("navigation exposes only substantive public routes", () => {
  assert.deepEqual(
    primaryNav.map(({ label, href }) => [label, href]),
    [
      ["Projects", "/projects"],
      ["Journey", "/journey"],
      ["Team", "/team"],
    ],
  );
  assert.deepEqual(collaborationCta, {
    label: "Partner with us",
    href: "/partners",
  });
  assert.deepEqual(
    footerNav.map(({ label, href }) => [label, href]),
    [
      ["Home", "/"],
      ["Projects", "/projects"],
      ["Journey", "/journey"],
      ["Team", "/team"],
      ["Partners", "/partners"],
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
      ["Accessibility", "/accessibility"],
    ],
  );
});

test("published projects carry complete supported content and only approved local media", () => {
  assert.equal(publicProjects.length, 5);
  for (const project of publicProjects) {
    assert.ok(project.title.trim());
    assert.ok(project.summary.trim());
    assert.ok(project.problem.trim());
    assert.ok(project.significance.trim());
    assert.ok(project.capabilities.length > 0);
    if (project.media) {
      assert.match(project.media.src, /^\/images\/projects\//);
      assert.ok(existsSync(`public${project.media.src}`));
      assert.ok(project.media.alt.trim());
    }
  }
});

test("manifest carries the production brand icon and dark theme", () => {
  const manifest = readFileSync("app/manifest.ts", "utf8");
  assert.match(manifest, /background_color: "#05070c"/);
  assert.match(manifest, /theme_color: "#377dff"/);
  assert.match(manifest, /src: "\/icon\.png"/);
  assert.doesNotMatch(manifest, /icon\.svg|f3bc16/);
});

test("brand and error experiences use production-safe text assets", () => {
  for (const file of [
    "app/icon.png",
    "app/apple-icon.png",
    "public/brand/kaalkrit-logo.png",
    "components/ui/Wordmark.tsx",
    "components/system/NotFoundExperience.tsx",
    "components/system/GlobalErrorExperience.tsx",
  ]) {
    assert.ok(existsSync(file));
    assert.doesNotMatch(readFileSync(file, "utf8"), forbiddenPublicText, file);
  }
});

test("smooth scrolling uses the current Lenis React provider", () => {
  const providerPath = "components/layout/SmoothScrollProvider.tsx";
  assert.ok(existsSync(providerPath));
  const provider = readFileSync(providerPath, "utf8");
  const layout = readFileSync("app/layout.tsx", "utf8");
  const hero = readFileSync("components/hero/EngineeringHero.tsx", "utf8");

  assert.match(provider, /from "lenis\/react"/);
  assert.match(provider, /<ReactLenis\s+root/);
  assert.match(provider, /anchors: true/);
  assert.match(provider, /respectReducedMotion: true/);
  assert.match(provider, /scrollTo\(0, \{ immediate: true \}\)/);
  assert.match(layout, /<SmoothScrollProvider>/);
  assert.match(hero, /Autonomous systems/);
  assert.doesNotMatch(provider, /@studio-freight/);
});

test("the hero uses the current engineering visual components", () => {
  assert.equal(existsSync("components/hero/EngineeringHero.tsx"), true);
  assert.equal(existsSync("components/hero/GradientWaves.tsx"), true);
  assert.equal(existsSync("components/hero/ScrollExpandHero.tsx"), false);
});

test("the final visual system uses the approved typography and progressive motion", () => {
  const layout = readFileSync("app/layout.tsx", "utf8");
  const hero = readFileSync("components/hero/EngineeringHero.tsx", "utf8");
  const waves = readFileSync("components/hero/GradientWaves.tsx", "utf8");
  const depth = readFileSync("components/ui/DepthText.tsx", "utf8");

  assert.match(layout, /Crimson_Text/);
  assert.match(layout, /Palanquin_Dark/);
  assert.match(layout, /Mukta_Vaani/);
  assert.match(hero, /DepthText/);
  assert.match(hero, /HeroVisual/);
  assert.match(waves, /IntersectionObserver/);
  assert.match(waves, /visibilitychange/);
  assert.match(depth, /prefers-reduced-motion/);
});

test("loader and pointer-responsive button primitives remain reusable", () => {
  const loader = readFileSync("components/ui/loader.tsx", "utf8");
  const loading = readFileSync(
    "components/system/LoadingExperience.tsx",
    "utf8",
  );
  const routeLoading = readFileSync(
    "components/system/SectionSkeletons.tsx",
    "utf8",
  );
  const button = readFileSync("components/ui/Button.tsx", "utf8");

  assert.ok(existsSync("components/loader-four-demo.tsx"));
  assert.match(loader, /role="status"/);
  assert.match(loading, /<LoaderFour/);
  assert.match(routeLoading, /<LoaderFour/);
  assert.match(button, /dataset\.pointerActive/);
  assert.match(button, /hover: hover/);
});

test("team and legal routes have verified production content", () => {
  for (const path of [
    "app/team/page.tsx",
    "app/privacy/page.tsx",
    "app/terms/page.tsx",
    "app/accessibility/page.tsx",
  ]) {
    assert.equal(existsSync(path), true, path);
  }
  assert.equal(existsSync("app/contact/page.tsx"), false);
});
