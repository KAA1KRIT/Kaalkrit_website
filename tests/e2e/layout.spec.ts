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

test("GradientWaves is a rendered, readable hero background on desktop", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");

  const waves = page.locator(".gradient-waves");
  const canvas = waves.locator("canvas");
  await expect(waves).toHaveAttribute("data-rendered", "true");
  await expect(canvas).toHaveCount(1);

  const dimensions = await canvas.evaluate((element) => {
    const bounds = element.getBoundingClientRect();
    return { width: bounds.width, height: bounds.height };
  });
  const layering = await page.evaluate(() => {
    const visual = document.querySelector(".hero-visual");
    const content = document.querySelector(".engineering-hero__content");
    if (!visual || !content) return null;
    return {
      visualOpacity: Number.parseFloat(getComputedStyle(visual).opacity),
      visualZIndex: Number.parseInt(getComputedStyle(visual).zIndex, 10),
      contentZIndex: Number.parseInt(getComputedStyle(content).zIndex, 10),
    };
  });

  expect(dimensions.width).toBeGreaterThan(0);
  expect(dimensions.height).toBeGreaterThan(0);
  expect(layering).not.toBeNull();
  expect(layering?.visualOpacity).toBeGreaterThanOrEqual(0.85);
  expect(layering?.contentZIndex).toBeGreaterThan(layering!.visualZIndex);
});
