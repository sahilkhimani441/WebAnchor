import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="bg-white p-10 md:p-16 rounded-[2rem] border border-[#EAE8E1] shadow-sm"
      >
        <span className="px-3 py-1 bg-[#F8F7F4] border border-[#EAE8E1] text-[#8B4A46] rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 inline-block">Legal</span>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-8" style={{ fontFamily: "serif" }}>Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:font-light leading-relaxed">
          <p className="text-sm text-slate-500 mb-8 italic">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">1. Agreement to Terms</h2>
          <p>
            By accessing or using the WebAnchor website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">2. Services Description</h2>
          <p>
            WebAnchor provides web design, development, and hosting services primarily for local tradespeople in the UK. The specific details, features, and pricing of our services are outlined on our website or in custom agreements.
          </p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">3. Intellectual Property Rights</h2>
          <p>
            The website, its original content, features, and functionality are owned by WebAnchor and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. 
            Upon full payment for agreed services, the intellectual property rights to the custom web design and specific content produced for the client will be transferred to the client, subject to any retained rights for portfolio showcasing.
          </p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">4. User Responsibilities</h2>
          <p>
            You are responsible for providing accurate and timely information required for us to perform our services (such as logos, text, and images). Delays in providing this information may delay project completion.
          </p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">5. Payment and Billing</h2>
          <p>
            Payment terms are specified during the ordering process or in your service agreement. Hosting and maintenance plans are billed monthly or annually as agreed. We reserve the right to suspend services for overdue accounts.
          </p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">6. Limitation of Liability</h2>
          <p>
            In no event shall WebAnchor, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">8. Contact Information</h2>
          <p>
            For any questions about these Terms, please contact us at: <a href="mailto:hello@webanchor.co.uk" className="text-[#8B4A46] hover:underline">hello@webanchor.co.uk</a>.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
