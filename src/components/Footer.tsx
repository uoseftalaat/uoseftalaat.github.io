import React from 'react';
import { Download, ShieldCheck, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/8 bg-[#08090D] py-14 relative font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/8">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#141722] border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-white">
              UT
            </div>
            <div>
              <span className="font-semibold text-white tracking-tight text-sm font-sans">
                {personalInfo.name}
              </span>
              <p className="text-[11px] text-[#9CA3AF] font-mono">
                Software Tester / Automation Engineer
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-xs text-[#9CA3AF]">
            <a href="#hero" className="hover:text-white transition-colors min-h-[36px] flex items-center px-1">Overview</a>
            <a href="#metrics" className="hover:text-white transition-colors min-h-[36px] flex items-center px-1">Impact</a>
            <a href="#experience" className="hover:text-white transition-colors min-h-[36px] flex items-center px-1">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors min-h-[36px] flex items-center px-1">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors min-h-[36px] flex items-center px-1">Skills</a>
            <a href="#certifications" className="hover:text-white transition-colors min-h-[36px] flex items-center px-1">Certifications</a>
            <a href="#contact" className="hover:text-white transition-colors min-h-[36px] flex items-center px-1">Contact</a>
          </div>

          {/* Back to top & Download */}
          <div className="flex items-center gap-3">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={personalInfo.resumePath}
              download="Uosef_Talaat_CV.pdf"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#08090D] font-semibold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            >
              <Download className="w-3.5 h-3.5" />
              Get My CV
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl bg-[#141722] border border-white/10 text-[#9CA3AF] hover:text-white hover:border-emerald-500/40 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

        </div>

        {/* Bottom status line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>ISTQB CTFL • MAT • GenAI Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
