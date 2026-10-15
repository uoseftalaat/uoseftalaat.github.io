import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
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
    <section id="contact" className="py-24 sm:py-28 relative overflow-hidden border-t border-[#DDD8CF]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="section-title">
            Initiate Contact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A453E] max-w-xl body-subtext leading-relaxed">
            Available for Software Tester / QC Engineer roles, test automation initiatives, AI testing advisory, and collaborations.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="editorial-card rounded-2xl p-7 flex flex-col justify-between bg-white border border-[#DDD8CF]"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#DDD8CF] flex items-center justify-center text-[#C0392B] shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <motion.button
                  whileTap={{ scale: 0.94 }}
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#FAF7F2] border border-[#DDD8CF] text-[#4A453E] hover:text-[#1C1A17] hover:bg-white transition-colors shadow-xs"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C0392B]" />
                      <span className="text-[#C0392B] font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              <h3 className="text-xl font-bold font-display text-[#1C1A17] mb-1">Email Endpoint</h3>
              <p className="text-xs sm:text-sm text-[#7A7367] mb-6 font-sans">
                Direct communication for interviews and technical inquiries.
              </p>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-between min-h-[46px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD8CF] text-xs font-mono font-medium text-[#1C1A17] hover:border-[#C0392B]/50 hover:bg-white transition-colors"
            >
              <span>{personalInfo.email}</span>
              <Send className="w-3.5 h-3.5 text-[#C0392B]" />
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="editorial-card rounded-2xl p-7 flex flex-col justify-between bg-white border border-[#DDD8CF]"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#DDD8CF] flex items-center justify-center text-[#855C00] shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <motion.button
                  whileTap={{ scale: 0.94 }}
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#FAF7F2] border border-[#DDD8CF] text-[#4A453E] hover:text-[#1C1A17] hover:bg-white transition-colors shadow-xs"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C0392B]" />
                      <span className="text-[#C0392B] font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              <h3 className="text-xl font-bold font-display text-[#1C1A17] mb-1">Phone / WhatsApp</h3>
              <p className="text-xs sm:text-sm text-[#7A7367] mb-6 font-sans">
                Available for phone discussions, interviews, and direct messaging.
              </p>
            </div>

            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center justify-between min-h-[46px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD8CF] text-xs font-mono font-medium text-[#1C1A17] hover:border-[#855C00]/50 hover:bg-white transition-colors"
            >
              <span>{personalInfo.phone}</span>
              <Phone className="w-3.5 h-3.5 text-[#855C00]" />
            </a>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="editorial-card rounded-2xl p-7 flex flex-col justify-between bg-white border border-[#DDD8CF]"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#DDD8CF] flex items-center justify-center mb-5 text-[#1C1A17] shadow-xs">
                <svg className="w-5 h-5 fill-current text-[#1C1A17]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>

              <h3 className="text-xl font-bold font-display text-[#1C1A17] mb-1">LinkedIn Network</h3>
              <p className="text-xs sm:text-sm text-[#7A7367] mb-6 font-sans">
                Professional connections, endorsements, and verified background.
              </p>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between min-h-[46px] px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DDD8CF] text-xs font-mono font-medium text-[#1C1A17] hover:border-[#C0392B]/50 hover:bg-white transition-colors"
            >
              <span>linkedin.com/in/uoseftalaat</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#7A7367]" />
            </a>
          </motion.div>

          {/* Official CV Download Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="editorial-card rounded-2xl p-7 flex flex-col justify-between bg-white border border-[#DDD8CF]"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#DDD8CF] flex items-center justify-center text-[#C0392B] shadow-xs">
                  <Download className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#7A7367]">
                  <MapPin className="w-3.5 h-3.5 text-[#855C00]" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold font-display text-[#1C1A17] mb-1">Official CV (PDF)</h3>
              <p className="text-xs sm:text-sm text-[#7A7367] mb-6 font-sans">
                Download the verified ATS-optimized resume document.
              </p>
            </div>

            <motion.a
              whileTap={{ scale: 0.96 }}
              href={personalInfo.resumePath}
              download="Uosef_Talaat_CV.pdf"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-2.5 rounded-xl bg-[#C0392B] hover:bg-[#9E2B1F] text-white font-medium text-xs shadow-[0_4px_16px_rgba(192,57,43,0.25)] transition-all tap-feedback"
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
