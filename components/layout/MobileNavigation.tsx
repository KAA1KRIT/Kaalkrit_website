'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, type RefObject } from 'react';
import { primaryNav } from '@/content/navigation';
import { mailto } from '@/content/site';
import { TrackedLink } from '@/components/analytics/TrackedLink';

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

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
export function MobileNavigation({ open, onClose, panelId, triggerRef }: MobileNavigationProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const body = document.body;
    const trigger = triggerRef.current;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const inertTargets = [
      document.querySelector<HTMLElement>('#main'),
      document.querySelector<HTMLElement>('footer'),
    ].filter((element): element is HTMLElement => Boolean(element));
    const previousInert = inertTargets.map((element) => ({ element, inert: element.inert }));
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    inertTargets.forEach((element) => { element.inert = true; });

    const focusFirst = window.requestAnimationFrame(() => {
      panel.querySelector<HTMLElement>(focusableSelector)?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector));
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

    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFirst);
      document.removeEventListener('keydown', onKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      previousInert.forEach(({ element, inert }) => { element.inert = inert; });
      if (previouslyFocused && document.contains(previouslyFocused)) {
        window.requestAnimationFrame(() => trigger?.focus());
      }
    };
  }, [onClose, open, triggerRef]);

  return (
    <div
      hidden={!open}
      className="mobile-navigation"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation"
        className="mobile-navigation__inner"
      >
        <nav aria-label="Primary mobile navigation">
        {primaryNav.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return <Link key={item.href} href={item.href} onClick={onClose} aria-current={active ? 'page' : undefined}>{item.label}</Link>;
        })}
        <TrackedLink href={mailto('Partnership with Team KAALKRIT')} className="button button--primary" onClick={onClose} event="partner_cta_click" properties={{ placement: 'mobile_navigation' }}>Partner with KAALKRIT</TrackedLink>
        </nav>
      </aside>
    </div>
  );
}
