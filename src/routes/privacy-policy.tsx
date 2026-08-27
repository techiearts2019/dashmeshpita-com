import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { company } from "@/lib/company";
import infraOffice from "@/assets/infra-office.jpg";

const TITLE = "Privacy Policy | Dashmeshpita Management and Consulting Pvt. Ltd.";
const DESCRIPTION =
  "How Dashmeshpita Management and Consulting Private Limited collects, uses and protects information submitted through this website.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    title: "Information We Collect",
    body: "We collect the details you voluntarily submit through our enquiry form, such as your name, company name, designation, mobile number, email address, service requirement and any message content. We may also process information shared with us by clients in the course of assigned work.",
  },
  {
    title: "How Information Is Used",
    body: "Information submitted through this website is used to respond to your enquiry, understand your service requirements and communicate with you regarding our services. Client and customer information received for assignments is processed only for the purpose of executing those assignments in line with client instructions.",
  },
  {
    title: "Confidentiality & Data Protection",
    body: "We maintain controlled access to information, structured database management and internal procedures intended to protect the information in our custody. Access is limited to authorised personnel who require it for their role.",
  },
  {
    title: "Disclosure",
    body: "We do not sell information collected through this website. Information may be disclosed to our client for whom an assignment is undertaken, or where disclosure is required under applicable laws, regulations or by a competent authority.",
  },
  {
    title: "Retention",
    body: "Information is retained for the period required to address your enquiry, meet contractual obligations and comply with applicable legal and regulatory requirements.",
  },
  {
    title: "Your Requests",
    body: `If you wish to request access to, correction of, or deletion of the details you submitted, please write to us at ${company.email} or call ${company.phone}.`,
  },
  {
    title: "Updates to This Policy",
    body: "This policy may be updated from time to time. The version published on this website is the version currently in effect.",
  },
];

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we handle information submitted through this website and information processed during client assignments."
        image={infraOffice}
        imageAlt="Documentation and file storage in a professional office"
        breadcrumb="Privacy Policy"
      />

      <section className="py-20 md:py-24">
        <div className="container-page max-w-3xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-xl">{section.title}</h2>
                <span className="rule-gold mt-4" />
                <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-14 rounded-lg border border-border bg-surface p-6 text-xs leading-relaxed text-muted-foreground">
            This policy is provided for general information. The final website content should be
            reviewed for legal and regulatory accuracy before publication.
          </p>
        </div>
      </section>
    </>
  );
}
