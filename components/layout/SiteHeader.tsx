'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { primaryNav } from '@/content/navigation';
import { mailto } from '@/content/site';
import { Wordmark } from '@/components/ui/Wordmark';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { MobileNavigation } from './MobileNavigation';

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
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The route is part of the menu state, so navigation closes it without an
  // extra render-producing effect.
  const open = openRoute === pathname;

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const closeMenu = useCallback(() => setOpenRoute(null), []);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-colors duration-[var(--k-dur)] ease-[var(--k-ease)] ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}
    >
      <div className="k-container flex items-center justify-between gap-[var(--k-5)] h-[68px]">
        <Link
          href="/"
          className="inline-flex items-center min-h-[44px] text-[1.0625rem] text-[var(--k-text)] no-underline shrink-0"
          aria-label="KAALKRIT — home"
        >
          <Wordmark priority />
        </Link>

        <nav aria-label="Primary" className="site-header__nav">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`site-header__link ${
                isActive(item.href)
                  ? 'is-active'
                  : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <TrackedLink className="site-header__cta" href={mailto('Partnership with Team KAALKRIT')} event="partner_cta_click" properties={{ placement: 'header' }}>Partner with KAALKRIT</TrackedLink>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpenRoute(open ? null : pathname)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="site-header__menu-button"
        >
          {open ? 'Close' : 'Menu'}
          <span aria-hidden="true" className="grid gap-[3px]">
            <span className="block h-px w-[18px] bg-current" />
            <span className="block h-px w-[18px] bg-current" />
          </span>
        </button>
      </div>

      <MobileNavigation open={open} onClose={closeMenu} panelId={panelId} triggerRef={toggleRef} />
    </header>
  );
}
