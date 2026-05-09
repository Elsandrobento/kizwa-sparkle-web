import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Zap, Truck, HardHat } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-construction.jpg";
import biblio from "@/assets/proj-biblioteca-1.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO — Minimalist & Bold */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 animate-fade-in">
            <span className="inline-block text-xs font-black uppercase tracking-[0.5em] text-primary mb-6">
              Kizwa Valongo Angola
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.95] tracking-tighter text-ink mb-10">
              Engenharia <br /> 
              <span className="text-gray-200">com</span> Precisão.
            </h1>
            <p className="text-xl text-gray-500 max-w-lg mb-12 leading-relaxed">
              Construímos o futuro de Angola através de infraestruturas sólidas e soluções técnicas de alta performance.
            </p>
            <div className="flex gap-6">
              <Link to="/portfolio" className="bg-ink text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors flex items-center gap-3">
                Ver Projetos <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] lg:h-[800px] animate-fade-in delay-200">
            <div className="absolute inset-0 bg-primary/10 rounded-[60px] translate-x-8 translate-y-8" />
            <img 
              src={heroImg} 
              alt="Engenharia de Precisão" 
              className="relative w-full h-full object-cover rounded-[60px] grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* SERVICES — Clean Grid */}
      <section className="py-32 bg-gray-50">
        <div className="container-pro">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-ink mb-8">
              Áreas de Atuação
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Oferecemos um portfólio completo de serviços para infraestrutura e manutenção industrial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { icon: HardHat, title: "Construção", desc: "Obras civis e fiscalização técnica." },
              { icon: Truck, title: "Logística", desc: "Transporte e apoio operacional." },
              { icon: Zap, title: "Técnica", desc: "Redes elétricas e AVAC industrial." },
              { icon: ShieldCheck, title: "Segurança", desc: "Consultoria e higiene no trabalho." },
            ].map((s, i) => (
              <div key={i} className="bg-white p-12 border border-gray-100 hover:border-primary transition-colors group">
                <div className="text-primary mb-8 group-hover:scale-110 transition-transform">
                  <s.icon size={32} />
                </div>
                <h3 className="text-xl font-display font-black text-ink mb-4">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT — Simple Elegance */}
      <section className="py-32">
        <div className="container-pro">
          <div className="relative group overflow-hidden rounded-[60px]">
            <img src={biblio} alt="Projecto em Destaque" className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute bottom-16 left-16 right-16 flex flex-col md:flex-row md:items-end justify-between gap-8 text-white">
              <div className="max-w-xl">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Projeto em Destaque</span>
                <h3 className="text-4xl md:text-5xl font-display font-black tracking-tighter">Biblioteca Municipal do Kuito</h3>
                <p className="mt-4 text-white/60 text-lg">Acompanhamento e fiscalização de obra com rigor internacional.</p>
              </div>
              <Link to="/portfolio" className="bg-white text-ink px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                Detalhes da Obra
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT — Minimalist CTA */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="container-pro max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-10">
            Pronto para construir?
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Entre em contacto com a nossa equipa técnica para orçamentos e consultoria.
          </p>
          <a href="mailto:valongofilho@gmail.com" className="inline-block bg-white text-primary px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform">
            Enviar Mensagem
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
