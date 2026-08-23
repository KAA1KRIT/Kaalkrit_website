import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SITE, mailto } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "[CONTACT PAGE TITLE PLACEHOLDER]",
  description: "[CONTACT META DESCRIPTION PLACEHOLDER]",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="[CONTACT EYEBROW PLACEHOLDER]"
        heading="[CONTACT HEADLINE PLACEHOLDER]"
        lede="[CONTACT LEDE PLACEHOLDER]"
        meta={[SITE.email, "[CONTACT LOCATION PLACEHOLDER]"]}
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
              [CONTACT SECTION HEADING PLACEHOLDER]
            </h2>
            <p className="k-lede mt-[var(--k-5)]">
              [CONTACT SECTION BODY PLACEHOLDER]
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="k-meta">[CONTACT LABEL PLACEHOLDER]</p>
            <TrackedLink
              className="mt-[var(--k-3)] block break-words text-[length:var(--k-t-lede)] underline decoration-[var(--k-line-strong)] underline-offset-4"
              href={mailto("[WEBSITE EMAIL SUBJECT PLACEHOLDER]")}
              event="email_click"
              properties={{ placement: "contact" }}
            >
              {SITE.email}
            </TrackedLink>
            <div className="mt-[var(--k-6)] flex flex-wrap gap-[var(--k-3)]">
              <Button
                href={mailto("[PARTNERSHIP EMAIL SUBJECT PLACEHOLDER]")}
                variant="primary"
              >
                [CONTACT CTA PLACEHOLDER 1]
              </Button>
              <Button
                href={mailto("[RECRUITMENT EMAIL SUBJECT PLACEHOLDER]")}
                variant="secondary"
              >
                [CONTACT CTA PLACEHOLDER 2]
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
