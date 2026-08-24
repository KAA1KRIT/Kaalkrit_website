import { expect, test } from "@playwright/test";

test("homepage project summaries use the content column instead of the metadata rail", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");

  const supportingProject = page
    .locator(".project-index__supporting .project-index__item")
    .first();
  const summary = supportingProject.locator("p").first();
  const [itemWidth, summaryWidth] = await Promise.all([
    supportingProject.evaluate(
      (element) => element.getBoundingClientRect().width,
    ),
    summary.evaluate((element) => element.getBoundingClientRect().width),
  ]);

  expect(summaryWidth).toBeGreaterThan(itemWidth * 0.55);
});

test("GradientWaves is a rendered, readable global background on desktop", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");

  const background = page.getByTestId("site-gradient-background");
  const waves = background.locator(".gradient-waves");
  const canvas = waves.locator("canvas");
  await expect(background).toHaveAttribute("data-variant", "hero");
  await expect(waves).toHaveAttribute("data-rendered", "true");
  await expect(canvas).toHaveCount(1);

  const dimensions = await canvas.evaluate((element) => {
    const bounds = element.getBoundingClientRect();
    return { width: bounds.width, height: bounds.height };
  });
  const layering = await page.evaluate(() => {
    const background = document.querySelector<HTMLElement>(
      "[data-testid='site-gradient-background']",
    );
    const content = document.querySelector<HTMLElement>("main");
    if (!background || !content) return null;
    return {
      pointerEvents: getComputedStyle(background).pointerEvents,
      position: getComputedStyle(background).position,
      backgroundZIndex: Number.parseInt(
        getComputedStyle(background).zIndex,
        10,
      ),
      contentZIndex: Number.parseInt(getComputedStyle(content).zIndex, 10),
    };
  });

  expect(dimensions.width).toBeGreaterThan(0);
  expect(dimensions.height).toBeGreaterThan(0);
  expect(layering).not.toBeNull();
  expect(layering?.pointerEvents).toBe("none");
  expect(layering?.position).toBe("fixed");
  expect(layering?.contentZIndex).toBeGreaterThan(layering!.backgroundZIndex);
});

test("public routes select one restrained global background preset", async ({
  page,
}) => {
  const routes = [
    ["/", "hero"],
    ["/projects", "technical"],
    ["/projects/uas-nidar-2026", "technical"],
    ["/journey", "technical"],
    ["/team", "standard"],
    ["/partners", "standard"],
    ["/contact", "standard"],
    ["/privacy", "quiet"],
    ["/terms", "quiet"],
    ["/accessibility", "quiet"],
  ] as const;

  await page.setViewportSize({ width: 1280, height: 900 });
  for (const [path, variant] of routes) {
    await page.goto(path);
    const background = page.getByTestId("site-gradient-background");
    await expect(background).toHaveCount(1);
    await expect(background).toHaveAttribute("data-variant", variant);
    await expect(background.locator(".gradient-waves")).toHaveAttribute(
      "data-rendered",
      "true",
    );
    await expect(background.locator(".gradient-waves canvas")).toHaveCount(1);
    const dimensions = await background.evaluate((element) => ({
      width: element.clientWidth,
      height: element.clientHeight,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
    }));
    expect(dimensions.width).toBeGreaterThan(0);
    expect(dimensions.height).toBeGreaterThan(0);
    // The reserved scrollbar gutter can make the layout viewport narrower
    // than the browser viewport; the fixed atmosphere must still fill it.
    expect(dimensions.width).toBeLessThanOrEqual(dimensions.viewportWidth);
    expect(dimensions.height).toBeLessThanOrEqual(dimensions.viewportHeight);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});
