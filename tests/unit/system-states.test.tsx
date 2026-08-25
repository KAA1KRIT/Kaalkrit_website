import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ErrorPage from "@/app/error";
import ProjectError from "@/app/projects/[slug]/error";
import NotFoundPage from "@/app/not-found";

describe("system states", () => {
  it("renders the global error state and lets a visitor retry", async () => {
    const reset = vi.fn();
    const error = new Error("test failure");
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    render(<ErrorPage error={error} reset={reset} />);
    await userEvent.click(screen.getByRole("button", { name: /try again/i }));
    expect(reset).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenCalledWith("KAALKRIT application error", error);
    spy.mockRestore();
  });

  it("renders a route-level error recovery experience", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);
    render(
      <ProjectError error={new Error("project failure")} reset={vi.fn()} />,
    );
    expect(screen.getByRole("button", { name: /try again/i })).toBeVisible();
    spy.mockRestore();
  });

  it("offers safe home and project recovery routes from a 404", () => {
    render(<NotFoundPage />);
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: /projects/i })).toHaveAttribute(
      "href",
      "/projects",
    );
  });
});
