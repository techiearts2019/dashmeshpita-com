import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Dashmeshpita — home">
      <span className="grid size-10 shrink-0 place-items-center rounded-md bg-gold text-gold-foreground shadow-card"></span>
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
