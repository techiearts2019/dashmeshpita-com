import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/site/icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  clientDisclaimer,
  clients,
  industries,
  products,
  services,
  whyChooseUs,
} from "@/lib/company";
import heroImage from "@/assets/hero-operations.jpg";
import operationsImage from "@/assets/operations-room.jpg";

const TITLE = "Loan Recovery & Collection Services in Delhi NCR | Dashmeshpita";
const DESCRIPTION =
  "Dashmeshpita Management and Consulting Pvt. Ltd. delivers loan recovery, collection, repossession, field verification and NPA recovery services for banks, NBFCs, telecom and corporates.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={heroImage}
          alt="Financial services professionals reviewing loan portfolio documentation in a corporate boardroom"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, oklch(0.243 0.055 259.5 / 0.96) 0%, oklch(0.243 0.055 259.5 / 0.86) 45%, oklch(0.243 0.055 259.5 / 0.45) 100%)",
          }}
        />
        <div className="container-page relative py-24 md:py-32">
          <div className="reveal max-w-3xl">
            <p className="eyebrow">Recovery &bull; Collection &bull; Verification</p>
            <h1 className="mt-5 text-balance-title font-display text-3xl leading-[1.1] text-navy-foreground sm:text-4xl md:text-[3.25rem]">
              Professional Recovery &amp; Collection Solutions You Can Trust
            </h1>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-navy-foreground/80">
              Dashmeshpita Management and Consulting Private Limited provides comprehensive
              Verification, Recovery, Collection, Repossession and Asset Management services
              tailored to the requirements of banks, NBFCs, financial institutions, telecom
              companies and corporate organizations.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="xl">
                <Link to="/services">
                  Explore Our Services <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <p className="mt-10 border-t border-navy-foreground/20 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-navy-foreground/70">
              Structured Operations &bull; Experienced Professionals &bull; Compliance Focused
              Execution
            </p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Recovery & Collection Solutions"
            description="Portfolio aligned services delivered through trained field teams, supervisory oversight and systematic reporting."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group rounded-lg border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-royal/30 hover:shadow-lift"
              >
                <span className="grid size-12 place-items-center rounded-md bg-surface text-royal transition-colors group-hover:bg-navy group-hover:text-gold">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <h3 className="mt-6 font-display text-lg">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  hash={service.slug}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal transition-colors hover:text-gold"
                >
                  Learn More <ArrowRight className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Structured Approach to Recovery & Field Operations"
            description="Our execution model is built on trained people, defined processes and disciplined supervision."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-card"
              >
                <Icon name={item.icon} className="size-6 text-gold" />
                <h3 className="mt-5 font-display text-[0.98rem] leading-snug">{item.title}</h3>
                <p className="mt-2.5 text-[0.83rem] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Products & Portfolio Experience"
            title="Financial Products & Portfolios We Handle"
            align="center"
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {products.map((product) => (
              <span
                key={product}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-navy"
              >
                <CheckCircle2 className="size-4 text-gold" aria-hidden="true" />
                {product}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries Served"
            title="Sectors We Support"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="relative overflow-hidden rounded-lg border border-border bg-card p-7 shadow-card"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gold" />
                <Icon name={industry.icon} className="size-7 text-royal" />
                <h3 className="mt-6 font-display text-base">{industry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operational excellence */}
      <section className="py-20 md:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-lift">
            <img
              src={operationsImage}
              alt="Supervisors reviewing operational reports on an organised operations floor"
              loading="lazy"
              width={1600}
              height={1104}
              className="size-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Operational Excellence"
              title="Professional Teams. Structured Processes. Measurable Execution."
              description="Our operational structure combines trained field teams, supervisors, managers, tele calling support, reporting systems and management oversight to ensure systematic execution of client assignments."
            />
            <Button asChild variant="navy" size="lg" className="mt-8">
              <Link to="/infrastructure">
                Learn About Our Infrastructure <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Client Trust"
            title="Serving Leading Organizations Across Financial Services"
            align="center"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="grid min-h-24 place-items-center rounded-lg border border-border bg-card px-4 py-6 text-center font-display text-sm font-bold text-navy shadow-card"
              >
                {client.name}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">{clientDisclaimer}</p>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/clients">View Portfolio Experience</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="surface-navy">
        <div className="container-page py-20 text-center md:py-24">
          <h2 className="mx-auto max-w-3xl text-balance-title font-display text-2xl leading-tight text-navy-foreground sm:text-3xl md:text-[2.3rem]">
            Looking for a Reliable Recovery &amp; Collection Partner?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-navy-foreground/80">
            Connect with our team to discuss your portfolio, operational requirements and service
            expectations.
          </p>
          <Button asChild variant="gold" size="xl" className="mt-9">
            <Link to="/contact">
              Contact Our Team <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
