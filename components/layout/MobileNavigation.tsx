'use client';

import Link from 'next/link';
import { primaryNav } from '@/content/navigation';
import { mailto } from '@/content/site';

export function MobileNavigation({ open, onClose, panelId }: { open: boolean; onClose: () => void; panelId: string }) {
  return (
    <div id={panelId} hidden={!open} className="mobile-navigation">
      <nav aria-label="Primary mobile navigation" className="mobile-navigation__inner">
        {primaryNav.map((item) => <Link key={item.href} href={item.href} onClick={onClose}>{item.label}</Link>)}
        <a href={mailto('Partnership with Team KAALKRIT')} className="button button--primary" onClick={onClose}>Partner with KAALKRIT</a>
      </nav>
    </div>
  );
}
