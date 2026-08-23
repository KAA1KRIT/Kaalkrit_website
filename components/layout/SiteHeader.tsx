"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { mailto } from "@/content/site";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { Wordmark } from "@/components/ui/Wordmark";
import { MobileNavigation } from "./MobileNavigation";
import { DesktopFlyoutNavigation } from "./DesktopFlyoutNavigation";

/**
 * Sparse public navigation. The mobile menu owns its own layout so desktop
 * navigation never becomes a cramped drawer.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openRoute, setOpenRoute] = useState<string | null>(null);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The route is part of the menu state, so navigation closes it without an
  // extra render-producing effect.
  const open = openRoute === pathname;

  const closeMenu = useCallback(() => setOpenRoute(null), []);

  return (
    <header
      className={`site-header fixed z-50 ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}
    >
      <div className="site-header__inner">
        <Link
          href="/"
          className="site-header__brand-link"
          aria-label="[SITE NAME PLACEHOLDER] — [HOME LINK ARIA LABEL PLACEHOLDER]"
        >
          <Wordmark priority variant="header" />
        </Link>

        <div className="site-header__desktop-navigation">
          <DesktopFlyoutNavigation pathname={pathname} />
          <TrackedLink
            className="site-header__cta"
            href={mailto("[PARTNERSHIP EMAIL SUBJECT PLACEHOLDER]")}
            event="partner_cta_click"
            properties={{ placement: "header" }}
          >
            [HEADER CTA PLACEHOLDER]
          </TrackedLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpenRoute(open ? null : pathname)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          className="site-header__menu-button"
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true" className="grid gap-[3px]">
            <span className="block h-px w-[18px] bg-current" />
            <span className="block h-px w-[18px] bg-current" />
          </span>
        </button>
      </div>

      <MobileNavigation
        open={open}
        onClose={closeMenu}
        panelId={panelId}
        triggerRef={toggleRef}
      />
    </header>
  );
}
