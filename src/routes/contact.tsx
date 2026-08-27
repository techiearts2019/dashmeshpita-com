import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Navigation, Phone, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company, mapsDirectionsHref, mapsEmbedSrc } from "@/lib/company";
import operationsImage from "@/assets/operations-room.jpg";

const TITLE = "Contact Us | Recovery & Collection Agency in Delhi NCR | Dashmeshpita";
const DESCRIPTION =
  "Contact Dashmeshpita Management and Consulting Private Limited in Janakpuri, New Delhi for recovery, collection, repossession, verification and asset management enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Discuss Your Requirements"
        description="Whether you require recovery, collection, repossession, verification or specialized field support, our team is available to understand your requirements."
        image={operationsImage}
        imageAlt="Operations team available to discuss client requirements"
        breadcrumb="Contact Us"
      />

      <section className="py-20 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="Get in touch"
            title="Corporate Office"
            description="Our team responds to B2B enquiries from banks, NBFCs, financial institutions, telecom companies and corporate organizations."
          />

          <dl className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-surface text-royal">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Company &amp; Address
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-navy">{company.name}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{company.address}</dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-surface text-royal">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Mobile
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={company.phoneHref}
                    className="text-sm font-semibold text-navy transition-colors hover:text-royal"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-surface text-royal">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${company.email}`}
                    className="break-all text-sm font-semibold text-navy transition-colors hover:text-royal"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-surface text-royal">
                <Globe className="size-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Website
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-navy">{company.website}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="navy" size="lg">
              <a href={company.phoneHref}>
                <Phone className="size-4" /> Call Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={mapsDirectionsHref} target="_blank" rel="noreferrer">
                <Navigation className="size-4" /> Get Directions
              </a>
            </Button>
          </div>

          <div className="mt-10 overflow-hidden rounded-lg border border-border shadow-card">
            <iframe
              title="Office location map — Janakpuri, New Delhi"
              src={mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
