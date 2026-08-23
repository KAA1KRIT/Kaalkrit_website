import Image from "next/image";
import Link from "next/link";
import { EngineeringHero } from "@/components/hero/EngineeringHero";
import { achievements } from "@/content/achievements";
import { domainsByGroup, lifecycleStages } from "@/content/domains";
import { publicProjects, statusLabel } from "@/content/projects";
import { SITE } from "@/content/site";
import { teamMembers } from "@/content/team";

export function LandingPage() {
  return (
    <>
      <EngineeringHero />

      <section className="system-section" aria-labelledby="mission-heading">
        <div className="k-container split-heading">
          <p className="technical-label">02 / Mission</p>
          <div>
            <h2 id="mission-heading">
              Engineering that begins with the system, not the spectacle.
            </h2>
            <p className="section-lede">{SITE.mission}</p>
          </div>
        </div>
      </section>

      <section
        className="system-section system-section--panel"
        aria-labelledby="lifecycle-heading"
      >
        <div className="k-container">
          <div className="split-heading">
            <p className="technical-label">03 / Engineering lifecycle</p>
            <div>
              <h2 id="lifecycle-heading">From research to validation.</h2>
              <p className="section-lede">
                KAALKRIT approaches engineering as a connected lifecycle, with
                each discipline informing the next.
              </p>
            </div>
          </div>
          <ol className="lifecycle-track">
            {lifecycleStages.map((stage, index) => (
              <li key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{stage}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="system-section" aria-labelledby="domains-heading">
        <div className="k-container">
          <div className="split-heading">
            <p className="technical-label">04 / Engineering domains</p>
            <div>
              <h2 id="domains-heading">
                A multidisciplinary capability index.
              </h2>
              <p className="section-lede">
                The team combines the disciplines required to build and validate
                intelligent systems.
              </p>
            </div>
          </div>
          <div className="domain-matrix">
            {domainsByGroup.map(({ group, items }, index) => (
              <section key={group.id}>
                <p className="technical-label">
                  0{index + 1} / {group.label}
                </p>
                <p className="domain-matrix__note">{group.note}</p>
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
        className="system-section system-section--panel"
        aria-labelledby="projects-heading"
      >
        <div className="k-container">
          <div className="split-heading">
            <p className="technical-label">05 / Projects</p>
            <div>
              <h2 id="projects-heading">
                Work in autonomous systems, robotics, and engineering platforms.
              </h2>
              <p className="section-lede">
                Each project is a practical setting for systems thinking across
                hardware and software.
              </p>
            </div>
          </div>
          <div className="project-index">
            {publicProjects.map((project, index) => (
              <article key={project.slug} className="project-index__item">
                <div className="project-index__meta">
                  <span>0{index + 1}</span>
                  <span>{statusLabel[project.status]}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link href={`/projects/${project.slug}`} className="text-link">
                  Project brief <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="system-section proof-section"
        aria-labelledby="progress-heading"
      >
        <div className="k-container proof-section__grid">
          <div className="proof-section__image">
            <Image
              src="/images/team/nidar-2026-presentation.webp"
              alt="KAALKRIT members at a NIDAR 2026 presentation venue."
              width={1438}
              height={753}
              sizes="(min-width: 900px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="technical-label">06 / Progress</p>
            <h2 id="progress-heading">
              Evidence through engineering practice.
            </h2>
            <ul className="achievement-list">
              {achievements.map((achievement) => (
                <li key={achievement.id}>
                  <strong>{achievement.title}</strong>
                  <span>{achievement.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="system-section system-section--panel"
        aria-labelledby="people-heading"
      >
        <div className="k-container people-preview">
          <div className="people-preview__copy">
            <p className="technical-label">07 / People</p>
            <h2 id="people-heading">
              A multidisciplinary team with one engineering direction.
            </h2>
            <p className="section-lede">
              KAALKRIT’s work is supported by technical, outreach, creative, and
              content roles that contribute to the same operating system:
              stronger engineering practice.
            </p>
            <Link href="/team" className="text-link">
              Meet the team <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Image
            src="/images/team/nidar-2026-team-back.webp"
            alt="KAALKRIT members wearing team apparel at NIDAR 2026."
            width={1438}
            height={753}
            sizes="(min-width: 900px) 50vw, 100vw"
          />
          <p className="people-preview__count">
            {String(teamMembers.length).padStart(2, "0")} current roster entries
          </p>
        </div>
      </section>

      <section
        className="system-section direction-section"
        aria-labelledby="direction-heading"
      >
        <div className="k-container split-heading">
          <p className="technical-label">08 / Direction</p>
          <div>
            <h2 id="direction-heading">Future-facing, clearly labelled.</h2>
            <p className="section-lede">
              KAALKRIT is looking toward autonomous drones, AI-powered robotics,
              swarm intelligence, computer-vision-driven autonomy, embedded
              platforms, robotic manipulators, and integrated autonomous
              ecosystems.
            </p>
            <Link href="/journey" className="text-link">
              Read the journey <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="system-section collaboration-band"
        aria-labelledby="collaboration-heading"
      >
        <div className="k-container">
          <p className="technical-label">09 / Collaboration</p>
          <h2 id="collaboration-heading">
            A practical basis for technical collaboration.
          </h2>
          <p>
            KAALKRIT is open to engineering conversations with academia,
            industry, startups, research organisations, and communities working
            on connected technical challenges.
          </p>
          <Link href="/partners" className="button button--primary">
            Collaboration context <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="closing-mark" aria-label="KAALKRIT closing statement">
        <div className="k-container">
          <p>KAALKRIT / Precision, autonomy, systems.</p>
        </div>
      </section>
    </>
  );
}
