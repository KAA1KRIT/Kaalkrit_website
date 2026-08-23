"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion, type Transition } from "motion/react";
import type { RefObject } from "react";
import { collaborationCta, primaryNav } from "@/content/navigation";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";

type Navbar1Props = {
  pathname: string;
  scrolled: boolean;
  menuOpen: boolean;
  menuPanelId: string;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
  onMenuToggle: () => void;
};

function isActiveRoute(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

/**
 * Floating three-zone public navigation: real KAALKRIT routes on the left,
 * canonical branding at centre, and the partnership action on the right.
 */
export function Navbar1({
  pathname,
  scrolled,
  menuOpen,
  menuPanelId,
  menuButtonRef,
  onMenuToggle,
}: Navbar1Props) {
  const reducedMotion = useReducedMotion();
  const entranceTransition: Transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.24, ease: [0.2, 0, 0, 1] };
  const entranceInitial = reducedMotion ? false : { opacity: 0, y: -8 };

  return (
    <div className={`navbar-1 ${scrolled ? "is-scrolled" : ""}`.trim()}>
      <div className="navbar-1__inner">
        <motion.nav
          aria-label="Primary"
          className="navbar-1__nav"
          initial={entranceInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={entranceTransition}
        >
          {primaryNav.map((item) => {
            const active = isActiveRoute(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`navbar-1__link ${active ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </motion.nav>

        <motion.div
          className="navbar-1__brand"
          initial={entranceInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={entranceTransition}
        >
          <Link
            href="/"
            className="navbar-1__brand-link"
            aria-label="Team KAALKRIT — home"
          >
            <Wordmark priority variant="header" />
          </Link>
        </motion.div>

        <motion.div
          className="navbar-1__action"
          initial={entranceInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={entranceTransition}
        >
          <Button
            href={collaborationCta.href}
            variant="primary"
            className="navbar-1__cta"
          >
            {collaborationCta.label}
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={onMenuToggle}
            aria-expanded={menuOpen}
            aria-controls={menuPanelId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="navbar-1__menu-button"
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            {menuOpen ? (
              <X aria-hidden="true" size={18} strokeWidth={1.75} />
            ) : (
              <Menu aria-hidden="true" size={19} strokeWidth={1.75} />
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
