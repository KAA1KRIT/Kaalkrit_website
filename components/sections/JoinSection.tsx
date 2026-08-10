import { domainsByGroup } from '@/content/domains';
import { mailto } from '@/content/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

/**
 * Recruit on learning and ownership, not on prestige. The application
 * process is not documented (gap in the source), so it is named as
 * missing rather than described.
 */
export function JoinSection() {
  return (
    <section id="join" className="k-section scroll-mt-[96px]" aria-labelledby="join-heading">
      <div className="k-container">
        <SectionHeader
          eyebrow="Join KAALKRIT"
          id="join-heading"
          heading="Bring curiosity. Learn the system."
          lede="KAALKRIT is a multidisciplinary student engineering team at Sir MVIT. The public team roster and recruitment process are not published yet, so this section does not invent an application path."
        />

        <div className="mt-[var(--k-8)] grid gap-[var(--k-8)] md:grid-cols-12 md:gap-[var(--k-5)]">
          <Reveal className="md:col-span-7">
            <h3 className="k-meta">Where you would work</h3>
            <ul className="mt-[var(--k-5)] grid gap-[var(--k-5)] sm:grid-cols-2">
              {domainsByGroup.map(({ group, items }) => (
                <li key={group.id}>
                  <div className="k-rule" />
                  <p className="k-display mt-[var(--k-4)] text-[1.125rem]">{group.label}</p>
                  <p className="mt-[var(--k-2)] text-[var(--k-t-small)] leading-snug text-[var(--k-text-muted)]">
                    {items.map((domain) => domain.label).join(' · ')}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={60} className="md:col-span-4 md:col-start-9">
            <h3 className="k-meta">Joining the team</h3>
            <div className="mt-[var(--k-5)]">
              <p className="k-body text-[var(--k-t-small)]">The public team roster and recruitment process are not published yet. You can still send a joining enquiry to the official team email.</p>
              <Button href={mailto('Joining Team KAALKRIT')} variant="primary" className="mt-[var(--k-5)]">Email about joining</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
