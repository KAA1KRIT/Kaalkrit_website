import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  HomepageSkeleton,
  JourneySkeleton,
  ProjectDetailSkeleton,
  ProjectsSkeleton,
  TeamSkeleton,
} from "@/components/ui/skeletons";

describe("route skeletons", () => {
  it.each([
    ["homepage", HomepageSkeleton],
    ["projects", ProjectsSkeleton],
    ["project record", ProjectDetailSkeleton],
    ["team", TeamSkeleton],
    ["journey", JourneySkeleton],
  ])("renders an accessible %s loading shape", (label, Skeleton) => {
    render(<Skeleton />);

    expect(
      screen.getByRole("status", { name: new RegExp(label, "i") }),
    ).toBeVisible();
  });
});
