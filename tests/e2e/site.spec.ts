import { expect, test, type Page } from "@playwright/test";

const routes = [
  [
    "/projects",
    "Projects — Team KAALKRIT",
    "Project work with a systems view.",
  ],
  [
    "/journey",
    "Journey — Team KAALKRIT",
    "A direction grounded in practical engineering.",
  ],
  [
    "/team",
    "Team — Team KAALKRIT",
    "A multidisciplinary engineering collective.",
  ],
  [
    "/partners",
    "Collaboration — Team KAALKRIT",
    "Collaboration starts with a shared engineering question.",
  ],
  ["/privacy", "Privacy — Team KAALKRIT", "Privacy"],
  ["/terms", "Terms of use — Team KAALKRIT", "Terms of use"],
  ["/accessibility", "Accessibility — Team KAALKRIT", "Accessibility"],
] as const;

const projects = [
  ["uas-nidar-2026", "Autonomous Unmanned Aerial System — NIDAR 2026"],
  ["airmos", "AirMOUSE — NIDAR 2027"],
  ["build-with-hardware", "Build With Hardware (BWH)"],
  ["robotic-arm", "Intelligent Robotic Arm"],
  ["robot-vacuum", "Autonomous Robot Vacuum Cleaner"],
] as const;

function captureApplicationFaults(page: Page) {
  const faults: string[] = [];
  page.on("pageerror", (error) => faults.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (
      message.type() === "error" &&
      !message
        .text()
        .includes(
          "Failed to load resource: the server responded with a status of 404",
        )
    ) {
      faults.push(`console: ${message.text()}`);
    }
  });
  page.on("response", (response) => {
    if (
      response.url().startsWith("http://127.0.0.1:") &&
      response.status() >= 400 &&
      !response.request().isNavigationRequest()
    ) {
      faults.push(`response ${response.status()}: ${response.url()}`);
    }
  });
  return faults;
}

async function expectNoOverflow(page: Page) {
  await expect
    .poll(() =>
      page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    )
    .toBe(true);
}

test("homepage delivers the engineering identity without layout or runtime errors", async ({
  page,
}) => {
  const faults = captureApplicationFaults(page);
  await page.setViewportSize({ width: 1440, height: 1000 });
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Engineering systems that move with purpose.",
    }),
  ).toBeVisible();
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(
    page.getByRole("link", { name: /Team KAALKRIT — home/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Explore the work/i }),
  ).toBeVisible();
  await expect(page.locator(".gradient-waves")).toHaveCount(1);
  await expect(page.locator(".gradient-waves")).toHaveAttribute(
    "data-rendered",
    "true",
  );
  await expectNoOverflow(page);

  const images = page.locator("img");
  for (let index = 0; index < (await images.count()); index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty("complete", true);
    await expect
      .poll(() =>
        image.evaluate((element) => (element as HTMLImageElement).naturalWidth),
      )
      .toBeGreaterThan(0);
  }
  expect(faults).toEqual([]);
});

test("desktop and mobile navigation transition between public routes accessibly", async ({
  page,
}) => {
  const faults = captureApplicationFaults(page);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Projects" })
    .click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Project work with a systems view.",
  );

  await page.setViewportSize({ width: 375, height: 850 });
  await page.goto("/");
  const menu = page.locator(".site-header__menu-button");
  await menu.click();
  await expect(
    page.getByRole("dialog", { name: "Primary navigation" }),
  ).toBeVisible();
  await expect(menu).toHaveAccessibleName("Close menu");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("dialog", { name: "Primary navigation" }),
  ).toBeHidden();
  await expect(menu).toBeFocused();

  await menu.click();
  await page
    .getByRole("navigation", { name: "Primary mobile navigation" })
    .getByRole("link", { name: "Journey" })
    .click();
  await expect(page).toHaveURL(/\/journey$/);
  await expect(
    page.getByRole("dialog", { name: "Primary navigation" }),
  ).toBeHidden();
  expect(faults).toEqual([]);
});

test("public routes, legal pages, and every published project resolve with their public heading", async ({
  page,
}) => {
  const faults = captureApplicationFaults(page);
  for (const [path, title, heading] of routes) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(200);
    await expect(page).toHaveTitle(title);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
    await expect(page.locator("h1")).toHaveCount(1);
  }

  for (const [slug, heading] of projects) {
    const response = await page.goto(`/projects/${slug}`);
    expect(response?.status(), slug).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
    await expect(page.locator("h1")).toHaveCount(1);
  }
  expect(faults).toEqual([]);
});

test("the public layout has no horizontal overflow from mobile through wide desktop", async ({
  page,
}) => {
  for (const width of [320, 375, 430, 768, 1024, 1280, 1440, 1600]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await expectNoOverflow(page);

    if (width >= 1280) {
      const dimensions = await page.evaluate(() => {
        const index = document.querySelector<HTMLElement>(
          ".project-index--hierarchical",
        );
        const firstSummary = document.querySelector<HTMLElement>(
          ".project-index__supporting .project-index__item p",
        );
        return index && firstSummary
          ? {
              indexWidth: index.getBoundingClientRect().width,
              summaryWidth: firstSummary.getBoundingClientRect().width,
            }
          : null;
      });
      expect(dimensions).not.toBeNull();
      expect(dimensions!.indexWidth / width).toBeGreaterThan(0.7);
      expect(dimensions!.summaryWidth).toBeGreaterThan(280);
    }
  }
});

test("the project index has five working records and intentional desktop proportions", async ({
  page,
}) => {
  const faults = captureApplicationFaults(page);
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.goto("/");

  const projectIndex = page.locator(".project-index--hierarchical");
  const container = page.locator(".project-index").first();
  await expect(projectIndex).toBeVisible();
  await expect(page.locator(".project-index__item")).toHaveCount(5);
  await expectNoOverflow(page);

  const layout = await page.evaluate(() => {
    const index = document.querySelector<HTMLElement>(".project-index");
    const featured = document.querySelector<HTMLElement>(
      ".project-index__item--featured",
    );
    const supporting = document.querySelector<HTMLElement>(
      ".project-index__supporting",
    );
    if (!index || !featured || !supporting) return null;
    const indexBounds = index.getBoundingClientRect();
    const featuredBounds = featured.getBoundingClientRect();
    const supportingBounds = supporting.getBoundingClientRect();
    return {
      indexFraction: indexBounds.width / window.innerWidth,
      featuredHeight: featuredBounds.height,
      supportingHeight: supportingBounds.height,
    };
  });
  expect(layout).not.toBeNull();
  expect(layout?.indexFraction).toBeGreaterThan(0.7);
  expect(layout?.featuredHeight).toBeLessThan(layout!.supportingHeight * 0.65);
  await expect(container).toBeVisible();
  expect(faults).toEqual([]);
});

test("the 404 route remains useful and does not disclose internal errors", async ({
  page,
}) => {
  const faults = captureApplicationFaults(page);
  const response = await page.goto("/not-a-real-route");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "This route is not available.",
  );
  await page.getByRole("link", { name: /Return home/i }).click();
  await expect(page).toHaveURL(/\/$/);
  await page.goto("/not-a-real-route");
  await page.getByRole("link", { name: /Explore projects/i }).click();
  await expect(page).toHaveURL(/\/projects$/);
  const contactResponse = await page.goto("/contact");
  expect(contactResponse?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "This route is not available.",
  );
  expect(faults).toEqual([]);
});

test("public machine-readable endpoints remain available without a configured canonical origin", async ({
  request,
}) => {
  for (const path of ["/robots.txt", "/sitemap.xml", "/manifest.webmanifest"]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
  }
});

test("production responses carry the configured browser security headers", async ({
  request,
}) => {
  const response = await request.get("/");
  const headers = response.headers();

  expect(response.status()).toBe(200);
  expect(headers["content-security-policy"]).toContain("default-src 'self'");
  expect(headers["content-security-policy"]).toContain(
    "frame-ancestors 'none'",
  );
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
});

test("reduced motion uses a static, readable GradientWaves fallback", async ({
  browser,
}) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  try {
    const faults = captureApplicationFaults(page);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("/");

    await expect(page.locator(".gradient-waves")).toHaveAttribute(
      "data-fallback",
      "true",
    );
    await expect(page.locator(".gradient-waves canvas")).toHaveCount(0);
    await expectNoOverflow(page);
    expect(faults).toEqual([]);
  } finally {
    await context.close();
  }
});
