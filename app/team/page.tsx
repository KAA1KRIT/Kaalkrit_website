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
  title: "[TEAM PAGE TITLE PLACEHOLDER]",
  description: "[TEAM META DESCRIPTION PLACEHOLDER]",
  path: "/team",
  index: teamMembers.length > 0,
});

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="[TEAM EYEBROW PLACEHOLDER]"
        heading="[TEAM HEADLINE PLACEHOLDER]"
        lede="[TEAM LEDE PLACEHOLDER]"
        meta={["[TEAM META PLACEHOLDER 1]", "[TEAM META PLACEHOLDER 2]"]}
      />
      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="team-roster-heading"
      >
        <div className="k-container">
          <h2 id="team-roster-heading" className="sr-only">
            [TEAM ROSTER HEADING PLACEHOLDER]
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
