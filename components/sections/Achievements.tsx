import { achievements } from '@/content/achievements';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { SITE } from '@/content/site';

/**
 * Two verified items, presented with restraint. Two honest achievements
 * outrank six padded ones, and a sponsor's diligence check has to survive
 * every line here.
 */
export function Achievements() {
  return (
    <section
      id="achievements"
      className="k-section scroll-mt-[96px]"
      aria-labelledby="achievements-heading"
    >
      <div className="k-container">
        <SectionHeader
          eyebrow="Achievements"
          id="achievements-heading"
          heading="What has been assessed by someone outside the team."
          lede={`Established in ${SITE.founded}. This is the complete record — nothing here is rounded up.`}
        />

        <ol className="mt-[var(--k-8)] grid gap-px bg-[var(--k-line)] border-y border-[var(--k-line)]">
          {achievements.map((achievement, index) => (
            <li key={achievement.id} className="bg-[var(--k-void)]">
              <Reveal delay={index * 60}>
                <div className="grid gap-[var(--k-4)] py-[var(--k-7)] md:grid-cols-12 md:gap-[var(--k-5)]">
                  <p className="k-meta md:col-span-3">
                    {String(index + 1).padStart(2, '0')} / National level
                  </p>
                  <div className="md:col-span-9">
                    <h3 className="k-display text-[length:var(--k-t-h3)]">{achievement.title}</h3>
                    <p className="k-body mt-[var(--k-3)]">{achievement.detail}</p>
                    {achievement.qualifier ? (
                      <p className="k-meta mt-[var(--k-4)] text-[var(--k-signal)]">
                        {achievement.qualifier}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
