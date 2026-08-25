import "@testing-library/jest-dom/vitest";
import type { ComponentProps, ReactNode } from "react";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { vi } from "vitest";

afterEach(() => cleanup());

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    addListener: () => undefined,
    removeListener: () => undefined,
    dispatchEvent: () => false,
  }),
});

vi.mock("next/image", () => ({
  default: ({ alt = "", ...props }: ComponentProps<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: { href: string | { pathname?: string }; children: ReactNode } & Omit<
    ComponentProps<"a">,
    "href" | "children"
  >) => (
    <a
      href={typeof href === "string" ? href : (href.pathname ?? "")}
      {...props}
    >
      {children}
    </a>
  ),
}));
