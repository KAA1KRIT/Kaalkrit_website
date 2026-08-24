import { expect, test, type Page } from "@playwright/test";

const productionOrigin = "https://kaalkrit.vercel.app";
const instagramUrl = "https://www.instagram.com/team_kaalkrit/";

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
  [
    "/contact",
    "Contact — Team KAALKRIT",
    "Start the engineering conversation.",
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

async function expectImageToLoad(page: Page, selector: string) {
  // Resolve the final matching image on every poll: Next can replace a lazy
  // image during route hydration, so holding a stale element is flaky.
  await expect
    .poll(() =>
      page.evaluate((imageSelector) => {
        const images = Array.from(
          document.querySelectorAll<HTMLImageElement>(imageSelector),
        );
        const image = images.at(-1);
        if (!image) return 0;
        image.scrollIntoView({ block: "center" });
        return image.complete ? image.naturalWidth : 0;
      }, selector),
    )
    .toBeGreaterThan(0);
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
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    productionOrigin,
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    productionOrigin,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    `${productionOrigin}/brand/kaalkrit-logo.png`,
  );
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
    "content",
    `${productionOrigin}/brand/kaalkrit-logo.png`,
  );
  await expect
    .poll(() =>
      page.evaluate(() =>
        Array.from(
          document.querySelectorAll('script[type="application/ld+json"]'),
        )
          .map((script) => script.textContent)
          .join("\n"),
      ),
    )
    .toContain(productionOrigin);
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

test("approved public media loads on every route that presents it", async ({
  page,
}) => {
  const mediaRoutes = [
    ["/", ".proof-section img"],
    ["/", ".people-preview img"],
    ["/team", '[data-testid="team-id-card"][data-active="true"] img'],
    ["/projects/uas-nidar-2026", "figure img"],
  ] as const;

  for (const [path, selector] of mediaRoutes) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(200);
    await expectImageToLoad(page, selector);
  }
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
  const menu = page.locator(".navbar-1__menu-button");
  await menu.click();
  await expect(
    page.getByRole("dialog", { name: "Primary navigation" }),
  ).toBeVisible();
  await expect(
    page
      .getByRole("dialog", { name: "Primary navigation" })
      .getByRole("link", { name: "Contact KAALKRIT" }),
  ).toHaveAttribute("href", "/contact");
  await expect(menu).toHaveAccessibleName("Close menu");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("dialog", { name: "Primary navigation" }),
  ).toBeHidden();
  await expect(menu).toBeFocused();
  await expect
    .poll(() =>
      page.evaluate(() => ({
        overflow: document.body.style.overflow,
        paddingRight: document.body.style.paddingRight,
      })),
    )
    .toEqual({ overflow: "", paddingRight: "" });

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

test("the floating navbar keeps real navigation, centred branding, and contact action available", async ({
  page,
}) => {
  const faults = captureApplicationFaults(page);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/projects");

  const navbar = page.locator(".navbar-1");
  await expect(navbar).toBeVisible();
  await expect(
    navbar.getByRole("link", { name: "Team KAALKRIT — home" }),
  ).toBeVisible();
  await expect(
    navbar.getByRole("navigation", { name: "Primary" }),
  ).toBeVisible();
  await expect(navbar.getByRole("link", { name: "Projects" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  await expect(
    navbar.getByRole("link", { name: "Contact KAALKRIT" }),
  ).toHaveAttribute("href", "/contact");

  const zones = await page.evaluate(() => {
    const nav = document.querySelector<HTMLElement>(".navbar-1__nav");
    const brand = document.querySelector<HTMLElement>(".navbar-1__brand");
    const action = document.querySelector<HTMLElement>(".navbar-1__action");
    if (!nav || !brand || !action) return null;
    return {
      nav: nav.getBoundingClientRect(),
      brand: brand.getBoundingClientRect(),
      action: action.getBoundingClientRect(),
    };
  });
  expect(zones).not.toBeNull();
  expect(zones!.nav.right).toBeLessThan(zones!.brand.left);
  expect(zones!.brand.right).toBeLessThan(zones!.action.left);

  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(navbar.getByRole("link", { name: "Projects" })).toBeFocused();
  await expect(
    navbar.getByRole("link", { name: "Contact KAALKRIT" }),
  ).toBeVisible();
  await navbar.getByRole("link", { name: "Contact KAALKRIT" }).click();
  await expect(page).toHaveURL(/\/contact$/);
  expect(faults).toEqual([]);
});

test("primary actions retain a blue surface and readable foreground on hover", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");

  const primaryAction = page.getByRole("link", { name: /Explore the work/i });
  const readColors = () =>
    primaryAction.evaluate((element) => {
      const styles = getComputedStyle(element);
      return {
        background: styles.backgroundColor,
        foreground: styles.color,
        outlineStyle: styles.outlineStyle,
      };
    });

  const defaultColors = await readColors();
  await primaryAction.hover();
  await page.waitForTimeout(250);
  const hoverColors = await readColors();

  for (const background of [defaultColors.background, hoverColors.background]) {
    const channels = background.match(/\d+/g)?.map(Number) ?? [];
    expect(channels).toHaveLength(3);
    const [red = 0, green = 0, blue = 0] = channels;
    expect(blue).toBeGreaterThan(red + 30);
    expect(blue).toBeGreaterThan(green + 30);
  }

  const foreground = hoverColors.foreground.match(/\d+/g)?.map(Number) ?? [];
  expect(foreground).toHaveLength(3);
  expect(Math.min(...foreground)).toBeGreaterThan(180);

  await primaryAction.focus();
  await expect.poll(readColors).toMatchObject({ outlineStyle: "solid" });
});

test("contact, collaboration, and footer routes lead to the verified public channel", async ({
  page,
}) => {
  await page.goto("/contact");
  const instagram = page.getByRole("link", {
    name: "Open KAALKRIT on Instagram",
  });
  await expect(instagram).toHaveAttribute("href", instagramUrl);
  await expect(instagram).toHaveAttribute("target", "_blank");
  await expect(instagram).toHaveAttribute("rel", "noopener noreferrer");

  await page.goto("/partners");
  await page
    .getByRole("main")
    .getByRole("link", { name: "Contact KAALKRIT" })
    .click();
  await expect(page).toHaveURL(/\/contact$/);

  const footer = page.getByRole("contentinfo");
  await expect(footer.getByRole("link", { name: "Contact" })).toHaveAttribute(
    "href",
    "/contact",
  );
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

test("the public layout has no horizontal overflow from mobile through ultra-wide desktop", async ({
  page,
}) => {
  for (const width of [
    320, 360, 375, 390, 430, 480, 600, 768, 834, 1024, 1280, 1440, 1600, 1920,
  ]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expectNoOverflow(page);

    if (width >= 1280) {
      await expect(page.locator(".project-index--hierarchical")).toBeVisible();
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
      // The site intentionally caps the editorial container at 1200px, but it
      // must never regress into the narrow project rail that prompted the
      // original layout fix. This remains proportional until the cap applies.
      expect(dimensions!.indexWidth).toBeGreaterThanOrEqual(
        Math.min(width * 0.7, 1150),
      );
      expect(dimensions!.summaryWidth).toBeGreaterThan(280);
    }
  }
});

test("mobile navigation and the team carousel use the available viewport without dead rails", async ({
  page,
}) => {
  for (const width of [320, 360, 390, 430, 600]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/team");

    const navbar = page.locator(".navbar-1");
    const brand = navbar.getByRole("link", { name: /Team KAALKRIT — home/i });
    const carousel = page.getByTestId("team-depth-carousel").last();
    const activeCard = carousel.locator('[data-active="true"]');
    const controls = carousel.locator("[class*='controls']");

    await expect(navbar).toBeVisible();
    await expect(brand).toBeVisible();
    await expect(activeCard).toBeVisible();
    await expect(controls).toBeVisible();

    const dimensions = await page.evaluate(() => {
      const navbar = document.querySelector<HTMLElement>(".navbar-1");
      const brand = document.querySelector<HTMLElement>(
        ".navbar-1__brand-link",
      );
      const carousel = Array.from(
        document.querySelectorAll<HTMLElement>(
          "[data-testid='team-depth-carousel']",
        ),
      ).at(-1);
      const activeCard = carousel?.querySelector<HTMLElement>(
        '[data-active="true"]',
      );
      const stage = carousel?.querySelector<HTMLElement>(
        '[data-testid="team-depth-carousel-stage"]',
      );
      const controls = carousel?.querySelector<HTMLElement>(
        "[class*='controls']",
      );
      if (!navbar || !brand || !activeCard || !stage || !controls) return null;
      const cardBounds = activeCard.getBoundingClientRect();
      const stageBounds = stage.getBoundingClientRect();
      const controlsBounds = controls.getBoundingClientRect();
      return {
        navbarHeight: navbar.getBoundingClientRect().height,
        brandWidth: brand.getBoundingClientRect().width,
        cardWidth: cardBounds.width,
        cardLeft: cardBounds.left,
        cardRight: cardBounds.right,
        stageBottom: stageBounds.bottom,
        controlsTop: controlsBounds.top,
        viewport: window.innerWidth,
      };
    });

    expect(dimensions, `${width}px responsive team layout`).not.toBeNull();
    if (!dimensions)
      throw new Error(`Missing responsive team layout at ${width}px`);
    expect(dimensions.navbarHeight).toBeLessThanOrEqual(68);
    expect(dimensions.navbarHeight).toBeGreaterThanOrEqual(56);
    expect(dimensions.brandWidth).toBeGreaterThanOrEqual(100);
    expect(dimensions.cardWidth).toBeGreaterThanOrEqual(
      Math.min(width * 0.8, 336),
    );
    expect(dimensions.cardLeft).toBeGreaterThanOrEqual(0);
    expect(dimensions.cardRight).toBeLessThanOrEqual(dimensions.viewport);
    expect(dimensions.controlsTop - dimensions.stageBottom).toBeLessThanOrEqual(
      24,
    );
    await expectNoOverflow(page);
    await page.mouse.wheel(0, 640);
    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeGreaterThan(0);
  }
});

test("interior routes retain readable, overflow-free layouts at mobile, tablet, and desktop", async ({
  page,
}) => {
  const representativeRoutes = [
    "/projects",
    "/projects/uas-nidar-2026",
    "/journey",
    "/team",
    "/partners",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of representativeRoutes) {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expectNoOverflow(page);
    }
  }
});

test("long interior headings remain fully visible on a narrow viewport", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await page.goto("/team");

  const heading = page.getByRole("heading", { level: 1 });
  const bounds = await heading.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return { left: rect.left, right: rect.right, viewport: window.innerWidth };
  });

  expect(bounds.left).toBeGreaterThanOrEqual(0);
  expect(bounds.right).toBeLessThanOrEqual(bounds.viewport);
  await expectNoOverflow(page);
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

test("the project index follows its page header without an accidental double gap", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/projects");

  const spacing = await page.evaluate(() => {
    const headerRule = document.querySelector<HTMLElement>(
      "header > .k-container .k-rule",
    );
    const firstBrief = document.querySelector<HTMLElement>(".project-brief");
    if (!headerRule || !firstBrief) return null;
    return (
      firstBrief.getBoundingClientRect().top -
      headerRule.getBoundingClientRect().bottom
    );
  });

  expect(spacing).not.toBeNull();
  expect(spacing).toBeLessThan(128);
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
  expect(faults).toEqual([]);
});

test("production SEO endpoints use the configured canonical origin", async ({
  request,
}) => {
  for (const path of ["/robots.txt", "/sitemap.xml", "/manifest.webmanifest"]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
  }

  const [robots, sitemap] = await Promise.all([
    request.get("/robots.txt").then((response) => response.text()),
    request.get("/sitemap.xml").then((response) => response.text()),
  ]);
  expect(robots).toContain(`${productionOrigin}/sitemap.xml`);
  expect(sitemap).toContain(`${productionOrigin}/projects`);
  expect(sitemap).toContain(`${productionOrigin}/contact`);
  expect(sitemap).not.toMatch(/localhost|127\.0\.0\.1|\.invalid|example\.com/);
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

    await page.setViewportSize({ width: 375, height: 850 });
    const menu = page.locator(".navbar-1__menu-button");
    await menu.click();
    const dialog = page.getByRole("dialog", { name: "Primary navigation" });
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveCSS("transform", "none");
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    expect(faults).toEqual([]);
  } finally {
    await context.close();
  }
});

test("team ID cards preserve the full artwork and support accessible manual exploration", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/team");

  const carousel = page.getByTestId("team-depth-carousel");
  const cards = page.getByTestId("team-id-card");
  const activeCard = carousel.locator(
    '[data-testid="team-id-card"][aria-current="true"]',
  );
  const activeImage = carousel.locator('[data-active="true"] img');
  await expect(carousel).toHaveAttribute("aria-roledescription", "carousel");
  await expect(cards).toHaveCount(10);
  await carousel.hover();
  await expect(carousel).toHaveAttribute("data-autoplay", "paused");
  const initiallyActiveCard = await activeImage.getAttribute("alt");
  await expect(activeImage).toHaveJSProperty("complete", true);
  await expect
    .poll(() =>
      activeImage.evaluate(
        (element) => (element as HTMLImageElement).naturalWidth,
      ),
    )
    .toBeGreaterThan(0);
  await expect(activeImage).toHaveCSS("object-fit", "contain");
  await expect(activeCard).toHaveCount(1);

  await carousel
    .getByRole("button", { name: /Show the next team member/ })
    .click();
  const afterNext = await carousel
    .locator('[data-active="true"] img')
    .getAttribute("alt");
  expect(afterNext).not.toBe(initiallyActiveCard);
  await carousel.press("ArrowRight");
  await expect
    .poll(() =>
      carousel.locator('[data-active="true"] img').getAttribute("alt"),
    )
    .not.toBe(afterNext);
  await carousel
    .getByLabel("Select a team member")
    .getByRole("button", { name: /Show Aditi Kiran/ })
    .click();
  await expect(carousel.locator('[data-active="true"] img')).toHaveAttribute(
    "alt",
    "KAALKRIT ID card for Aditi Kiran, Content Planning & Management.",
  );
  await expectNoOverflow(page);
});

test("team ID cards advance automatically when motion is allowed", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/team");

  const carousel = page.getByTestId("team-depth-carousel");
  const activeImage = carousel.locator('[data-active="true"] img');
  const initialCard = await activeImage.getAttribute("alt");

  await expect(carousel).toHaveAttribute("data-autoplay", "running");
  await expect
    .poll(() => activeImage.getAttribute("alt"), {
      timeout: 4_000,
      intervals: [250, 400, 600],
    })
    .not.toBe(initialCard);
});

test("team card autoplay pauses for hover and keyboard focus, then resumes", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/team");

  const carousel = page.getByTestId("team-depth-carousel");
  const activeCard = carousel.locator('[data-active="true"] img');

  await carousel.hover();
  const hoveredCard = await activeCard.getAttribute("alt");
  await expect(carousel).toHaveAttribute("data-autoplay", "paused");
  await page.waitForTimeout(3_000);
  await expect(activeCard).toHaveAttribute("alt", hoveredCard ?? "");

  await page.mouse.move(5, 5);
  await expect(carousel).toHaveAttribute("data-autoplay", "running");
  await expect
    .poll(() => activeCard.getAttribute("alt"), {
      timeout: 4_000,
      intervals: [250, 400, 600],
    })
    .not.toBe(hoveredCard);

  await carousel.focus();
  await expect(carousel).toBeFocused();
  const focusedCard = await activeCard.getAttribute("alt");
  await expect
    .poll(() => carousel.getAttribute("data-autoplay"))
    .toBe("paused");
  await page.waitForTimeout(3_000);
  await expect(activeCard).toHaveAttribute("alt", focusedCard ?? "");

  await page.getByRole("link", { name: /Team KAALKRIT — home/i }).focus();
  await expect(carousel).toHaveAttribute("data-autoplay", "running");
  await expect
    .poll(() => activeCard.getAttribute("alt"), {
      timeout: 4_000,
      intervals: [250, 400, 600],
    })
    .not.toBe(focusedCard);
});

test("team card controls restart autoplay without advancing underneath a manual action", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/team");

  const carousel = page.getByTestId("team-depth-carousel");
  const activeCard = carousel.locator('[data-active="true"] img');
  await carousel
    .getByRole("button", { name: /Show the next team member/ })
    .click();
  const homeLink = page.getByRole("link", { name: /Team KAALKRIT — home/i });
  await homeLink.focus();
  await homeLink.hover();
  await expect(carousel).toHaveAttribute("data-autoplay", "running");

  const manuallySelectedCard = await activeCard.getAttribute("alt");
  await page.waitForTimeout(900);
  await expect(activeCard).toHaveAttribute("alt", manuallySelectedCard ?? "");
  await expect
    .poll(() => activeCard.getAttribute("alt"), {
      timeout: 4_000,
      intervals: [250, 400, 600],
    })
    .not.toBe(manuallySelectedCard);
});

test("team card touch drag pauses autoplay until the interaction grace period ends", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 844 });
  await page.goto("/team");

  const carousel = page.getByTestId("team-depth-carousel");
  const stage = page.getByTestId("team-depth-carousel-stage");
  const activeCard = carousel.locator('[data-active="true"] img');
  await stage.dispatchEvent("pointerdown", {
    pointerId: 1,
    pointerType: "touch",
    clientX: 220,
    clientY: 300,
  });
  await stage.dispatchEvent("pointermove", {
    pointerId: 1,
    pointerType: "touch",
    clientX: 140,
    clientY: 300,
  });
  await expect(carousel).toHaveAttribute("data-autoplay", "paused");
  await stage.dispatchEvent("pointerup", {
    pointerId: 1,
    pointerType: "touch",
    clientX: 140,
    clientY: 300,
  });

  const selectedCard = await activeCard.getAttribute("alt");
  await page.waitForTimeout(700);
  await expect(carousel).toHaveAttribute("data-autoplay", "paused");
  await expect(carousel).toHaveAttribute("data-autoplay", "running", {
    timeout: 2_000,
  });
  await expect
    .poll(() => activeCard.getAttribute("alt"), {
      timeout: 4_000,
      intervals: [250, 400, 600],
    })
    .not.toBe(selectedCard);
  await expectNoOverflow(page);
});

test("team card autoplay remains disabled when reduced motion is requested", async ({
  browser,
}) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  try {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("/team");

    const carousel = page.getByTestId("team-depth-carousel");
    const activeCard = carousel.locator('[data-active="true"] img');
    const initialCard = await activeCard.getAttribute("alt");
    await expect(carousel).toHaveAttribute("data-autoplay", "paused");
    await page.waitForTimeout(3_000);
    await expect(activeCard).toHaveAttribute("alt", initialCard ?? "");
  } finally {
    await context.close();
  }
});

test("team card autoplay pauses while the page is hidden and resumes once visible", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/team");

  const carousel = page.getByTestId("team-depth-carousel");
  const activeCard = carousel.locator('[data-active="true"] img');
  const beforeFreeze = await activeCard.getAttribute("alt");

  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(carousel).toHaveAttribute("data-autoplay", "paused");
  await page.waitForTimeout(3_000);
  await expect(activeCard).toHaveAttribute("alt", beforeFreeze ?? "");

  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      value: false,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect(carousel).toHaveAttribute("data-autoplay", "running");
  await expect
    .poll(() => activeCard.getAttribute("alt"), {
      timeout: 4_000,
      intervals: [250, 400, 600],
    })
    .not.toBe(beforeFreeze);
});

test("team ID cards remain contained and keyboard-operable on mobile and reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 320, height: 844 });
  await page.goto("/team");

  const carousel = page.getByTestId("team-depth-carousel");
  const activeImage = carousel.locator('[data-active="true"] img');
  await activeImage.scrollIntoViewIfNeeded();
  const bounds = await activeImage.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return {
      left: rect.left,
      right: rect.right,
      top: rect.top,
      bottom: rect.bottom,
      width: window.innerWidth,
    };
  });
  expect(bounds.left).toBeGreaterThanOrEqual(0);
  expect(bounds.right).toBeLessThanOrEqual(bounds.width);
  const stage = page.getByTestId("team-depth-carousel-stage");
  await stage.dispatchEvent("pointerdown", {
    pointerId: 1,
    clientX: 200,
    clientY: 300,
  });
  await stage.dispatchEvent("pointermove", {
    pointerId: 1,
    clientX: 140,
    clientY: 300,
  });
  await expect(carousel.locator('[data-active="true"] img')).toHaveAttribute(
    "alt",
    "KAALKRIT ID card for Ankur Pathak, Business, Marketing & Outreach Lead.",
  );
  await carousel.focus();
  await carousel.press("ArrowLeft");
  await expect(carousel.locator('[data-active="true"] img')).toHaveAttribute(
    "alt",
    "KAALKRIT ID card for Rajeev Tiwari, Technical Lead.",
  );
  await expectNoOverflow(page);
});

test("team ID cards retain their full aspect ratio across the responsive release matrix", async ({
  page,
}) => {
  for (const width of [320, 375, 430, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/team");

    // Read the current route instance atomically; App Router can retain an
    // outgoing instance briefly while a same-page viewport transition settles.
    const bounds = await page.evaluate(() => {
      const carousel = Array.from(
        document.querySelectorAll<HTMLElement>(
          '[data-testid="team-depth-carousel"]',
        ),
      ).at(-1);
      const image = carousel?.querySelector<HTMLImageElement>(
        '[data-active="true"] img',
      );
      if (!image) return null;
      const rect = image.getBoundingClientRect();
      return {
        left: rect.left,
        right: rect.right,
        viewport: window.innerWidth,
        objectFit: getComputedStyle(image).objectFit,
      };
    });

    expect(bounds, `${width}px active card`).not.toBeNull();
    if (!bounds) throw new Error(`Missing active team card at ${width}px`);
    expect(bounds.left, `${width}px left bound`).toBeGreaterThanOrEqual(0);
    expect(bounds.right, `${width}px right bound`).toBeLessThanOrEqual(
      bounds.viewport,
    );
    expect(bounds.objectFit).toBe("contain");
    await expectNoOverflow(page);
  }
});
