import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Facebook, Instagram, Phone, Play, Plus, Twitter } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const SERVICES = [
  { id: "01", title: "Commercial Construction", icon: "🏢", desc: "Build state of the art commercial buildings." },
  { id: "02", title: "Residential Construction", icon: "🏠", desc: "Crafting beautiful, robust homes for families." },
  { id: "03", title: "Architecture Design", icon: "✏️", desc: "Innovative and sustainable architectural designs." },
  { id: "04", title: "Building Renovation", icon: "🔨", desc: "Transform and upgrade existing structures." },
];

const PROJECTS = [
  { id: 1, title: "Modern Building", cat: "Construction", img: "/images/project_1.png" },
  { id: 2, title: "Luxury Villa", cat: "Residential", img: "/images/project_1.png" },
  { id: 3, title: "Office Complex", cat: "Commercial", img: "/images/project_1.png" },
  { id: 4, title: "Public Library", cat: "Architecture", img: "/images/project_1.png" },
];

const TEAM = [
  { name: "John Doe", role: "Chief Architect", img: "/images/about_img.png" },
  { name: "Jane Smith", role: "Project Manager", img: "/images/about_img.png" },
  { name: "Mike Johnson", role: "Lead Engineer", img: "/images/about_img.png" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* 1. HERO SECTION (KONSTIC SLIDER STYLE) */}
      <section className="relative w-full min-h-[800px] flex items-center justify-start overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_bg.png" alt="Hero Construction" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-ink/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        </div>
        
        <div className="container-pro relative z-10 pt-32 pb-48">
          <div className="max-w-3xl animate-fade-up">
            <span className="eyebrow text-primary mb-6 text-white">We Are Valongo Company</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.05] tracking-tight mb-8">
              CREATE THE BUILDING YOU <span className="text-primary">WANT HERE</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Kizwa Valongo delivers high-quality construction and engineering services. Our multidisciplinary team is focused on delivering excellence.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/contactos" className="btn-primary">
                Explore Projects <ArrowRight size={16} />
              </Link>
              <Link to="/sobre" className="btn-outline-light">
                Discover More
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Cards Overlapping Hero Bottom (Konstic Style) */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 hidden lg:block">
          <div className="container-pro">
            <div className="grid grid-cols-3 gap-6">
              {[
                { title: "Professional Staff", icon: "👨‍🔧", desc: "Certified engineers and experienced workers." },
                { title: "On Time Delivery", icon: "⏱️", desc: "Strict adherence to deadlines." },
                { title: "Top Equipment", icon: "🏗️", desc: "Using the best machinery available." },
              ].map((feat, i) => (
                <div key={i} className="bg-white p-10 shadow-card-soft group relative overflow-hidden transition-smooth cursor-pointer border-b-4 border-primary">
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                  <div className="relative z-10">
                    <div className="text-4xl mb-6 text-primary group-hover:text-white transition-colors">{feat.icon}</div>
                    <h4 className="text-xl font-display font-black text-ink mb-3 group-hover:text-white transition-colors">{feat.title}</h4>
                    <p className="text-ink/60 group-hover:text-white/80 transition-colors text-sm">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="pt-32 lg:pt-64 pb-24 bg-white">
        <div className="container-pro">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gray-100 transform -rotate-3 transition-smooth group-hover:rotate-0" />
              <img src="/images/about_img.png" alt="About Kizwa Valongo" className="relative w-full h-[600px] object-cover shadow-elegant" />
              <div className="absolute bottom-8 -right-8 bg-primary p-10 text-white shadow-2xl animate-float-slow hidden md:block">
                <div className="text-6xl font-display font-black mb-2">15<span className="text-ink">+</span></div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] max-w-[120px] leading-relaxed">Years Of Experience</div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <span className="eyebrow mb-4">About Our Company</span>
              <h2 className="section-title text-ink mb-8">
                We Are Building Everything That You Need
              </h2>
              <p className="text-ink/70 leading-relaxed mb-8 text-lg">
                O Grupo Kizwa Valongo, Lda é uma referência de excelência no setor da construção civil e prestação de serviços em Angola. Mobilizamos equipas qualificadas para intervir em projetos de infraestrutura, logística e manutenção.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="mt-1 text-primary"><CheckCircle size={24} /></div>
                  <div>
                    <h4 className="font-display font-bold text-ink text-lg mb-2">Highly Professional Staff</h4>
                    <p className="text-ink/60 text-sm leading-relaxed">Our team consists of certified engineers and workers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-primary"><CheckCircle size={24} /></div>
                  <div>
                    <h4 className="font-display font-bold text-ink text-lg mb-2">100% Satisfaction</h4>
                    <p className="text-ink/60 text-sm leading-relaxed">Top quality materials and strict adherence to deadlines.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                <Link to="/sobre" className="btn-primary">
                  Read More
                </Link>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-ink/50 mb-1">Call Us Anytime</p>
                    <p className="font-display font-bold text-ink">+244 923 000 000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (Konstic Grid Style) */}
      <section className="py-24 bg-gray-50">
        <div className="container-pro">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-4">What We Offer</span>
            <h2 className="section-title text-ink">We Provide Best Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white p-10 relative overflow-hidden group shadow-sm hover:shadow-card-soft transition-smooth">
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-5xl mb-8 grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
                  <h3 className="text-xl font-display font-black text-ink mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed mb-8 group-hover:text-white/80 transition-colors flex-1">{s.desc}</p>
                  <Link to="/servicos" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors mt-auto">
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="absolute top-6 right-6 text-6xl font-display font-black text-gray-50 group-hover:text-white/10 transition-colors z-0 pointer-events-none">
                  {s.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS / PORTFOLIO SECTION */}
      <section className="py-24 bg-white">
        <div className="container-pro">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="eyebrow mb-4">Our Latest Projects</span>
              <h2 className="section-title text-ink">Explore Our Recent Work</h2>
            </div>
            <Link to="/portfolio" className="btn-primary shrink-0">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="group relative overflow-hidden h-[400px]">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {/* Konstic Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">{proj.cat}</span>
                    <h3 className="text-2xl font-display font-black text-white mb-6">{proj.title}</h3>
                    <Link to="/portfolio" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-ink hover:text-white transition-colors">
                      <Plus size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA / VIDEO PARALLAX SECTION */}
      <section className="relative py-32 bg-ink overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero_bg.png" alt="Background" className="w-full h-full object-cover opacity-30 fixed" />
        </div>
        <div className="container-pro relative z-10 text-center max-w-4xl mx-auto">
          <button className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-10 hover:scale-110 transition-transform animate-float-slow">
            <Play size={32} className="ml-2" />
          </button>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-8">
            Looking For The Best Construction Company?
          </h2>
          <p className="text-white/70 text-lg mb-10">Contact us today to get a free quote for your next project.</p>
          <Link to="/contactos" className="btn-primary">
            Get A Free Quote
          </Link>
        </div>
      </section>

      {/* 6. STATS / COUNTERS */}
      <section className="py-20 bg-primary">
        <div className="container-pro">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 divide-x divide-white/20">
            {[
              { num: "500+", label: "Completed Projects" },
              { num: "15+", label: "Years Experience" },
              { num: "120+", label: "Expert Workers" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-5xl lg:text-6xl font-display font-black text-white mb-4">{stat.num}</div>
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXPERT TEAM */}
      <section className="py-24 bg-gray-50">
        <div className="container-pro">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-4">Our Expert Team</span>
            <h2 className="section-title text-ink">Meet Our Professionals</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <div key={i} className="group relative overflow-hidden bg-white shadow-sm hover:shadow-card-soft transition-smooth">
                <div className="h-[400px] overflow-hidden relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Social Links sliding up */}
                  <div className="absolute bottom-6 left-0 w-full flex justify-center gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a href="#" className="w-10 h-10 bg-white flex items-center justify-center text-ink hover:bg-primary hover:text-white transition-colors rounded-sm"><Facebook size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-white flex items-center justify-center text-ink hover:bg-primary hover:text-white transition-colors rounded-sm"><Twitter size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-white flex items-center justify-center text-ink hover:bg-primary hover:text-white transition-colors rounded-sm"><Instagram size={18} /></a>
                  </div>
                </div>
                <div className="p-8 text-center relative z-10 bg-white border-t border-gray-100">
                  <h3 className="text-2xl font-display font-black text-ink mb-2">{member.name}</h3>
                  <p className="text-primary text-[11px] font-black uppercase tracking-[0.2em]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="container-pro">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 transform rotate-3 transition-smooth" />
              <img src="/images/project_1.png" alt="FAQ" className="relative w-full h-[600px] object-cover shadow-elegant" />
            </div>
            <div>
              <span className="eyebrow mb-4">General FAQ</span>
              <h2 className="section-title text-ink mb-10">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "How much does a construction project cost?", a: "Costs vary depending on scope, materials, and timeline. We provide detailed estimates after initial consultation." },
                  { q: "Do you handle building permits?", a: "Yes, our team handles all necessary paperwork and permits required by local authorities." },
                  { q: "How long will the project take?", a: "We establish a strict timeline during the planning phase and are committed to meeting our deadlines." },
                  { q: "What safety measures are in place?", a: "We adhere strictly to international safety standards, with dedicated safety officers on every site." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border border-gray-200 bg-white px-6 shadow-sm data-[state=open]:border-primary transition-colors">
                    <AccordionTrigger className="text-left font-display font-bold text-ink hover:text-primary hover:no-underline py-5 text-lg">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-ink/60 leading-relaxed pb-6 text-base">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BLOG SECTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-pro">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-4">Latest News</span>
            <h2 className="section-title text-ink">Read Our Latest Blog</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white group shadow-sm hover:shadow-card-soft transition-smooth">
                <div className="relative h-[250px] overflow-hidden">
                  <img src={`/images/project_1.png`} alt="Blog" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-primary text-white text-center p-3">
                    <div className="text-3xl font-display font-black leading-none mb-1">24</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em]">May</div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-6 mb-6">
                    <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-ink/50">
                      <span className="w-2 h-2 rounded-full bg-primary" /> Admin
                    </span>
                    <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-ink/50">
                      <span className="w-2 h-2 rounded-full bg-primary" /> 2 Comments
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-black text-ink mb-6 group-hover:text-primary transition-colors leading-tight">
                    Best Practices for Sustainable Construction
                  </h3>
                  <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold uppercase text-[11px] tracking-[0.2em] hover:text-ink transition-colors">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
