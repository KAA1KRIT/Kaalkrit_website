"use client";

import Link from "next/link";
import { primaryNav } from "@/content/navigation";

type DesktopFlyoutNavigationProps = {
  pathname: string;
};

/**
 * Direct desktop navigation. The top bar only carries the routes a first-time
 * visitor needs: projects, direction, and collaboration.
 */
export function DesktopFlyoutNavigation({
  pathname,
}: DesktopFlyoutNavigationProps) {
  const active = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <nav aria-label="Primary" className="site-header__nav">
      {primaryNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={active(item.href) ? "page" : undefined}
          className={`site-header__link ${active(item.href) ? "is-active" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
