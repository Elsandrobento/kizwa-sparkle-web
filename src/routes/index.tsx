import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, ChevronRight, Facebook, Instagram, Phone, Play, Plus, Twitter } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Progress } from "@/components/ui/progress";
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

const SKILLS = [
  { label: "Architecture Design", value: 95 },
  { label: "Construction", value: 85 },
  { label: "Interior Design", value: 90 },
];

const PROJECTS = [
  { id: 1, title: "Modern Building", cat: "Construction", img: "/images/valongo_3.jpg" },
  { id: 2, title: "Luxury Villa", cat: "Residential", img: "/images/valongo_4.jpg" },
  { id: 3, title: "Office Complex", cat: "Commercial", img: "/images/valongo_5.jpg" },
  { id: 4, title: "Public Library", cat: "Architecture", img: "/images/valongo_1.jpg" },
];

const TEAM = [
  { name: "John Doe", role: "Chief Architect", img: "/images/valongo_2.jpg" },
  { name: "Jane Smith", role: "Project Manager", img: "/images/valongo_3.jpg" },
  { name: "Mike Johnson", role: "Lead Engineer", img: "/images/valongo_4.jpg" },
];

function HomePage() {
  const [activeProject, setActiveProject] = useState(1);

  return (
    <SiteLayout>
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[600px] lg:h-[800px] flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side (Dark Green Pattern) */}
        <div className="lg:w-1/2 h-full bg-primary relative flex items-center p-8 lg:p-20 z-10">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
          <div className="relative z-10 max-w-xl">
            <span className="text-white/80 uppercase tracking-[0.3em] font-bold text-sm mb-4 block">We Are Valongo Company</span>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[1.1] mb-8">
              CREATE THE BUILDING YOU WANT HERE
            </h1>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/portfolio" className="bg-ink text-white font-bold uppercase text-xs tracking-[0.2em] px-8 py-4 flex items-center gap-2 hover:bg-white hover:text-ink transition-all">
                Explore Projects <ArrowRight size={16} />
              </Link>
              <button className="flex items-center gap-3 text-white font-bold uppercase text-xs tracking-widest hover:text-ink transition-colors">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <Play size={16} className="ml-1" />
                </div>
                Watch Video
              </button>
            </div>
          </div>
        </div>
        {/* Right Side (Image Slider) */}
        <div className="lg:w-1/2 h-full relative hidden lg:block">
          <img src="/images/valongo_1.jpg" alt="Construction" className="absolute inset-0 w-full h-full object-cover" />
          {/* Decorative Box */}
          <div className="absolute bottom-0 left-0 bg-ink p-10 text-white w-72 transform -translate-x-1/2">
            <div className="text-5xl font-black font-display text-primary mb-2">15+</div>
            <div className="text-sm font-bold uppercase tracking-widest">Years of Experience</div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <img src="/images/valongo_2.jpg" alt="About" className="w-4/5 h-auto rounded-none shadow-xl relative z-10" />
            <img src="/images/valongo_3.jpg" alt="About 2" className="w-3/5 h-auto rounded-none shadow-2xl absolute -bottom-10 -right-0 border-8 border-white z-20" />
          </div>
          {/* Text */}
          <div className="lg:pl-10">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-primary"></span> About Our Company
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-ink leading-tight mb-6">
              We Are Building Everything That You Need
            </h2>
            <p className="text-ink/70 leading-relaxed mb-8">
              Kizwa Valongo delivers high-quality construction and engineering services. Our multidisciplinary team is focused on delivering excellence and exceeding client expectations on every project.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-ink text-lg">Highly Professional Staff</h4>
                  <p className="text-ink/60 text-sm">Our team consists of certified engineers and experienced workers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-primary mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-ink text-lg">100% Satisfaction Guarantee</h4>
                  <p className="text-ink/60 text-sm">We ensure top quality materials and strict adherence to deadlines.</p>
                </div>
              </div>
            </div>
            <Link to="/sobre" className="bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest px-8 py-4 inline-flex items-center gap-2 hover:bg-ink hover:text-white transition-all">
              Discover More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-primary"></span> What We Offer <span className="w-12 h-[2px] bg-primary"></span>
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-ink leading-tight">
              We Provide Best Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="group bg-white p-10 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="text-6xl mb-6 grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
                <h3 className="text-xl font-bold font-display text-ink mb-4 relative z-10 group-hover:text-white transition-colors duration-500">{s.title}</h3>
                <p className="text-ink/60 relative z-10 group-hover:text-white/80 transition-colors duration-500">{s.desc}</p>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                
                {/* Plus Icon Link */}
                <Link to="/servicos" className="absolute bottom-6 right-6 w-12 h-12 bg-gray-100 group-hover:bg-white flex items-center justify-center rounded-full z-10 hover:scale-110 transition-transform">
                  <Plus size={20} className="text-ink" />
                </Link>
                
                {/* Background Number */}
                <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 group-hover:text-white/10 transition-colors z-0">
                  {s.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section className="py-24 bg-white">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-primary"></span> Our Skills
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-ink leading-tight mb-6">
              We Are the Best Construction Company
            </h2>
            <p className="text-ink/70 leading-relaxed mb-8">
              We bring technical excellence and vast experience to every project, ensuring robust and aesthetically pleasing results.
            </p>
            <div className="space-y-8">
              {SKILLS.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between font-bold text-ink mb-2">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2 bg-gray-200" indicatorColor="bg-primary" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="/images/valongo_4.jpg" alt="Skills" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="lg:w-1/2 bg-ink p-12 lg:p-24 flex flex-col justify-center">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-primary"></span> What Client's Say
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-white leading-tight mb-12">
            Trusted By Our Clients
          </h2>
          <div className="relative">
            <div className="text-primary text-6xl font-serif absolute -top-8 -left-4 opacity-50">"</div>
            <p className="text-xl text-white/90 italic relative z-10 leading-relaxed mb-8">
              Kizwa Valongo exceeded our expectations. Their attention to detail and commitment to quality is unmatched. The project was completed on time and within budget.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center font-bold text-ink">
                AC
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Antonio Cassoma</h4>
                <span className="text-primary text-sm">CEO, Valongo Corp</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img src="/images/valongo_5.jpg" alt="Testimonial Background" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* 6. PROJECTS SECTION (Horizontal Accordion) */}
      <section className="py-24 bg-white">
        <div className="container-pro">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4 mb-4">
                <span className="w-12 h-[2px] bg-primary"></span> Our Latest Projects
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-black text-ink leading-tight">
                Explore Our Recent Work
              </h2>
            </div>
            <Link to="/portfolio" className="bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest px-8 py-4 inline-flex items-center gap-2 hover:bg-ink hover:text-white transition-all">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>

          {/* Custom Horizontal Accordion implementation */}
          <div className="flex flex-col lg:flex-row h-[600px] gap-2">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeProject === proj.id ? "lg:flex-[3] flex-1" : "lg:flex-1 h-24 lg:h-auto"}`}
                onClick={() => setActiveProject(proj.id)}
              >
                <img src={proj.img} alt={proj.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeProject === proj.id ? "bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" : "bg-ink/60 hover:bg-ink/40"}`} />
                
                {activeProject === proj.id ? (
                  <div className="absolute bottom-0 left-0 p-8 w-full animate-fade-in delay-200">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">{proj.cat}</span>
                    <h3 className="text-white text-3xl font-display font-black mb-4">{proj.title}</h3>
                    <Link to="/portfolio" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-ink hover:bg-white transition-colors">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex lg:flex-col items-center justify-center lg:justify-end p-6">
                    <h3 className="text-white text-xl font-bold lg:-rotate-90 whitespace-nowrap lg:origin-left lg:mb-20 lg:translate-x-4">{proj.title}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXPERT TEAM */}
      <section className="py-24 bg-gray-50">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-primary"></span> Our Expert Team <span className="w-12 h-[2px] bg-primary"></span>
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-ink leading-tight">
              Meet Our Professionals
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="relative h-96 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {/* Social links overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 flex justify-center gap-4 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 z-10">
                    <a href="#" className="text-ink hover:text-primary"><Facebook size={18} /></a>
                    <a href="#" className="text-ink hover:text-primary"><Twitter size={18} /></a>
                    <a href="#" className="text-ink hover:text-primary"><Instagram size={18} /></a>
                  </div>
                </div>
                <div className="p-6 text-center border-t border-gray-100 relative z-20 bg-white">
                  <h3 className="font-display font-bold text-2xl text-ink mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="/images/valongo_1.jpg" alt="FAQ" className="w-full h-[600px] object-cover rounded-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-pulse">
              <Play size={32} className="text-white ml-2" />
            </div>
          </div>
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-primary"></span> General FAQ
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-ink leading-tight mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "How much does a construction project cost?", a: "Costs vary depending on scope, materials, and timeline. We provide detailed estimates after initial consultation." },
                { q: "Do you handle building permits?", a: "Yes, our team handles all necessary paperwork and permits required by local authorities." },
                { q: "How long will the project take?", a: "We establish a strict timeline during the planning phase and are committed to meeting our deadlines." },
                { q: "What safety measures are in place?", a: "We adhere strictly to international safety standards, with dedicated safety officers on every site." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-gray-200 bg-white px-6 py-2 shadow-sm data-[state=open]:border-primary transition-colors">
                  <AccordionTrigger className="text-left font-bold text-ink hover:text-primary hover:no-underline py-4 text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink/70 leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 9. CONTACT BANNER (Orange/Primary Glow) */}
      <section className="bg-orange-500 py-16 relative overflow-hidden">
        {/* We use an inline style or a tailwind class for the specific orange color, let's use a warm color */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="container-pro relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl lg:text-5xl font-display font-black text-white mb-2">
              Looking For The Best Construction Company?
            </h2>
            <p className="text-white/80 text-lg">Contact us today to get a free quote for your next project.</p>
          </div>
          <Link to="/contactos" className="bg-ink text-white font-bold uppercase text-xs tracking-widest px-8 py-5 flex items-center gap-2 hover:bg-white hover:text-ink transition-all shrink-0">
            Talk To Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 10. BLOG SECTION */}
      <section className="py-24 bg-white">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-primary"></span> Latest News <span className="w-12 h-[2px] bg-primary"></span>
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-ink leading-tight">
              Read Our Latest Blog
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group border border-gray-100 hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img src={`/images/valongo_${i+1}.jpg`} alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground font-bold text-center p-2 min-w-[60px]">
                    <div className="text-2xl">24</div>
                    <div className="text-xs uppercase tracking-widest">May</div>
                  </div>
                </div>
                <div className="p-8 bg-white relative">
                  <div className="flex items-center gap-4 text-xs text-ink/50 font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><span className="text-primary">👤</span> By Admin</span>
                    <span className="flex items-center gap-1"><span className="text-primary">💬</span> 2 Comments</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-4 group-hover:text-primary transition-colors">
                    Best Practices for Sustainable Construction
                  </h3>
                  <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">
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
