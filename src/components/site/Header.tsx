import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-kizwa.png";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Projetos" },
  { to: "/sobre", label: "Empresa" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-pro h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Kizwa Valongo" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="block font-display font-black text-xl leading-none tracking-tighter">KIZWA <span className="text-primary">VALONGO</span></span>
            <span className="block text-[8px] uppercase tracking-widest font-bold text-gray-400 mt-1">Engenharia & Serviços</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contactos"
          className="bg-primary text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
        >
          Contactos
        </Link>
      </div>
    </header>
  );
}
