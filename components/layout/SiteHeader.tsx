"use client";

import { usePathname } from "next/navigation";
import { useCallback, useId, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { Navbar1 } from "@/components/ui/navbar-1";
import { MobileNavigation } from "./MobileNavigation";

/**
 * Owns public navigation state and composes the shared floating Navbar1 with
 * the accessible mobile sheet. The document remains the only scroll owner.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openRoute, setOpenRoute] = useState<string | null>(null);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const updateScrolled = useCallback(() => {
    setScrolled(window.scrollY > 8);
  }, []);

  useLenis(updateScrolled, []);

  // The route is part of the menu state, so navigation closes it without an
  // extra render-producing effect.
  const open = openRoute === pathname;

  const closeMenu = useCallback(() => setOpenRoute(null), []);
  const toggleMenu = useCallback(() => {
    setOpenRoute((current) => (current === pathname ? null : pathname));
  }, [pathname]);

  return (
    <header className={`site-header ${open ? "is-open" : ""}`}>
      <Navbar1
        pathname={pathname}
        scrolled={scrolled}
        menuOpen={open}
        menuPanelId={panelId}
        menuButtonRef={toggleRef}
        onMenuToggle={toggleMenu}
      />

      <MobileNavigation
        open={open}
        onClose={closeMenu}
        panelId={panelId}
        triggerRef={toggleRef}
      />
    </header>
  );
}
