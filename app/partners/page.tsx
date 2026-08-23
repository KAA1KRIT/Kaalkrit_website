import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Rule } from "@/components/ui/Rule";
import { collaborationFocus } from "@/content/partners";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Collaboration",
  description:
    "Collaboration context for Team KAALKRIT’s work in autonomous systems, robotics, and engineering.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Collaboration"
        heading="Collaboration starts with a shared engineering question."
        lede="KAALKRIT is a student-led engineering organisation at Sir MVIT, Bengaluru, working across autonomous systems, robotics, embedded technology, AI, and software."
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
                KAALKRIT welcomes technical exchange with academia, industry,
                startups, research organisations, and engineering communities.
                The team’s current work provides a practical basis for
                discussion around:
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
              Start with the engineering work
            </h2>
            <div className="md:col-span-6 md:col-start-7">
              <p className="k-body">
                The project briefs describe KAALKRIT’s verified work and the
                systems involved, providing a clear starting point for a
                grounded engineering conversation.
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
