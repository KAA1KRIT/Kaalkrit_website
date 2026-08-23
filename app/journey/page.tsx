import { PageHeader } from "@/components/layout/PageHeader";
import { Timeline } from "@/components/journey/Timeline";
import { Button } from "@/components/ui/Button";
import { Rule } from "@/components/ui/Rule";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

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
        heading="A direction grounded in practical engineering."
        lede="Discover Team KAALKRIT’s vision, future scope, and commitment to intelligent engineering."
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
                innovation, integrity, and continuous improvement. The team is
                committed to advancing autonomous systems, robotics, embedded
                technologies, and intelligent engineering through real work.
              </p>
              <div className="mt-[var(--k-6)]">
                <Button
                  href="/projects"
                  variant="primary"
                  className="max-xs:w-full"
                >
                  Explore projects
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
