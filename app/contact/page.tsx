import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SITE, mailto } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Team KAALKRIT for partnership, engineering collaboration, research, or joining enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        heading="Begin the right conversation."
        lede="For partnership, engineering collaboration, research, or joining enquiries, use the verified Team KAALKRIT email channel."
        meta={[SITE.email, "Sir MVIT, Bengaluru"]}
      />
      <section
        className="pb-[var(--k-section-y)]"
        aria-labelledby="contact-options-heading"
      >
        <div className="k-container grid gap-[var(--k-8)] md:grid-cols-12">
          <div className="md:col-span-7">
            <h2
              id="contact-options-heading"
              className="k-display text-[length:var(--k-t-h2)]"
            >
              Keep it specific.
            </h2>
            <p className="k-lede mt-[var(--k-5)]">
              A short note about the area of work, organisation, or reason for
              reaching out helps the team route the conversation.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="k-meta">Verified contact</p>
            <TrackedLink
              className="mt-[var(--k-3)] block break-words text-[length:var(--k-t-lede)] underline decoration-[var(--k-line-strong)] underline-offset-4"
              href={mailto("KAALKRIT website enquiry")}
              event="email_click"
              properties={{ placement: "contact" }}
            >
              {SITE.email}
            </TrackedLink>
            <div className="mt-[var(--k-6)] flex flex-wrap gap-[var(--k-3)]">
              <Button
                href={mailto("Partnership with Team KAALKRIT")}
                variant="primary"
              >
                Partnership
              </Button>
              <Button
                href={mailto("Joining Team KAALKRIT")}
                variant="secondary"
              >
                Joining
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
