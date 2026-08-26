import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/site/icon";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { infrastructureItems } from "@/lib/company";
import infraOffice from "@/assets/infra-office.jpg";
import operationsImage from "@/assets/operations-room.jpg";
import verificationImage from "@/assets/verification-field.jpg";
import aboutBanner from "@/assets/about-banner.jpg";

const TITLE = "Infrastructure & Operational Support Systems | Dashmeshpita";
const DESCRIPTION =
  "In house office infrastructure, MIS and reporting systems, protected database management and communication facilities supporting structured recovery field operations.";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/infrastructure" },
    ],
    links: [{ rel: "canonical", href: "/infrastructure" }],
  }),
  component: InfrastructurePage,
});

const gallery = [
  { src: infraOffice, alt: "Office workstations, file storage cabinets and printing infrastructure" },
  { src: operationsImage, alt: "Operations team monitoring reports and dashboards" },
  { src: aboutBanner, alt: "Management team meeting in the office" },
  { src: verificationImage, alt: "Field executive documenting a verification assignment" },
];

function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Infrastructure Built for Reliable Operations"
        description="Our in house support system and office infrastructure are designed to support structured field operations, efficient communication, reporting, documentation and management oversight."
        image={infraOffice}
        imageAlt="Professional office interior with workstations and documentation storage"
        breadcrumb="Infrastructure"
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Support Systems"
            title="What Supports Our Day to Day Operations"
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructureItems.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-lift"
              >
                <span className="grid size-11 place-items-center rounded-md bg-surface text-royal">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-[0.98rem] leading-snug">{item.title}</h3>
                <p className="mt-2.5 text-[0.85rem] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Gallery"
            title="Our Working Environment"
            description="Representative imagery of office reception, workstations, documentation areas, computer systems, communication infrastructure and operations teams."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {gallery.map((image) => (
              <figure key={image.alt} className="overflow-hidden rounded-lg shadow-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/3] size-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Images shown are representative of a professional office and operations environment.
          </p>
        </div>
      </section>

      <section className="surface-navy">
        <div className="container-page py-20 text-center md:py-24">
          <h2 className="mx-auto max-w-2xl font-display text-2xl leading-tight text-navy-foreground sm:text-3xl">
            Want a closer look at how we execute assignments?
          </h2>
          <Button asChild variant="gold" size="xl" className="mt-8">
            <Link to="/contact">
              Contact Our Team <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
