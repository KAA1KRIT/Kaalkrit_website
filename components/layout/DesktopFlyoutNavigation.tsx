'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { flyoutNavigation, primaryNav, type FlyoutNavigationGroup } from '@/content/navigation';

const directItems = primaryNav.filter(({ label }) => label !== 'Work' && label !== 'Capabilities');

type DesktopFlyoutNavigationProps = {
  pathname: string;
};

/**
 * A compact, Hover-inspired desktop flyout. It keeps panels in the regular
 * tab order and closes on Escape, click-away, and focus leaving the nav.
 */
export function DesktopFlyoutNavigation({ pathname }: DesktopFlyoutNavigationProps) {
  const [openId, setOpenId] = useState<FlyoutNavigationGroup['id'] | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Partial<Record<FlyoutNavigationGroup['id'], HTMLButtonElement>>>({});
  const closeTimer = useRef<number | undefined>(undefined);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  const close = useCallback(() => {
    clearCloseTimer();
    setOpenId(null);
  }, [clearCloseTimer]);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpenId(null), 120);
  }, [clearCloseTimer]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !openId) return;
      event.preventDefault();
      close();
      triggerRefs.current[openId]?.focus();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      clearCloseTimer();
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [clearCloseTimer, close, openId]);

  const active = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className="site-header__nav flyout-navigation"
      onPointerEnter={clearCloseTimer}
      onPointerLeave={scheduleClose}
      onBlur={() => {
        window.setTimeout(() => {
          if (!navRef.current?.contains(document.activeElement)) close();
        }, 0);
      }}
    >
      {flyoutNavigation.map((group) => {
        const isOpen = openId === group.id;
        const panelId = `site-navigation-${group.id}`;
        return (
          <div
            className="flyout-navigation__group"
            key={group.id}
            onPointerEnter={() => {
              clearCloseTimer();
              setOpenId(group.id);
            }}
          >
            <button
              ref={(node) => { triggerRefs.current[group.id] = node ?? undefined; }}
              type="button"
              className={`site-header__link flyout-navigation__trigger ${isOpen ? 'is-open' : ''}`}
              aria-label={group.ariaLabel}
              aria-controls={panelId}
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={() => setOpenId(isOpen ? null : group.id)}
              onFocus={() => setOpenId(group.id)}
            >
              {group.label}
              <span aria-hidden="true" className="flyout-navigation__chevron">⌄</span>
            </button>
            {isOpen ? (
              <div id={panelId} className="flyout-navigation__panel" aria-label={`${group.label} navigation`}>
                <div className="flyout-navigation__panel-label">{group.label}</div>
                <div className="flyout-navigation__links">
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} className="flyout-navigation__link" onClick={close}>
                      <span>{item.label}</span>
                      <small>{item.description}</small>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
      {directItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={active(item.href) ? 'page' : undefined}
          className={`site-header__link ${active(item.href) ? 'is-active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
