import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, MapPin, Mail, Phone, ShieldCheck, Truck, HardHat, Zap, Wifi } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import biblio from "@/assets/proj-biblioteca-1.jpg";
import escola from "@/assets/proj-escola-1.jpg";
import zap from "@/assets/proj-zap-1.jpg";
import heroBg from "@/assets/hero-construction.jpg";
import aboutImg from "@/assets/about-banner.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const SERVICES = [
  { id: "01", title: "Construção Civil", icon: <HardHat size={48} />, desc: "Execução de obras, remodelação e manutenção, fiscalização de projetos. Entregamos obras com qualidade e dentro do prazo." },
  { id: "02", title: "Transporte & Logística", icon: <Truck size={48} />, desc: "Transporte de materiais, serviços personalizados e apoio a obras. Segurança e eficiência em cada deslocação." },
  { id: "03", title: "Instalações Técnicas", icon: <Zap size={48} />, desc: "Eletricidade, canalização e sistemas AVAC. Soluções técnicas completas e seguras." },
  { id: "04", title: "Telecomunicações", icon: <Wifi size={48} />, desc: "Instalação de redes, manutenção de sistemas e suporte técnico. Conectividade moderna e estável." },
  { id: "05", title: "Higiene e Segurança", icon: <ShieldCheck size={48} />, desc: "Avaliação de riscos, equipamentos de proteção e consultoria. Segurança total para sua equipa." },
];

const PROJECTS = [
  { id: 1, title: "Biblioteca Municipal", cat: "Fiscalização", img: biblio },
  { id: 2, title: "Unidades Escolares", cat: "Infraestrutura", img: escola },
  { id: 3, title: "Espaços Comerciais", cat: "Reabilitação", img: zap },
];

const DIFERENCIAIS = [
  "Cumprimento rigoroso de prazos",
  "Equipa técnica qualificada",
  "Soluções completas (tudo em um só lugar)",
  "Atendimento personalizado",
  "Preços competitivos"
];

function HomePage() {
  const WHATSAPP_LINK = "https://wa.me/244923210427?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <SiteLayout>
      {/* 1. HERO SECTION (Profissional, Preto Base) */}
      <section className="relative w-full min-h-[850px] flex items-center justify-start overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Construção Industrial Kizwa Valongo" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-ink/70 mix-blend-multiply" />
        </div>
        
        <div className="container-pro relative z-10 pt-32 pb-48">
          <div className="max-w-4xl animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.05] tracking-tight mb-8">
              Soluções Inteligentes em Construção, Transporte e <span className="text-primary">Serviços Técnicos</span> em Angola
            </h1>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
              Executamos projetos com qualidade, segurança e eficiência — da fundação à entrega final.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary bg-primary text-white hover:bg-white hover:text-ink">
                <Phone size={18} /> Solicitar Orçamento
              </a>
              <a href="tel:+244923210427" className="btn-outline-light">
                Falar com um Consultor
              </a>
            </div>
          </div>
        </div>

        {/* Feature Cards Overlapping Hero Bottom */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 hidden lg:block">
          <div className="container-pro">
            <div className="grid grid-cols-3 gap-0 shadow-2xl">
              {[
                { title: "Rigor nos Prazos", desc: "Cumprimos rigorosamente os prazos estabelecidos.", icon: <ClockIcon /> },
                { title: "Equipa Qualificada", desc: "Profissionais certificados e experientes.", icon: <WorkerIcon /> },
                { title: "Soluções Completas", desc: "Tudo o que a sua obra necessita num só lugar.", icon: <ToolsIcon /> },
              ].map((feat, i) => (
                <div key={i} className={`p-12 relative overflow-hidden group transition-smooth cursor-pointer ${i === 1 ? 'bg-primary text-white' : 'bg-white text-ink border-t-4 border-primary'}`}>
                  <div className={`text-5xl mb-6 ${i === 1 ? 'text-white' : 'text-primary'}`}>
                    {feat.icon}
                  </div>
                  <h4 className={`text-2xl font-display font-black mb-3`}>{feat.title}</h4>
                  <p className={`${i === 1 ? 'text-white/80' : 'text-ink/60'}`}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOBRE A EMPRESA */}
      <section className="pt-32 lg:pt-56 pb-24 bg-white">
        <div className="container-pro">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4" />
              <img src={aboutImg} alt="Sobre a Kizwa Valongo" className="relative w-full h-[600px] object-cover shadow-elegant grayscale-[20%]" />
            </div>

            {/* Content Side */}
            <div>
              <span className="eyebrow mb-4">Sobre a Empresa</span>
              <h2 className="section-title text-ink mb-8">
                Transformamos Ideias em Projetos Sólidos e Duradouros
              </h2>
              <div className="text-ink/70 leading-relaxed mb-10 text-lg space-y-6">
                <p>
                  A <strong>Kizwa Valongo</strong> é uma empresa angolana especializada em construção civil, transporte, saneamento básico, telecomunicações e serviços técnicos.
                </p>
                <p>
                  Atuamos com foco em qualidade, segurança e cumprimento de prazos, oferecendo soluções completas para clientes particulares e empresariais. Nosso compromisso é transformar as necessidades dos clientes em obras de excelência.
                </p>
              </div>
              
              <div className="pt-8 border-t border-gray-100 flex items-start gap-6">
                 <div className="text-primary mt-2">
                    <CheckCircle size={32} />
                 </div>
                 <div>
                    <p className="font-display font-black text-2xl text-ink leading-tight">Construindo com confiança, entregando com excelência.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVIÇOS */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="container-pro">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="eyebrow mb-4">Nossos Serviços</span>
              <h2 className="section-title text-ink">Soluções Técnicas Completas</h2>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary">
              Solicitar Orçamento
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white p-12 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-card-soft">
                <div className="text-primary mb-8 transition-transform group-hover:scale-110 duration-500">{s.icon}</div>
                <h3 className="text-2xl font-display font-black text-ink mb-4">{s.title}</h3>
                <p className="text-ink/60 leading-relaxed mb-8">{s.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PORTFÓLIO */}
      <section className="py-24 bg-ink text-white">
        <div className="container-pro">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-primary mb-4">Portfólio</span>
            <h2 className="section-title">Alguns dos Nossos Trabalhos Realizados</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="group relative overflow-hidden h-[500px]">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 border-l-4 border-primary">
                  <span className="text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-2 block">{proj.cat}</span>
                  <h3 className="text-2xl font-display font-black text-white">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIFERENCIAIS */}
      <section className="py-24 bg-white">
        <div className="container-pro">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="eyebrow mb-4">Porquê Escolher-nos?</span>
              <h2 className="section-title text-ink mb-12">Tudo o que precisa num só lugar</h2>
              <div className="space-y-6">
                {DIFERENCIAIS.map((dif, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 bg-gray-50 border border-gray-100 group hover:border-primary transition-colors">
                    <div className="w-12 h-12 rounded-none bg-primary text-white flex items-center justify-center shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-xl font-display font-black text-ink">{dif}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] bg-ink overflow-hidden p-8 flex items-center justify-center text-center">
               <div className="absolute inset-0 opacity-20">
                 <img src={heroBg} alt="Fundo Kizwa Valongo" className="w-full h-full object-cover" />
               </div>
               <div className="relative z-10">
                 <div className="text-primary mb-6 flex justify-center">
                   <ShieldCheck size={80} />
                 </div>
                 <h3 className="text-4xl font-display font-black text-white mb-6">Segurança e Eficiência</h3>
                 <p className="text-white/70 text-lg">Garantimos os mais elevados padrões de qualidade em todas as fases da sua obra.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEPOIMENTOS */}
      <section className="py-24 bg-[#F8F8F8] text-center border-t border-gray-200">
        <div className="container-pro max-w-4xl mx-auto">
          <div className="text-primary mb-8 flex justify-center">
            <span className="text-8xl font-display font-black opacity-20 leading-none">"</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-ink mb-12 leading-tight">
            Excelente serviço e profissionalismo. Recomendo fortemente a Kizwa Valongo para qualquer obra de envergadura.
          </h2>
          <div className="flex items-center justify-center gap-4">
             <div className="w-16 h-16 bg-primary text-white flex items-center justify-center font-display font-black text-2xl">C</div>
             <div className="text-left">
               <p className="font-display font-black text-ink text-xl">Cliente Satisfeito</p>
               <p className="text-ink/50 text-sm font-bold uppercase tracking-widest">Empresarial</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACTO (Call To Action) */}
      <section className="py-32 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-ink/10" />
        <div className="container-pro relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8">
            Pronto para iniciar o seu projeto?
          </h2>
          <p className="text-white/90 text-xl mb-12">
            Fale connosco e descubra como podemos ajudar. Atendimento rápido e orçamentos detalhados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
             <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-5 border border-white/20">
                <Phone size={24} /> <span className="font-display font-black text-2xl">+244 923 210 427</span>
             </div>
             <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-5 border border-white/20">
                <Mail size={24} /> <span className="font-display font-black text-xl">valongofilho@gmail.com</span>
             </div>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary bg-ink text-white hover:bg-white hover:text-ink text-lg px-12 py-5">
             Solicitar Orçamento Agora
          </a>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(37,211,102,0.8)] hover:scale-110 transition-transform"
        aria-label="Contactar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
           <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"></path>
        </svg>
      </a>
    </SiteLayout>
  );
}

// Helper icons
function ClockIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
function WorkerIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}
function ToolsIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
}
