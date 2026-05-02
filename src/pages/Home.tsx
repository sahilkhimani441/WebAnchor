import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  MonitorSmartphone, Search, BotMessageSquare, Zap, Star, Shield, Clock, MapPin, CheckCircle2, ChevronDown,
  LayoutTemplate, Smartphone, Send, Layers, Store, Wrench, Server, Bot, PhoneCall, TrendingUp, Headset
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const { hash } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="pt-32 pb-20">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 relative pt-10 min-h-[85vh] flex flex-col justify-center">
          {/* Background elements for modern 3D-style and depth */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#F8F7F4] rounded-full blur-[100px]"></div>
              
              {/* Soft blurred background orbs */}
              <div className="absolute top-0 right-[5%] w-[40rem] h-[40rem] bg-[#8B4A46]/[0.03] rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-10%] left-[5%] w-[30rem] h-[30rem] bg-amber-900/[0.02] rounded-full blur-[100px]"></div>

              {/* 3D abstract sphere 1 */}
              <motion.div 
                 animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-[10%] md:top-[15%] right-[5%] md:right-[15%] w-20 h-20 md:w-32 md:h-32 rounded-full opacity-60 md:opacity-100"
                 style={{
                   background: "radial-gradient(circle at 30% 30%, #ffffff, #EAE8E1 60%, #D5D1C6)",
                   boxShadow: "10px 20px 30px rgba(0,0,0,0.05), inset -10px -10px 20px rgba(0,0,0,0.05), inset 10px 10px 20px rgba(255,255,255,0.8)"
                 }}
              />
              
              {/* 3D abstract sphere 2 */}
              <motion.div 
                 animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-[10%] md:bottom-[20%] left-[5%] md:left-[10%] w-16 h-16 md:w-24 md:h-24 rounded-full opacity-60 md:opacity-100 cursor-pointer"
                 style={{
                   background: "radial-gradient(circle at 30% 30%, #F5F3ED, #EAE8E1 60%, #C7C2B2)",
                   boxShadow: "5px 15px 25px rgba(0,0,0,0.05), inset -5px -5px 15px rgba(0,0,0,0.05), inset 5px 5px 15px rgba(255,255,255,0.9)"
                 }}
              />

              {/* Glassmorphism abstract floating card/sheet */}
              <motion.div 
                 animate={{ y: [0, -10, 0], rotateX: [20, 10, 20], rotateY: [-15, -5, -15] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-[40%] right-[-10%] md:right-[8%] w-32 h-40 md:w-48 md:h-56 rounded-2xl opacity-40 lg:opacity-100 backdrop-blur-md border border-white/50"
                 style={{
                   background: "linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.1))",
                   boxShadow: "0 15px 35px 0 rgba(139, 74, 70, 0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
                   transformStyle: "preserve-3d"
                 }}
              >
                  <div className="absolute inset-2 border border-white/30 rounded-xl bg-white/10 backdrop-blur-sm" style={{ transform: "translateZ(20px)" }} />
              </motion.div>
              
              {/* Subtle tech grid over everything to retain SaaS feel */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                 className="mb-8"
              >
                 <span className="px-4 py-1.5 bg-white shadow-sm border border-[#EAE8E1] text-[#8B4A46] rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Available for new projects
                 </span>
              </motion.div>

              <motion.h1 
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl md:text-7xl lg:text-[5rem] font-medium tracking-tight text-slate-900 leading-[1.05] max-w-4xl"
                  style={{ fontFamily: "serif" }}
              >
                 We Build Websites<br/><span className="text-[#8B4A46]">That Get You More Calls</span>
              </motion.h1>
              
              <motion.p 
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-light"
              >
                 For UK trades and local businesses — go live in 24 hours with a website built to bring you more jobs.
              </motion.p>
              
              <motion.div 
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-10 mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                  <a href="#contact" className="group relative inline-flex items-center justify-center bg-[#2B2927] hover:bg-black text-white text-base font-medium px-8 py-4 rounded-full transition-all overflow-hidden shadow-xl shadow-black/10 w-full sm:w-auto">
                      <span className="relative z-10 flex items-center gap-2">
                         Get your Free Website <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {/* Shimmer animation on CTA */}
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"></div>
                  </a>
                  <a href="#pricing" className="inline-flex items-center justify-center bg-white/60 hover:bg-white border border-[#EAE8E1] text-[#8B4A46] text-base font-medium px-8 py-4 rounded-full transition-all shadow-sm backdrop-blur-md w-full sm:w-auto">
                      Explore Packages
                  </a>
              </motion.div>
              
              <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-slate-500 font-medium pb-8"
              >
                  <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8B4A46]" />
                      <span>From £249</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-[#EAE8E1]"></div>
                  <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8B4A46]" />
                      <span>Ready in 24 hours</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-[#EAE8E1]"></div>
                  <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8B4A46]" />
                      <span>No payment until you're happy</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-[#EAE8E1]"></div>
                  <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8B4A46]" />
                      <span>No contracts, cancel anytime</span>
                  </div>
              </motion.div>

          </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#F8F7F4] relative z-10 border-t border-[#EAE8E1]/50">
         <div className="max-w-6xl mx-auto px-6">
            <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
               className="text-center mb-16 flex flex-col items-center"
            >
               <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                  className="px-3 py-1 bg-white border border-[#EAE8E1] text-[#8B4A46] rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 inline-block"
               >
                  Our Services
               </motion.span>
               <motion.h2 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 max-w-2xl" style={{ fontFamily: "serif" }}
               >
                  Everything you need to get more jobs online.
               </motion.h2>
               <motion.p 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-6 text-lg text-slate-600 max-w-xl font-light"
               >
                  We handle all the technical heavy lifting so you can focus on what you do best—your trade. No stress, just results.
               </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  {
                     icon: <MonitorSmartphone className="w-7 h-7" />,
                     title: "Custom Web Design",
                     desc: "Mobile-optimized, lightning-fast websites built to turn local visitors into paying customers. Stop losing out to competitors with better-looking sites."
                  },
                  {
                     icon: <Search className="w-7 h-7" />,
                     title: "Local SEO Setup",
                     desc: "We optimize your site for local keywords and set up your Google Business Profile so you rank higher when homeowners actively search for your trade."
                  },
                  {
                     icon: <Zap className="w-7 h-7" />,
                     title: "Lead Generation",
                     desc: "Integrated contact forms, prominent click-to-call buttons, and direct WhatsApp chats ensure you capture every single inquiry with zero friction."
                  },
                  {
                     icon: <BotMessageSquare className="w-7 h-7" />,
                     title: "Managed Support",
                     desc: "We securely host your site, run vital technical updates, and make text or image changes whenever required. You're never left in the dark to manage a site yourself."
                  }
               ].map((s, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.2 + i * 0.1, type: "spring", stiffness: 50 }}
                     className="bg-white p-8 rounded-[2rem] border border-[#EAE8E1] shadow-sm hover:shadow-md transition-shadow group flex flex-col items-start"
                  >
                     <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 + i * 0.1, type: "spring" }}
                        className="w-14 h-14 bg-[#8B4A46]/5 group-hover:bg-[#8B4A46]/10 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#8B4A46]/20 transition-all duration-300 text-[#8B4A46] rounded-2xl flex items-center justify-center mb-6 cursor-pointer"
                     >
                        {s.icon}
                     </motion.div>
                     <motion.h3 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                        className="text-xl font-medium text-slate-900 mb-3" style={{ fontFamily: "serif" }}
                     >
                        {s.title}
                     </motion.h3>
                     <motion.p 
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                        className="text-sm text-slate-600 leading-relaxed"
                     >
                        {s.desc}
                     </motion.p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white border-t border-[#EAE8E1]/50">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col items-center">
               <span className="px-3 py-1 bg-[#F8F7F4] border border-[#EAE8E1] text-[#8B4A46] rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 inline-block">Why Choose Us</span>
               <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 max-w-2xl" style={{ fontFamily: "serif" }}>
                  Built for trades. Built for results.
               </h2>
               <p className="mt-6 text-lg text-slate-600 max-w-xl font-light">
                  We understand the trades industry. Our approach is designed to give you peace of mind and tangible business growth without the technical headaches.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                  {
                     title: "Local Expertise",
                     desc: "We specialise in UK local businesses. We know exactly what your customers are searching for and how to make you stand out in your specific area.",
                     icon: <MapPin className="w-6 h-6" />
                  },
                  {
                     title: "Guaranteed Response Time",
                     desc: "Forget the disappearing 'web guy'. We offer priority support to ensure any text, image, or site updates are handled within 24 hours.",
                     icon: <Clock className="w-6 h-6" />
                  },
                  {
                     title: "Transparent & Predictable",
                     desc: "No hidden fees, no confusing jargon, and no surprise bills. You know exactly what you're paying for from day one.",
                     icon: <Shield className="w-6 h-6" />
                  }
               ].map((t, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }}
                     className="bg-[#F8F7F4] p-8 rounded-[2rem] border border-[#EAE8E1] text-center flex flex-col items-center hover:shadow-md transition-shadow group"
                  >
                     <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#8B4A46] shadow-sm border border-[#EAE8E1] mb-6 group-hover:scale-110 transition-transform">
                        {t.icon}
                     </div>
                     <h3 className="text-xl font-medium text-slate-900 mb-3" style={{ fontFamily: "serif" }}>{t.title}</h3>
                     <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* HOW IT WORKS + LEAD FORM */}
      <section id="how-it-works" className="py-24 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <motion.div 
               initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
               className="flex flex-col lg:flex-row gap-16 items-center"
            >
               <div className="lg:w-1/2">
                  <span className="px-3 py-1 bg-[#F8F7F4] border border-[#EAE8E1] text-[#8B4A46] rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 inline-block">Process</span>
                  <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6" style={{ fontFamily: "serif" }}>
                    Three steps to your new online presence.
                  </h2>
                  <p className="text-slate-600 mb-10 text-lg font-light">We’ve simplified our entire process so you don't have to lift a finger. Focus on your trade while we do the tech.</p>

                  <div className="space-y-8">
                     {[
                       { step: "01", title: "Share Your Details", desc: "Fill out the quick form. We only need your name, trade, and number to get started." },
                       { step: "02", title: "We Build It (Free Mockup)", desc: "We design a full landing page for you in 24 hours. You preview it before paying anything." },
                       { step: "03", title: "Go Live & Get Calls", desc: "Love it? We launch it, connect it to your Google Business Profile, and help you get leads." }
                     ].map((s, i) => (
                         <div key={i} className="flex gap-6 group">
                            <div className="flex flex-col items-center">
                               <div className="w-12 h-12 rounded-full border border-[#EAE8E1] bg-[#F8F7F4] flex items-center justify-center text-[#8B4A46] font-medium group-hover:bg-[#8B4A46] group-hover:text-white transition-colors">
                                  {s.step}
                               </div>
                               {i < 2 && <div className="w-[1px] h-12 bg-[#EAE8E1] mt-2 group-hover:bg-[#8B4A46]/30 transition-colors"></div>}
                            </div>
                            <div className="pt-2">
                               <h3 className="text-xl font-medium text-slate-900 mb-2">{s.title}</h3>
                               <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                            </div>
                         </div>
                     ))}
                  </div>
               </div>

               {/* INLINE FORM */}
               <div className="lg:w-1/2 w-full" id="contact">
                  <div className="bg-[#F8F7F4] p-10 rounded-[2.5rem] border border-[#EAE8E1] shadow-lg relative overflow-hidden">
                     {/* Decorative subtle gradient */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#8B4A46]/5 to-transparent rounded-full blur-3xl -mx-10 -my-10 pointer-events-none"></div>

                     <h3 className="text-2xl font-medium text-slate-900 mb-2 relative z-10" style={{ fontFamily: "serif" }}>Start Step 01</h3>
                     <p className="text-sm text-slate-600 mb-8 relative z-10">Get your free, no-obligation mockup in 24 hours.</p>
                     
                     <form className="space-y-4 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Form submitted demo"); }}>
                        <div>
                           <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 text-left ml-1">Name</label>
                           <input type="text" className="w-full bg-gradient-to-br from-white to-slate-50/80 border border-[#EAE8E1] px-5 py-3.5 rounded-2xl outline-none focus:border-[#8B4A46]/60 focus:bg-white focus:ring-4 focus:ring-[#8B4A46]/10 transition-all text-slate-800 placeholder-slate-400 font-medium" placeholder="John Smith" required />
                        </div>
                        <div>
                           <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 text-left ml-1">Business Name</label>
                           <input type="text" className="w-full bg-gradient-to-br from-white to-slate-50/80 border border-[#EAE8E1] px-5 py-3.5 rounded-2xl outline-none focus:border-[#8B4A46]/60 focus:bg-white focus:ring-4 focus:ring-[#8B4A46]/10 transition-all text-slate-800 placeholder-slate-400 font-medium" placeholder="E.g. Wright Plumbing Ltd" required />
                        </div>
                        <div>
                           <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 text-left ml-1">Trade / Service</label>
                           <input type="text" className="w-full bg-gradient-to-br from-white to-slate-50/80 border border-[#EAE8E1] px-5 py-3.5 rounded-2xl outline-none focus:border-[#8B4A46]/60 focus:bg-white focus:ring-4 focus:ring-[#8B4A46]/10 transition-all text-slate-800 placeholder-slate-400 font-medium" placeholder="E.g. Plumber, Electrician" required />
                        </div>
                        <div>
                           <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 text-left ml-1">Phone Number</label>
                           <input type="tel" className="w-full bg-gradient-to-br from-white to-slate-50/80 border border-[#EAE8E1] px-5 py-3.5 rounded-2xl outline-none focus:border-[#8B4A46]/60 focus:bg-white focus:ring-4 focus:ring-[#8B4A46]/10 transition-all text-slate-800 placeholder-slate-400 font-medium" placeholder="07123 456789" required />
                        </div>
                        <button type="submit" className="w-full bg-[#8B4A46] text-white px-6 py-4 rounded-2xl font-medium hover:bg-[#703B38] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8B4A46]/30 active:translate-y-0 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B4A46] border border-transparent">
                           Get My Free Website Mockup <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </button>
                        <p className="text-[10px] text-center text-slate-400 mt-4">We respect your privacy. No spam, no hard sell.</p>
                     </form>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-white border-t border-[#EAE8E1]">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 flex flex-col items-center">
               <span className="px-3 py-1 bg-[#F8F7F4] border border-[#EAE8E1] text-[#8B4A46] rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 inline-block">Pricing</span>
               <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 max-w-2xl" style={{ fontFamily: "serif" }}>
                  Simple, transparent packages.
               </h2>
               <p className="mt-6 text-lg text-slate-500 max-w-xl font-light">
                  No hidden fees. Just high-quality websites built to help your business grow.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               {/* Starter Package */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                  className="bg-[#F8F7F4] rounded-[2rem] p-8 border border-[#EAE8E1] flex flex-col relative"
               >
                  <div className="mb-8">
                     <h3 className="text-xl font-medium text-slate-900 mb-2">Starter</h3>
                     <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-4xl font-semibold tracking-tight text-slate-900">£249</span>
                     </div>
                     <p className="text-sm text-slate-500">Perfect for getting your business online quickly.</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                     {[
                        { name: 'Custom 1-page website', desc: 'Crafted specifically for your trade', icon: <LayoutTemplate className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'Mobile responsive design', desc: 'Ensures your site looks great on any device', icon: <Smartphone className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'Basic SEO setup', desc: 'Foundational settings to help Google index your site', icon: <Search className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'Contact form integration', desc: 'Capture customer inquiries easily', icon: <Send className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'Fast 48-hour delivery', desc: 'Get your online presence up and running quickly', icon: <Zap className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> }
                     ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                           {feature.icon}
                           <div>
                              <span className="text-sm font-medium text-slate-900 block mb-0.5">{feature.name}</span>
                              <span className="text-xs text-slate-500 leading-snug block">{feature.desc}</span>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <a href="#contact" className="w-full py-4 rounded-xl text-sm font-semibold border-2 border-[#8B4A46] text-[#8B4A46] hover:bg-[#8B4A46] hover:text-white transition-all text-center">
                     Get Starter
                  </a>
               </motion.div>

               {/* Growth Package */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-[#2B2927] rounded-[2rem] p-8 border border-black shadow-xl shadow-black/10 flex flex-col relative transform md:-translate-y-4"
               >
                  <div className="absolute top-0 right-8 transform -translate-y-1/2">
                     <span className="bg-[#8B4A46] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                  <div className="mb-8">
                     <h3 className="text-xl font-medium text-white mb-2">Growth</h3>
                     <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-semibold tracking-tight text-white">£399</span>
                        <span className="text-slate-400 text-sm">setup</span>
                     </div>
                     <div className="text-[#8B4A46] font-medium text-sm mb-4">+ £29/month</div>
                     <p className="text-sm text-slate-400">Everything you need to dominate local search.</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                     {[
                        { name: 'Up to 5 pages', desc: 'More room to showcase services, galleries, and about you', icon: <Layers className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'Google Business Profile setup', desc: 'Get listed on Google Maps to attract local customers', icon: <Store className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'Monthly updates & support', desc: 'We handle tweaks and updates whenever you need them', icon: <Wrench className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'Managed fast hosting', desc: 'We handle security and uptime so you don\'t have to', icon: <Server className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'Everything in Starter', desc: 'Includes all foundational features from the Starter package', icon: <CheckCircle2 className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> }
                     ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                           {feature.icon}
                           <div>
                              <span className="text-sm font-medium text-white block mb-0.5">{feature.name}</span>
                              <span className="text-xs text-slate-400 leading-snug block">{feature.desc}</span>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <a href="#contact" className="w-full py-4 rounded-xl text-sm font-semibold bg-[#8B4A46] text-white hover:bg-[#703B38] transition-all text-center">
                     Get Growth
                  </a>
               </motion.div>

               {/* Pro Package */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-[#F8F7F4] rounded-[2rem] p-8 border border-[#EAE8E1] flex flex-col relative"
               >
                  <div className="mb-8">
                     <h3 className="text-xl font-medium text-slate-900 mb-2">Pro</h3>
                     <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-semibold tracking-tight text-slate-900">£499</span>
                        <span className="text-slate-500 text-sm">setup</span>
                     </div>
                     <div className="text-[#8B4A46] font-medium text-sm mb-4">+ £49/month</div>
                     <p className="text-sm text-slate-500">For established businesses scaling up.</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                     {[
                        { name: 'Up to 10 pages', desc: 'Comprehensive site for established, growing businesses', icon: <Layers className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'AI Chatbot — captures leads 24/7', desc: 'Engage website visitors and instantly qualify inquiries while you work.', icon: <Bot className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'AI Call Answering — never miss a job', desc: 'Professionally handle calls, take messages, and book appointments anytime.', icon: <PhoneCall className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'Advanced SEO optimization', desc: 'Aggressive ranking strategies for competitive markets', icon: <TrendingUp className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> },
                        { name: 'Priority 24/7 support', desc: 'Jump the queue with dedicated assistance when you need it', icon: <Headset className="w-5 h-5 text-[#8B4A46] shrink-0 mt-0.5" /> }
                     ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                           {feature.icon}
                           <div>
                              <span className="text-sm font-medium text-slate-900 block mb-0.5">{feature.name}</span>
                              <span className="text-xs text-slate-500 leading-snug block">{feature.desc}</span>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <a href="#contact" className="w-full py-4 rounded-xl text-sm font-semibold border-2 border-[#8B4A46] text-[#8B4A46] hover:bg-[#8B4A46] hover:text-white transition-all text-center">
                     Get Pro
                  </a>
               </motion.div>
            </div>
         </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-[#F8F7F4]">
          <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16 flex flex-col items-center">
                  <span className="px-3 py-1 bg-white border border-[#EAE8E1] text-[#8B4A46] rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 inline-block">Testimonials</span>
                  <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 max-w-xl" style={{ fontFamily: "serif" }}>
                      Trusted by tradesmen everywhere.
                  </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                  {[
                      {
                          quote: "Got my roofing site up in a day. It looks incredibly professional and I've already had 3 calls this week directly from Google.",
                          name: "Mark Davies",
                          role: "Roofer, Portsmouth"
                      },
                      {
                          quote: "The free mockup blew me away. No other agency offers that. I paid the £249 happily and the monthly support is a lifesaver.",
                          name: "Sarah Jenkins",
                          role: "Electrician, Southsea"
                      },
                      {
                          quote: "Clean, fast, and simple. Exactly what a plumber needs. The team handled everything from the domain to the text.",
                          name: "Tom Wright",
                          role: "Plumbing Services"
                      }
                  ].map((t, i) => (
                      <motion.div 
                         key={i}
                         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }}
                         className="bg-white p-8 rounded-[2rem] border border-[#EAE8E1] shadow-sm hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                      >
                          <div className="flex gap-1 mb-6">
                              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#8B4A46] text-[#8B4A46]" />)}
                          </div>
                          <p className="text-slate-600 mb-8 italic">"{t.quote}"</p>
                          <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-[#F8F7F4] rounded-full flex items-center justify-center text-[#8B4A46] font-bold text-sm">
                                  {t.name[0]}
                              </div>
                              <div>
                                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                                  <p className="text-xs text-slate-500">{t.role}</p>
                              </div>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-white border-t border-[#EAE8E1]">
          <div className="max-w-3xl mx-auto px-6">
              <div className="text-center mb-16 flex flex-col items-center">
                  <span className="px-3 py-1 bg-[#F8F7F4] border border-[#EAE8E1] text-[#8B4A46] rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 inline-block">FAQ</span>
                  <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900" style={{ fontFamily: "serif" }}>
                      Frequently asked questions
                  </h2>
              </div>

              <div className="space-y-4">
                  {[
                      {
                          question: "Do I have to write the text for my website?",
                          answer: "No, we handle all the copywriting for you based on the initial details you provide. If you have specific text you'd like to use, we can incorporate that too."
                      },
                      {
                          question: "How long does it take to go live?",
                          answer: "Once you approve the free mockup and complete payment, your site will be fully live and indexed with Google within 24 to 48 hours."
                      },
                      {
                          question: "What if I need changes after the site is live?",
                          answer: "All our recurring plans include managed support. Just drop us an email or WhatsApp with your changes, and we'll apply them within 24 hours."
                      },
                      {
                          question: "Do you provide the domain name?",
                          answer: "Yes, we handle purchasing and configuring a custom domain name (like www.yourbusiness.co.uk) as part of the setup process."
                      },
                      {
                          question: "Are there any hidden or surprise fees?",
                          answer: "Absolutely not. Transparency is our core principle. The setup fee and low monthly package price is everything you'll pay."
                      }
                  ].map((faq, i) => (
                      <div 
                         key={i} 
                         className="border border-[#EAE8E1] rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                         <button
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-[#F8F7F4]/50 transition-colors"
                         >
                            <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                            <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-[#8B4A46]" : ""}`} />
                         </button>
                         <AnimatePresence>
                            {openFaq === i && (
                               <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                               >
                                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-[#EAE8E1]">
                                     {faq.answer}
                                  </div>
                               </motion.div>
                            )}
                         </AnimatePresence>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </main>
  );
}
