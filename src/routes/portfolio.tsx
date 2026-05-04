import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { MapPin } from "lucide-react";
import biblio1 from "@/assets/proj-biblioteca-1.jpg";
import biblio2 from "@/assets/proj-biblioteca-2.jpg";
import biblio3 from "@/assets/proj-biblioteca-3.jpg";
import escola1 from "@/assets/proj-escola-1.jpg";
import escola2 from "@/assets/proj-escola-2.jpg";
import resid1 from "@/assets/proj-residencia-1.jpg";
import resid2 from "@/assets/proj-residencia-2.jpg";
import resid3 from "@/assets/proj-residencia-3.jpg";
import zap1 from "@/assets/proj-zap-1.jpg";
import zap2 from "@/assets/proj-zap-2.jpg";
import exec1 from "@/assets/proj-execucao-1.jpg";
import exec2 from "@/assets/proj-execucao-2.jpg";
import render1 from "@/assets/proj-render-1.jpg";
import render2 from "@/assets/proj-render-2.jpg";
import { ProjectGallery } from "@/components/site/ProjectGallery";


export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio — Projetos Kizwa Valongo" },
      {
        name: "description",
        content:
          "Galeria de projetos da Kizwa Valongo: Biblioteca Municipal do Kuito, escolas, residências, Loja ZAP e mais.",
      },
      { property: "og:title", content: "Portfólio — Kizwa Valongo" },
      { property: "og:description", content: "Veja as obras e projetos realizados pela Kizwa Valongo." },
      { property: "og:image", content: biblio1 },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    title: "Biblioteca Municipal do Kuito",
    tag: "Fiscalização de Obra",
    description: "Acompanhamento técnico da construção da nova biblioteca municipal, garantindo qualidade construtiva e cumprimento das normas.",
    images: [biblio1, biblio2, biblio3],
  },
  {
    title: "Escola de 12 Salas — Município do Andulo",
    tag: "Fiscalização de Obra",
    description: "Fiscalização integral da construção de unidade escolar com 12 salas de aula, contribuindo para a educação na província.",
    images: [escola1, escola2],
  },
  {
    title: "Residência Unifamiliar",
    tag: "Construção & Fiscalização",
    description: "Execução completa e acompanhamento técnico de moradia unifamiliar contemporânea, com acabamentos premium.",
    images: [resid1, resid2, resid3],
  },
  {
    title: "Loja ZAP — Bié",
    tag: "Reabilitação",
    description: "Reabilitação das novas instalações da loja ZAP no Bié, em parceria com a Kwetus, com foco em rapidez e qualidade.",
    images: [zap1, zap2],
  },
  {
    title: "Execução de Projetos — Salão de Festas",
    tag: "Construção",
    description: "Construção de espaços de hospitalidade e lazer, incluindo salão de festas e zonas exteriores.",
    images: [exec1, exec2],
  },
  {
    title: "Projetos Residenciais — Renderização",
    tag: "Projeto & Conceito",
    description: "Conceção e renderização 3D de moradias contemporâneas, da ideia ao desenho final.",
    images: [render1, render2],
  },
];


function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfólio"
        title="Projetos que reflectem o nosso compromisso com a qualidade."
        subtitle="Uma seleção de obras e intervenções realizadas pela Kizwa Valongo em Angola."
      />

      <section className="container-pro pb-32">
        <div className="space-y-32">
          {projects.map((p, idx) => (
            <article 
              key={p.title} 
              className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className={`lg:col-span-5 space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">{p.tag}</p>
                  <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
                    {p.title}
                  </h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                <div className="pt-4 flex items-center gap-4 text-primary font-semibold text-sm group cursor-pointer">
                  <span className="w-8 h-px bg-primary/30 group-hover:w-12 transition-all duration-500"></span>
                  <span>Ver Detalhes do Projeto</span>
                </div>
              </div>

              <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <ProjectGallery images={p.images} title={p.title} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
