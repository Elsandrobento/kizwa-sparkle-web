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
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/85 to-transparent" />
          <div className="absolute -right-20 top-0 bottom-0 w-1/2 opacity-20"
               style={{ background: "linear-gradient(135deg, transparent 40%, var(--primary) 41%, var(--primary) 42%, transparent 43%, transparent 60%, var(--primary) 61%, var(--primary) 62%, transparent 63%)" }} />
        </div>

        <div className="relative container-pro pt-44 pb-24">
          <div className="max-w-3xl animate-fade-up">
            <span className="eyebrow text-primary mb-6">Soluções inteligentes em</span>
            <h1 className="mt-6 text-5xl md:text-7xl font-display font-black leading-[1.02] tracking-tight uppercase">
              Construção,<br />Transporte e<br />Serviços Técnicos<br />
              <span className="text-primary">em Angola</span>
            </h1>
            <p className="mt-8 text-lg text-white/70 max-w-xl">
              Executamos projetos com qualidade, segurança e eficiência — da fundação à entrega final.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={14} /> Solicitar Orçamento
              </a>
              <a href={`tel:${"+244923210427"}`} className="btn-outline-light">
                <Phone size={14} /> Falar com um Consultor
              </a>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              {[
                { icon: Award, t: "Qualidade", d: "Padrões elevados em cada projeto" },
                { icon: ShieldCheck, t: "Segurança", d: "Ambientes seguros e equipas treinadas" },
                { icon: CheckCircle2, t: "Compromisso", d: "Cumprimento de prazos e resultados reais" },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary shrink-0">
                    <f.icon size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white">{f.t}</div>
                    <div className="text-xs text-white/60 mt-1 leading-relaxed">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={aboutImg} alt="Sobre a Kizwa Valongo" className="w-full h-[480px] object-cover rounded-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-display font-black">+10</div>
              <div className="text-[10px] uppercase tracking-widest font-bold mt-1">Anos de Experiência</div>
            </div>
          </div>

          <div>
            <span className="eyebrow">Sobre a Kizwa Valongo</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-display font-black tracking-tight text-[var(--ink)]">
              Construímos mais que obras,<br />construímos <span className="text-primary">confiança.</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              A Kizwa Valongo é uma empresa angolana especializada em construção civil, transporte,
              saneamento básico, telecomunicações e serviços técnicos. Atuamos com foco em qualidade,
              segurança e cumprimento de prazos, oferecendo soluções completas para clientes
              particulares e empresariais.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              {[
                { icon: Target, t: "Missão", d: "Entregar soluções de qualidade que superem as expectativas dos nossos clientes." },
                { icon: Eye, t: "Visão", d: "Ser referência em Angola na prestação de serviços de engenharia e construção." },
                { icon: Gem, t: "Valores", d: "Integridade, qualidade, segurança, inovação e compromisso com o cliente." },
                { icon: Users, t: "Equipa", d: "Profissionais qualificados e experientes prontos para entregar os melhores resultados." },
              ].map((v, i) => (
                <div key={i}>
                  <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <v.icon size={18} />
                  </div>
                  <h4 className="font-display font-black text-base text-[var(--ink)]">{v.t}</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Nossos Serviços</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-black tracking-tight text-[var(--ink)]">
              Soluções completas para o <span className="text-primary">seu projeto</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                    <s.icon size={20} />
                  </div>
                </div>
                <div className="p-6 pt-8">
                  <h3 className="font-display font-black text-lg text-[var(--ink)] mb-3">{s.title}</h3>
                  <ul className="space-y-2 mb-5">
                    {s.items.map((it, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" /> {it}
                      </li>
                    ))}
                  </ul>
                  <Link to="/servicos" className="text-[11px] font-black uppercase tracking-[0.2em] text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Saiba Mais <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-[var(--ink)] text-white">
        <div className="container-pro grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-primary text-primary flex items-center justify-center shrink-0">
                <s.icon size={22} />
              </div>
              <div>
                <div className="text-4xl font-display font-black text-primary">{s.value}</div>
                <div className="text-[11px] uppercase tracking-widest text-white/70 mt-1">{s.label}</div>
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
            <span className="eyebrow">Depoimentos</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-black tracking-tight">
              O que dizem nossos clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/40 transition">
                <Quote className="text-primary mb-4" size={28} />
                <p className="text-white/80 leading-relaxed text-sm">{t.text}</p>
                <div className="mt-6 pt-6 border-t border-white/10 text-[11px] uppercase tracking-widest font-black text-primary">
                  — {t.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
