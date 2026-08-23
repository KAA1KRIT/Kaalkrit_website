import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { teamMembers } from "@/content/team";
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
        aria-labelledby="team-directory-heading"
      >
        <div className="k-container team-page-grid">
          <div>
            <h2 id="team-directory-heading">Current directory</h2>
            <p className="section-lede">
              Roles are listed as provided in the current KAALKRIT overview.
            </p>
          </div>
          <ol className="team-directory">
            {teamMembers.map((member, index) => (
              <li key={member.name}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{member.name}</h3>
                  <p>
                    {member.role}
                    {member.area ? ` / ${member.area}` : ""}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="system-section system-section--panel"
        aria-label="Team image"
      >
        <div className="k-container team-image">
          <Image
            src="/images/team/nidar-2026-team.webp"
            alt="KAALKRIT members together at NIDAR 2026."
            width={1438}
            height={753}
            sizes="(min-width: 900px) 72rem, 100vw"
          />
        </div>
      </section>
    </>
  );
}
