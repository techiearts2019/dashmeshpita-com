import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { verticals } from "@/lib/company";
import aboutBanner from "@/assets/about-banner.jpg";

const TITLE = "Industries & Business Verticals We Serve | Dashmeshpita";
const DESCRIPTION =
  "Recovery, collection, repossession and verification support for multinational banks, public sector banks, NBFCs, telecom operators and corporate business houses.";

export const Route = createFileRoute("/verticals")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/verticals" },
    ],
    links: [{ rel: "canonical", href: "/verticals" }],
  }),
  component: VerticalsPage,
});

function VerticalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Verticals"
        title="Industries & Business Verticals We Serve"
        description="Service delivery models adapted to the operating requirements of each sector we support."
        image={aboutBanner}
        imageAlt="Corporate professionals representing the sectors served by the company"
        breadcrumb="Verticals"
      />

      <section className="py-20 md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {verticals.map((vertical, index) => (
            <article
              key={vertical.title}
              className={`group relative overflow-hidden rounded-lg border border-border bg-card p-9 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                index === verticals.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <span className="absolute inset-y-0 left-0 w-1 bg-gold" />
              <p className="eyebrow">Vertical {String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 font-display text-xl leading-snug">{vertical.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {vertical.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-2xl leading-tight">
            Not sure which service model fits your portfolio?
          </h2>
          <Button asChild variant="navy" size="xl">
            <Link to="/contact">
              Request a Consultation <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
