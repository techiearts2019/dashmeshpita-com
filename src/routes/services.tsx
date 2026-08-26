import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/site/icon";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroImage from "@/assets/hero-operations.jpg";
import verificationImage from "@/assets/verification-field.jpg";
import operationsImage from "@/assets/operations-room.jpg";

const TITLE = "Recovery, Collection, Repossession & Verification Services | Dashmeshpita";
const DESCRIPTION =
  "Professional loan recovery, collection, vehicle repossession, field verification, NPA settlement and asset management services for banks, NBFCs and corporates.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const recoveryProducts = [
  "Credit Cards",
  "Personal Loans",
  "Home Loans",
  "Auto Loans",
  "Two Wheeler Loans",
  "Business Loans",
  "Other banking and financial obligations",
];

const verificationServices = [
  { title: "Residential Verification", icon: "map-pinned" },
  { title: "Address Verification", icon: "search-check" },
  { title: "Educational Qualification Verification", icon: "graduation-cap" },
  { title: "Background & History Checks", icon: "shield-check" },
  { title: "Reference Verification", icon: "users" },
  { title: "Client Specific Verification Assignments", icon: "file-check" },
];

const npaServices = [
  "NPA Settlement Assignments",
  "Recovery Assignments",
  "SARFAESI related field support",
  "Specialized debtor recovery assignments",
  "Portfolio specific recovery operations",
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Recovery, Collection, Repossession & Verification Services"
        description="Portfolio aligned service lines executed through trained field teams, defined processes and structured reporting."
        image={heroImage}
        imageAlt="Financial services professionals discussing recovery portfolio documentation"
        breadcrumb="Services"
      />

      {/* Recovery & Collection */}
      <section id="recovery-collection" className="scroll-mt-28 py-20 md:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Service 01"
              title="Recovery & Collection Services"
              description="Professional recovery and collection services for a wide range of financial products."
            />
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {recoveryProducts.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-md border border-border bg-surface p-3 text-[0.85rem] font-medium text-navy"
                >
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lift">
            <img
              src={operationsImage}
              alt="Collection and recovery operations team reviewing portfolio reports"
              loading="lazy"
              width={1600}
              height={1104}
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Repossession */}
      <section id="repossession" className="scroll-mt-28 bg-surface py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Service 02"
            title="Repossession Services"
            description="End to end repossession services carried out in accordance with applicable processes and requirements."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Vehicles",
                text: "Two wheeler, auto and commercial vehicle repossession assignments.",
                icon: "truck",
              },
              {
                title: "Mobile Handsets",
                text: "Recovery of financed handsets under client instructions.",
                icon: "monitor",
              },
              {
                title: "Other Financed Assets",
                text: "Consumer durable and other asset backed portfolios.",
                icon: "warehouse",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-border bg-card p-7 shadow-card"
              >
                <Icon name={item.icon} className="size-6 text-royal" />
                <h3 className="mt-5 font-display text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-border bg-card p-7">
            <p className="text-sm leading-relaxed text-muted-foreground">
              We also provide secure vehicle parking and custody facilities for repossessed
              vehicles.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {["Professional Handling", "Process Discipline", "Secure Custody", "Reporting"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-navy"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section id="verification" className="scroll-mt-28 py-20 md:py-24">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div className="overflow-hidden rounded-lg shadow-lift">
            <img
              src={verificationImage}
              alt="Field verification executive documenting a residential address verification"
              loading="lazy"
              width={1408}
              height={1008}
              className="size-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Service 03"
              title="Verification Services"
              description="Field verification assignments executed by trained executives with structured documentation and reporting."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {verificationServices.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-5 shadow-card"
                >
                  <Icon name={item.icon} className="size-5 text-gold" />
                  <h3 className="mt-4 font-display text-[0.92rem] leading-snug">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NPA */}
      <section id="npa-recovery" className="scroll-mt-28 bg-surface py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Service 04"
            title="NPA & Specialized Recovery Services"
            description="Support across non performing and write off portfolios in line with client instructions and applicable procedures."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {npaServices.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-6 shadow-card"
              >
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="font-display text-[0.92rem] leading-snug text-navy">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-start gap-3 rounded-lg border border-royal/25 bg-card p-6">
            <Info className="mt-0.5 size-5 shrink-0 text-royal" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Services relating to SARFAESI and other legal processes are undertaken subject to
              applicable laws, regulations, client instructions and prescribed procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Asset management + field ops */}
      <section id="asset-management" className="scroll-mt-28 py-20 md:py-24">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-8 shadow-card">
            <Icon name="warehouse" className="size-7 text-royal" />
            <h2 className="mt-6 font-display text-xl">Asset Management</h2>
            <span className="rule-gold mt-4" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Custody, secure parking, documentation and condition reporting for repossessed and
              client allocated assets, with defined handover procedures and status updates.
            </p>
          </article>
          <article
            id="field-operations"
            className="scroll-mt-28 rounded-lg border border-border bg-card p-8 shadow-card"
          >
            <Icon name="map-pinned" className="size-7 text-royal" />
            <h2 className="mt-6 font-display text-xl">Specialized Field Operations</h2>
            <span className="rule-gold mt-4" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Liaisoning, field coordination, customer engagement, tele calling support and legal
              coordination across our Delhi &amp; NCR field network.
            </p>
          </article>
        </div>
      </section>

      <section className="surface-navy">
        <div className="container-page py-20 text-center md:py-24">
          <h2 className="mx-auto max-w-2xl font-display text-2xl leading-tight text-navy-foreground sm:text-3xl">
            Discuss a portfolio with our operations team
          </h2>
          <Button asChild variant="gold" size="xl" className="mt-8">
            <Link to="/contact">
              Request a Consultation <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
