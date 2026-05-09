import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contactos")({
  component: ContactosPage,
});

function ContactosPage() {
  return (
    <SiteLayout>
      <section className="py-48 text-center">
        <h1 className="text-4xl font-display font-black uppercase tracking-widest">Contactos</h1>
        <p className="mt-4 text-gray-500">Página em construção.</p>
      </section>
    </SiteLayout>
  );
}
