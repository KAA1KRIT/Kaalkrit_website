import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { LEGAL } from "@/content/legal";
import { mailto, SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How the KAALKRIT public website handles information and external links.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal / 01"
      title="Privacy Policy"
      intro="This policy describes the current behaviour of the KAALKRIT public website. It is intentionally limited to what is implemented today."
    >
      <h2>What the site collects</h2>
      <p>
        The site does not currently provide a contact form, account system,
        newsletter signup, advertising pixels, or non-essential cookies. It does
        not intentionally collect names, email addresses, phone numbers, or
        other form-submitted information.
      </p>
      {LEGAL.cookiePolicy.analyticsEnabled ? (
        <p>
          Vercel Web Analytics is enabled to measure page views and a small set
          of interaction events, such as project, partnership, recruitment,
          email, and social-link selections. The site sends event names and
          non-personal placement labels only; it does not send email addresses,
          message contents, or form values. Vercel states that Web Analytics
          operates without cookies and reports anonymised or aggregated usage
          information.
        </p>
      ) : (
        <p>
          Optional web analytics is currently disabled. No analytics script is
          loaded unless it is explicitly enabled for a production build.
        </p>
      )}
      <p>
        As with any public website, the hosting environment may process
        technical request information such as an IP address, browser
        information, timestamps, and security logs. The exact retention and
        processing terms depend on the hosting provider selected for deployment.
      </p>
      <h2>Why information may be processed</h2>
      <p>
        Technical request information may be used by the hosting provider to
        deliver the pages, protect the service, diagnose failures, and maintain
        availability. KAALKRIT does not use the current site to profile visitors
        or measure advertising conversions.
      </p>
      <h2>External links</h2>
      <p>
        The site links to verified KAALKRIT profiles on Instagram and X.
        Selecting those links takes you to the relevant platform, which operates
        under its own privacy practices. The site does not embed those services.
      </p>
      <h2>Privacy questions</h2>
      <p>
        Privacy questions can be sent to{" "}
        <a href={mailto("Privacy question")}>{SITE.email}</a>. You can also use
        the{" "}
        <a href={LEGAL.instagramUrl} target="_blank" rel="noopener noreferrer">
          verified KAALKRIT Instagram account
        </a>
        .
      </p>
      <p className="legal-note">
        This policy should still receive final human/legal review before broad
        public deployment.
      </p>
    </LegalPageLayout>
  );
}
