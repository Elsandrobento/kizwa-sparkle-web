type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative bg-ink pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
      <div className="container-pro relative z-10">
        {eyebrow && (
          <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 animate-fade-up">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl md:text-7xl font-black text-white leading-[1.1] text-balance max-w-4xl animate-fade-up delay-100">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed animate-fade-up delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
