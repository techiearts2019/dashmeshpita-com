export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`mt-3 text-balance-title font-display text-2xl leading-tight sm:text-3xl md:text-[2.15rem] ${
          invert ? "text-navy-foreground" : ""
        }`}
      >
        {title}
      </h2>
      <span className={`rule-gold mt-5 ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p
          className={`mt-5 text-[0.975rem] leading-relaxed ${
            invert ? "text-navy-foreground/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
