import Link from 'next/link';
import { roboticsProjects } from '@/content/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function RoboticsTrack() {
  return (
    <section className="public-section" aria-labelledby="robotics-heading">
      <div className="public-container">
        <SectionHeader
          eyebrow="Robotics track / 08"
          id="robotics-heading"
          heading="Autonomy moves beyond the airframe."
          lede="The same engineering disciplines show up on the ground: navigation, obstacle detection, motion control, sensor integration and precision movement."
        />
        <div className="robotics-list">
          {roboticsProjects.map((project) => (
            <article className="robotics-row" key={project.slug}>
              <div>
                <p className="eyebrow">{project.status === 'completed' ? 'Developed' : 'Currently in development'}</p>
                <h3>{project.title}</h3>
              </div>
              <div>
                <p>{project.summary}</p>
                <Link href={`/projects#${project.slug}`} className="text-link">Explore system <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
