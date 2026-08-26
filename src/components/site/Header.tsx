import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { company, navLinks } from "@/lib/company";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-navy text-navy-foreground md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="text-navy-foreground/80">
            Structured Operations &bull; Experienced Professionals &bull; Compliance Focused
            Execution
          </p>
          <div className="flex items-center gap-5">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-gold"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="font-medium transition-colors hover:text-gold"
            >
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-border bg-background/95 backdrop-blur transition-all duration-300 ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        <div
          className={`container-page flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-royal"
                activeProps={{ className: "text-royal" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="gold" size="lg" className="hidden sm:inline-flex">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-md border border-border text-navy lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav aria-label="Mobile" className="container-page flex flex-col py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  className="border-b border-border/70 py-3 text-sm font-semibold text-foreground/85"
                  activeProps={{ className: "text-royal" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button asChild variant="gold" size="lg">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Request a Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={company.phoneHref}>Call {company.phone}</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
