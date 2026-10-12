import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Terminal } from 'lucide-react';
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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-[max(0.75rem,env(safe-area-inset-top))] pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 24, stiffness: 260 }}
          className={`pointer-events-auto w-full max-w-6xl rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'mono-glass-header py-2.5 px-3.5 sm:px-5 shadow-[0_16px_36px_rgba(0,0,0,0.7)] border border-white/10'
              : 'mono-glass-header py-3 px-4 sm:px-5 border border-white/8'
          }`}
        >
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            
            {/* Brand Logo & Name */}
            <a
              href="#hero"
              className="flex items-center gap-3 group mono-tap-feedback py-1 px-1 min-h-[44px]"
            >
              <div className="w-8 h-8 rounded-lg bg-[#141722] border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-white shadow-xs group-hover:border-emerald-500/50 transition-colors">
                UT
              </div>
              <span className="font-semibold text-sm sm:text-base text-[#F3F4F6] tracking-tight group-hover:text-emerald-400 transition-colors">
                {personalInfo.name}
              </span>
            </a>

            {/* Desktop Navigation Links (Mono Tech Pill) */}
            <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-black/40 border border-white/8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-mono transition-colors min-h-[36px] flex items-center ${
                      isActive ? 'text-white font-medium' : 'text-[#9CA3AF] hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-lg bg-white/10 border border-white/15"
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
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#08090D] text-xs font-mono font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)] min-h-[40px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get My CV</span>
              </motion.a>

              {/* Mobile Menu Trigger (44px touch target) */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[#141722] border border-white/10 text-[#F3F4F6] hover:bg-[#1A1E2C] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.button>
            </div>

          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Overlay with Backdrop Scrim */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Scrim Backdrop (Apple Dim to Focus) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xs lg:hidden"
            />

            {/* Mobile Sheet/Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-x-3 top-20 z-50 lg:hidden mono-elevated rounded-2xl p-5 shadow-2xl border border-white/15 bg-[#0E1017]/95 backdrop-blur-xl max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/8 text-xs font-mono text-[#9CA3AF]">
                <span>QA CONSOLE // NAVIGATION</span>
                <span className="mono-pill-emerald px-2 py-0.5 rounded text-[10px]">
                  LIVE
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`min-h-[44px] px-4 py-3 rounded-xl text-sm font-mono transition-all flex items-center justify-between active:scale-[0.98] ${
                      activeSection === link.id
                        ? 'bg-white/10 text-white font-medium border border-white/15'
                        : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.id && (
                      <span className="text-[10px] text-emerald-400 font-mono">ACTIVE</span>
                    )}
                  </a>
                ))}
                
                <div className="pt-3 mt-1 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href={personalInfo.resumePath}
                    download="Uosef_Talaat_CV.pdf"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#08090D] text-sm font-mono font-semibold shadow-[0_0_20px_rgba(16,185,129,0.25)] active:scale-[0.98]"
                  >
                    <Download className="w-4 h-4" />
                    Get My CV
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
