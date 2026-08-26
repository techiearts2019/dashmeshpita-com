import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Dashmeshpita — home">
      <span className="grid size-10 shrink-0 place-items-center rounded-md bg-gold text-gold-foreground shadow-card">
        <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
          <path
            d="M12 2.5 4.5 5.6v6.1c0 4.4 3.1 8.3 7.5 9.8 4.4-1.5 7.5-5.4 7.5-9.8V5.6L12 2.5Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M12 2.5 4.5 5.6v6.1c0 4.4 3.1 8.3 7.5 9.8 4.4-1.5 7.5-5.4 7.5-9.8V5.6L12 2.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 8.6h3.3c1.9 0 3.2 1.4 3.2 3.5s-1.3 3.5-3.2 3.5H9V8.6Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-base font-extrabold tracking-tight ${
            inverted ? "text-navy-foreground" : "text-navy"
          }`}
        >
          Dashmeshpita
        </span>
        <span
          className={`block text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${
            inverted ? "text-navy-foreground/70" : "text-muted-foreground"
          }`}
        >
          Management &amp; Consulting
        </span>
      </span>
    </Link>
  );
}
