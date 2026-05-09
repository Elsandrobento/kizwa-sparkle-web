import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, MessageCircle, Phone, ShieldCheck, Award, CheckCircle2,
  Building2, Truck, Zap, Radio, HardHat, Droplets, Target, Eye, Gem, Users,
  Quote,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { whatsappUrl } from "@/lib/site";

import heroImg from "@/assets/hero-worker.jpg";
import aboutImg from "@/assets/about-experience.jpg";
import s1 from "@/assets/proj-execucao-1.jpg";
import s2 from "@/assets/proj-execucao-2.jpg";
import s3 from "@/assets/proj-zap-1.jpg";
import s4 from "@/assets/proj-zap-2.jpg";
import s5 from "@/assets/team-construction.jpg";
import s6 from "@/assets/proj-render-1.jpg";
import p1 from "@/assets/proj-biblioteca-1.jpg";
import p2 from "@/assets/proj-biblioteca-2.jpg";
import p3 from "@/assets/proj-residencia-1.jpg";
import p4 from "@/assets/proj-escola-1.jpg";
import p5 from "@/assets/proj-render-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kizwa Valongo — Construção, Transporte e Serviços Técnicos em Angola" },
      { name: "description", content: "Soluções inteligentes em construção, transporte, telecomunicações e serviços técnicos em Angola. Qualidade, segurança e compromisso." },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Building2, title: "Construção Civil", img: s1, items: ["Execução de obras", "Remodelação", "Fiscalização"] },
  { icon: Truck, title: "Transporte & Logística", img: s2, items: ["Transporte de materiais", "Serviços personalizados", "Apoio a obras"] },
  { icon: Zap, title: "Instalações Técnicas", img: s3, items: ["Eletricidade", "Canalização", "Sistemas AVAC"] },
  { icon: Radio, title: "Telecomunicações & Informática", img: s4, items: ["Instalação de redes", "Manutenção de sistemas", "Suporte técnico"] },
  { icon: HardHat, title: "Higiene e Segurança no Trabalho", img: s5, items: ["Avaliação de riscos", "Equipamentos de proteção", "Consultoria"] },
  { icon: Droplets, title: "Saneamento Básico", img: s6, items: ["Sistemas de água", "Drenagem", "Tratamento de resíduos"] },
];

const STATS = [
  { icon: Building2, value: "+150", label: "Projetos Concluídos" },
  { icon: Users, value: "+80", label: "Clientes Satisfeitos" },
  { icon: HardHat, value: "+120", label: "Profissionais Qualificados" },
  { icon: Award, value: "+10", label: "Anos de Experiência" },
];

const PORTFOLIO = [
  { img: p1, cat: "Construção" },
  { img: p2, cat: "Instalações" },
  { img: p3, cat: "Construção" },
  { img: p4, cat: "Transporte" },
  { img: p5, cat: "Outros" },
];

const TESTIMONIALS = [
  { name: "Empresa Parceira", text: "Excelente serviço e profissionalismo. A Kizwa Valongo entregou nosso projeto dentro do prazo e com qualidade acima do esperado." },
  { name: "Cliente Satisfeito", text: "Equipa comprometida e soluções eficientes. Recomendo a Kizwa Valongo para qualquer tipo de obra ou serviço técnico." },
  { name: "Cliente Empresarial", text: "Trabalho sério, com segurança e organização. Parabéns a toda equipa pelo excelente profissionalismo." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[760px] lg:min-h-[820px] bg-[var(--ink)] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[var(--ink)]" />
          
          {/* Skewed container for image on the right */}
          <div className="absolute top-0 bottom-0 right-0 w-[90%] md:w-[65%] lg:w-[55%] -skew-x-[15deg] origin-bottom-left border-l-[4px] border-primary overflow-hidden translate-x-[15%] md:translate-x-[5%]">
            {/* Un-skew wrapper for the image */}
            <div className="absolute top-0 bottom-0 left-0 w-[150%] skew-x-[15deg] origin-bottom-left -translate-x-[15%] md:-translate-x-[10%]">
              <img 
                src={heroImg} 
                alt="Kizwa Valongo Obras" 
                className="w-full h-full object-cover object-[75%_center] opacity-85" 
              />
              <div className="absolute inset-0 bg-[var(--ink)]/20 mix-blend-overlay" />
            </div>
          </div>
          
          {/* Gradient overlay to ensure text readability on smaller screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/90 to-transparent w-[80%] md:w-[50%] pointer-events-none" />
        </div>

        <div className="relative container-pro pt-44 pb-24 z-10">
          <div className="max-w-2xl animate-fade-up">
            <span className="text-primary font-black uppercase tracking-[0.1em] text-lg mb-2 block">
              Soluções inteligentes em
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.02] tracking-tight uppercase">
              Construção,<br />Transporte e<br />Serviços Técnicos<br />
              <span className="text-primary">em Angola</span>
            </h1>
            <p className="mt-8 text-lg text-white/90 max-w-lg font-medium">
              Executamos projetos com qualidade, segurança e eficiência — da fundação à entrega final.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={16} /> Solicitar Orçamento
              </a>
              <a href={`tel:${"+244923210427"}`} className="btn-outline-light">
                <Phone size={16} /> Falar com um Consultor
              </a>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              {[
                { icon: Award, t: "Qualidade", d: "Padrões elevados em cada projeto" },
                { icon: ShieldCheck, t: "Segurança", d: "Ambientes seguros e equipas treinadas" },
                { icon: CheckCircle2, t: "Compromisso", d: "Cumprimento de prazos e resultados reais" },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-primary shrink-0 mt-1">
                    <f.icon size={28} />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-[0.1em] text-white">{f.t}</div>
                    <div className="text-xs text-white/70 mt-1 leading-relaxed">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-[var(--ink)] text-white border-t border-white/5">
        <div className="container-pro">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={aboutImg} alt="Sobre a Kizwa Valongo" className="w-full h-[480px] object-cover rounded-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/40 to-transparent" />
            </div>

            <div>
              <span className="text-primary font-black uppercase tracking-[0.1em] text-sm mb-4 block">Sobre a Kizwa Valongo</span>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
                Construímos mais que obras,<br />construímos <span className="text-primary">confiança.</span>
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed font-medium">
                A Kizwa Valongo é uma empresa angolana especializada em construção civil, transporte,
                saneamento básico, telecomunicações e serviços técnicos. Atuamos com foco em qualidade,
                segurança e cumprimento de prazos, oferecendo soluções completas para clientes
                particulares e empresariais.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            {[
              { icon: Target, t: "MISSÃO", d: "Entregar soluções de qualidade que superem as expectativas dos nossos clientes." },
              { icon: Eye, t: "VISÃO", d: "Ser referência em Angola na prestação de serviços de engenharia e construção." },
              { icon: Gem, t: "VALORES", d: "Integridade, qualidade, segurança, inovação e compromisso com o cliente." },
              { icon: Users, t: "EQUIPA", d: "Profissionais qualificados e experientes prontos para entregar os melhores resultados." },
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-start border-l border-white/10 pl-6 first:border-l-0 first:pl-0">
                <div className="text-primary mb-4">
                  <v.icon size={32} />
                </div>
                <h4 className="font-display font-black text-sm uppercase tracking-[0.1em] text-white">{v.t}</h4>
                <p className="text-xs text-white/60 mt-3 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-black uppercase tracking-[0.1em] text-sm block">NOSSOS SERVIÇOS</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-display font-black tracking-tight text-[var(--ink)]">
              Soluções completas para o <span className="text-primary">seu projeto</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group relative pt-44">
                <div className="absolute top-0 left-0 w-full h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Centered Overlapping Icon */}
                <div className="absolute top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-[3px] border-primary text-primary flex items-center justify-center shadow-lg z-10">
                  <s.icon size={22} />
                </div>

                <div className="p-8 pt-10 text-center">
                  <h3 className="font-display font-black text-xl text-[var(--ink)] mb-4">{s.title}</h3>
                  <ul className="space-y-3 mb-8 text-left inline-block w-full">
                    {s.items.map((it, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[var(--ink)] mt-2 shrink-0" /> {it}
                      </li>
                    ))}
                  </ul>
                  <Link to="/servicos" className="text-[11px] font-black uppercase tracking-[0.2em] text-primary inline-flex items-center justify-center w-full gap-2 hover:gap-3 transition-all">
                    SAIBA MAIS <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-[var(--ink)] text-white border-y border-white/10">
        <div className="container-pro grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="text-primary shrink-0">
                <s.icon size={48} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display font-black text-white">{s.value}</div>
                <div className="text-[11px] uppercase tracking-widest text-white/50 mt-1 font-bold">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 bg-white">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Portfólio</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-black tracking-tight text-[var(--ink)]">
              Alguns dos nossos trabalhos
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Todos", "Construção", "Instalações", "Transporte", "Outros"].map((c, i) => (
              <button key={i} className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition ${i === 0 ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {PORTFOLIO.map((p, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl aspect-square">
                <img src={p.img} alt={p.cat} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-[11px] font-black uppercase tracking-widest">{p.cat}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/portfolio" className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-primary hover:text-primary text-gray-700 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition">
              Ver Todos os Projetos <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[var(--ink)] text-white">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-black uppercase tracking-[0.1em] text-sm block">DEPOIMENTOS</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-display font-black tracking-tight">
              O que dizem nossos clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex gap-4 border border-white/10 rounded-2xl p-8 hover:border-primary/40 transition">
                <Quote className="text-primary shrink-0 rotate-180" size={40} />
                <div className="flex flex-col justify-between">
                  <p className="text-white/80 leading-relaxed text-sm italic mb-6">"{t.text}"</p>
                  <div className="text-[11px] uppercase tracking-[0.1em] font-black text-white">
                    — {t.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
