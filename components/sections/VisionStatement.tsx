import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { futureDirections, targetSectors } from '@/content/partner';

/**
 * F12 and F13, framed as direction and explicitly labelled as intent.
 * Sector names are intended application areas — never deployments.
 */
export function VisionStatement() {
  return (
    <section id="vision" className="k-section scroll-mt-[96px]" aria-labelledby="vision-heading">
      <div className="k-container">
        <SectionHeader
          eyebrow="Vision"
          id="vision-heading"
          heading="Where the programme is going."
          lede="We want to become one of India's leading university engineering teams and contribute to the country's deep-tech self-reliance. What follows is stated as intent, not as schedule or deployment."
        />

        <div className="mt-[var(--k-8)] grid gap-[var(--k-8)] md:grid-cols-12 md:gap-[var(--k-5)]">
          <Reveal className="md:col-span-6">
            <div className="k-rule" />
            <h3 className="k-meta mt-[var(--k-5)]">Research directions</h3>
            <ul className="mt-[var(--k-5)] grid gap-[var(--k-4)]">
              {futureDirections.map((direction) => (
                <li
                  key={direction}
                  className="text-[length:var(--k-t-lede)] leading-snug text-[var(--k-text)]"
                >
                  {direction}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={60} className="md:col-span-5 md:col-start-8">
            <div className="k-rule" />
            <h3 className="k-meta mt-[var(--k-5)]">Intended application areas</h3>
            <ul className="mt-[var(--k-5)] flex flex-wrap gap-[var(--k-2)]">
              {targetSectors.map((sector) => (
                <li
                  key={sector}
                  className="border border-[var(--k-line)] rounded-[var(--k-radius)] px-[var(--k-3)] py-[var(--k-2)] text-[var(--k-t-small)] text-[var(--k-text-muted)]"
                >
                  {sector}
                </li>
              ))}
            </ul>
            <p className="mt-[var(--k-5)] text-[var(--k-t-small)] leading-snug text-[var(--k-text-faint)] max-w-[42ch]">
              These are the areas the work is aimed at — not places where a KAALKRIT system has been
              deployed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
