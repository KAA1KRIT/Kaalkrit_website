import { DepthCarousel } from "@/components/gallery/DepthCarousel";
import { PageHeader } from "@/components/layout/PageHeader";
import { teamIdCards } from "@/content/team";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Team",
  description: "The current multidisciplinary Team KAALKRIT roster.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        heading="A multidisciplinary engineering collective."
        lede="KAALKRIT’s current roster brings technical, outreach, creative, and content roles together around practical engineering work."
        meta={["Current roster", "Sir MVIT, Bengaluru"]}
      />
      <section
        className="system-section system-section--after-page-header"
        aria-labelledby="team-cards-heading"
      >
        <div className="k-container">
          <div>
            <p className="technical-label">07 / The team</p>
            <h2 id="team-cards-heading" className="mt-[var(--k-4)]">
              Built across disciplines.
            </h2>
            <p className="section-lede">
              The people behind KAALKRIT’s engineering work, represented through
              their approved team ID cards.
            </p>
          </div>
          <DepthCarousel items={teamIdCards} label="Team KAALKRIT ID cards" />
        </div>
      </section>
    </>
  );
}
