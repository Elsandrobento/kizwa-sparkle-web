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
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      {/* TIER 1: TOP BAR */}
      <div className="hidden lg:block bg-ink text-white/70 py-3 text-[13px] font-medium border-b border-white/5">
        <div className="container-pro flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-primary" />
              Opening Hours: Mon - Fri: 9.00 am - 6.00 pm
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={14} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={14} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* TIER 2: MIDDLE BAR (INFO) */}
      <div className="bg-white py-6 border-b border-gray-100 hidden lg:block">
        <div className="container-pro flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Kizwa Valongo" className="h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-display font-black text-3xl tracking-tight text-ink leading-none">
                KIZWA
              </span>
              <span className="font-display font-bold text-[11px] tracking-[0.25em] text-primary mt-1 leading-none uppercase">
                Valongo
              </span>
            </div>
          </Link>

          {/* Info Boxes */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Email Address</p>
                <p className="font-bold text-ink text-sm">{SITE.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary border border-gray-100">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Call Us Now</p>
                <p className="font-bold text-ink text-sm">{SITE.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary border border-gray-100">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Our Location</p>
                <p className="font-bold text-ink text-sm">Kuito, Bié - Angola</p>
              </div>
            </div>
            <Link 
              to="/contactos"
              className="btn-primary"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* TIER 3: NAVIGATION BAR (Sticky) */}
      <header
        className={[
          "z-50 transition-all duration-300 w-full bg-white lg:bg-white border-b border-gray-100 lg:border-none",
          scrolled ? "fixed top-0 shadow-xl py-3" : "relative py-0",
        ].join(" ")}
      >
        <div className="container-pro flex items-center justify-between">
          {/* Mobile Logo (Tier 3 on mobile) */}
          <Link to="/" className="flex lg:hidden items-center gap-3 py-4">
            <img src={logo} alt="Kizwa Valongo" className="h-8 w-8 object-contain" />
            <span className="font-display font-black text-xl text-ink">KIZWA</span>
          </Link>

          {/* Nav Container (Konstic style uses a colored or specific background for nav on desktop) */}
          <div className="hidden lg:flex flex-1 items-center bg-ink text-white px-8 h-16 relative overflow-hidden group">
            {/* Nav Links */}
            <nav className="flex items-center gap-10">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-[13px] font-black uppercase tracking-[0.1em] text-white hover:text-primary transition-colors relative h-16 flex items-center"
                  activeProps={{ className: "text-primary border-b-2 border-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions (Inside Nav Bar) */}
            <div className="ml-auto flex items-center gap-6">
              <button className="text-white hover:text-primary transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-ink"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden absolute inset-x-0 top-full bg-white border-t border-gray-100 shadow-2xl animate-fade-in">
            <div className="container-pro py-8 flex flex-col gap-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-black uppercase tracking-widest text-ink hover:text-primary py-2"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-gray-100 my-2" />
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail size={16} className="text-primary" /> {SITE.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone size={16} className="text-primary" /> {SITE.phone}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
