'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { mailto } from '@/content/site';

/**
 * The homepage's only scroll-linked effect. It uses the document's native
 * scroll position and CSS custom properties, so it neither owns nor creates
 * a nested scroller. Reduced-motion and small-screen visitors receive the
 * final editorial image state immediately.
 */
export function ScrollExpandHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compact = window.matchMedia('(max-width: 767px)');
    let frameId = 0;

    const setFinalState = () => {
      section.style.setProperty('--hero-progress', '1');
      section.style.setProperty('--hero-scale', '1');
      section.style.setProperty('--hero-copy-opacity', '1');
      section.dataset.motion = 'static';
    };

    const update = () => {
      frameId = 0;
      if (reduced.matches || compact.matches) {
        setFinalState();
        return;
      }

      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      const eased = progress * progress * (3 - 2 * progress);
      const targetScale = Math.max(
        window.innerWidth / frame.offsetWidth,
        window.innerHeight / frame.offsetHeight,
      );

      section.style.setProperty('--hero-progress', eased.toFixed(4));
      section.style.setProperty('--hero-scale', (1 + (targetScale - 1) * eased).toFixed(4));
      section.style.setProperty('--hero-copy-opacity', (1 - Math.min(1, eased * 1.7)).toFixed(4));
      section.dataset.motion = 'scroll';
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update);
    };

    const observer = new ResizeObserver(requestUpdate);
    observer.observe(section);
    observer.observe(frame);
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    reduced.addEventListener('change', requestUpdate);
    compact.addEventListener('change', requestUpdate);
    requestUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      reduced.removeEventListener('change', requestUpdate);
      compact.removeEventListener('change', requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll-expand-hero" aria-labelledby="hero-heading">
      <div className="scroll-expand-hero__sticky">
        <div ref={frameRef} className="scroll-expand-hero__frame" aria-hidden="true">
          <Image
            src="/images/hero-drone-desert.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="scroll-expand-hero__image"
          />
          <div className="scroll-expand-hero__scrim" />
          <p className="scroll-expand-hero__fact">Established 2024 · Sir MVIT, Bengaluru · Temporary stock image for visual atmosphere only</p>
        </div>

        <div className="scroll-expand-hero__content public-container">
          <p className="eyebrow">Official Drone &amp; Robotics Innovation Team · Sir MVIT, Bengaluru</p>
          <h1 id="hero-heading">Engineering what moves next.</h1>
          <p>
            KAALKRIT brings together research, hardware, software, and intelligent systems to build
            ambitious engineering work with real-world purpose.
          </p>
          <div className="scroll-expand-hero__actions">
            <Link href="#projects" className="button button--primary">Explore our work <span aria-hidden="true">↓</span></Link>
            <a href={mailto('Partnership with Team KAALKRIT')} className="button button--secondary">Partner with KAALKRIT <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <p className="scroll-expand-hero__cue" aria-hidden="true"><span />Scroll to explore</p>
      </div>
    </section>
  );
}
