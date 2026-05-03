import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, User, ChevronDown } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const INITIAL_MESSAGE = "Hi there! I'm WebAnchor's AI assistant. Do you have any questions about our website packages for tradespeople?";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: INITIAL_MESSAGE }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      // Build conversation history for context
      const chatContext = messages.map(m => m.role === 'model' ? `Assistant: ${m.text}` : `User: ${m.text}`).join('\n');
      const prompt = `System Instructions: You are a friendly, concise, and expert customer service AI for WebAnchor. We build high-converting websites starting from £249 for tradespeople in the UK. 

About Our Packages:
1. Starter (£249 setup + £49/month): Fast 24-hour delivery of a custom 1-page website. Perfect for independent tradesmen starting out or needing a quick online presence. Includes mobile responsive design, basic SEO setup, contact form to capture leads, fast hosting, daily backups, and security updates.
2. Pro (£499 setup + £49/month): Comprehensive up to 10-page site for established and growing businesses. Includes everything in Starter, plus advanced SEO optimization for competitive markets, an AI chatbot to capture leads 24/7, AI call answering so you never miss a job, and priority 24/7 support.

Personalized Recommendations:
- Plumbers/Electricians: Emphasize trust indicators (Certifications, Gas Safe/NICEIC badges, 5-star Google Reviews), emergency call-out buttons, and clean mobile-first design so customers can easily contact them when dealing with a leak/outage. Recommend Pro if they have multiple service areas.
- Builders/Landscapers: Emphasize large high-quality portfolio galleries (Before & Afters) and case studies. Emphasize WhatsApp/quote form integration.

Process: 
Step 1: Share Details. 
Step 2: Free Mockup (We build a full landing page in 24 hrs, preview before paying). 
Step 3: Go Live & Get Calls.

Guidelines:
- Keep answers brief, conversational, and highly professional. Limit to 3-4 sentences if possible.
- Bold key terms.
- Always encourage them to fill out the form for a free mockup.
- If asked something out of scope, politely redirect to our services.

Previous conversation:
${chatContext}

User: ${userMessage}
Assistant:`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setMessages((prev) => [...prev, { role: 'model', text: response.text || "I'm sorry, I encountered an issue. Please try again." }]);
    } catch (error) {
      console.error('Chat AI Error:', error);
      setMessages((prev) => [...prev, { role: 'model', text: "I'm currently experiencing technical difficulties. Please try again later or fill out our contact form." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-24 z-50 flex items-end justify-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white border border-[#EAE8E1] shadow-2xl rounded-2xl w-80 sm:w-96 overflow-hidden flex flex-col mb-4 max-h-[500px]"
            >
              {/* Header */}
              <div className="bg-[#8B4A46] text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  <span className="font-semibold text-sm">WebAnchor Support</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto min-h-[300px] flex flex-col gap-4 bg-[#F8F7F4]/50">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-[#EAE8E1] text-slate-600' : 'bg-[#8B4A46]/10 text-[#8B4A46]'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-[#8B4A46] text-white rounded-tr-none' : 'bg-white border border-[#EAE8E1] text-slate-700 rounded-tl-none shadow-sm'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3 max-w-[85%] self-start">
                    <div className="w-8 h-8 rounded-full bg-[#8B4A46]/10 text-[#8B4A46] flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-3 rounded-2xl rounded-tl-none border border-[#EAE8E1] bg-white text-slate-700 shadow-sm flex items-center gap-1 w-16">
                      <div className="w-1.5 h-1.5 bg-[#8B4A46]/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-[#8B4A46]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-[#8B4A46]/80 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 bg-white border-t border-[#EAE8E1]">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 bg-[#F8F7F4] border border-[#EAE8E1] rounded-full px-4 py-2.5 text-sm outline-none focus:border-[#8B4A46]/40 focus:ring-2 focus:ring-[#8B4A46]/10 transition-all font-medium text-slate-700"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="w-10 h-10 rounded-full bg-[#8B4A46] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#703B38] transition-colors"
                  >
                    <Send className="w-4 h-4 translate-x-px translate-y-px" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-24 z-50 bg-slate-900 text-white p-4 rounded-full shadow-xl shadow-slate-900/20 hover:scale-110 hover:shadow-slate-900/40 transition-all flex items-center justify-center group"
      >
        {isOpen ? <ChevronDown className="w-7 h-7" /> : <Bot className="w-7 h-7" />}
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {isOpen ? "Close chat" : "Ask a question"}
        </span>
      </motion.button>
    </>
  );
}
