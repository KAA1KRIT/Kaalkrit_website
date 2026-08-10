'use client';

import { type ReactNode, useRef } from 'react';

/** A single, restrained pointer response for the partnership invitation. */
export function BorderGlow({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="border-glow"
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse' || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        ref.current.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
        ref.current.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
      }}
    >
      {children}
    </div>
  );
}
