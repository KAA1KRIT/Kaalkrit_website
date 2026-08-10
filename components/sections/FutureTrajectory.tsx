import { SectionHeader } from '@/components/ui/SectionHeader';

export function FutureTrajectory() {
  return (
    <section className="public-section trajectory" aria-labelledby="trajectory-heading">
      <div className="public-container">
        <SectionHeader
          eyebrow="Trajectory / 10"
          id="trajectory-heading"
          heading="The work is aimed at India’s deep-tech future."
          lede="KAALKRIT aims to contribute to India’s deep-tech ecosystem, indigenous technology development and future engineering talent through practical systems work."
        />
        <div className="trajectory__grid">
          {['Research that becomes a build', 'Indigenous technology development', 'Future engineering talent'].map((item, index) => (
            <div className="trajectory__item" key={item}><span>0{index + 1}</span><p>{item}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
