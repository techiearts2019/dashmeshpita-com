import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { clientDisclaimer, clients } from "@/lib/company";
import heroImage from "@/assets/hero-operations.jpg";

const TITLE = "Our Clients & Portfolio Experience | Dashmeshpita";
const DESCRIPTION =
  "Recovery, collection and repossession experience across banks and NBFCs including credit cards, personal loans, two wheeler, consumer durable, NPA and write off portfolios.";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clientele"
        title="Our Esteemed Clientele"
        description="We are proud to serve a distinguished portfolio of leading banks, NBFCs, financial institutions and corporate organizations. Our experience covers multiple financial products, recovery buckets, NPA portfolios and write off accounts."
        image={heroImage}
        imageAlt="Corporate meeting representing client relationships in financial services"
        breadcrumb="Clients"
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <article
                key={client.name}
                className="flex flex-col rounded-lg border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="grid min-h-20 place-items-center rounded-md bg-surface px-4 py-5 text-center">
                  <span className="font-display text-[0.95rem] font-extrabold text-navy">
                    {client.name}
                  </span>
                </div>
                <ul className="mt-6 space-y-2">
                  {client.portfolio.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2.5 text-[0.85rem] text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-surface p-6">
              <Info className="mt-0.5 size-5 shrink-0 text-royal" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Portfolio details shown on this website should be published only where permitted
                under applicable client agreements and confidentiality requirements.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">{clientDisclaimer}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-2xl leading-tight">
            Add your portfolio to our allocation network
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
