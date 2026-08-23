"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/**
 * Entrance reveal: opacity + 12px translate, once, at 20% intersection.
 *
 * Content is present in the server HTML and becomes visible without JS —
 * the hidden state is applied only after hydration, so a failed or blocked
 * script can never hide content. Reduced motion is handled in CSS.
 *
 * Renders a plain div; wrap it in the semantic element rather than the
 * other way round, so landmarks stay explicit at the call site.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Stagger. Callers cap this at four children. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Already on screen at mount, or no observer: show it outright. Arming
    // visible content only to fade it back in reads as a glitch, not motion.
    if (
      typeof IntersectionObserver === "undefined" ||
      node.getBoundingClientRect().top < window.innerHeight * 0.9
    ) {
      setRevealed(true);
      return;
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = delay
    ? ({ "--k-reveal-delay": `${delay}ms` } as CSSProperties)
    : undefined;

  return (
    <div
      ref={ref}
      className={`${armed ? "k-reveal" : ""} ${revealed ? "is-revealed" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
