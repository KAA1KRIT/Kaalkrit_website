import type { CSSProperties } from 'react';

/**
 * The scale rule — the one element permitted to be memorable.
 * A hairline ticked like a measuring scale. Everything else stays quiet.
 */
export function Rule({
  label,
  className = '',
  animate = false,
  delay = 0,
}: {
  /** Optional mono label, set above the rule. */
  label?: string;
  className?: string;
  /** Draws left-to-right on load. Hero only. */
  animate?: boolean;
  delay?: number;
}) {
  const style = animate ? ({ '--k-enter-delay': `${delay}ms` } as CSSProperties) : undefined;

  return (
    <div className={className}>
      {label ? <p className="k-meta mb-[var(--k-3)]">{label}</p> : null}
      <div className={`k-rule ${animate ? 'k-enter-rule' : ''}`.trim()} style={style} />
    </div>
  );
}
