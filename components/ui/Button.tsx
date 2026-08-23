"use client";

import Link from "next/link";
import type { PointerEvent, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "destructive";

const base =
  "inline-flex items-center justify-center gap-[var(--k-2)] min-h-[44px] rounded-[var(--k-radius)] " +
  "font-[family-name:var(--font-interface)] font-semibold text-[var(--k-t-small)] leading-none no-underline " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-[var(--k-dur)] ease-[var(--k-ease)] " +
  "focus-visible:outline-3 focus-visible:outline-[var(--ring)] focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "px-[var(--k-5)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--foreground)] hover:text-[var(--card)]",
  secondary:
    "px-[var(--k-5)] border border-[var(--accent-foreground)] text-[var(--k-text)] hover:border-[var(--primary)] hover:bg-[color-mix(in_srgb,var(--primary)_15%,var(--card))]",
  ghost:
    "px-[var(--k-3)] text-[var(--k-text)] hover:bg-[var(--secondary)] hover:text-[var(--accent-foreground)]",
  destructive:
    "px-[var(--k-5)] border border-[var(--destructive)] bg-[var(--destructive)] text-[var(--destructive-foreground)]",
};

function followPointer(event: PointerEvent<HTMLElement>) {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const element = event.currentTarget;
  const bounds = element.getBoundingClientRect();
  element.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
  element.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  element.dataset.pointerActive = "true";
}

function resetPointer(event: PointerEvent<HTMLElement>) {
  const element = event.currentTarget;
  delete element.dataset.pointerActive;
  element.style.removeProperty("--pointer-x");
  element.style.removeProperty("--pointer-y");
}

export function Button({
  href,
  children,
  variant = "secondary",
  className = "",
  trailing,
  loading = false,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  loading?: boolean;
  /** Rendered after the label — the ghost variant's arrow. */
  trailing?: ReactNode;
} & Omit<
  React.ComponentProps<typeof Link>,
  "href" | "children" | "className"
>) {
  const isExternal = href.startsWith("http");
  const classes = `pointer-button ${base} ${variants[variant]} ${loading ? "opacity-50 pointer-events-none" : ""} ${className}`;

  if (loading) {
    return (
      <button type="button" className={classes} aria-busy="true" disabled>
        Loading…
        {trailing}
      </button>
    );
  }

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
        onPointerMove={followPointer}
        onPointerLeave={resetPointer}
      >
        {loading ? "Loading…" : children}
        {trailing}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      {...rest}
      onPointerMove={followPointer}
      onPointerLeave={resetPointer}
    >
      {children}
      {trailing}
    </Link>
  );
}

export function Arrow() {
  return (
    <span aria-hidden="true" className="translate-y-px text-[0.9em]">
      →
    </span>
  );
}
