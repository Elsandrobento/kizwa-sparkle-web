import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — Kizwa Valongo" },
      {
        name: "description",
        content:
          "Entre em contacto com a Kizwa Valongo. Telefone, email, morada em Kuito (Bié) e formulário direto para orçamentos.",
      },
      { property: "og:title", content: "Contactos — Kizwa Valongo" },
      { property: "og:description", content: "Solicite o seu orçamento ou fale connosco." },
    ],
  }),
  component: ContactosPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Assunto muito curto").max(150),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1500),
});

type Status = "idle" | "ok" | "error";

function ContactosPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Por favor, verifique os campos.");
      setStatus("error");
      return;
    }
    const { name, email, phone, subject, message } = parsed.data;
    const text = `Nome: ${name}\nEmail: ${email}${phone ? `\nTelefone: ${phone}` : ""}\n\nMensagem:\n${message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contactos"
        title="Vamos falar do seu projeto."
        subtitle="A nossa equipa responde rapidamente. Solicite um orçamento ou tire as suas dúvidas — sem compromisso."
      />

      <section className="container-pro py-24 grid lg:grid-cols-3 gap-12">
        <aside className="lg:col-span-1 space-y-6">
          {[
            { icon: Phone, label: "Telefone", value: SITE.phone, href: `tel:${SITE.phoneRaw}`, desc: "Fale connosco agora" },
            { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, desc: "Envie a sua proposta" },
            { icon: MapPin, label: "Escritório", value: SITE.address, desc: "Visite-nos em Kuito" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href ?? "#"}
              className="block bg-white rounded-3xl p-8 border border-border shadow-xl hover:border-primary hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl bg-ink text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-ink transition-all">
                  <c.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-primary mb-1">{c.label}</p>
                  <p className="font-black text-ink text-lg break-all leading-tight">{c.value}</p>
                  <p className="text-ink/40 text-xs mt-2 uppercase tracking-widest font-bold">{c.desc}</p>
                </div>
              </div>
            </a>
          ))}

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 w-full rounded-3xl bg-primary text-ink px-6 py-6 font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-white hover:border-2 hover:border-primary transition-all"
          >
            <MessageCircle size={20} /> WhatsApp Direto
          </a>
        </aside>

        <div className="lg:col-span-2 bg-white rounded-[40px] border border-border p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="font-display text-3xl font-black text-ink">Solicitar Orçamento</h2>
          <p className="mt-4 text-ink/50 leading-relaxed max-w-lg">
            Preencha o formulário abaixo com os detalhes do seu projeto. Entraremos em contacto consigo o mais brevemente possível.
          </p>
          <form className="mt-10 grid sm:grid-cols-2 gap-6" onSubmit={onSubmit} noValidate>
            <Field label="Nome completo" name="name" required />
            <Field label="Email institucional" name="email" type="email" required />
            <Field label="Telefone / WhatsApp" name="phone" type="tel" />
            <Field label="Área de Interesse" name="subject" required />
            <div className="sm:col-span-2">
              <label className="block text-[10px] uppercase font-black tracking-widest text-ink/40 mb-3">Detalhes do Projeto</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Descreva o que pretende realizar..."
                maxLength={1500}
                className="w-full rounded-2xl border-2 border-border bg-white px-6 py-4 text-sm font-medium text-ink focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
              />
            </div>

            {status === "error" && error && (
              <div className="sm:col-span-2 flex items-center gap-3 p-4 bg-destructive/5 text-destructive rounded-xl border border-destructive/20 text-sm font-bold">
                <AlertCircle size={18} /> {error}
              </div>
            )}
            {status === "ok" && (
              <div className="sm:col-span-2 flex items-center gap-3 p-4 bg-primary/5 text-primary rounded-xl border border-primary/20 text-sm font-bold">
                <CheckCircle2 size={18} /> O seu cliente de email foi aberto com a mensagem pronta.
              </div>
            )}

            <div className="sm:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-ink text-white px-10 py-5 text-sm font-black uppercase tracking-widest shadow-xl hover:bg-primary hover:text-ink transition-all hover:-translate-y-1"
              >
                Enviar Solicitação <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="container-pro pb-24">
        <div className="overflow-hidden rounded-2xl border border-border shadow-card-soft">
          <iframe
            title="Localização Kizwa Valongo — Kuito, Bié"
            src="https://www.google.com/maps?q=Kuito,+Bi%C3%A9,+Angola&output=embed"
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-[10px] uppercase font-black tracking-widest text-ink/40 mb-3">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-2xl border-2 border-border bg-white px-6 py-4 text-sm font-medium text-ink focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
      />
    </div>
  );
}
