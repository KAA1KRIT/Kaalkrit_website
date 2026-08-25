import { createRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Arrow, Button } from "@/components/ui/Button";
import { DepthText } from "@/components/ui/DepthText";
import { LoaderFour } from "@/components/ui/loader";
import { MetaLine } from "@/components/ui/MetaLine";
import { Navbar1 } from "@/components/ui/navbar-1";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusTag } from "@/components/ui/StatusTag";
import { Wordmark } from "@/components/ui/Wordmark";

describe("shared UI primitives", () => {
  it("renders button variants, external safety, and loading state", () => {
    const { rerender } = render(
      <Button href="/projects" variant="primary">
        Explore work
      </Button>,
    );
    expect(screen.getByRole("link", { name: "Explore work" })).toHaveAttribute(
      "href",
      "/projects",
    );

    rerender(
      <Button href="https://www.instagram.com/kaalkrit" variant="secondary">
        Contact KAALKRIT
      </Button>,
    );
    expect(
      screen.getByRole("link", { name: "Contact KAALKRIT" }),
    ).toHaveAttribute("rel", "noopener noreferrer");

    rerender(
      <Button href="/projects" loading>
        Anything
      </Button>,
    );
    expect(screen.getByRole("button", { name: /loading/i })).toBeDisabled();
  });

  it("handles decorative depth text safely and clamps excessive layers", () => {
    const { container } = render(
      <DepthText text="KAALKRIT" layers={100} decorative />,
    );
    expect(container.querySelectorAll(".depth-text__layer")).toHaveLength(40);
    expect(container.querySelector(".depth-text__face")).toHaveTextContent(
      "KAALKRIT",
    );
  });

  it("renders metadata, rules, headings, statuses, and wordmarks with optional content", () => {
    const { rerender } = render(<MetaLine items={[]} />);
    expect(screen.getByRole("list")).toBeEmptyDOMElement();
    rerender(<MetaLine items={["2024", "Bengaluru"]} />);
    expect(screen.getByText("Bengaluru")).toBeVisible();

    render(<Rule label="System" animate delay={120} />);
    render(
      <SectionHeader
        eyebrow="01 / identity"
        heading="A deliberately long engineering heading that still renders"
        lede="Concise supporting copy."
        id="identity"
      />,
    );
    render(<StatusTag status="in-development" />);
    render(<Wordmark variant="footer" />);
    expect(
      screen.getByRole("heading", { name: /deliberately long/i }),
    ).toHaveAttribute("id", "identity");
    expect(screen.getByText("In development")).toBeVisible();
    expect(screen.getByAltText("KAALKRIT logo")).toBeVisible();
  });

  it("renders loaders with an accessible label and a non-semantic arrow", () => {
    render(
      <>
        <LoaderFour label="Loading projects" />
        <Arrow />
      </>,
    );
    expect(screen.getByRole("status")).toHaveTextContent("Loading projects");
    expect(screen.getByText("→")).toHaveAttribute("aria-hidden", "true");
  });

  it("keeps reveal content available without an IntersectionObserver", () => {
    render(<Reveal delay={80}>Visible content</Reveal>);
    expect(screen.getByText("Visible content")).toBeVisible();
  });

  it("uses the canonical navigation data and an accessible mobile menu control", () => {
    const onMenuToggle = vi.fn();
    render(
      <Navbar1
        pathname="/team"
        scrolled
        menuOpen={false}
        menuPanelId="menu"
        menuButtonRef={createRef()}
        onMenuToggle={onMenuToggle}
      />,
    );
    expect(
      screen.getByRole("navigation", { name: "Primary" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Team" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(onMenuToggle).toHaveBeenCalledOnce();
  });
});
