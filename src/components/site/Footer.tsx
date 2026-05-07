import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo-kizwa.png";

export function Footer() {
  return (
    <footer className="bg-ink pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Background Map/Pattern if needed can go here */}
      <div className="container-pro grid gap-16 lg:grid-cols-4 relative z-10">
        
        {/* COLUMN 1: BRAND */}
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
                <span className="font-display font-black text-3xl tracking-tight text-white leading-none">
                  KIZWA
                </span>
                <span className="font-display font-bold text-[11px] tracking-[0.25em] text-primary mt-1 leading-none">
                  VALONGO
                </span>
              </div>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Soluções que constroem o futuro. Referência em engenharia, construção e logística em Angola.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-primary hover:text-ink transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 2: NAVIGATION */}
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Navigation</h4>
          <ul className="space-y-4">
            {[
              { to: "/", label: "Home" },
              { to: "/sobre", label: "About Us" },
              { to: "/servicos", label: "Services" },
              { to: "/portfolio", label: "Projects" },
              { to: "/contactos", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/60 hover:text-primary text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                  <span className="text-primary">•</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: CONTACTS */}
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Contact Info</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 group">
              <div className="text-primary mt-1">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-1">Call Us</p>
                <a href={`tel:${SITE.phoneRaw}`} className="text-white font-bold hover:text-primary transition-colors">{SITE.phone}</a>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="text-primary mt-1">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-1">Email Us</p>
                <a href={`mailto:${SITE.email}`} className="text-white font-bold hover:text-primary transition-colors break-all">{SITE.email}</a>
              </div>
            </li>
            <li className="flex items-start gap-4 group">
              <div className="text-primary mt-1">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mb-1">Our Location</p>
                <span className="text-white font-bold text-sm leading-relaxed block">{SITE.address}</span>
              </div>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: NEWSLETTER */}
        <div>
          <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Newsletter</h4>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Subscribe to our newsletter to get latest news and updates.
          </p>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 outline-none focus:border-primary transition-colors placeholder:text-white/30 text-sm"
              required
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-primary text-ink px-4 hover:bg-white transition-colors flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="container-pro mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
        <p>© {new Date().getFullYear()} Kizwa Valongo. All Rights Reserved.</p>
        <p>Developed with excellence</p>
      </div>
    </footer>
  );
}
