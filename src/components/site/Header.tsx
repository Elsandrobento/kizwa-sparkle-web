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
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-card-soft"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-pro flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Kizwa Valongo"
            className="h-12 w-12 object-contain"
            width={48}
            height={48}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-base text-ink">KIZWA VALONGO</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Construção · Serviços
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contactos"
            className="ml-3 inline-flex items-center justify-center rounded-full bg-primary-gradient text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-elegant hover:scale-[1.03] transition-smooth"
          >
            Solicitar Orçamento
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-pro py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-3 rounded-md text-base font-medium hover:bg-muted"
                activeProps={{ className: "text-primary bg-accent/40" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contactos"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary-gradient text-primary-foreground px-5 py-3 text-sm font-semibold"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
