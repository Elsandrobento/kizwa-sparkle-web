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
        eyebrow="Serviços"
        title="Soluções completas em engenharia, infraestrutura e logística."
        subtitle="Acompanhamos cada projeto do planeamento à entrega, garantindo qualidade, segurança e cumprimento dos prazos."
      />

      <section className="container-pro py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary-gradient text-primary-foreground flex items-center justify-center shadow-card-soft">
                  <s.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 grid sm:grid-cols-3 gap-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground inline-block">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contactos"
            className="inline-flex items-center gap-2 rounded-full bg-primary-gradient text-primary-foreground px-8 py-4 text-sm font-semibold shadow-elegant hover:scale-[1.03] transition-smooth"
          >
            Solicitar Orçamento <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
