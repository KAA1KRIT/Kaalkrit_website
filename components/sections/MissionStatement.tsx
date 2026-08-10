import { SectionHeader } from '@/components/ui/SectionHeader';
import { SITE } from '@/content/site';

export function MissionStatement() {
  return (
    <section id="mission" className="public-section mission-statement" aria-labelledby="mission-heading">
      <div className="public-container">
        <SectionHeader
          eyebrow="Mission / 02"
          id="mission-heading"
          heading="We do not only build prototypes."
          lede={`KAALKRIT is the official drone and robotics innovation team of ${SITE.parentOrganization}, Bengaluru. We are a multidisciplinary student engineering team working across hardware, software, robotics, embedded systems, AI, computer vision and autonomous systems.`}
        />
        <div className="mission-statement__statement">
          <p>We engineer complete systems across hardware, software, and intelligence.</p>
          <span>Full engineering lifecycle / Sir MVIT</span>
        </div>
      </div>
    </section>
  );
}
