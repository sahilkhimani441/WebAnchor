import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, MessageCircle, Mail, MapPin, Anchor, ChevronUp
} from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';
import Chatbot from './Chatbot';

export default function Layout() {
  const phoneNumber = "+447825182199";
  const whatsappNumber = "447825182199";
  const email = "hello@webanchor.co.uk";

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] font-sans text-slate-800 overflow-x-hidden selection:bg-[#8B4A46]/20 selection:text-[#8B4A46] flex flex-col">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-[#F8F7F4]/80 backdrop-blur-xl border-b border-[#EAE8E1]"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4A46] to-[#6a3835] text-white flex items-center justify-center p-1.5 shadow-sm border border-[#8B4A46]/20">
                <Anchor className="w-full h-full" strokeWidth={2.5} />
             </div>
             <div className="font-medium text-2xl tracking-tight text-slate-900" style={{ fontFamily: "serif" }}>WebAnchor.</div>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <Link to="/#services" className="hover:text-[#8B4A46] transition-colors">Services</Link>
            <Link to="/#how-it-works" className="hover:text-[#8B4A46] transition-colors">How It Works</Link>
            <Link to="/#testimonials" className="hover:text-[#8B4A46] transition-colors">Testimonials</Link>
          </div>
          <div className="flex items-center gap-4">
             <Link to="/#contact" className="bg-[#8B4A46] hover:bg-[#703B38] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-[#8B4A46]/30 flex items-center gap-2 group whitespace-nowrap active:scale-95">
                <span className="hidden sm:inline">Get your Free Website</span>
                <span className="sm:hidden text-[13px] tracking-wide">Get Started</span>
             </Link>
          </div>
        </div>
      </motion.nav>

      <div className="flex-1">
        <Outlet />
      </div>

      {/* FOOTER */}
      <footer className="pt-16 pb-8 bg-white border-t border-[#EAE8E1]">
         <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
               {/* Brand / About */}
               <div className="flex flex-col items-start gap-4">
                  <Link to="/" className="flex items-center gap-2.5">
                     <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B4A46] to-[#6a3835] text-white flex items-center justify-center p-1.5 shadow-sm border border-[#8B4A46]/20">
                        <Anchor className="w-full h-full" strokeWidth={2.5} />
                     </div>
                     <div className="font-medium text-2xl tracking-tight text-slate-900" style={{ fontFamily: "serif" }}>WebAnchor.</div>
                  </Link>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                     We build high-converting, professional websites for local tradespeople across the UK. Get your business online without the hassle.
                  </p>
               </div>

               {/* Contact */}
               <div className="flex flex-col items-start gap-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Contact Us</h4>
                  <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#8B4A46] transition-colors">
                     <Mail className="w-4 h-4 text-slate-400" /> {email}
                  </a>
                  <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#8B4A46] transition-colors">
                     <Phone className="w-4 h-4 text-slate-400" /> {phoneNumber}
                  </a>
                  <a href={`https://wa.me/${whatsappNumber}`} className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#8B4A46] transition-colors">
                     <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp Us
                  </a>
               </div>

               {/* Location */}
               <div className="flex flex-col items-start gap-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Location</h4>
                  <div className="flex items-start gap-2 text-sm text-slate-500">
                     <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                     <span>North End, Portsmouth, PO2 0PT</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-400 leading-relaxed max-w-xs">
                     <span className="text-slate-500">Serving: </span>
                     Portsmouth · Southampton · Fareham · Gosport · Havant · Waterlooville · Hampshire & UK wide
                  </div>
               </div>
            </div>

            <div className="pt-8 border-t border-[#EAE8E1] flex flex-col md:flex-row items-center justify-between gap-4">
               <p className="text-xs font-medium text-slate-400">
                  © {new Date().getFullYear()} WebAnchor. All rights reserved.
               </p>
               <div className="flex items-center gap-6">
                  <Link to="/privacy" className="text-xs font-medium text-slate-400 hover:text-[#8B4A46] transition-colors">Privacy Policy</Link>
                  <Link to="/terms" className="text-xs font-medium text-slate-400 hover:text-[#8B4A46] transition-colors">Terms of Service</Link>
               </div>
            </div>
         </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a 
         initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
         href={`https://wa.me/${whatsappNumber}`} 
         target="_blank" 
         rel="noopener noreferrer" 
         className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-[#25D366]/30 hover:scale-110 hover:shadow-[#25D366]/50 transition-all flex items-center justify-center group"
      >
         <MessageCircle className="w-8 h-8" />
         <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
         </span>
      </motion.a>

      {/* FLOATING MOBILE CALL BUTTON */}
      <motion.a 
         initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }}
         href={`tel:${phoneNumber}`} 
         className="md:hidden fixed bottom-6 left-6 z-50 bg-[#8B4A46] text-white p-4 rounded-full shadow-xl shadow-[#8B4A46]/30 hover:scale-110 hover:shadow-[#8B4A46]/50 transition-all flex items-center justify-center group"
      >
         <Phone className="w-7 h-7" />
         <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call us directly
         </span>
      </motion.a>

      {/* SCROLL TO TOP BUTTON */}
      <AnimatePresence>
         {showScrollTop && (
            <motion.button
               initial={{ opacity: 0, scale: 0, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0, y: 20 }}
               onClick={scrollToTop}
               className="fixed bottom-24 right-6 z-40 bg-white text-slate-600 p-3 rounded-full shadow-lg border border-[#EAE8E1] hover:text-[#8B4A46] hover:border-[#8B4A46] hover:shadow-[#8B4A46]/20 hover:scale-110 transition-all flex items-center justify-center"
               aria-label="Scroll to top"
            >
               <ChevronUp className="w-6 h-6" />
            </motion.button>
         )}
      </AnimatePresence>

      <Chatbot />
    </div>
  );
}
