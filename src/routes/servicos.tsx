import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, HardHat, Truck, Zap, Wrench, Droplets, Wind, ShoppingBag, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Kizwa Valongo" },
      {
        name: "description",
        content:
          "Construção civil, fiscalização de obras, transportes, redes elétricas, AVAC e saneamento básico. Conheça os serviços da Kizwa Valongo.",
      },
      { property: "og:title", content: "Serviços — Kizwa Valongo" },
      { property: "og:description", content: "Soluções completas em engenharia e infraestrutura em Angola." },
    ],
  }),
  component: ServicosPage,
});

const services = [
  {
    icon: Building2,
    title: "Construção e Manutenção de Infraestrutura",
    desc: "Execução completa de obras, do projeto à entrega chave-na-mão, com manutenção contínua para garantir longevidade.",
    benefits: ["Equipa multidisciplinar", "Cumprimento de prazos", "Materiais certificados"],
  },
  {
    icon: HardHat,
    title: "Fiscalização de Obra",
    desc: "Acompanhamento técnico independente para garantir que cada fase respeita normas, prazos, custos e qualidade.",
    benefits: ["Relatórios técnicos", "Controlo de qualidade", "Gestão de riscos"],
  },
  {
    icon: Truck,
    title: "Transportes",
    desc: "Logística de transporte de materiais, equipamento e pessoal para obras em todo o território angolano.",
    benefits: ["Frota disponível", "Cobertura nacional", "Resposta rápida"],
  },
  {
    icon: Zap,
    title: "Redes Elétricas",
    desc: "Implementação e manutenção de instalações elétricas residenciais, comerciais e industriais.",
    benefits: ["Instalações seguras", "Normas vigentes", "Manutenção preventiva"],
  },
  {
    icon: Wind,
    title: "AVAC e Ar Condicionado",
    desc: "Aquecimento, ventilação e ar condicionado para conforto térmico e qualidade do ar interior.",
    benefits: ["Eficiência energética", "Projeto e instalação", "Assistência técnica"],
  },
  {
    icon: Droplets,
    title: "Saneamento Básico",
    desc: "Soluções integradas de saneamento, drenagem e infraestrutura sanitária para comunidades e empreendimentos.",
    benefits: ["Soluções sustentáveis", "Conformidade ambiental", "Engenharia adaptada"],
  },
  {
    icon: ShoppingBag,
    title: "Comércio Geral",
    desc: "Fornecimento de bens e serviços para o setor público e privado, com agilidade e fiabilidade.",
    benefits: ["Catálogo amplo", "Logística integrada", "Preços competitivos"],
  },
  {
    icon: Wrench,
    title: "Fornecimento de Bens e Serviços",
    desc: "Aprovisionamento técnico e operacional para órgãos estatais, instituições e empresas privadas.",
    benefits: ["Concursos públicos", "Documentação completa", "Parceria de longo prazo"],
  },
];

function ServicosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="O que fazemos"
        title="Soluções completas para o desenvolvimento de Angola."
        subtitle="Acompanhamos cada projeto do planeamento à entrega, garantindo rigor técnico e excelência em cada detalhe."
      />

      <section className="container-pro py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative bg-white rounded-[40px] p-10 border border-border hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="h-16 w-16 shrink-0 rounded-2xl bg-ink text-primary flex items-center justify-center shadow-xl group-hover:bg-primary group-hover:text-ink transition-all">
                  <s.icon size={32} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black text-ink leading-tight mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-ink/50 leading-relaxed text-sm mb-6">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.benefits.map((b) => (
                      <span key={b} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full bg-primary/10 text-primary">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-1 bg-white rounded-full shadow-2xl border border-border">
            <Link
              to="/contactos"
              className="inline-flex items-center gap-3 rounded-full bg-ink text-white px-12 py-5 text-sm font-black uppercase tracking-widest hover:bg-primary hover:text-ink transition-all shadow-xl"
            >
              Pedir Orçamento Agora <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
