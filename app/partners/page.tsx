import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Rule } from "@/components/ui/Rule";
import { collaborationFocus } from "@/content/partners";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Collaboration",
  description:
    "Learn how Team KAALKRIT’s work in autonomous systems, robotics, and engineering can support technical collaboration.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Collaboration"
        heading="A focused engineering team for technical collaboration."
        lede="Team KAALKRIT brings student-led research, hands-on engineering, and practical system development together at Sir MVIT, Bengaluru."
        meta={["Sir MVIT, Bengaluru", "Established 2024"]}
      />

      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="collaboration-focus-heading"
      >
        <div className="k-container">
          <Rule />
          <div className="mt-[var(--k-7)] grid gap-[var(--k-6)] md:grid-cols-12">
            <div className="md:col-span-5">
              <h2
                id="collaboration-focus-heading"
                className="k-display text-[length:var(--k-t-h2)]"
              >
                Areas of shared interest
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="k-body">
                KAALKRIT’s direction includes work with academia, industry,
                startups, and research organizations. The team’s current work
                offers a practical basis for technical discussion around:
              </p>
              <ul className="mt-[var(--k-5)] grid gap-[var(--k-3)] border-t border-[var(--k-line)] pt-[var(--k-5)]">
                {collaborationFocus.map((item) => (
                  <li key={item} className="k-body">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="work-heading"
      >
        <div className="k-container">
          <Rule />
          <div className="mt-[var(--k-7)] grid gap-[var(--k-5)] md:grid-cols-12">
            <h2
              id="work-heading"
              className="k-display md:col-span-5 text-[length:var(--k-t-h2)]"
            >
              Start with the work
            </h2>
            <div className="md:col-span-6 md:col-start-7">
              <p className="k-body">
                The projects page provides the clearest view of the team’s
                current aerial, robotics, embedded, and platform work.
              </p>
              <Link href="/projects" className="text-link mt-[var(--k-5)]">
                Explore projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
