import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { company, navLinks } from "@/lib/company";

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
] as const;

export function Footer() {
  return (
    <footer className="surface-navy mt-24">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h2 className="font-display text-lg font-extrabold text-navy-foreground">
            {company.name}
          </h2>
          <span className="rule-gold mt-4" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-navy-foreground/75">
            Professional Verification, Recovery, Collection, Repossession and Asset Management
            Services for Banks, NBFCs, Financial Institutions, Telecom Companies and Corporate
            Organizations.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-gold">Navigate</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[...navLinks, ...legalLinks].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-navy-foreground/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-gold">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-navy-foreground/80">
            <li>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <Phone className="size-4 text-gold" aria-hidden="true" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-start gap-2.5 break-all transition-colors hover:text-gold"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                {company.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              Janakpuri, New Delhi
            </li>
          </ul>
          <p className="mt-5 text-xs text-navy-foreground/55">CIN: {company.cin}</p>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 {company.name}. All Rights Reserved.</p>
          <p>{company.website}</p>
        </div>
      </div>
    </footer>
  );
}
