import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { useI18n } from "@/lib/I18nContext";
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
  const { t } = useI18n();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("portfolio.eyebrow")}
        title={t("portfolio.title")}
        subtitle="Uma seleção de obras e intervenções realizadas pela Kizwa Valongo em Angola."
      />

      <section className="container-pro py-16">
        <div className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-card-soft">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl font-bold">{t("portfolio.mapTitle")}</h3>
            <p className="text-muted-foreground mt-2">{t("portfolio.mapDesc")}</p>
          </div>
          
          {/* Angola Map Visual Representation */}
          <div className="relative aspect-[16/9] bg-secondary/30 rounded-2xl border border-border flex items-center justify-center overflow-hidden group">
            {/* SVG Abstract Background Map */}
            <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full text-primary/10 drop-shadow-sm group-hover:text-primary/20 transition-smooth" fill="currentColor">
              <path d="M300 100 C 400 50, 500 100, 600 150 C 700 200, 750 300, 700 400 C 650 500, 550 550, 450 500 C 350 450, 200 500, 150 400 C 100 300, 150 200, 200 150 C 250 100, 280 120, 300 100 Z" />
            </svg>
            
            {/* Pin: Bié (Sede) */}
            <div className="absolute top-[45%] left-[55%] flex flex-col items-center group/pin">
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping" />
                <MapPin className="text-primary relative z-10 drop-shadow-md" size={32} />
              </div>
              <div className="mt-2 bg-background/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-elegant border border-border text-center transform opacity-0 -translate-y-2 group-hover/pin:opacity-100 group-hover/pin:translate-y-0 transition-smooth">
                <p className="font-bold text-sm">Bié</p>
                <p className="text-[10px] text-muted-foreground">Sede Operacional</p>
              </div>
            </div>

            {/* Pin: Luanda */}
            <div className="absolute top-[30%] left-[35%] flex flex-col items-center group/pin">
              <MapPin className="text-primary/70 relative z-10 drop-shadow-md hover:scale-110 transition-smooth" size={24} />
              <div className="mt-2 bg-background/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-elegant border border-border text-center transform opacity-0 -translate-y-2 group-hover/pin:opacity-100 group-hover/pin:translate-y-0 transition-smooth">
                <p className="font-bold text-sm">Luanda</p>
                <p className="text-[10px] text-muted-foreground">Projetos Executados</p>
              </div>
            </div>

            {/* Pin: Huambo */}
            <div className="absolute top-[50%] left-[48%] flex flex-col items-center group/pin">
              <MapPin className="text-primary/70 relative z-10 drop-shadow-md hover:scale-110 transition-smooth" size={24} />
              <div className="mt-2 bg-background/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-elegant border border-border text-center transform opacity-0 -translate-y-2 group-hover/pin:opacity-100 group-hover/pin:translate-y-0 transition-smooth">
                <p className="font-bold text-sm">Huambo</p>
                <p className="text-[10px] text-muted-foreground">Obras em Curso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-pro pb-20 space-y-24">
        {projects.map((p, idx) => (
          <article key={p.title} className="grid lg:grid-cols-12 gap-10 items-center">
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{p.tag}</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">{p.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
            <div className={`lg:col-span-7 grid grid-cols-2 gap-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              {p.images.map((img, i) => (
                <div
                  key={i}
                  className={[
                    "overflow-hidden rounded-2xl shadow-card-soft hover:shadow-elegant transition-smooth",
                    i === 0 && p.images.length > 1 ? "col-span-2 aspect-[16/10]" : "aspect-square",
                  ].join(" ")}
                >
                  <img
                    src={img}
                    alt={`${p.title} — imagem ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700"
                  />
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
