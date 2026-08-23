import { PageHeader } from '@/components/layout/PageHeader';
import { GapNote } from '@/components/ui/GapNote';
import { Button } from '@/components/ui/Button';
import { TeamRoster } from '@/components/team/TeamRoster';
import { teamMembers } from '@/content/team';
import { mailto } from '@/content/site';
import { pageMetadata } from '@/lib/seo';
import { DepthCarouselGallery } from '@/components/gallery/DepthCarouselGallery';
import { teamGallery } from '@/content/gallery';

export const metadata = pageMetadata({
  title: 'Team',
  description: 'The multidisciplinary student engineering team behind KAALKRIT.',
  path: '/team',
  index: teamMembers.length > 0,
});

export default function TeamPage() {
  return (
    <>
      <PageHeader eyebrow="Team" heading="A multidisciplinary engineering practice." lede="KAALKRIT brings together students working across autonomous systems, robotics, embedded systems, AI, computer vision, electronics, mechanical design, and software." meta={['Roster source: Team KAALKRIT Overview', 'Portraits and profile links awaiting approved assets']} />
      <section className="pb-[var(--k-section-y)]" aria-labelledby="team-roster-heading">
        <div className="k-container">
          <h2 id="team-roster-heading" className="sr-only">KAALKRIT team roster</h2>
          {teamMembers.length > 0 ? <TeamRoster members={teamMembers} /> : <GapNote id="T1" title="Public roster forthcoming." detail="Names, roles, bios, divisions, and publication consent have not yet been supplied for a public roster." />}
          <div className="mt-[var(--k-9)]"><DepthCarouselGallery items={teamGallery} /></div>
          <div className="mt-[var(--k-7)]"><Button href={mailto('Joining Team KAALKRIT')} variant="primary">Join the conversation</Button></div>
        </div>
      </section>
    </>
  );
}
