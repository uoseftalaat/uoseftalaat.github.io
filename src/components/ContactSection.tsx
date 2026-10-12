import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  Send 
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#08090D] border-t border-white/8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0E1017] border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight headline-title">
            Initiate Contact.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] max-w-xl body-subtext">
            Available for Software Tester / QC Engineer roles, test automation initiatives, AI testing advisory, and collaborations.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="mono-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-[#0E1017] border border-white/10 hover:border-white/20 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#141722] border border-white/10 flex items-center justify-center text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <motion.button
                  whileTap={{ scale: 0.94 }}
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[#141722] border border-white/10 text-[#D1D5DB] hover:text-white transition-colors"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">Email Endpoint</h3>
              <p className="text-xs text-[#9CA3AF] mb-5 font-sans">
                Direct communication for interviews and inquiries.
              </p>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-between min-h-[44px] px-4 py-2.5 rounded-lg bg-[#141722] border border-white/8 text-xs font-mono text-white hover:border-emerald-500/50 transition-colors"
            >
              <span>{personalInfo.email}</span>
              <Send className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="mono-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-[#0E1017] border border-white/10 hover:border-white/20 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#141722] border border-white/10 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <motion.button
                  whileTap={{ scale: 0.94 }}
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[#141722] border border-white/10 text-[#D1D5DB] hover:text-white transition-colors"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">Phone / WhatsApp</h3>
              <p className="text-xs text-[#9CA3AF] mb-5 font-sans">
                Available for phone discussions and messaging.
              </p>
            </div>

            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center justify-between min-h-[44px] px-4 py-2.5 rounded-lg bg-[#141722] border border-white/8 text-xs font-mono text-white hover:border-cyan-500/50 transition-colors"
            >
              <span>{personalInfo.phone}</span>
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="mono-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-[#0E1017] border border-white/10 hover:border-white/20 transition-all"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#141722] border border-white/10 flex items-center justify-center mb-5 text-white">
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">LinkedIn Network</h3>
              <p className="text-xs text-[#9CA3AF] mb-5 font-sans">
                Professional connections, endorsements, and verified background.
              </p>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between min-h-[44px] px-4 py-2.5 rounded-lg bg-[#141722] border border-white/8 text-xs font-mono text-white hover:border-white/30 transition-colors"
            >
              <span>linkedin.com/in/uoseftalaat</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#9CA3AF]" />
            </a>
          </motion.div>

          {/* Official CV Download Card */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="mono-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-[#0E1017] border border-white/10 hover:border-white/20 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#141722] border border-white/10 flex items-center justify-center text-white">
                  <Download className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">Official CV (PDF)</h3>
              <p className="text-xs text-[#9CA3AF] mb-5 font-sans">
                Download the ATS-optimized resume document.
              </p>
            </div>

            <motion.a
              whileTap={{ scale: 0.96 }}
              href={personalInfo.resumePath}
              download="Uosef_Talaat_CV.pdf"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#08090D] font-mono font-semibold text-xs shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
            >
              <Download className="w-4 h-4" />
              Get My CV
            </motion.a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
