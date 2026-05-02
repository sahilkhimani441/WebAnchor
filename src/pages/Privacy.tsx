import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function Privacy() {
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
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-8" style={{ fontFamily: "serif" }}>Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:font-light leading-relaxed">
          <p className="text-sm text-slate-500 mb-8 italic">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">1. Introduction</h2>
          <p>
            Welcome to WebAnchor. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">2. The Data We Collect About You</h2>
          <p>
            Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
          </p>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600 font-light">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4 font-medium">3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600 font-light">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl mt-10 mb-4 font-medium">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">5. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
          </p>

          <h2 className="text-2xl mt-10 mb-4 font-medium">6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:hello@webanchor.co.uk" className="text-[#8B4A46] hover:underline">hello@webanchor.co.uk</a>.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
