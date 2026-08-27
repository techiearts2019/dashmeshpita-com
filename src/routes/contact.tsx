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

const serviceOptions = [
  "Recovery & Collection",
  "Repossession",
  "Verification",
  "NPA Recovery",
  "Asset Management",
  "Other",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) {
      toast.error("Please provide consent before submitting the enquiry.");
      return;
    }
    setSubmitted(true);
    toast.success("Enquiry received. Our team will get in touch shortly.");
  }

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
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
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
              {/* <Button asChild variant="gold" size="lg">
                <a href={`mailto:${company.email}`}>
                  <Mail className="size-4" /> Email Us
                </a>
              </Button> */}
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

          <div className="rounded-lg border border-border bg-surface p-8 shadow-card md:p-10">
            <h2 className="font-display text-xl">Send Us an Enquiry</h2>
            <span className="rule-gold mt-4" />

            {submitted ? (
              <div className="mt-10 rounded-lg border border-border bg-card p-8 text-center">
                <CheckCircle2 className="mx-auto size-10 text-gold" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg">Thank you for your enquiry</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Your details have been recorded. A member of our team will review your requirement
                  and contact you shortly. For urgent matters, please call {company.phone}.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-7"
                  onClick={() => {
                    setSubmitted(false);
                    setConsent(false);
                  }}
                >
                  Submit another enquiry
                </Button>
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="fullName" label="Full Name" required />
                  <Field id="companyName" label="Company Name" required />
                  <Field id="designation" label="Designation" />
                  <Field
                    id="mobile"
                    label="Mobile Number"
                    type="tel"
                    inputMode="tel"
                    required
                  />
                  <Field id="email" label="Email Address" type="email" required />
                  <div className="space-y-2">
                    <Label htmlFor="service">
                      Service Required <span className="text-destructive">*</span>
                    </Label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <Field id="portfolio" label="Portfolio / Product Type" />

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share portfolio details, locations and service expectations."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(value) => setConsent(value === true)}
                  />
                  <Label htmlFor="consent" className="text-xs leading-relaxed text-muted-foreground">
                    I consent to Dashmeshpita Management and Consulting Private Limited contacting me
                    regarding this enquiry, and to the processing of the details submitted for this
                    purpose.
                  </Label>
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full">
                  Submit Enquiry
                </Button>
                <p className="text-xs text-muted-foreground">
                  Information shared through this form is treated as confidential and used only to
                  respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  required,
  type = "text",
  inputMode,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  inputMode?: "tel" | "text" | "email";
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Input id={id} name={id} type={type} inputMode={inputMode} required={required} />
    </div>
  );
}
