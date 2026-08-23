"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type RefObject } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { collaborationCta, primaryNav } from "@/content/navigation";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
  panelId: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

/**
 * A lightweight Sheet-pattern drawer. It owns focus and the temporary scroll
 * lock only while it is open; the document remains the page scroll owner.
 */
export function MobileNavigation({
  open,
  onClose,
  panelId,
  triggerRef,
}: MobileNavigationProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const body = document.body;
    const trigger = triggerRef.current;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const inertTargets = [
      document.querySelector<HTMLElement>("#main"),
      document.querySelector<HTMLElement>("footer"),
    ].filter((element): element is HTMLElement => Boolean(element));
    const previousInert = inertTargets.map((element) => ({
      element,
      inert: element.inert,
    }));
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    inertTargets.forEach((element) => {
      element.inert = true;
    });

    const focusFirst = window.requestAnimationFrame(() => {
      panel.querySelector<HTMLElement>(focusableSelector)?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(focusableSelector),
      );
      if (focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFirst);
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      previousInert.forEach(({ element, inert }) => {
        element.inert = inert;
      });
      if (previouslyFocused && document.contains(previouslyFocused)) {
        window.requestAnimationFrame(() => trigger?.focus());
      }
    };
  }, [onClose, open, triggerRef]);

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: [0.2, 0, 0, 1] as const };

  return (
    <AnimatePresence initial={!reducedMotion}>
      {open ? (
        <motion.div
          className="mobile-navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.aside
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Primary navigation"
            className="mobile-navigation__inner"
            initial={reducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={transition}
          >
            <nav aria-label="Primary mobile navigation">
              {primaryNav.map((item, index) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <motion.div
                    key={item.href}
                    initial={reducedMotion ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={
                      reducedMotion
                        ? transition
                        : { ...transition, delay: 0.04 + index * 0.035 }
                    }
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className="mobile-navigation__link"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reducedMotion ? transition : { ...transition, delay: 0.2 }
              }
            >
              <Button
                href={collaborationCta.href}
                variant="primary"
                className="mobile-navigation__cta"
                onClick={onClose}
              >
                {collaborationCta.label}
              </Button>
            </motion.div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
