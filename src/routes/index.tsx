import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, HardHat, Truck, Zap, Wrench, Droplets, CheckCircle2, Shield, Award, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { whatsappUrl } from "@/lib/site";
import { useI18n } from "@/lib/I18nContext";
import hero from "@/assets/hero-construction.jpg";
import projBiblio from "@/assets/proj-biblioteca-1.jpg";
import projResid from "@/assets/proj-residencia-1.jpg";
import projZap from "@/assets/proj-zap-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kizwa Valongo — Construção, Fiscalização e Serviços | Kuito, Bié" },
      {
        name: "description",
        content:
          "Construção civil, fiscalização de obras, transportes e instalações em Angola. Solicite o seu orçamento à Kizwa Valongo.",
      },
      { property: "og:title", content: "Kizwa Valongo — Construção e Serviços" },
      {
        property: "og:description",
        content: "Soluções integradas em construção, infraestrutura e serviços no Bié, Angola.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Building2, title: "Construção Civil", desc: "Construção e manutenção completa de infraestrutura, do projeto à entrega." },
  { icon: HardHat, title: "Fiscalização de Obra", desc: "Acompanhamento técnico rigoroso garantindo prazos, qualidade e conformidade." },
  { icon: Truck, title: "Transportes", desc: "Logística e transporte para obras, materiais e operações em todo o território." },
  { icon: Zap, title: "Redes Elétricas & AVAC", desc: "Instalação e manutenção de redes elétricas, ar condicionado e climatização." },
  { icon: Wrench, title: "Comércio Geral", desc: "Fornecimento de bens e serviços para o setor público e privado." },
  { icon: Droplets, title: "Saneamento Básico", desc: "Soluções de saneamento, drenagem e infraestrutura sanitária." },
];

const stats = [
  { value: "10+", label: "Projetos entregues" },
  { value: "100%", label: "Compromisso técnico" },
  { value: "Bié", label: "Sede operacional" },
  { value: "24/7", label: "Apoio ao cliente" },
];

function HomePage() {
  const { t } = useI18n();

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Equipa de engenheiros em obra"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/30" />
        <div className="container-pro relative py-32 text-ink-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow animate-fade-up">
            {t("hero.subtitle")}
          </p>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl text-balance animate-fade-up delay-100">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-foreground/80 leading-relaxed animate-fade-up delay-200">
            {t("hero.desc")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link
              to="/contactos"
              className="inline-flex items-center gap-2 rounded-full bg-primary-gradient text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-elegant hover:scale-[1.03] transition-smooth"
            >
              {t("hero.btnQuote")} <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/30 backdrop-blur bg-white/5 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-smooth"
            >
              {t("hero.btnProjects")}
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl animate-fade-up delay-400">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-primary-glow/60 pl-4">
                <p className="font-display text-3xl font-bold">{s.value}</p>
                <p className="text-xs uppercase tracking-wider text-ink-foreground/60 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-pro py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Sobre a empresa</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-balance">
              Engenharia, rigor e compromisso ao serviço de Angola.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Kizwa Valongo</strong> é uma empresa de direito angolano, sediada na província do Bié, dedicada à construção civil, fiscalização, transportes e prestação de serviços técnicos. Servimos o setor público e privado com uma gama diversificada de soluções de infraestrutura.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Equipa técnica qualificada e experiente",
                "Cumprimento rigoroso de prazos e normas",
                "Parcerias estratégicas e rede sólida",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 text-primary shrink-0" size={20} />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/sobre"
              className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-smooth"
            >
              Conheça a nossa história <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[Shield, Award, Users, HardHat].map((Icon, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-card shadow-card-soft border border-border p-6 flex flex-col justify-between hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <Icon className="text-primary" size={28} />
                <div>
                  <p className="font-display font-bold text-lg">
                    {["Segurança", "Qualidade", "Equipa", "Rigor"][i]}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {["Normas e EPI", "Padrões elevados", "Profissionais", "Cada detalhe"][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary py-24">
        <div className="container-pro">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">O que fazemos</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold max-w-2xl text-balance">
                Serviços completos para a construção e infraestrutura.
              </h2>
            </div>
            <Link to="/servicos" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-smooth">
              Todos os serviços <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <article
                key={s.title}
                className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="h-12 w-12 rounded-xl bg-primary-gradient text-primary-foreground flex items-center justify-center shadow-card-soft">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-pro py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Projetos de destaque</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold max-w-2xl text-balance">
              Obras que falam por nós.
            </h2>
          </div>
          <Link to="/portfolio" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-smooth">
            Ver portfólio <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { img: projBiblio, title: "Biblioteca Municipal do Kuito", tag: "Fiscalização de Obra" },
            { img: projResid, title: "Residência Unifamiliar", tag: "Construção & Fiscalização" },
            { img: projZap, title: "Loja ZAP — Bié", tag: "Reabilitação" },
          ].map((p) => (
            <Link
              to="/portfolio"
              key={p.title}
              className="group block overflow-hidden rounded-2xl shadow-card-soft hover:shadow-elegant transition-smooth"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-overlay-gradient" />
                <div className="absolute bottom-0 left-0 p-6 text-ink-foreground">
                  <p className="text-xs uppercase tracking-widest text-primary-glow">{p.tag}</p>
                  <p className="mt-1 font-display text-xl font-bold">{p.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-secondary/50 py-24">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{t("partners.eyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">{t("partners.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("partners.desc")}</p>
          </div>
          
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-smooth duration-500">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-center p-6 bg-background rounded-2xl shadow-card-soft border border-border">
                <span className="font-display font-bold text-xl text-muted-foreground">Parceiro {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-pro pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 md:p-16 text-ink-foreground">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-balance">
                Tem um projeto em mente? Vamos construí-lo juntos.
              </h3>
              <p className="mt-3 text-ink-foreground/75 max-w-xl">
                Solicite um orçamento sem compromisso. A nossa equipa responde rapidamente.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/contactos"
                className="inline-flex items-center justify-center rounded-full bg-white text-ink px-6 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-smooth"
              >
                Pedir orçamento
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-ink-foreground/30 px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition-smooth"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
