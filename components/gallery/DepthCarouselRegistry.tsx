'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import type { GalleryItem } from '@/lib/types';

/** Typed KAALKRIT adaptation of the React Bits DepthCarousel JS + CSS registry component. */
export function DepthCarouselRegistry({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedRef.current = media.matches;
    const onChange = () => { reducedRef.current = media.matches; };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedRef.current || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.kaalkrit-depth-card', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: 'power3.out' });
    }, rootRef);
    return () => ctx.revert();
  }, [items]);

  const move = (delta: number) => setActive((value) => (value + delta + items.length) % items.length);

  return (
    <div ref={rootRef} className="registry-depth-carousel" tabIndex={0} aria-label="KAALKRIT media gallery">
      <div className="registry-depth-carousel__stage">
        {items.map((item, index) => {
          const distance = index - active;
          return (
            <figure
              key={item.id}
              className="kaalkrit-depth-card"
              style={{ '--depth': `${distance * -170}px`, '--spread': `${distance * 78}px`, '--opacity': Math.abs(distance) > 3 ? 0 : 1 } as React.CSSProperties}
              aria-hidden={index !== active}
            >
              <Image src={item.src!} alt={item.alt} fill sizes="(max-width: 767px) 72vw, 300px" />
              {item.caption ? <figcaption>{item.caption}</figcaption> : null}
            </figure>
          );
        })}
      </div>
      <button type="button" className="registry-gallery-control registry-gallery-control--prev" onClick={() => move(-1)} aria-label="Previous gallery item">←</button>
      <button type="button" className="registry-gallery-control registry-gallery-control--next" onClick={() => move(1)} aria-label="Next gallery item">→</button>
      <p className="sr-only" aria-live="polite">Item {active + 1} of {items.length}</p>
    </div>
  );
}
