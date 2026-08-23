import { PageHeader } from "@/components/layout/PageHeader";
import { GapNote } from "@/components/ui/GapNote";
import { Button } from "@/components/ui/Button";
import { TeamRoster } from "@/components/team/TeamRoster";
import { teamMembers } from "@/content/team";
import { mailto } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { DepthCarouselGallery } from "@/components/gallery/DepthCarouselGallery";
import { teamGallery } from "@/content/gallery";

export const metadata = pageMetadata({
  title: "Team",
  description:
    "Meet Team KAALKRIT, the official drone and robotics innovation team of Sir MVIT.",
  path: "/team",
  index: teamMembers.length > 0,
});

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team KAALKRIT"
        heading="Engineering the Future Through Innovation, Autonomy, and Intelligent Systems."
        lede="Team KAALKRIT is the official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru."
        meta={["Sir MVIT, Bengaluru", "Established 2024"]}
      />
      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="team-roster-heading"
      >
        <div className="k-container">
          <h2 id="team-roster-heading" className="sr-only">
            Team KAALKRIT
          </h2>
          {teamMembers.length > 0 ? (
            <TeamRoster members={teamMembers} />
          ) : (
            <GapNote
              id="T1"
              title="Public roster forthcoming."
              detail="Names, roles, bios, divisions, and publication consent have not yet been supplied for a public roster."
            />
          )}
          <div className="mt-[var(--k-9)]">
            <DepthCarouselGallery items={teamGallery} />
          </div>
          <div className="mt-[var(--k-7)]">
            <Button
              href={mailto("[RECRUITMENT EMAIL SUBJECT PLACEHOLDER]")}
              variant="primary"
            >
              [TEAM CTA PLACEHOLDER]
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
