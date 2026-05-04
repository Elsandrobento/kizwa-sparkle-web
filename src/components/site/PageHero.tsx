type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative bg-hero-gradient text-ink-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
      <div className="container-pro relative py-24 md:py-32">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow animate-fade-up">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-balance max-w-3xl animate-fade-up delay-100">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-ink-foreground/75 leading-relaxed animate-fade-up delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
