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
        eyebrow="Quem Somos"
        title="Construímos com integridade e visão estratégica."
        subtitle="A Kizwa Valongo nasceu para servir Angola com soluções de engenharia que combinam rigor técnico e compromisso social."
      />

      <section className="container-pro py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">Nossa Identidade</p>
            <h2 className="font-display text-4xl md:text-6xl font-black text-ink leading-tight">
              Uma empresa angolana, <br />
              focada no <span className="text-primary">futuro.</span>
            </h2>
            <div className="mt-8 space-y-6 text-ink/50 leading-relaxed text-lg">
              <p>
                O <strong className="text-ink">Grupo Kizwa Valongo, Lda</strong> é uma referência de excelência no setor da construção civil e prestação de serviços em Angola.
              </p>
              <p>
                Com sede estratégica no Kuito, província do Bié, mobilizamos equipas qualificadas para intervir em projetos de infraestrutura, logística e manutenção em todo o território nacional.
              </p>
              <p>
                Nossa filosofia assenta na transparência, no rigor técnico e na criação de parcerias sólidas que impulsionam o desenvolvimento económico das comunidades onde atuamos.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-6 bg-primary/5 rounded-[40px] rotate-2 group-hover:rotate-0 transition-all duration-700" />
            <img
              src={about}
              alt="Infraestrutura Kizwa Valongo"
              className="relative rounded-[40px] shadow-2xl w-full aspect-square object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-8 -left-8 bg-ink p-10 rounded-3xl shadow-2xl border border-white/5">
              <p className="font-display text-4xl font-black text-primary mb-1">10+</p>
              <p className="text-white/40 text-[10px] uppercase font-black tracking-widest">Anos de Rigor</p>
            </div>
          </div>
        </div>
      </section>

      {/* MVV SECTION */}
      <section className="bg-ink py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container-pro relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Target, title: "Missão", text: "Entregar soluções de excelência que superem as expectativas e contribuam para o progresso de Angola." },
              { icon: Eye, title: "Visão", text: "Ser a empresa de referência nacional em construção e fiscalização, reconhecida pela integridade e inovação." },
              { icon: Heart, title: "Valores", text: "Ética, segurança, compromisso ambiental e respeito absoluto pelos prazos e pela qualidade técnica." },
            ].map((v) => (
              <article key={v.title} className="bg-white/5 backdrop-blur-xl p-12 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all">
                <div className="h-16 w-16 rounded-2xl bg-primary text-ink flex items-center justify-center shadow-xl mb-8">
                  <v.icon size={30} />
                </div>
                <h3 className="font-display text-2xl font-black text-white mb-4 uppercase tracking-tight">{v.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM & COMMITMENT */}
      <section className="container-pro py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
            <img src={team1} alt="Equipa Kizwa" className="relative rounded-3xl object-cover w-full h-[400px] shadow-2xl" loading="lazy" />
            <img src={team2} alt="Liderança Kizwa" className="relative rounded-3xl object-cover w-full h-[400px] shadow-2xl mt-12" loading="lazy" />
          </div>
          <div>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">Capital Humano</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-ink leading-tight">
              Uma equipa de elite <br />
              para projetos de <span className="text-primary">grande escala.</span>
            </h2>
            <p className="mt-8 text-ink/50 leading-relaxed text-lg mb-10">
              Acreditamos que a engenharia é feita por pessoas. Por isso, investimos continuamente na formação e segurança dos nossos profissionais.
            </p>
            <ul className="grid gap-6">
              {[
                { title: "Rigor Técnico", desc: "Engenheiros com vasta experiência em obras complexas." },
                { title: "Segurança Total", desc: "Cumprimento estrito de todas as normas de higiene e segurança." },
                { title: "Foco no Cliente", desc: "Consultoria personalizada em cada fase do projeto." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 group">
                  <div className="mt-1 h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-all">
                    <CheckCircle2 size={12} className="text-primary group-hover:text-ink" />
                  </div>
                  <div>
                    <h4 className="font-black text-ink uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                    <p className="text-ink/40 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
