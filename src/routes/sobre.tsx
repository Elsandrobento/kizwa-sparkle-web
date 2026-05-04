import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import about from "@/assets/about-banner.jpg";
import team1 from "@/assets/team-construction.jpg";
import team2 from "@/assets/team-signing.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Kizwa Valongo" },
      {
        name: "description",
        content:
          "Conheça a Kizwa Valongo: missão, visão, valores e a equipa por trás de cada obra entregue em Angola.",
      },
      { property: "og:title", content: "Sobre a Kizwa Valongo" },
      {
        property: "og:description",
        content: "Empresa angolana de construção civil e prestação de serviços, sediada no Kuito, Bié.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sobre Nós"
        title="Construímos com integridade e visão de longo prazo."
        subtitle="A Kizwa Valongo nasceu para servir Angola com soluções de engenharia confiáveis, criando infraestrutura que dura gerações."
      />

      <section className="container-pro py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">A nossa história</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-balance">
            Uma empresa angolana, enraizada no Bié, com visão nacional.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              O <strong className="text-foreground">Grupo Kizwa Valongo, Lda</strong> é uma empresa de direito angolano, com sede na província do Bié, município do Kuito, e domicílio fiscal NIF 5002196310, registada no Cartório Notarial da Comarca do Bié.
            </p>
            <p>
              Atuamos no ramo da construção civil, manutenção completa de infraestrutura e transportes, oferecendo uma gama diversificada de serviços a órgãos estatais, instituições e agentes privados em todo o território nacional.
            </p>
            <p>
              O nosso compromisso é entregar valor real através de qualidade técnica, prazos cumpridos e relações duradouras com os nossos clientes e parceiros.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={about}
            alt="Infraestrutura"
            className="rounded-2xl shadow-elegant w-full h-auto"
            loading="lazy"
            width={1600}
            height={900}
          />
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card-soft border border-border p-5 max-w-[230px] hidden md:block">
            <p className="font-display text-3xl font-bold text-primary">NIF</p>
            <p className="text-sm text-muted-foreground mt-1">5002196310 — Cartório Notarial do Bié</p>
          </div>
        </div>
      </section>

      {/* MVV */}
      <section className="bg-secondary py-20">
        <div className="container-pro grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Missão", text: "Entregar soluções de engenharia e serviços de excelência, contribuindo para o desenvolvimento sustentável de Angola." },
            { icon: Eye, title: "Visão", text: "Ser referência nacional em construção civil, fiscalização e infraestrutura, reconhecida pela qualidade e integridade." },
            { icon: Heart, title: "Valores", text: "Rigor, transparência, segurança, compromisso com o cliente e respeito pelo ambiente e pelas comunidades." },
          ].map((v) => (
            <article key={v.title} className="bg-card rounded-2xl p-8 border border-border hover:shadow-elegant transition-smooth">
              <div className="h-14 w-14 rounded-2xl bg-primary-gradient text-primary-foreground flex items-center justify-center shadow-card-soft">
                <v.icon size={24} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{v.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="container-pro py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={team1} alt="Equipa em obra" className="rounded-2xl object-cover w-full h-72 shadow-card-soft" loading="lazy" />
            <img src={team2} alt="Assinatura de contrato" className="rounded-2xl object-cover w-full h-72 shadow-card-soft mt-8" loading="lazy" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">A nossa equipa</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-balance">
              Profissionais experientes, comprometidos com a excelência.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A nossa equipa reúne engenheiros, técnicos especializados e operacionais com vasta experiência em obras públicas e privadas. Cada projeto é conduzido com criatividade, colaboração próxima com o cliente, foco na qualidade e atenção meticulosa aos detalhes.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Criatividade — em todas as etapas, da conceção à execução",
                "Colaboração — alinhamento total com a visão do cliente",
                "Qualidade — superamos expectativas em cada entrega",
                "Detalhe — cada projeto é uma história bem contada",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 text-primary shrink-0" size={20} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
