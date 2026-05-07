import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  HardHat,
  Truck,
  Wrench,
  Droplets,
  ClipboardCheck,
  ShieldCheck,
  Award,
  Users,
  Phone,
  Quote,
  CheckCircle2,
  Play,
  Hammer,
  Ruler,
  PaintBucket,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { whatsappUrl, SITE } from "@/lib/site";
import heroWorker from "@/assets/hero-worker.jpg";
import aboutImg from "@/assets/about-experience.jpg";
import ctaBanner from "@/assets/cta-banner.jpg";
import teamImg from "@/assets/team-collab.jpg";
import projBiblio from "@/assets/proj-biblioteca-1.jpg";
import projResid from "@/assets/proj-residencia-1.jpg";
import projZap from "@/assets/proj-zap-1.jpg";
import projEscola from "@/assets/proj-escola-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kizwa Valongo — Construção Civil & Serviços | Kuito, Bié" },
      {
        name: "description",
        content:
          "Construção civil, fiscalização, transportes e serviços técnicos em Angola. Solidez, qualidade e prazos cumpridos. Solicite o seu orçamento.",
      },
      { property: "og:title", content: "Kizwa Valongo — Construção e Serviços" },
      {
        property: "og:description",
        content: "Soluções integradas em construção e infraestrutura no Bié, Angola.",
      },
      { property: "og:image", content: heroWorker },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Building2, title: "Construção Civil", desc: "Edifícios residenciais, comerciais e públicos chave-na-mão.", num: "01" },
  { icon: ClipboardCheck, title: "Fiscalização", desc: "Acompanhamento técnico de obras e controlo de qualidade.", num: "02" },
  { icon: Ruler, title: "Projeto & Engenharia", desc: "Conceção, estudos e licenciamento de projetos.", num: "03" },
  { icon: Wrench, title: "AVAC & Instalações", desc: "Climatização, eletricidade e instalações especiais.", num: "04" },
  { icon: Droplets, title: "Águas & Saneamento", desc: "Redes de abastecimento, drenagens e saneamento.", num: "05" },
  { icon: Truck, title: "Logística & Transportes", desc: "Transporte de mercadorias e equipamentos.", num: "06" },
];

const stats = [
  { value: "120+", label: "Projetos Concluídos" },
  { value: "15+", label: "Anos de Experiência" },
  { value: "80+", label: "Clientes Satisfeitos" },
  { value: "40+", label: "Profissionais" },
];

const process = [
  { num: "01", icon: Phone, title: "Consulta", desc: "Ouvimos as suas necessidades e analisamos o local." },
  { num: "02", icon: Ruler, title: "Planeamento", desc: "Desenhamos o projeto técnico e o orçamento detalhado." },
  { num: "03", icon: Hammer, title: "Execução", desc: "Equipa especializada constrói com rigor e segurança." },
  { num: "04", icon: PaintBucket, title: "Entrega", desc: "Inspeção final, acabamentos e entrega chave-na-mão." },
];

const projects = [
  { img: projBiblio, cat: "Edifícios Públicos", title: "Biblioteca Municipal do Kuito" },
  { img: projZap, cat: "Comercial", title: "Loja ZAP — Bié" },
  { img: projResid, cat: "Residencial", title: "Residência Privada" },
  { img: projEscola, cat: "Educação", title: "Escola do Andulo" },
];

const testimonials = [
  {
    name: "Eng.º António Cassoma",
    role: "Cliente Institucional",
    text: "A Kizwa Valongo entregou a obra dentro do prazo e com qualidade acima do esperado. Equipa muito profissional.",
  },
  {
    name: "Maria Tchipuca",
    role: "Cliente Privada",
    text: "Excelente acompanhamento desde o projeto até à entrega. Recomendo vivamente para qualquer obra.",
  },
  {
    name: "Dr. José Ndalu",
    role: "Empresa Comercial",
    text: "Profissionalismo, transparência e cumprimento de prazos. Voltaremos a contar com a Kizwa.",
  },
];

const features = [
  "Engenheiros e técnicos certificados",
  "Materiais de alta qualidade",
  "Cumprimento rigoroso de prazos",
  "Segurança e normas internacionais",
];

function HomePage() {
  return (
    <SiteLayout>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen bg-ink overflow-hidden flex items-center">
        {/* bg image */}
        <div className="absolute inset-0">
          <img
            src={heroWorker}
            alt="Construção Kizwa Valongo"
            className="w-full h-full object-cover object-right opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
        </div>

        {/* decorative grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="container-pro relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6 animate-fade-up">Construímos o Futuro de Angola</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight animate-fade-up delay-100">
              Soluções <span className="text-primary">Sólidas</span><br />
              Em Construção<br />
              & Serviços.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed animate-fade-up delay-200">
              A Kizwa Valongo é uma referência em construção civil, fiscalização e serviços
              técnicos em Angola. Qualidade, rigor e compromisso em cada obra.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link to="/contactos" className="btn-primary">
                Pedir Orçamento <ArrowRight size={16} />
              </Link>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
                <Play size={14} className="fill-current" /> Falar Connosco
              </a>
            </div>
          </div>

          {/* hero floating card */}
          <div className="hidden lg:block absolute right-8 bottom-24 w-72 rounded-2xl bg-primary p-6 text-primary-foreground shadow-elegant animate-float-slow">
            <div className="flex items-center gap-4 mb-4">
              <Award size={36} />
              <div>
                <div className="text-3xl font-display font-black">15+</div>
                <div className="text-xs uppercase tracking-widest opacity-80">Anos de Mercado</div>
              </div>
            </div>
            <p className="text-sm opacity-90">Compromisso com a excelência em todas as obras que entregamos.</p>
          </div>
        </div>

        {/* bottom strip */}
        <div className="absolute bottom-0 inset-x-0 bg-primary py-5 z-10">
          <div className="container-pro flex flex-wrap items-center justify-between gap-4 text-primary-foreground">
            <div className="flex items-center gap-3 font-display font-bold uppercase text-sm tracking-wider">
              <ShieldCheck size={20} /> Segurança em Primeiro Lugar
            </div>
            <div className="flex items-center gap-3 font-display font-bold uppercase text-sm tracking-wider">
              <Award size={20} /> Qualidade Certificada
            </div>
            <div className="flex items-center gap-3 font-display font-bold uppercase text-sm tracking-wider">
              <Users size={20} /> Equipa Especializada
            </div>
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 font-display font-black text-sm">
              <Phone size={20} /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          {/* image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card-soft">
              <img src={aboutImg} alt="Engenheiro Kizwa" className="w-full h-[520px] object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-ink text-white rounded-2xl p-6 shadow-elegant w-56">
              <div className="text-5xl font-display font-black text-primary">15+</div>
              <div className="text-sm uppercase tracking-widest mt-2 text-white/70">Anos de excelência em obras</div>
            </div>
            <div className="absolute -top-6 -left-6 hidden md:flex w-32 h-32 rounded-full bg-primary/10 items-center justify-center">
              <Hammer className="text-primary" size={48} />
            </div>
          </div>

          {/* text side */}
          <div>
            <div className="eyebrow mb-5">Sobre a Kizwa Valongo</div>
            <h2 className="section-title text-foreground">
              Construímos com <span className="text-primary">qualidade,</span><br />
              rigor e responsabilidade.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Sediada em Kuito — Bié, a Kizwa Valongo é uma empresa angolana de construção civil
              e prestação de serviços técnicos. Atuamos em obras públicas e privadas com uma
              equipa multidisciplinar focada em entregar resultados duradouros.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                  <span className="text-foreground font-medium">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6">
              <Link to="/sobre" className="btn-primary">
                Saber Mais <ArrowRight size={16} />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Ligue-nos</div>
                  <a href={`tel:${SITE.phoneRaw}`} className="font-display font-bold text-foreground">{SITE.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="container-pro relative">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="eyebrow mb-5">Os Nossos Serviços</div>
              <h2 className="section-title text-foreground">
                Soluções completas <span className="text-primary">para o seu projeto.</span>
              </h2>
            </div>
            <Link to="/servicos" className="btn-primary">
              Ver Todos <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group relative bg-card rounded-3xl p-8 shadow-card-soft hover:shadow-elegant transition-smooth border border-border/50 hover:border-primary/30 overflow-hidden"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="absolute top-6 right-6 font-display font-black text-6xl text-primary/10 group-hover:text-primary/20 transition-colors">
                    {s.num}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-smooth">
                    <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link
                    to="/servicos"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:gap-3 transition-all"
                  >
                    Saber Mais <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ STATS / CTA BANNER ============ */}
      <section className="relative py-24 md:py-32 bg-ink overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaBanner} alt="" className="w-full h-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
        </div>
        <div className="container-pro relative z-10">
          <div className="grid lg:grid-cols-4 gap-10 mb-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left border-l-2 border-primary pl-6">
                <div className="font-display font-black text-5xl md:text-6xl text-white">{s.value}</div>
                <div className="mt-3 text-sm uppercase tracking-widest text-white/60">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-12 grid lg:grid-cols-2 gap-8 items-center">
            <h2 className="section-title text-white max-w-xl">
              Pronto para iniciar a sua <span className="text-primary">próxima obra?</span>
            </h2>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link to="/contactos" className="btn-primary">
                Pedir Orçamento <ArrowRight size={16} />
              </Link>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
                WhatsApp <Phone size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-5 justify-center" style={{ display: "inline-flex" }}>O Nosso Processo</div>
            <h2 className="section-title text-foreground">
              Como <span className="text-primary">trabalhamos</span> consigo.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.num} className="relative">
                  <div className="bg-secondary rounded-3xl p-8 hover:bg-primary group transition-smooth h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-card group-hover:bg-white/15 flex items-center justify-center transition-smooth">
                        <Icon className="text-primary group-hover:text-white transition-colors" size={28} />
                      </div>
                      <span className="font-display font-black text-4xl text-primary/30 group-hover:text-white/40 transition-colors">
                        {p.num}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-white mb-3 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">{p.desc}</p>
                  </div>
                  {i < process.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-primary/30 z-10" size={24} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-pro">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="eyebrow mb-5">Portfólio</div>
              <h2 className="section-title text-foreground">
                Projetos que falam por <span className="text-primary">si.</span>
              </h2>
            </div>
            <Link to="/portfolio" className="btn-primary">
              Ver Portfólio <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p) => (
              <Link
                to="/portfolio"
                key={p.title}
                className="group relative rounded-3xl overflow-hidden shadow-card-soft hover:shadow-elegant transition-smooth aspect-[3/4] block"
              >
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-smooth" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest mb-3">
                    {p.cat}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">{p.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:gap-3 transition-all">
                    Ver Projeto <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM CTA ============ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-5">A Nossa Equipa</div>
            <h2 className="section-title text-foreground">
              Profissionais comprometidos com <span className="text-primary">a sua obra.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Engenheiros, arquitetos e técnicos especializados que trabalham juntos para
              transformar a sua visão em realidade — com segurança, qualidade e dentro do prazo.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <HardHat className="text-primary" size={22} />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">Equipa Certificada</div>
                  <p className="text-sm text-muted-foreground mt-1">Profissionais com formação técnica superior.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-primary" size={22} />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">Garantia & Segurança</div>
                  <p className="text-sm text-muted-foreground mt-1">Padrões internacionais em cada projeto.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={teamImg} alt="Equipa Kizwa Valongo" className="rounded-3xl shadow-card-soft w-full h-[520px] object-cover" loading="lazy" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elegant max-w-[240px]">
              <Users size={28} className="mb-3" />
              <div className="font-display font-black text-3xl">40+</div>
              <div className="text-sm uppercase tracking-widest opacity-90 mt-1">Profissionais dedicados</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 md:py-32 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="container-pro relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-5">Testemunhos</div>
            <h2 className="section-title text-white">
              O que dizem os nossos <span className="text-primary">clientes.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-smooth">
                <Quote className="text-primary mb-6" size={36} />
                <p className="text-white/80 leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold">
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="font-display font-bold text-white">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-white/50">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 bg-primary">
        <div className="container-pro flex flex-wrap items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-black text-3xl md:text-5xl text-primary-foreground max-w-2xl">
              Vamos construir juntos o seu próximo projeto.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contactos" className="inline-flex items-center gap-2.5 bg-ink text-white font-bold uppercase text-xs tracking-widest px-7 py-4 rounded-full hover:bg-foreground transition-smooth">
              Pedir Orçamento <ArrowRight size={16} />
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2.5 bg-white text-ink font-bold uppercase text-xs tracking-widest px-7 py-4 rounded-full hover:bg-foreground hover:text-white transition-smooth">
              <Phone size={14} /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
