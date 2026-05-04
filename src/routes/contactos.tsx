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
    const text = `Olá Kizwa Valongo,\n\nNome: ${name}\nEmail: ${email}${phone ? `\nTelefone: ${phone}` : ""}\nAssunto: ${subject}\n\n${message}`;
    window.open(whatsappUrl(text), "_blank", "noopener");
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

      <section className="container-pro py-20 grid lg:grid-cols-3 gap-8">
        <aside className="lg:col-span-1 space-y-4">
          {[
            { icon: Phone, label: "Telefone", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
            { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
            { icon: MapPin, label: "Escritório", value: SITE.address },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href ?? "#"}
              className="block bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary-gradient text-primary-foreground flex items-center justify-center shadow-card-soft">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="mt-1 font-semibold text-foreground break-all">{c.value}</p>
                </div>
              </div>
            </a>
          ))}

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25D366] text-white px-6 py-4 font-semibold hover:opacity-90 transition-smooth"
          >
            <MessageCircle size={18} /> Falar no WhatsApp
          </a>
        </aside>

        <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-8 shadow-card-soft">
          <h2 className="font-display text-2xl font-bold">Envie-nos uma mensagem</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Preencha o formulário e a sua mensagem será encaminhada via WhatsApp para resposta imediata.
          </p>
          <form className="mt-6 grid sm:grid-cols-2 gap-4" onSubmit={onSubmit} noValidate>
            <Field label="Nome completo" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Telefone (opcional)" name="phone" type="tel" />
            <Field label="Assunto" name="subject" required />
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1.5">Mensagem</label>
              <textarea
                name="message"
                rows={5}
                required
                maxLength={1500}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-smooth"
              />
            </div>

            {status === "error" && error && (
              <div className="sm:col-span-2 flex items-center gap-2 text-sm text-destructive">
                <AlertCircle size={16} /> {error}
              </div>
            )}
            {status === "ok" && (
              <div className="sm:col-span-2 flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 size={16} /> Mensagem preparada — abrimos o WhatsApp para envio.
              </div>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary-gradient text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-elegant hover:scale-[1.02] transition-smooth"
              >
                Enviar mensagem <Send size={16} />
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
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-smooth"
      />
    </div>
  );
}
