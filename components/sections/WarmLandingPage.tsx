import Image from 'next/image';
import Link from 'next/link';
import { BorderGlow } from '@/components/editorial/BorderGlow';
import { MaskedHeading } from '@/components/editorial/MaskedHeading';
import { ScrollExpandHero } from '@/components/editorial/ScrollExpandHero';
import { mailto } from '@/content/site';

const lifecycle = [
  'Research', 'Architecture', 'Design', 'Manufacturing', 'Electronics', 'Software', 'Testing', 'Validation', 'Iteration',
];

const capabilityGroups = [
  ['Air', ['Autonomous UAS', 'Intelligent drone technologies', 'Flight control and autonomous navigation']],
  ['Machine', ['Robotics and automation', 'Mechanical design and rapid prototyping', 'Sensor integration and control']],
  ['Silicon + Software', ['Embedded systems', 'PCB design and electronics', 'AI, computer vision, and full-stack development']],
  ['Research', ['Research and product engineering', 'System architecture', 'Testing, validation, and continuous improvement']],
] as const;

const projects = [
  {
    title: 'Autonomous UAS — NIDAR 2026',
    status: 'Developed',
    image: '/images/hero-drone-desert.jpg',
    alt: 'Temporary stock image of a drone in flight over a desert landscape.',
    copy: 'An integrated unmanned aerial system spanning airframe design, embedded electronics, flight-controller integration, mission planning, payload management, and autonomous flight.',
  },
  {
    title: 'AirMOS — NIDAR 2027',
    status: 'Currently in development',
    image: '/images/circuit-board.jpg',
    alt: 'Temporary stock macro image of electronic components on a circuit board.',
    copy: 'The next aerial programme cycle, currently in development around advanced sensing, autonomy, and mission-oriented design.',
  },
  {
    title: 'Build With Hardware',
    status: 'Flagship platform',
    image: '/images/soldering-workshop.jpg',
    alt: 'Temporary stock image of hands using a soldering iron in a workshop.',
    copy: 'A flagship engineering platform for structured learning, practical projects, documentation, collaborative workspaces, and AI-powered engineering assistance.',
  },
  {
    title: 'Intelligent Robotic Arm',
    status: 'Currently in development',
    image: '/images/robotic-arm.jpg',
    alt: 'Temporary stock image of a robotic arm in a laboratory setting.',
    copy: 'A servo-driven manipulator in development, combining mechanical engineering, electronics, and control algorithms for precision motion.',
  },
  {
    title: 'Autonomous Robot Vacuum Cleaner',
    status: 'Developed',
    image: '/images/electronics-work.jpg',
    alt: 'Temporary stock image of a person working on an electronic device.',
    copy: 'A developed autonomous mobility system covering navigation, obstacle detection, motion control, sensor integration, and autonomous mobility.',
  },
] as const;

export function WarmLandingPage() {
  return (
    <>
      <ScrollExpandHero />

      <section className="editorial-section mission-section" aria-labelledby="mission-heading">
        <div className="public-container editorial-two-column">
          <p className="eyebrow">01 / Mission</p>
          <div>
            <h2 id="mission-heading">A student engineering team built for the full system.</h2>
            <p className="editorial-lede">KAALKRIT is the official drone and robotics innovation team of Sir M. Visvesvaraya Institute of Technology, Bengaluru. Established in 2024, the team connects research, engineering, and practical learning around autonomous systems.</p>
          </div>
        </div>
      </section>

      <section className="editorial-section why-section" aria-labelledby="why-heading">
        <div className="public-container">
          <p className="eyebrow">02 / Why KAALKRIT</p>
          <MaskedHeading id="why-heading">Built through practice.</MaskedHeading>
          <div className="reasons-grid">
            <article><span>01</span><h3>Full-lifecycle engineering</h3><p>From research and system architecture to manufacturing, testing, validation, and iteration, the work is considered as one connected lifecycle.</p></article>
            <article><span>02</span><h3>Multidisciplinary collaboration</h3><p>Hardware, software, robotics, embedded systems, AI, and computer vision meet through a shared engineering practice.</p></article>
            <article><span>03</span><h3>One system, many disciplines</h3><p>Mechanical design, electronics integration, sensor integration, control, and software development are brought together with real-world intent.</p></article>
          </div>
        </div>
      </section>

      <section className="editorial-section lifecycle-section" aria-labelledby="lifecycle-heading">
        <div className="public-container">
          <div className="editorial-section__heading">
            <p className="eyebrow">03 / Engineering lifecycle</p>
            <h2 id="lifecycle-heading">From a question to a validated system.</h2>
          </div>
          <ol className="editorial-lifecycle">
            {lifecycle.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span>{stage}</li>)}
          </ol>
        </div>
      </section>

      <section id="capabilities" className="editorial-section capability-section" aria-labelledby="capabilities-heading">
        <div className="public-container">
          <div className="editorial-two-column">
            <p className="eyebrow">04 / Capability index</p>
            <div><h2 id="capabilities-heading">Capability lives in the connections.</h2><p className="editorial-lede">The index is deliberately broad: each discipline becomes more useful when it is designed alongside the others.</p></div>
          </div>
          <div className="capability-index-warm">
            {capabilityGroups.map(([group, items], index) => <section key={group}><p>{String(index + 1).padStart(2, '0')} / {group}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}
          </div>
        </div>
      </section>

      <section id="projects" className="editorial-section projects-section" aria-labelledby="projects-heading">
        <div className="public-container">
          <div className="editorial-two-column projects-heading">
            <p className="eyebrow">05 / Featured projects</p>
            <div><h2 id="projects-heading">Work that makes the ambition tangible.</h2><p className="editorial-lede">Temporary stock photography is used as visual atmosphere below. It does not depict KAALKRIT members, facilities, or project hardware.</p></div>
          </div>
          <div className="project-editorial-list">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-editorial ${index % 2 === 1 ? 'project-editorial--reverse' : ''}`}>
                <div className="project-editorial__image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 767px) 100vw, 50vw" /></div>
                <div className="project-editorial__copy"><p className="project-status">{project.status}</p><h3>{project.title}</h3><p>{project.copy}</p></div>
              </article>
            ))}
          </div>
          <Link href="/projects" className="text-link">View the documented project index <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="editorial-section culture-section" aria-labelledby="culture-heading">
        <div className="public-container culture-grid">
          <div className="culture-grid__media"><div className="culture-grid__image"><Image src="/images/hands-electronics.jpg" alt="Temporary stock image of hands working with electronics." fill sizes="(max-width: 767px) 100vw, 45vw" /></div><p>Temporary stock image — does not depict KAALKRIT members.</p></div>
          <div><p className="eyebrow">06 / Team and culture</p><h2 id="culture-heading">A multidisciplinary team with room to learn by making.</h2><p>KAALKRIT brings students together across engineering domains for research, documentation, collaborative work, and practical systems building. No roster is published until it can be represented accurately.</p><a href={mailto('Joining Team KAALKRIT')} className="button button--secondary">Join the conversation <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section className="editorial-section achievement-section" aria-labelledby="achievement-heading">
        <div className="public-container editorial-two-column">
          <p className="eyebrow">07 / Proof of work</p>
          <div><h2 id="achievement-heading">Progress worth stating plainly.</h2><div className="achievement-lines"><p><strong>11th place</strong><span>Business Evaluation at a national-level competition.</span></p><p><strong>National representation</strong><span>Representing Sir MVIT in national-level drone innovation competitions.</span></p></div></div>
        </div>
      </section>

      <section className="editorial-section future-section" aria-labelledby="future-heading">
        <div className="public-container">
          <p className="eyebrow">08 / Future direction</p>
          <h2 id="future-heading">A direction for deeper, more connected systems.</h2>
          <p className="editorial-lede">KAALKRIT intends to keep exploring swarm intelligence, computer-vision-driven autonomy, advanced embedded platforms, robotic manipulators, and integrated autonomous ecosystems across sectors where engineering can be useful.</p>
          <ul className="future-list"><li>Agriculture</li><li>Healthcare</li><li>Infrastructure inspection</li><li>Environmental monitoring</li><li>Disaster response</li><li>Logistics</li><li>Manufacturing</li><li>Smart cities</li></ul>
        </div>
      </section>

      <section id="partnership" className="editorial-section partnership-section" aria-labelledby="partnership-heading">
        <div className="public-container">
          <BorderGlow>
            <div className="partnership-card">
              <p className="eyebrow">09 / Partnership</p>
              <h2 id="partnership-heading">Bring serious engineering conversations to the table.</h2>
              <p>KAALKRIT welcomes conversations with industry, startups, academia, research organisations, and engineering communities that want to engage meaningfully with student-led deep-tech work.</p>
              <a href={mailto('Partnership with Team KAALKRIT')} className="button button--primary">Partner with KAALKRIT <span aria-hidden="true">↗</span></a>
            </div>
          </BorderGlow>
        </div>
      </section>

      <section id="join" className="join-section" aria-labelledby="join-heading">
        <div className="molten-metal" aria-hidden="true" />
        <div className="public-container join-section__content"><p className="eyebrow">10 / Recruitment</p><h2 id="join-heading">Build the next system with KAALKRIT.</h2><p>For students interested in multidisciplinary engineering, research, and practical systems work.</p><a href={mailto('Joining Team KAALKRIT')} className="button button--secondary">Write to KAALKRIT <span aria-hidden="true">↗</span></a></div>
      </section>
    </>
  );
}
