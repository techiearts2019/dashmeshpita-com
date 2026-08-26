import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Building2, FileText, Hash, UserRound } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company } from "@/lib/company";
import aboutBanner from "@/assets/about-banner.jpg";

const TITLE = "About Us | Dashmeshpita Management and Consulting Pvt. Ltd.";
const DESCRIPTION =
  "Learn about Dashmeshpita Management and Consulting Private Limited — a professionally managed verification, recovery and collection services organization based in New Delhi.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  "Professionalism",
  "Integrity",
  "Regulatory compliance",
  "Operational discipline",
  "Confidentiality",
  "Client satisfaction",
];

const registration = [
  { label: "CIN", value: company.cin, icon: Building2 },
  { label: "PAN", value: company.pan, icon: FileText },
  { label: "TAN", value: company.tan, icon: Hash },
  { label: "GST", value: company.gst, icon: BadgeCheck },
];

const orgLevels = [
  { title: "Management", detail: "Strategy, client relationships and oversight" },
  { title: "Managers & Supervisors", detail: "Allocation, monitoring and field control" },
  { title: "Field Executives", detail: "Recovery, repossession and verification visits" },
  { title: "Tele calling & Support", detail: "Customer engagement and follow up" },
  { title: "Reporting & MIS", detail: "Documentation, status updates and reporting" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Company"
        title="About Dashmeshpita Management and Consulting Private Limited"
        description="A professionally managed service organization specializing in Verification, Recovery and Collection Services."
        image={aboutBanner}
        imageAlt="Management team of business professionals in a modern corporate office lobby"
        breadcrumb="About Us"
      />

      <section className="py-20 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1.55fr_1fr]">
          <div>
            <SectionHeading eyebrow="Company Overview" title="Who We Are" />
            <div className="mt-7 space-y-5 text-[0.975rem] leading-relaxed text-muted-foreground">
              <p>
                Dashmeshpita Management and Consulting Private Limited is a professionally managed
                service organization specializing in Verification, Recovery and Collection Services.
              </p>
              <p>
                Over the years, the company has established a strong and trusted presence, serving a
                diverse portfolio of reputed banks, NBFCs, financial institutions and corporate
                organizations.
              </p>
              <p>
                Our expertise extends across a broad range of financial products, portfolio
                segments, recovery stages, NPA accounts and write off portfolios, enabling us to
                provide tailored solutions aligned with the specific requirements of our clients.
              </p>
              <p>
                Backed by experienced professionals, established industry relationships and a
                structured field and operational network, we are committed to delivering efficient,
                systematic and result oriented services.
              </p>
            </div>
          </div>
          <aside className="rounded-lg border border-border bg-surface p-8">
            <h3 className="font-display text-lg">We place strong emphasis on</h3>
            <span className="rule-gold mt-4" />
            <ul className="mt-6 space-y-3.5">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-sm font-medium text-navy">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Promoters & Founders"
            title="Leadership"
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <article className="rounded-lg border border-border bg-card p-8 shadow-card">
              <div className="flex flex-wrap items-center gap-5">
                <span className="grid size-16 place-items-center rounded-full bg-navy text-gold">
                  <UserRound className="size-8" aria-hidden="true" />
                </span>
                <div>
                  <p className="eyebrow">Founder</p>
                  <h3 className="mt-1.5 font-display text-xl">Jaspreet Singh</h3>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  The company was founded by Jaspreet Singh, who brings extensive and diversified
                  experience in Recovery &amp; Collection Services, Legal Support, Facilitation and
                  Client Services.
                </p>
                <p>
                  His professional expertise includes working with multinational banking
                  institutions, NBFCs, telecom and cellular service providers and other reputed
                  corporate and business houses.
                </p>
              </div>
            </article>
            <div className="grid gap-6">
              {[
                { name: "Mrs. Ashvinder Kaur", role: "Director" },
                { name: "Mr. Gurpreet Singh", role: "Director" },
              ].map((person) => (
                <article
                  key={person.name}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-7 shadow-card"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-surface text-royal">
                    <UserRound className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base">{person.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      {person.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate information */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Corporate Information"
            title="Company Registration Details"
            align="center"
          />
          <dl className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {registration.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-card p-6 shadow-card"
              >
                <item.icon className="size-5 text-gold" aria-hidden="true" />
                <dt className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-2 font-display text-[0.95rem] font-bold break-all text-navy">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Organization structure */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Organization Structure" title="How Our Teams Are Organised" />
            <ol className="mt-10 space-y-3">
              {orgLevels.map((level, index) => (
                <li key={level.title} className="relative">
                  <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                    <span className="grid size-8 shrink-0 place-items-center rounded-md bg-navy font-display text-xs font-bold text-gold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[0.98rem]">{level.title}</h3>
                      <p className="mt-1 text-[0.83rem] text-muted-foreground">{level.detail}</p>
                    </div>
                  </div>
                  {index < orgLevels.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mx-auto mt-1 block h-3 w-px bg-gold/70"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="font-display text-xl">Liaisoning &amp; Field Operations</h3>
              <span className="rule-gold mt-4" />
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Our field operations are supported by a structured team responsible for
                  liaisoning, field coordination, customer engagement and recovery activities.
                </p>
                <p>
                  The team ensures effective coordination between field executives, supervisors and
                  tele calling personnel to maintain efficient execution and timely reporting.
                </p>
                <p>
                  Our management team has experience working with ICICI Bank in a supervisory
                  capacity, including the management of Credit Card Recovery operations across Delhi
                  &amp; NCR.
                </p>
                <p>
                  The team also has experience in handling police complaints, legal coordination and
                  warrant execution in accordance with applicable procedures.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl">Trained Recovery &amp; Repossession Team</h3>
              <span className="rule-gold mt-4" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                We have a dedicated team of IIBF trained executives, supervisors and managers
                equipped to handle vehicle repossession, recovery assignments and SARFAESI related
                field operations.
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Strong field supervision",
                  "Effective team coordination",
                  "Compliance focused execution",
                  "Professional handling of recovery assignments",
                  "Systematic reporting",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-md bg-card p-3 text-[0.83rem] font-medium text-navy"
                  >
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
