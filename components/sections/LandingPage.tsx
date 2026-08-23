import Link from "next/link";
import { ScrollExpandHero } from "@/components/hero/ScrollExpandHero";
import { MaskedHeading } from "@/components/motion/MaskedHeading";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { achievements } from "@/content/achievements";
import { domainsByGroup, lifecycleStages } from "@/content/domains";
import { publicProjects, statusLabel } from "@/content/projects";

export function LandingPage() {
  return (
    <>
      <ScrollExpandHero />

      <section
        className="editorial-section mission-section"
        aria-labelledby="mission-heading"
      >
        <div className="public-container editorial-two-column">
          <p className="eyebrow">About Team KAALKRIT</p>
          <div>
            <h2 id="mission-heading">
              Engineering across hardware, software, and intelligence.
            </h2>
            <p className="editorial-lede">
              Team KAALKRIT is the official drone and robotics innovation team
              of Sir M. Visvesvaraya Institute of Technology (Sir MVIT),
              Bengaluru. The team takes engineering work from research and
              design through prototyping, testing, and complete systems.
            </p>
          </div>
        </div>
      </section>

      <section
        className="editorial-section lifecycle-section"
        aria-labelledby="lifecycle-heading"
      >
        <div className="public-container">
          <div className="editorial-section__heading">
            <p className="eyebrow">How we work</p>
            <h2 id="lifecycle-heading">
              From a real-world challenge to a complete system.
            </h2>
          </div>
          <ol className="editorial-lifecycle">
            {lifecycleStages.map((stage, index) => (
              <li key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {stage}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="capabilities"
        className="editorial-section capability-section"
        aria-labelledby="capabilities-heading"
      >
        <div className="public-container">
          <div className="editorial-two-column">
            <p className="eyebrow">Engineering areas</p>
            <div>
              <h2 id="capabilities-heading">
                Autonomous systems, robotics, embedded systems, and software.
              </h2>
              <p className="editorial-lede">
                KAALKRIT combines disciplines that are needed to design,
                prototype, and develop intelligent engineering systems.
              </p>
            </div>
          </div>
          <div className="capability-index-warm">
            {domainsByGroup.map(({ group, items }, index) => (
              <section key={group.id}>
                <p>
                  {String(index + 1).padStart(2, "0")} / {group.label}
                </p>
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>{item.label}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="editorial-section projects-section"
        aria-labelledby="projects-heading"
      >
        <div className="public-container">
          <div className="editorial-two-column projects-heading">
            <p className="eyebrow">Current work</p>
            <div>
              <h2 id="projects-heading">
                Programmes and projects in development.
              </h2>
              <p className="editorial-lede">
                Explore KAALKRIT’s work in aerial systems, robotics, and the
                Build With Hardware engineering platform.
              </p>
            </div>
          </div>
          <div className="project-editorial-list">
            {publicProjects.map((project) => (
              <article key={project.slug} className="project-editorial">
                <div className="project-editorial__copy">
                  <p className="project-status">
                    {statusLabel[project.status]}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <TrackedLink
                    href={`/projects/${project.slug}`}
                    className="text-link"
                    event="project_detail_click"
                    properties={{
                      project: project.slug,
                      placement: "homepage",
                    }}
                  >
                    View project details <span aria-hidden="true">→</span>
                  </TrackedLink>
                </div>
              </article>
            ))}
          </div>
          <Link href="/projects" className="text-link">
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section
        className="editorial-section achievement-section"
        aria-labelledby="achievement-heading"
      >
        <div className="public-container editorial-two-column">
          <p className="eyebrow">Progress to date</p>
          <div>
            <MaskedHeading id="achievement-heading">
              Work grounded in multidisciplinary engineering.
            </MaskedHeading>
            <div className="achievement-lines">
              {achievements.map((achievement) => (
                <p key={achievement.id}>
                  <strong>{achievement.title}</strong>
                  <span>{achievement.detail}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="editorial-section future-section"
        aria-labelledby="future-heading"
      >
        <div className="public-container editorial-two-column">
          <p className="eyebrow">Direction</p>
          <div>
            <h2 id="future-heading">
              Building toward more capable autonomous systems.
            </h2>
            <p className="editorial-lede">
              KAALKRIT is focused on advancing autonomous aerial systems,
              robotics, embedded platforms, and intelligent engineering while
              developing a stronger foundation for research and collaboration.
            </p>
            <Link href="/journey" className="text-link">
              Explore the team’s direction <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="editorial-section partnership-section"
        aria-labelledby="partnership-heading"
      >
        <div className="public-container">
          <div className="partnership-card">
            <p className="eyebrow">Collaboration</p>
            <h2 id="partnership-heading">
              A focused engineering team for technical collaboration.
            </h2>
            <p>
              KAALKRIT’s work brings together research, hands-on engineering,
              and student-led innovation. Its direction includes collaboration
              with academia, industry, startups, and research organizations.
            </p>
            <Link href="/partners" className="button button--primary">
              Explore collaboration <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
