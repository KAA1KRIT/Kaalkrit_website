import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Reach Team KAALKRIT through its verified public Instagram account.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        heading="Start the engineering conversation."
        lede="For public enquiries and collaboration conversations, reach Team KAALKRIT through its verified Instagram account."
        meta={["Public channel", "Instagram"]}
      />
      <section
        className="system-section system-section--after-page-header"
        aria-labelledby="contact-channel-heading"
      >
        <div className="k-container">
          <p className="technical-label">Verified public channel</p>
          <h2
            id="contact-channel-heading"
            className="k-display mt-[var(--k-4)] max-w-[16ch] text-[length:var(--k-t-h2)]"
          >
            Team KAALKRIT on Instagram
          </h2>
          <p className="section-lede">
            Open the team’s public profile to begin a conversation.
          </p>
          <Button
            href={SITE.contact.href}
            variant="primary"
            className="mt-[var(--k-6)]"
          >
            Open KAALKRIT on Instagram
          </Button>
        </div>
      </section>
    </>
  );
}
