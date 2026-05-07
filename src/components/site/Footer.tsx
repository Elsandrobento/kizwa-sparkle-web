import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo-kizwa.png";

export function Footer() {
  return (
    <footer className="bg-ink pt-24 pb-12 border-t border-white/5">
      <div className="container-pro grid gap-16 lg:grid-cols-4">
        {/* BRAND */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex flex-col leading-none mb-8">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Kizwa Valongo"
                className="h-12 w-12 object-contain brightness-0 invert"
                width={48}
                height={48}
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight text-white">
                  KIZWA
                </span>
                <span className="font-display font-medium text-[11px] tracking-[0.25em] text-primary -mt-1">
                  VALONGO
                </span>
              </div>
            </div>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Soluções que constroem o futuro. Referência em engenharia, construção e logística em Angola.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:bg-primary hover:text-ink transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Navegação</h4>
          <ul className="space-y-4">
            {[
              { to: "/", label: "Início" },
              { to: "/sobre", label: "Sobre Nós" },
              { to: "/servicos", label: "Serviços" },
              { to: "/portfolio", label: "Portfólio" },
              { to: "/contactos", label: "Contactos" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/40 hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACTS */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contactos</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-ink transition-all">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-white/20 text-[10px] uppercase font-black tracking-widest mb-1">Telefone</p>
                <a href={`tel:${SITE.phoneRaw}`} className="text-white font-bold hover:text-primary transition-colors">{SITE.phone}</a>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-ink transition-all">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-white/20 text-[10px] uppercase font-black tracking-widest mb-1">Email</p>
                <a href={`mailto:${SITE.email}`} className="text-white font-bold hover:text-primary transition-colors break-all">{SITE.email}</a>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="p-3 rounded-lg bg-white/5 text-primary group-hover:bg-primary group-hover:text-ink transition-all">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-white/20 text-[10px] uppercase font-black tracking-widest mb-1">Localização</p>
                <span className="text-white font-bold">{SITE.address}</span>
              </div>
            </li>
          </ul>
        </div>

        {/* HOURS */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Horário</h4>
          <ul className="space-y-4">
            <li className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-white/40 text-sm">Segunda - Sexta:</span>
              <span className="text-white font-bold text-sm">08h - 18h</span>
            </li>
            <li className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-white/40 text-sm">Sábado:</span>
              <span className="text-white font-bold text-sm">08h - 13h</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-white/40 text-sm">Domingo:</span>
              <span className="text-primary font-black text-xs uppercase">Fechado</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-pro mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
        <p>© {new Date().getFullYear()} Kizwa Valongo. Todos os direitos reservados.</p>
        <p>Desenvolvido com excelência</p>
      </div>
    </footer>
  );
}
