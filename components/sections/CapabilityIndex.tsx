import { capabilityPanels } from '@/content/capabilities';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function CapabilityIndex() {
  return (
    <section id="capabilities" className="public-section" aria-labelledby="capabilities-heading">
      <div className="public-container">
        <SectionHeader
          eyebrow="Capability index / 05"
          id="capabilities-heading"
          heading="A multidisciplinary team, organized around the system."
          lede="The work crosses disciplines because autonomous systems do. Each domain connects to the next one in the build." 
        />
        <div className="capability-index">
          {capabilityPanels.map((panel) => (
            <article className={`capability-index__group capability-index__group--${panel.accent}`} key={panel.id}>
              <p className="index-number">{panel.label}</p>
              <h3>{panel.title}</h3>
              <p>{panel.description}</p>
              <div className="capability-index__items">{panel.items}</div>
              <div className="capability-index__progress" aria-hidden="true"><span /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
