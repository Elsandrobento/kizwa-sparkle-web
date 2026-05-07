import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Clock, MapPin, Mail, Facebook, Twitter, Instagram, ArrowRight, Search, Phone } from "lucide-react";
import logo from "@/assets/logo-kizwa.png";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "About Us" },
  { to: "/servicos", label: "Services" },
  { to: "/portfolio", label: "Projects" },
  { to: "/contactos", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden lg:block bg-ink text-white/80 py-2.5 text-xs font-medium border-b border-white/10">
        <div className="container-pro flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-primary" />
              <span>Seg - Sáb: 8:00 - 18:00</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              <span>Kuito, Bié - Angola</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <span>{SITE.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={14} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={14} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header
        className={[
          "sticky top-0 z-50 transition-all duration-300 w-full bg-white shadow-sm",
          scrolled ? "py-4 shadow-md" : "py-5",
        ].join(" ")}
      >
        <div className="container-pro flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Kizwa Valongo" className="h-10 w-10 object-contain" width={40} height={40} />
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tight text-ink group-hover:text-primary transition-colors leading-none">
                KIZWA
              </span>
              <span className="font-display font-bold text-[10px] tracking-[0.2em] text-ink/60 mt-0.5 leading-none">
                VALONGO
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[14px] font-bold text-ink hover:text-primary transition-colors uppercase tracking-wider relative group"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-ink hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Link
              to="/contactos"
              className="bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest px-8 py-4 flex items-center gap-2 hover:bg-ink hover:text-white transition-all duration-300"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-ink hover:text-primary transition-smooth"
            aria-label="Abrir menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden absolute inset-x-0 top-full bg-white border-t border-border shadow-xl animate-fade-in">
            <div className="container-pro py-6 flex flex-col gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-4 py-3 text-sm font-bold text-ink hover:text-primary hover:bg-gray-50 transition-all uppercase tracking-wider"
                  activeProps={{ className: "text-primary bg-gray-50 border-l-2 border-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border px-4">
                <Link
                  to="/contactos"
                  className="w-full bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest px-6 py-4 flex items-center justify-center gap-2"
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
