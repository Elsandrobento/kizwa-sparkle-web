import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, HardHat, Truck, Zap, Wrench, Droplets, CheckCircle2, Shield, Award, Users, Target, Eye, Diamond, Clock, Quote, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { whatsappUrl } from "@/lib/site";
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
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-ink">
        <img
          src={hero}
          alt="Construção em Angola"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        
        <div className="container-pro relative z-10 py-20">
          <div className="max-w-4xl">
            <p className="text-primary font-bold uppercase tracking-[0.4em] mb-4 animate-fade-up">
              Soluções Inteligentes em
            </p>
            <h1 className="font-display text-5xl md:text-8xl font-black leading-[0.95] text-white uppercase animate-fade-up delay-100">
              Construção, <br />
              <span className="text-primary">Transporte e</span> <br />
              Serviços Técnicos <br />
              <span className="text-white/40">em Angola</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed animate-fade-up delay-200">
              Executamos projetos com qualidade, segurança e eficiência — da fundação à entrega final.
            </p>
            
            <div className="mt-12 flex flex-wrap gap-5 animate-fade-up delay-300">
              <Link
                to="/contactos"
                className="group flex items-center gap-3 bg-primary text-ink px-8 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-[0_20px_40px_rgba(var(--primary),0.3)] hover:shadow-none hover:-translate-y-1"
              >
                Solicitar Orçamento
              </Link>
              <a
                href="https://wa.me/244923210427"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-transparent border-2 border-white/20 text-white px-8 py-5 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-white hover:text-ink hover:border-white transition-all hover:-translate-y-1"
              >
                Falar com um Consultor
              </a>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-10 animate-fade-up delay-400">
              {[
                { icon: Award, label: "Qualidade", desc: "Padrões elevados em cada projeto" },
                { icon: Shield, label: "Segurança", desc: "Ambientes seguros e equipas treinadas" },
                { icon: CheckCircle2, label: "Compromisso", desc: "Cumprimento de prazos e resultados reais" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">{item.label}</h4>
                    <p className="text-white/40 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-24 md:py-32 overflow-hidden">
        <div className="container-pro">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl -rotate-2 group-hover:rotate-0 transition-all duration-700" />
              <img
                src={projResid}
                alt="Edifício Kizwa Valongo"
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-ink/90 backdrop-blur-xl p-8 rounded-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1.5 bg-primary rounded-full" />
                  <div>
                    <p className="text-white font-black text-2xl">KIZWA</p>
                    <p className="text-primary font-bold text-sm tracking-[0.2em]">VALONGO</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Sobre a Kizwa Valongo</p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-ink leading-tight">
                Construímos mais que obras, <br />
                construímos <span className="text-primary italic">confiança.</span>
              </h2>
              <p className="mt-8 text-ink/60 leading-relaxed text-lg">
                A Kizwa Valongo é uma empresa angolana especializada em construção civil, transporte, saneamento básico, telecomunicações e serviços técnicos. Atuamos com foco em qualidade, segurança e cumprimento de prazos, oferecendo soluções completas para clientes particulares e empresariais.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-8">
                {[
                  { icon: Target, label: "Missão", desc: "Entregar soluções de qualidade que superem as expectativas." },
                  { icon: Eye, label: "Visão", desc: "Ser referência em Angola na prestação de serviços de engenharia." },
                  { icon: Diamond, label: "Valores", desc: "Integridade, inovação e compromisso com o cliente." },
                  { icon: Users, label: "Equipa", desc: "Profissionais qualificados para entregar os melhores resultados." },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                      <h4 className="font-black uppercase tracking-widest text-xs text-ink">{item.label}</h4>
                    </div>
                    <p className="text-ink/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-ink py-16 border-y border-white/5">
        <div className="container-pro">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { icon: Building2, value: "+150", label: "Projetos Concluídos" },
              { icon: Users, value: "+80", label: "Clientes Satisfeitos" },
              { icon: HardHat, value: "+120", label: "Profissionais Qualificados" },
              { icon: Clock, value: "+10", label: "Anos de Experiência" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <stat.icon className="text-primary/40 mb-4" size={32} />
                <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</p>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#f8f9fa] py-24 md:py-32">
        <div className="container-pro">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Nossos Serviços</p>
            <h2 className="font-display text-4xl md:text-6xl font-black text-ink">
              Soluções completas para o <span className="text-primary">seu projeto</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: projBiblio, icon: Building2, title: "Construção Civil", items: ["Execução de obras", "Remodelação", "Fiscalização"] },
              { img: hero, icon: Truck, title: "Transporte & Logística", items: ["Transporte de materiais", "Serviços personalizados", "Apoio a obras"] },
              { img: projZap, icon: Zap, title: "Instalações Técnicas", items: ["Eletricidade", "Canalização", "Sistemas AVAC"] },
              { img: projResid, icon: Phone, title: "Telecomunicações & Informática", items: ["Instalação de redes", "Manutenção de sistemas", "Suporte técnico"] },
              { icon: Shield, title: "Higiene e Segurança no Trabalho", items: ["Avaliação de riscos", "Equipamentos de proteção", "Consultoria"] },
              { icon: Droplets, title: "Saneamento Básico", items: ["Sistemas de água", "Drenagem", "Tratamento de resíduos"] },
            ].map((service, i) => (
              <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.img || projResid}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors" />
                  <div className="absolute -bottom-6 left-8 h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <service.icon className="text-primary" size={20} />
                  </div>
                </div>
                <div className="p-8 pt-10">
                  <h3 className="font-black text-xl text-ink mb-4">{service.title}</h3>
                  <ul className="space-y-2 mb-8">
                    {service.items.map((item, j) => (
                      <li key={j} className="text-ink/50 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/servicos" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                    Saiba Mais <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-pro">
          <div className="text-center mb-20">
            <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Portfólio</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-ink">
              Alguns dos nossos trabalhos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[projBiblio, projResid, projZap, hero].map((img, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={`Project ${i + 1}`}
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link to="/portfolio" className="bg-white text-ink px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl">
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-ink font-black uppercase tracking-widest text-xs border-b-2 border-primary pb-1 hover:text-primary transition-all">
              Ver todos os projetos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-ink py-24 md:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
        <div className="container-pro relative z-10">
          <div className="text-center mb-20">
            <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Depoimentos</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white">
              O que dizem nossos clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Excelente serviço e profissionalismo. A Kizwa Valongo entregou nosso projeto dentro do prazo e com qualidade acima do esperado.", author: "Empresa Parceira" },
              { text: "Equipa comprometida e soluções eficientes. Recomendo a Kizwa Valongo para qualquer tipo de obra ou serviço técnico.", author: "Cliente Satisfeito" },
              { text: "Trabalho sério, com segurança e organização. Parabéns a toda equipa pelo excelente profissionalismo.", author: "Cliente Empresarial" },
            ].map((quote, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all">
                <Quote className="text-primary mb-6" size={40} />
                <p className="text-white/80 italic leading-relaxed mb-8">
                  "{quote.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    {quote.author[0]}
                  </div>
                  <p className="text-white font-bold text-sm">— {quote.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-24">
        <div className="container-pro">
          <div className="bg-primary p-12 md:p-24 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="font-display text-4xl md:text-5xl font-black text-ink leading-tight">
                Vamos tornar seu projeto <br />
                uma <span className="text-white">realidade?</span>
              </h3>
            </div>
            <Link
              to="/contactos"
              className="relative z-10 bg-ink text-white px-10 py-6 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-white hover:text-ink transition-all shadow-2xl"
            >
              Solicitar Orçamento Agora
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
