import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, oklch(0.243 0.055 259.5 / 0.95) 0%, oklch(0.243 0.055 259.5 / 0.7) 55%, oklch(0.33 0.09 257.5 / 0.55) 100%)",
        }}
      />
      <div className="container-page relative py-20 md:py-28">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs font-medium text-navy-foreground/70">
            <li>
              <Link to="/" className="transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li className="text-gold">{breadcrumb}</li>
          </ol>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-balance-title font-display text-3xl leading-tight text-navy-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
