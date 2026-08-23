import { PageHeader } from "@/components/layout/PageHeader";
import { Timeline } from "@/components/journey/Timeline";
import { Button, Arrow } from "@/components/ui/Button";
import { Rule } from "@/components/ui/Rule";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { DriftWallGallery } from "@/components/gallery/DriftWallGallery";
import { journeyGallery } from "@/content/gallery";

export const metadata = pageMetadata({
  title: "Journey",
  description:
    "Discover Team KAALKRIT's vision, future scope, and commitment to intelligent engineering.",
  path: "/journey",
});

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journey"
        heading="Engineering the Future Through Innovation, Autonomy, and Intelligent Systems."
        lede="Discover Team KAALKRIT's vision, future scope, and commitment to intelligent engineering."
        meta={[
          `Established ${SITE.founded}`,
          `${SITE.parentShortName}, ${SITE.location}`,
        ]}
      />

      <section className="pb-[var(--k-section-y)]" aria-label="Milestones">
        <div className="k-container">
          <Timeline />
        </div>
      </section>

      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="journey-next"
      >
        <div className="k-container">
          <Rule />
          <Reveal className="mt-[var(--k-7)] grid gap-[var(--k-5)] md:grid-cols-12">
            <h2
              id="journey-next"
              className="k-display md:col-span-5 text-[length:var(--k-t-h2)]"
            >
              Our Commitment
            </h2>
            <div className="md:col-span-6 md:col-start-7">
              <p className="k-body">
                At Team KAALKRIT, engineering is driven by curiosity,
                innovation, integrity, and an unwavering pursuit of excellence.
                We don't just imagine the future — we engineer it.
              </p>
              <div className="mt-[var(--k-6)] flex flex-col xs:flex-row gap-[var(--k-3)]">
                <Button
                  href="/projects"
                  variant="primary"
                  className="max-xs:w-full"
                >
                  Explore projects
                </Button>
                <Button
                  href="/#partnership"
                  variant="ghost"
                  trailing={<Arrow />}
                >
                  Partner with us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="journey-archive-heading"
      >
        <div className="k-container">
          <Rule />
          <h2
            id="journey-archive-heading"
            className="k-display mt-[var(--k-7)] text-[length:var(--k-t-h2)]"
          >
            NIDAR 2026 Gallery
          </h2>
          <p className="k-lede mt-[var(--k-5)]">
            Team KAALKRIT at the NIDAR 2026 National Innovation Challenge for
            Drone Application and Research at Gautam Buddha University.
          </p>
          <div className="mt-[var(--k-7)]">
            <DriftWallGallery items={journeyGallery} />
          </div>
        </div>
      </section>
    </>
  );
}
