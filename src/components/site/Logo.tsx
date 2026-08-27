import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Dashmeshpita — home">
      <span className="grid size-10 shrink-0 place-items-center rounded-md bg-gold text-gold-foreground shadow-card">
        <svg
          className="size-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 382 338"
        >
          <defs>
            <linearGradient
              id="dashmeshpita-logo-gradient"
              x1="191"
              y1="338"
              x2="191"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#c28f2c" />
              <stop offset="1" stopColor="#e7b022" />
            </linearGradient>
          </defs>
          <path
            fill="url(#dashmeshpita-logo-gradient)"
            d="M2,0l138.92,74.58c16.82,10.39,33.3,25.53,43.26,42.74,3.56,6.15,14.53,30.05,13.82,36.09-.44,3.75-4.77,5.5-7.03,8.06-4.23,4.8-7.96,10.7-13.96,13.52-4.17-25.58-16.63-49.34-36-66.51-34.97-26.88-76.85-42.76-115.01-64.49v144l68.5-67.98,88.41,86.54,1.79-.28,97.19-98.98-34.89-38.3h134l1,127v1l-1.01,5-36.49-33.04-1.48.5-157.66,160.46-89.73-85.86L2,338h-1l.52-36.98,93.79-93.86,87.15,84.9,2.84.83,156.83-160.76c3.99-2.27,9.4,10.57,13.87,9.86v-48h-49c.42,5.45,7.33,8.81,10.54,12.98l-1.55,3.51-131.63,133.44-89.73-86.86L0,251V0h2Z"
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
