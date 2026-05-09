import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import logo from "@/assets/logo-kizwa.png";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/diferenciais", label: "Diferenciais" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 border-b border-white/5">
      <div className="container-pro h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Kizwa Valongo" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="block font-display font-black text-xl leading-none text-white tracking-tight">
              KIZWA <span className="text-primary">VALONGO</span>
            </span>
            <span className="block text-[9px] uppercase tracking-[0.25em] font-bold text-white/50 mt-1">
              Soluções que constroem o futuro
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[12px] font-bold uppercase tracking-[0.15em] text-white/80 hover:text-primary transition-colors relative py-2"
              activeProps={{ className: "text-primary [&]:after:content-[''] [&]:after:absolute [&]:after:-bottom-1 [&]:after:left-1/2 [&]:after:-translate-x-1/2 [&]:after:w-6 [&]:after:h-0.5 [&]:after:bg-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-primary hover:bg-primary hover:text-white text-primary px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all"
        >
          <MessageCircle size={14} /> WhatsApp
        </a>
      </div>
    </header>
  );
}
