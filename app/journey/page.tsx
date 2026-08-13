import { PageHeader } from '@/components/layout/PageHeader';
import { Timeline } from '@/components/journey/Timeline';
import { Button, Arrow } from '@/components/ui/Button';
import { Rule } from '@/components/ui/Rule';
import { Reveal } from '@/components/ui/Reveal';
import { SITE } from '@/content/site';
import { pageMetadata } from '@/lib/seo';
import { DriftWallGallery } from '@/components/gallery/DriftWallGallery';
import { journeyGallery } from '@/content/gallery';

export const metadata = pageMetadata({
  title: 'Our Journey',
  description:
    'KAALKRIT from its founding at Sir MVIT in 2024 through the NIDAR 2026 unmanned aerial system, national-level competition, the ground-robotics track, Build With Hardware and AirMOS for NIDAR 2027.',
  path: '/journey',
});

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our journey"
        heading="From an engineering team to a continuing programme."
        lede="Dates are year-granular because that is what the record supports. Nothing here is estimated, and nothing is placed on the timeline that has not happened or is not explicitly labelled as direction."
        meta={[`Founded ${SITE.founded}`, `${SITE.parentShortName}, ${SITE.location}`]}
      />

      <section className="pb-[var(--k-section-y)]" aria-label="Milestones">
        <div className="k-container">
          <Timeline />
        </div>
      </section>

      <section className="pb-[var(--k-section-y)]" aria-labelledby="journey-next">
        <div className="k-container">
          <Rule />
          <Reveal className="mt-[var(--k-7)] grid gap-[var(--k-5)] md:grid-cols-12">
            <h2 id="journey-next" className="k-display md:col-span-5 text-[length:var(--k-t-h2)]">
              The next cycle is open.
            </h2>
            <div className="md:col-span-6 md:col-start-7">
              <p className="k-body">
                AirMOS is in development now. KAALKRIT is open to meaningful collaboration with
                organisations that want to contribute to the work.
              </p>
              <div className="mt-[var(--k-6)] flex flex-col xs:flex-row gap-[var(--k-3)]">
                <Button href="/projects" variant="primary" className="max-xs:w-full">
                  See the work
                </Button>
                <Button href="/#partnership" variant="ghost" trailing={<Arrow />}>
                  Partner with us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-[var(--k-section-y)]" aria-labelledby="journey-archive-heading">
        <div className="k-container">
          <Rule />
          <h2 id="journey-archive-heading" className="k-display mt-[var(--k-7)] text-[length:var(--k-t-h2)]">Visual archive.</h2>
          <p className="k-lede mt-[var(--k-5)]">Visual documentation is shared only when approval and publication permission are confirmed.</p>
          <div className="mt-[var(--k-7)]"><DriftWallGallery items={journeyGallery} /></div>
        </div>
      </section>
    </>
  );
}
