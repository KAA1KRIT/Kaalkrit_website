import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';

export function Mission() {
  return (
    <section id="mission" className="k-section scroll-mt-[96px]" aria-labelledby="mission-heading">
      <div className="k-container">
        <SectionHeader
          eyebrow="Mission"
          id="mission-heading"
          heading="Engineering complete systems, not isolated prototypes."
        />

        <Reveal className="mt-[var(--k-8)] grid gap-[var(--k-6)] md:grid-cols-12 md:gap-[var(--k-5)]">
          <div className="md:col-span-7 md:col-start-4">
            <p className="k-lede text-[var(--k-text)]">
              KAALKRIT exists to design intelligent technologies that solve real-world challenges
              through research and engineering excellence.
            </p>
            <p className="k-body mt-[var(--k-5)]">
              That means every project runs the full engineering process — research, system
              architecture, design, manufacturing, electronics integration, software development,
              testing, validation and continuous improvement. A prototype that works once is not the
              finish line; testing, validation and continuous improvement are part of the work.
            </p>
            <p className="k-body mt-[var(--k-4)]">
              The team is multidisciplinary by construction: students from across engineering
              domains, working on the same machine at the same time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
