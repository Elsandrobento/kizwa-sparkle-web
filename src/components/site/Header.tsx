import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import logo from "@/assets/logo-kizwa.png";
import { useTheme } from "@/lib/ThemeContext";
import { useI18n } from "@/lib/I18nContext";
import { Language } from "@/lib/translations";

const NAV = [
  { to: "/", labelKey: "nav.home" },
  { to: "/sobre", labelKey: "nav.about" },
  { to: "/servicos", labelKey: "nav.services" },
  { to: "/portfolio", labelKey: "nav.portfolio" },
  { to: "/contactos", labelKey: "nav.contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useI18n();

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
              {t(item.labelKey)}
            </Link>
          ))}
          
          <div className="flex items-center gap-2 ml-4 mr-2 border-l border-border pl-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-foreground/80 hover:text-primary hover:bg-muted transition-smooth"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="relative group">
              <button className="flex items-center gap-1 p-2 rounded-full text-foreground/80 hover:text-primary hover:bg-muted transition-smooth">
                <Globe size={18} />
                <span className="text-xs font-semibold uppercase">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-card border border-border rounded-xl shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth flex flex-col p-1 z-50">
                {(["pt", "en", "fr"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={["px-3 py-2 text-sm text-left rounded-lg transition-smooth hover:bg-muted", language === lang ? "text-primary font-semibold" : "text-foreground/80"].join(" ")}
                  >
                    {lang === "pt" ? "PT" : lang === "en" ? "EN" : "FR"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contactos"
            className="ml-3 inline-flex items-center justify-center rounded-full bg-primary-gradient text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-elegant hover:scale-[1.03] transition-smooth"
          >
            {t("nav.quote")}
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
                {t(item.labelKey)}
              </Link>
            ))}
            <div className="flex items-center gap-4 px-3 py-3 border-y border-border my-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 text-sm font-medium"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />} Tema
              </button>
              <div className="w-px h-4 bg-border" />
              <div className="flex gap-2">
                {(["pt", "en", "fr"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={["px-2 py-1 text-sm rounded", language === lang ? "bg-primary text-primary-foreground font-semibold" : "bg-muted text-foreground"].join(" ")}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <Link
              to="/contactos"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary-gradient text-primary-foreground px-5 py-3 text-sm font-semibold"
            >
              {t("nav.quote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
