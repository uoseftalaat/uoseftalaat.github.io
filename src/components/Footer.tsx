import React from 'react';
import { Download, ShieldCheck, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200/90 bg-[#F5F2EB] py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-stone-200">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0071E3] to-[#1E3A8A] flex items-center justify-center font-bold text-white text-xs shadow-sm ring-1 ring-black/5">
              UT
            </div>
            <div>
              <span className="font-semibold text-[#1D1D1F] tracking-tight text-sm">
                {personalInfo.name}
              </span>
              <p className="text-xs text-[#6E6B65]">
                Software Tester / QC
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#585550] font-medium">
            <a href="#hero" className="hover:text-[#1D1D1F] transition-colors">Overview</a>
            <a href="#metrics" className="hover:text-[#1D1D1F] transition-colors">Impact</a>
            <a href="#experience" className="hover:text-[#1D1D1F] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#1D1D1F] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#1D1D1F] transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-[#1D1D1F] transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-[#1D1D1F] transition-colors">Contact</a>
          </div>

          {/* Back to top & Download */}
          <div className="flex items-center gap-3">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={personalInfo.resumePath}
              download="Uosef_Talaat_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-xs text-[#4B4844] hover:text-[#1D1D1F] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#A3704C]" />
              CV.pdf
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              className="p-2 rounded-full bg-stone-100 border border-stone-200 text-[#585550] hover:text-[#1D1D1F] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

        </div>

        {/* Bottom status line */}
        <div className="pt-8 flex items-center justify-center sm:justify-end gap-2 font-mono text-[11px] text-[#6E6B65]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>ISTQB CTFL • MAT • GenAI Certified</span>
        </div>

      </div>
    </footer>
  );
};
