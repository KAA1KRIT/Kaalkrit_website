import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { domainsByGroup } from '@/content/domains';

/**
 * A typographic index, not a logo wall and not an icon-per-feature grid.
 * The grouping is editorial; the eleven domains are verbatim.
 */
export function DomainIndex() {
  return (
    <section id="domains" className="k-section scroll-mt-[96px]" aria-labelledby="domains-heading">
      <div className="k-container">
        <SectionHeader
          eyebrow="Engineering domains"
          id="domains-heading"
          heading="What the team can actually build."
          lede="Eleven documented capability domains, grouped by where they sit in a system."
        />

        <div className="mt-[var(--k-8)] grid gap-[var(--k-8)] md:grid-cols-2 lg:grid-cols-4 lg:gap-[var(--k-5)]">
          {domainsByGroup.map(({ group, items }, index) => (
            <Reveal key={group.id} delay={Math.min(index, 3) * 60}>
              <div className="k-rule" />
              <h3 className="k-display mt-[var(--k-5)] text-[1.25rem]">{group.label}</h3>
              <p className="mt-[var(--k-2)] text-[var(--k-t-small)] text-[var(--k-text-faint)] max-w-[34ch]">
                {group.note}
              </p>
              <ul className="mt-[var(--k-5)] grid gap-[var(--k-3)]">
                {items.map((domain) => (
                  <li
                    key={domain.id}
                    className="text-[var(--k-t-small)] leading-snug text-[var(--k-text-muted)]"
                  >
                    {domain.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
