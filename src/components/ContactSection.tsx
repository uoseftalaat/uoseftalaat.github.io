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
    <section id="contact" className="py-24 relative overflow-hidden bg-[#FAF7F2]">
      
      {/* Apple ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-amber-100/40 via-stone-200/20 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-pill-cream text-xs font-mono text-[#85532F] uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Talk
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight headline-title">
            Get in touch.
          </h2>
          <p className="mt-2 text-base text-[#585550] body-subtext">
            Available for Software Tester / QC roles, test automation initiatives, AI testing advisory, and collaborations.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="apple-cream-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#A3704C] shadow-2xs">
                  <Mail className="w-6 h-6" />
                </div>
                <motion.button
                  whileTap={{ scale: 0.94 }}
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-stone-100 border border-stone-200 text-[#585550] hover:text-[#1D1D1F] hover:bg-stone-200 transition-colors"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">Email</h3>
              <p className="text-xs text-[#86847F] mb-5">
                Reach out directly for interviews and inquiries.
              </p>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-between min-h-[44px] px-4 py-2.5 rounded-2xl bg-stone-100 border border-stone-200 text-sm font-mono text-[#1D1D1F] hover:border-[#0071E3] transition-colors"
            >
              <span>{personalInfo.email}</span>
              <Send className="w-4 h-4 text-[#0071E3]" />
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="apple-cream-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shadow-2xs">
                  <Phone className="w-6 h-6" />
                </div>
                <motion.button
                  whileTap={{ scale: 0.94 }}
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-stone-100 border border-stone-200 text-[#585550] hover:text-[#1D1D1F] hover:bg-stone-200 transition-colors"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">Direct Line</h3>
              <p className="text-xs text-[#86847F] mb-5">
                Available for phone calls and WhatsApp chats.
              </p>
            </div>

            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center justify-between min-h-[44px] px-4 py-2.5 rounded-2xl bg-stone-100 border border-stone-200 text-sm font-mono text-[#1D1D1F] hover:border-[#0071E3] transition-colors"
            >
              <span>{personalInfo.phone}</span>
              <Phone className="w-4 h-4 text-[#0071E3]" />
            </a>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="apple-cream-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center mb-5 text-[#0071E3] shadow-2xs">
                <svg className="w-6 h-6 fill-current text-[#0071E3]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>

              <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">LinkedIn Network</h3>
              <p className="text-xs text-[#86847F] mb-5">
                Connect for professional recommendations and career updates.
              </p>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between min-h-[44px] px-4 py-2.5 rounded-2xl bg-stone-100 border border-stone-200 text-sm font-mono text-[#1D1D1F] hover:border-[#0071E3] transition-colors"
            >
              <span>linkedin.com/in/uoseftalaat</span>
              <ExternalLink className="w-4 h-4 text-[#0071E3]" />
            </a>
          </motion.div>

          {/* Official CV Download Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="apple-cream-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#A3704C] shadow-2xs">
                  <Download className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#86847F] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#A8A6A1]" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#1D1D1F] mb-1">Official CV (PDF)</h3>
              <p className="text-xs text-[#86847F] mb-5">
                Download the high-resolution ATS-formatted resume document.
              </p>
            </div>

            <motion.a
              whileTap={{ scale: 0.96 }}
              href={personalInfo.resumePath}
              download="Uosef_Talaat_CV.pdf"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-2xl bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-sm shadow-md shadow-blue-500/20 border-t border-white/20 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
