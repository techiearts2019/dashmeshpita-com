import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import infraOffice from "@/assets/infra-office.jpg";

const TITLE = "Terms & Conditions | Dashmeshpita Management and Consulting Pvt. Ltd.";
const DESCRIPTION =
  "Terms governing the use of the Dashmeshpita Management and Consulting Private Limited website and the information published on it.";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "Use of This Website",
    body: "The content on this website is provided for general information about our services. By using this website you agree to use it lawfully and not in a manner that could impair its operation or availability.",
  },
  {
    title: "No Offer or Guarantee",
    body: "Nothing on this website constitutes an offer, commitment or assurance of any specific outcome. We do not represent or guarantee any recovery percentage or result. Every assignment is governed by the separate agreement executed with the client.",
  },
  {
    title: "Scope of Services",
    body: "Services relating to recovery, collection, repossession, verification, NPA assignments, SARFAESI support and asset management are undertaken subject to applicable laws, regulations, client instructions and prescribed procedures.",
  },
  {
    title: "Client Names & Trademarks",
    body: "Client names, brand names and logos referenced on this website remain the property of their respective owners and are shown subject to applicable permissions and contractual requirements.",
  },
  {
    title: "Confidentiality",
    body: "Information received in the course of assignments is treated as confidential and processed only for the purpose for which it was provided.",
  },
  {
    title: "Limitation of Liability",
    body: "While reasonable care is taken to keep information on this website accurate and current, we accept no liability for any decision taken in reliance on the website content. Please contact us for confirmed information.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of India, and courts at New Delhi shall have jurisdiction over matters arising from the use of this website.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Terms governing the use of this website and the information published on it."
        image={infraOffice}
        imageAlt="Professional office documentation environment"
        breadcrumb="Terms & Conditions"
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
            These terms are provided for general information. The final website content should be
            reviewed for legal and regulatory accuracy before publication.
          </p>
        </div>
      </section>
    </>
  );
}
