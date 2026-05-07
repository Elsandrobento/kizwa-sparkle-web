import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-kizwa.png";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5",
      ].join(" ")}
    >
      <div className="container-pro flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex flex-col leading-none group">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kizwa Valongo"
              className="h-10 w-10 object-contain"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
                KIZWA
              </span>
              <span className="font-display font-medium text-[10px] tracking-[0.2em] text-white/60 -mt-0.5">
                VALONGO
              </span>
            </div>
          </div>
        </Link>

        {/* NAVIGATION - CENTERED */}
        <nav className="hidden lg:flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-5 py-2 text-[13px] font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-all rounded-full hover:bg-white/5"
              activeProps={{ className: "text-white bg-white/10 shadow-sm" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* WHATSAPP BUTTON - RIGHT */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/244923210427"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-ink transition-all shadow-[0_0_20px_rgba(var(--primary),0.2)] hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-105"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-full text-white bg-white/10 hover:bg-white/20 transition-smooth"
          aria-label="Abrir menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-ink/95 backdrop-blur-2xl border-t border-white/10 animate-fade-in shadow-2xl">
          <div className="container-pro py-8 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-4 rounded-xl text-lg font-bold text-white/80 hover:text-white hover:bg-white/5 transition-all"
                activeProps={{ className: "text-primary bg-primary/10 border-l-4 border-primary pl-6" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/244923210427"
              className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-primary text-ink px-6 py-5 text-sm font-bold uppercase tracking-widest shadow-xl"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
