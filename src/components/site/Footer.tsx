import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo-kizwa.png";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-20">
      <div className="container-pro">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Logo" className="h-10 mb-6 grayscale" />
            <h3 className="font-display font-black text-2xl mb-4">KIZWA <span className="text-primary">VALONGO</span></h3>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Excelência em engenharia, logística e prestação de serviços técnicos em Angola. Comprometidos com o desenvolvimento sustentável.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6">Contactos</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
              <li className="leading-relaxed">{SITE.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link to="/">Política de Privacidade</Link>
            <Link to="/">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
