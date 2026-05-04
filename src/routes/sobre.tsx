import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { useI18n } from "@/lib/I18nContext";
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
  const { t } = useI18n();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("sobre.eyebrow")}
        title={t("sobre.title")}
        subtitle={t("sobre.subtitle")}
      />

      <section className="container-pro py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{t("sobre.history.eyebrow")}</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-balance">
            {t("sobre.history.title")}
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {t("sobre.history.p1")}
            </p>
            <p>
              {t("sobre.history.p2")}
            </p>
            <p>
              {t("sobre.history.p3")}
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
            { icon: Target, title: t("sobre.mvv.mission"), text: t("sobre.mvv.missionText") },
            { icon: Eye, title: t("sobre.mvv.vision"), text: t("sobre.mvv.visionText") },
            { icon: Heart, title: t("sobre.mvv.values"), text: t("sobre.mvv.valuesText") },
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{t("sobre.team.eyebrow")}</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-balance">
              {t("sobre.team.title")}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {t("sobre.team.desc")}
            </p>
            <ul className="mt-6 space-y-3">
              {[
                t("sobre.team.t1"),
                t("sobre.team.t2"),
                t("sobre.team.t3"),
                t("sobre.team.t4"),
              ].map((tStr) => (
                <li key={tStr} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 text-primary shrink-0" size={20} />
                  <span>{tStr}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
