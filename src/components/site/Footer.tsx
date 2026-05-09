import { Link } from "@tanstack/react-router";
import { SITE, whatsappUrl } from "@/lib/site";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-kizwa.png";

export function Footer() {
  return (
    <footer className="bg-[var(--surface)] text-white pt-20 pb-8">
      <div className="container-pro grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Kizwa Valongo" className="h-12 w-auto" />
            <div>
              <span className="block font-display font-black text-xl leading-none">
                KIZWA <span className="text-primary">VALONGO</span>
              </span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Construindo com confiança,<br />entregando com excelência.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-primary mb-6">Contactos</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-3"><Phone size={14} className="text-primary" /> {SITE.phone}</li>
            <li className="flex items-center gap-3"><Mail size={14} className="text-primary" /> {SITE.email}</li>
            <li className="flex items-center gap-3"><MapPin size={14} className="text-primary" /> Angola</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-primary mb-6">Horário de Atendimento</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Segunda – Sexta: 08h - 18h</li>
            <li>Sábado: 08h - 13h</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-primary mb-4">Vamos tornar seu projeto uma realidade?</h4>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
            <MessageCircle size={14} /> Solicitar Orçamento
          </a>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"><Facebook size={14} /></a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"><Instagram size={14} /></a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition"><Linkedin size={14} /></a>
          </div>
        </div>
      </div>

      <div className="container-pro mt-16 pt-6 border-t border-white/10 text-center text-[11px] text-white/40 uppercase tracking-widest">
        © {new Date().getFullYear()} <Link to="/" className="hover:text-primary">Kizwa Valongo</Link>. Todos os direitos reservados.
      </div>
    </footer>
  );
}
