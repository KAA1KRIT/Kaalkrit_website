import { proofPoints } from '@/content/achievements';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Substitute for an impact-statistics row. The documentation records no
 * team size, flight hours, budget or dates (gap G5), so these are counts
 * of documented work — statements, not animated counters.
 */
export function ProofPoints() {
  return (
    <section className="k-section" aria-labelledby="proof-heading">
      <div className="k-container">
        <h2 id="proof-heading" className="sr-only">
          What is documented
        </h2>
        <div className="k-rule" />
        <dl className="mt-[var(--k-7)] grid gap-[var(--k-7)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[var(--k-5)]">
          {proofPoints.map((point, index) => (
            <Reveal key={point.value + point.statement} delay={Math.min(index, 3) * 60}>
              <div>
                <dt className="k-display text-[2.5rem] leading-none text-[var(--k-text)] tabular-nums">
                  {point.value}
                </dt>
                <dd className="mt-[var(--k-4)] text-[var(--k-t-small)] leading-snug text-[var(--k-text-muted)] max-w-[26ch]">
                  {point.statement}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
