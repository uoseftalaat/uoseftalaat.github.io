import React from 'react';
import { Download, ShieldCheck, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#DDD8CF] bg-[#F5F1EB] py-16 relative text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-[#DDD8CF]">
          
          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <div className="brand-monogram">
              UT
            </div>
            <div>
              <span className="font-bold text-[#1C1A17] tracking-tight text-base font-display">
                {personalInfo.name}
              </span>
              <p className="text-xs text-[#7A7367] font-sans">
                Software Tester / Automation Engineer
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs font-medium text-[#7A7367]">
            <a href="#hero" className="hover:text-[#1C1A17] transition-colors min-h-[36px] flex items-center px-1">Overview</a>
            <a href="#metrics" className="hover:text-[#1C1A17] transition-colors min-h-[36px] flex items-center px-1">Impact</a>
            <a href="#experience" className="hover:text-[#1C1A17] transition-colors min-h-[36px] flex items-center px-1">Experience</a>
            <a href="#projects" className="hover:text-[#1C1A17] transition-colors min-h-[36px] flex items-center px-1">Projects</a>
            <a href="#skills" className="hover:text-[#1C1A17] transition-colors min-h-[36px] flex items-center px-1">Skills</a>
            <a href="#certifications" className="hover:text-[#1C1A17] transition-colors min-h-[36px] flex items-center px-1">Certifications</a>
            <a href="#contact" className="hover:text-[#1C1A17] transition-colors min-h-[36px] flex items-center px-1">Contact</a>
          </div>

          {/* Back to top & Download */}
          <div className="flex items-center gap-3">
            <motion.a
              whileTap={{ scale: 0.96 }}
              href={personalInfo.resumePath}
              download="Uosef_Talaat_CV.pdf"
              className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl bg-[#C0392B] hover:bg-[#9E2B1F] text-white font-medium text-xs transition-all shadow-[0_2px_12px_rgba(192,57,43,0.25)] tap-feedback"
            >
              <Download className="w-3.5 h-3.5" />
              Get My CV
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl bg-white border border-[#DDD8CF] text-[#7A7367] hover:text-[#1C1A17] hover:border-[#C0392B]/40 transition-colors shadow-xs tap-feedback"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

        </div>

        {/* Bottom status line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A7367]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[#855C00] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#855C00]" />
            <span>ISTQB CTFL • MAT • GenAI Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
