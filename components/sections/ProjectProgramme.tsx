import Link from 'next/link';
import { programmeProjects } from '@/content/projects';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ProjectProgramme() {
  return (
    <section id="projects" className="public-section" aria-labelledby="programme-heading">
      <div className="public-container">
        <SectionHeader
          eyebrow="Programme / 06"
          id="programme-heading"
          heading="NIDAR 2026 → AirMOS 2027. One aerial programme, carried forward."
          lede="The first system establishes the engineering base. The next is currently in development, with advanced sensing, autonomy and mission-oriented design."
        />
        <div className="programme-list">
          {programmeProjects.map((project, index) => (
            <article className="programme-row" key={project.slug} id={project.slug}>
              <div className="programme-row__index">0{index + 1}</div>
              <div className="programme-row__year">{project.programmeLabel}</div>
              <div className="programme-row__body">
                <div className="status-line"><span className={`status-dot status-dot--${project.status}`} /> {project.status === 'completed' ? 'Developed' : 'Currently in development'}</div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link href={`/projects#${project.slug}`} className="text-link">View project detail <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
