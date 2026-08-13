'use client';

import { useEffect, useRef } from 'react';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { GradualBlur } from '@/components/hero/GradualBlur';
import { GradientWavesLayer } from '@/components/hero/GradientWavesLayer';

/**
 * The homepage's only scroll-linked effect. It uses the document's native
 * scroll position and CSS custom properties, so it neither owns nor creates
 * a nested scroller. Reduced-motion and small-screen visitors receive the
 * final editorial visual state immediately. The frame is the only element
 * scaled by scroll progress; document height and the page scroll owner never
 * change during the effect.
 */
export function ScrollExpandHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const compactContentRef = useRef<HTMLDivElement>(null);
  const expandedActionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const compactContent = compactContentRef.current;
    const expandedActions = expandedActionsRef.current;
    if (!section || !frame || !compactContent || !expandedActions) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compact = window.matchMedia('(max-width: 767px)');
    const maxScale = 2.75;
    let frameId = 0;

    const setInteractiveState = (compactOpacity: number, expandedOpacity: number, isCompact: boolean) => {
      compactContent.toggleAttribute('inert', !isCompact && compactOpacity < 0.05);
      expandedActions.toggleAttribute('inert', !isCompact && expandedOpacity < 0.7);
    };

    const setStableState = (isCompact: boolean) => {
      section.style.setProperty('--hero-progress', '1');
      section.style.setProperty('--hero-compact-opacity', isCompact ? '1' : '0');
      section.style.setProperty('--hero-expanded-opacity', '1');
      section.style.setProperty('--hero-summary-opacity', '1');
      section.style.setProperty('--hero-expanded-y', '0px');
      frame.style.transform = isCompact
        ? 'none'
        : 'translate3d(-50%, -50%, 0) scale(1)';
      setInteractiveState(isCompact ? 1 : 0, 1, isCompact);
      section.dataset.motion = 'static';
    };

    const update = () => {
      frameId = 0;
      if (reduced.matches || compact.matches) {
        setStableState(compact.matches);
        return;
      }

      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      const eased = progress * progress * (3 - 2 * progress);
      const viewportWidth = section.clientWidth;
      const targetScale = Math.min(maxScale, Math.max(1, Math.max(
        viewportWidth / frame.offsetWidth,
        window.innerHeight / frame.offsetHeight,
      )));
      const scale = Math.min(maxScale, Math.max(1, 1 + (targetScale - 1) * eased));
      const compactOpacity = 1 - Math.min(1, Math.max(0, (eased - 0.12) / 0.2));
      const revealProgress = Math.min(1, Math.max(0, (eased - 0.34) / 0.34));
      const expandedOpacity = revealProgress * revealProgress * (3 - 2 * revealProgress);
      const summaryProgress = Math.min(1, Math.max(0, (eased - 0.48) / 0.28));
      const summaryOpacity = summaryProgress * summaryProgress * (3 - 2 * summaryProgress);

      section.style.setProperty('--hero-progress', eased.toFixed(4));
      section.style.setProperty('--hero-compact-opacity', compactOpacity.toFixed(4));
      section.style.setProperty('--hero-expanded-opacity', expandedOpacity.toFixed(4));
      section.style.setProperty('--hero-summary-opacity', summaryOpacity.toFixed(4));
      section.style.setProperty('--hero-expanded-y', `${Math.round((1 - expandedOpacity) * 28)}px`);
      frame.style.transform = `translate3d(-50%, -50%, 0) scale(${scale.toFixed(4)})`;
      setInteractiveState(compactOpacity, expandedOpacity, false);
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
        <div className="scroll-expand-hero__waves" aria-hidden="true">
          <GradientWavesLayer />
        </div>
        <div ref={frameRef} className="scroll-expand-hero__frame">
          <div className="scroll-expand-hero__visual-mark" aria-hidden="true">
            <span className="scroll-expand-hero__visual-orbit" />
            <span className="scroll-expand-hero__visual-axis" />
            <span className="scroll-expand-hero__visual-core" />
          </div>
          <div className="scroll-expand-hero__scrim" />
          <p className="scroll-expand-hero__fact">Established 2024 · Sir MVIT, Bengaluru</p>
        </div>

        <div className="scroll-expand-hero__blur-shell" aria-hidden="true">
          <div className="scroll-expand-hero__blur-parent">
            <GradualBlur
              target="parent"
              position="bottom"
              height="6rem"
              strength={2}
              divCount={5}
              curve="bezier"
              exponential
              opacity={1}
            />
          </div>
        </div>

        <div className="scroll-expand-hero__content public-container">
          <div ref={compactContentRef} className="scroll-expand-hero__compact-content">
            <p className="eyebrow">Official Drone &amp; Robotics Innovation Team · Sir MVIT, Bengaluru</p>
            <p className="scroll-expand-hero__compact-brand" aria-hidden="true">KAALKRIT</p>
            <p className="scroll-expand-hero__compact-summary">
              A student-led engineering team building autonomous aerial, robotic, and embedded systems through hands-on practice.
            </p>
            <div className="scroll-expand-hero__actions">
              <TrackedLink href="#projects" event="primary_cta_click" properties={{ placement: 'hero' }} className="button button--primary">Explore our work <span aria-hidden="true">↓</span></TrackedLink>
            </div>
          </div>
          <div className="scroll-expand-hero__expanded-copy">
            <h1 id="hero-heading">
              <span className="sr-only">KAALKRIT — Engineering what moves next.</span>
              <span className="scroll-expand-hero__title" aria-hidden="true">
                <span className="scroll-expand-hero__title-brand">KAALKRIT</span>
                <span className="scroll-expand-hero__title-tagline">Engineering what<br />moves next.</span>
              </span>
            </h1>
            <p className="scroll-expand-hero__summary">
              KAALKRIT brings together research, hardware, software, and intelligent systems to build
              ambitious engineering work with real-world purpose.
            </p>
            <div ref={expandedActionsRef} className="scroll-expand-hero__expanded-actions">
              <TrackedLink href="#projects" event="primary_cta_click" properties={{ placement: 'hero-expanded' }} className="button button--primary">Explore our work <span aria-hidden="true">↓</span></TrackedLink>
            </div>
          </div>
        </div>

        <p className="scroll-expand-hero__cue" aria-hidden="true"><span />Scroll to explore</p>
      </div>
    </section>
  );
}
