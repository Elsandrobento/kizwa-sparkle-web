import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo-kizwa.png";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground mt-24">
      <div className="container-pro py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 object-contain bg-white rounded-md p-1" width={48} height={48} />
            <div>
              <p className="font-display font-bold">KIZWA VALONGO</p>
              <p className="text-xs text-ink-foreground/60">Construção · Serviços</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-ink-foreground/70 leading-relaxed">
            Empresa angolana de construção civil, fiscalização de obras, transportes e prestação de serviços, com sede no Kuito, Bié.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/80">Navegação</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/", label: "Início" },
              { to: "/sobre", label: "Sobre nós" },
              { to: "/servicos", label: "Serviços" },
              { to: "/portfolio", label: "Portfólio" },
              { to: "/contactos", label: "Contactos" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ink-foreground/70 hover:text-primary-glow transition-smooth">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/80">Contactos</h4>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-primary-glow" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-primary-glow">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-primary-glow" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary-glow break-all">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-primary-glow" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/80">Redes</h4>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="rede social"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-ink-foreground/20 hover:border-primary-glow hover:text-primary-glow transition-smooth"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-foreground/50">NIF: {SITE.nif}</p>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-pro py-5 text-xs text-ink-foreground/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} {SITE.legal}. Todos os direitos reservados.</p>
          <p>Kuito, Bié — Angola</p>
        </div>
      </div>
    </footer>
  );
}
