import { Link } from "@tanstack/react-router";
import { SITE, whatsappUrl } from "@/lib/site";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-kizwa.png";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white pt-20 pb-8 border-t border-white/5">
      <div className="container-pro grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Kizwa Valongo" className="h-14 w-auto" />
            <div>
              <span className="block font-display font-black text-2xl leading-none">
                KIZWA <span className="text-primary">VALONGO</span>
              </span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Construindo com confiança,<br />entregando com excelência.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-primary mb-6">CONTACTOS</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-center gap-3"><Phone size={16} className="text-primary" /> {SITE.phone}</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-primary" /> {SITE.email}</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-primary" /> Angola</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-primary mb-6">HORÁRIO DE ATENDIMENTO</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-center gap-3"><span className="text-primary">✓</span> Segunda – Sexta: 08h - 18h</li>
            <li className="flex items-center gap-3"><span className="text-primary">✓</span> Sábado: 08h - 13h</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-black uppercase tracking-[0.1em] text-white mb-4">VAMOS TORNAR SEU PROJETO UMA REALIDADE?</h4>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
            <MessageCircle size={16} /> Solicitar Orçamento Agora
          </a>
          <div className="flex gap-4 mt-8 text-white/50">
            <a href="#" aria-label="Facebook" className="hover:text-primary transition"><Facebook size={16} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition"><Instagram size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary transition"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      <div className="container-pro mt-16 pt-6 border-t border-white/10 text-center md:text-left text-[11px] text-white/40 uppercase tracking-[0.1em]">
        © {new Date().getFullYear()} Kizwa Valongo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
