import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'metrics', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Impact', href: '#metrics', id: 'metrics' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 24, stiffness: 260 }}
          className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
            scrolled
              ? 'apple-cream-glass py-2 px-3 sm:px-4 shadow-[0_10px_30px_-6px_rgba(45,35,20,0.1)] border border-stone-300/80'
              : 'apple-cream-glass py-2.5 px-4 sm:px-5 border border-stone-200/80'
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & Status indicator */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group apple-tap-feedback py-1 pr-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0071E3] to-[#1E3A8A] flex items-center justify-center font-bold text-xs text-white shadow-sm ring-1 ring-black/5">
                UT
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs sm:text-sm text-[#1D1D1F] tracking-tight group-hover:text-[#0071E3] transition-colors flex items-center gap-1.5">
                  {personalInfo.name}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10B981] animate-pulse"></span>
                </span>
                <span className="text-[10px] text-[#6E6B65] hidden sm:block font-mono tracking-tight -mt-0.5">
                  Software Tester / QC
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Segmented Pill) */}
            <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-stone-200/50 border border-stone-300/40">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3.5 py-1 rounded-full text-xs font-medium transition-colors ${
                      isActive ? 'text-[#1D1D1F] font-semibold' : 'text-[#6E6B65] hover:text-[#1D1D1F]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-white border border-stone-200/90 shadow-sm"
                        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Actions: Download CV Pill */}
            <div className="flex items-center gap-2">
              <motion.a
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                href={personalInfo.resumePath}
                download="Uosef_Talaat_CV.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold shadow-sm border-t border-white/20 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </motion.a>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-stone-200/60 border border-stone-300/60 text-[#1D1D1F] hover:bg-stone-200 apple-tap-feedback"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Overlay (Spring in/out) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ type: 'spring', damping: 24, stiffness: 280 }}
            className="fixed inset-x-4 top-20 z-50 lg:hidden apple-cream-elevated rounded-3xl p-5 shadow-2xl border border-stone-200"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-stone-200/70 text-[#1D1D1F] font-semibold border border-stone-300/60'
                      : 'text-[#585550] hover:bg-stone-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 mt-1 border-t border-stone-200">
                <a
                  href={personalInfo.resumePath}
                  download="Uosef_Talaat_CV.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#0071E3] text-white text-sm font-semibold shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download Official CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
