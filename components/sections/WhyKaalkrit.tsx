import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { lifecycleStages } from '@/content/domains';

/**
 * Three claims, each with its evidence attached. No abstraction stands
 * on its own — that is the rule this section exists to enforce.
 */
export function WhyKaalkrit() {
  return (
    <section className="k-section" aria-labelledby="why-heading">
      <div className="k-container">
        <SectionHeader
          eyebrow="Why KAALKRIT"
          id="why-heading"
          heading="Three claims, and the evidence for each."
        />

        <div className="mt-[var(--k-8)] grid gap-px bg-[var(--k-line)] border-y border-[var(--k-line)]">
          <Reveal className="bg-[var(--k-void)]">
            <div className="grid gap-[var(--k-5)] py-[var(--k-7)] md:grid-cols-12">
              <p className="k-meta md:col-span-3">Full lifecycle</p>
              <div className="md:col-span-9">
                <h3 className="k-display text-[length:var(--k-t-h3)]">
                  Nine stages, designed to work as one lifecycle.
                </h3>
                <p className="k-body mt-[var(--k-4)]">
                  KAALKRIT works across every stage below, connecting research and architecture to
                  manufacturing, software, testing, validation and iteration.
                </p>
                <ol className="k-meta mt-[var(--k-5)] grid grid-cols-2 gap-x-[var(--k-5)] gap-y-[var(--k-2)] sm:grid-cols-3 lg:grid-cols-5">
                  {lifecycleStages.map((stage, index) => (
                    <li key={stage} className="flex gap-[var(--k-2)]">
                      <span className="text-[var(--k-signal)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[var(--k-text-muted)] normal-case tracking-normal font-[family-name:var(--font-body)] text-[var(--k-t-small)] leading-snug">
                        {stage}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60} className="bg-[var(--k-void)]">
            <div className="grid gap-[var(--k-5)] py-[var(--k-7)] md:grid-cols-12">
              <p className="k-meta md:col-span-3">Multidisciplinary</p>
              <div className="md:col-span-9">
                <h3 className="k-display text-[length:var(--k-t-h3)]">
                  Eleven capability domains under one roof.
                </h3>
                <p className="k-body mt-[var(--k-4)]">
                  Aerodynamics, embedded electronics, control, perception and full-stack software
                  come together across one multidisciplinary student team.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="bg-[var(--k-void)]">
            <div className="grid gap-[var(--k-5)] py-[var(--k-7)] md:grid-cols-12">
              <p className="k-meta md:col-span-3">Multi-year programme</p>
              <div className="md:col-span-9">
                <h3 className="k-display text-[length:var(--k-t-h3)]">
                  The work compounds instead of resetting.
                </h3>
                <p className="k-body mt-[var(--k-4)]">
                  The NIDAR 2026 unmanned aerial system is the explicit foundation for AirMOS in
                  2027. Two cycles of one programme — not two unrelated competition entries.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
