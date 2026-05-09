import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo-kizwa.png";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] relative mt-32">
      {/* FLOATING CONTACT BOX */}
      <div className="container-pro relative z-20">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 w-[calc(100%-2.5rem)] lg:w-full bg-primary grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 shadow-2xl">
          <div className="p-8 lg:p-12 flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-500">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-white/70 text-[11px] font-black uppercase tracking-widest mb-1">Ligue-nos Agora</p>
              <a href={`tel:${SITE.phoneRaw}`} className="text-xl font-display font-black text-white hover:text-white/80 transition-colors">{SITE.phone}</a>
            </div>
          </div>
          <div className="p-8 lg:p-12 flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-500">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-white/70 text-[11px] font-black uppercase tracking-widest mb-1">Envie um Email</p>
              <a href={`mailto:${SITE.email}`} className="text-xl font-display font-black text-white hover:text-white/80 transition-colors break-all">{SITE.email}</a>
            </div>
          </div>
          <div className="p-8 lg:p-12 flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-500">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-white/70 text-[11px] font-black uppercase tracking-widest mb-1">Nossa Localização</p>
              <p className="text-xl font-display font-black text-white">{SITE.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-40 pb-16">
        <div className="container-pro">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
            {/* COLUMN 1: BRAND */}
            <div>
              <Link to="/" className="flex items-center gap-4 mb-8">
                <img src={logo} alt="Logo" className="h-12 w-12 brightness-0 invert" />
                <span className="font-display font-black text-2xl text-white tracking-tighter uppercase">
                  Kizwa <span className="text-primary">Valongo</span>
                </span>
              </Link>
              <p className="text-white/50 text-sm leading-loose mb-8">
                Líder em excelência na engenharia e construção em Angola. Construímos estruturas que resistem ao teste do tempo.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 2: SERVICES */}
            <div>
              <h4 className="text-white font-display font-black text-xl mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary inline-block"></span>
                Nossos Serviços
              </h4>
              <ul className="space-y-4">
                {["Commercial", "Residential", "Architecture", "Renovation"].map((s) => (
                  <li key={s}>
                    <Link to="/servicos" className="text-white/50 hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                      <span className="text-primary">+</span> Construção {s === "Commercial" ? "Comercial" : s === "Residential" ? "Residencial" : s === "Architecture" ? "Arquitetura" : "Remodelação"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: LINKS */}
            <div>
              <h4 className="text-white font-display font-black text-xl mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary inline-block"></span>
                Links Rápidos
              </h4>
              <ul className="space-y-4">
                {["About Us", "Our Projects", "Meet Team", "Contact"].map((l) => (
                  <li key={l}>
                    <Link to="/" className="text-white/50 hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                      <span className="text-primary">+</span> {l === "About Us" ? "Sobre Nós" : l === "Our Projects" ? "Nossos Projetos" : l === "Meet Team" ? "A Equipa" : "Contacto"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: NEWSLETTER */}
            <div>
              <h4 className="text-white font-display font-black text-xl mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary inline-block"></span>
                Newsletter
              </h4>
              <p className="text-white/50 text-sm leading-loose mb-6">
                Subscreva a nossa newsletter para as últimas notícias e atualizações de construção.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Endereço de Email" 
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white text-sm focus:border-primary outline-none transition-colors"
                  />
                  <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 hover:bg-white hover:text-primary transition-colors text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center">
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5 py-8">
        <div className="container-pro flex flex-col lg:flex-row justify-between items-center gap-4 text-white/30 text-[11px] font-black uppercase tracking-widest">
          <p>© {new Date().getFullYear()} KIZWA VALONGO. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
