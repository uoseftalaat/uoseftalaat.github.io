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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-[max(0.75rem,env(safe-area-inset-top))] pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 26, stiffness: 260 }}
          className={`pointer-events-auto w-full max-w-6xl rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'glass-header glass-header-scrolled py-2.5 px-3.5 sm:px-5'
              : 'glass-header py-3 px-4 sm:px-5'
          }`}
        >
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            
            {/* Brand Monogram & Name */}
            <a
              href="#hero"
              className="flex items-center gap-3 group tap-feedback py-1 px-1 min-h-[44px]"
            >
              <div className="brand-monogram">
                UT
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-[#1C1A17] tracking-tight group-hover:text-[#C0392B] transition-colors leading-tight">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] font-sans text-[#7A7367]">
                  Software Tester / QC
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-[rgba(28,26,23,0.04)] border border-[#DDD8CF]/60">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors min-h-[36px] flex items-center ${
                      isActive ? 'text-[#1C1A17] font-semibold' : 'text-[#7A7367] hover:text-[#1C1A17]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-lg bg-white shadow-xs border border-[#DDD8CF]"
                        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
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
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                href={personalInfo.resumePath}
                download="Uosef_Talaat_CV.pdf"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C0392B] hover:bg-[#9E2B1F] text-white text-xs font-medium transition-all shadow-[0_2px_12px_rgba(192,57,43,0.25)] min-h-[40px] tap-feedback"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get My CV</span>
              </motion.a>

              {/* Mobile Menu Trigger (44px touch target) */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white border border-[#DDD8CF] text-[#1C1A17] hover:bg-[#FAF7F2] transition-colors shadow-xs"
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
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
            />

            {/* Mobile Sheet/Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-x-3 top-20 z-50 lg:hidden rounded-2xl p-5 shadow-2xl border border-[#DDD8CF] bg-white/95 backdrop-blur-xl max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`min-h-[44px] px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between active:scale-[0.98] ${
                      activeSection === link.id
                        ? 'bg-[#F5F1EB] text-[#1C1A17] font-semibold border border-[#DDD8CF]'
                        : 'text-[#7A7367] hover:text-[#1C1A17] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.id && (
                      <span className="w-2 h-2 rounded-full bg-[#C0392B]"></span>
                    )}
                  </a>
                ))}
                
                <div className="pt-3 mt-1 border-t border-[#DDD8CF] flex flex-col gap-2">
                  <a
                    href={personalInfo.resumePath}
                    download="Uosef_Talaat_CV.pdf"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#C0392B] hover:bg-[#9E2B1F] text-white text-sm font-medium shadow-[0_4px_16px_rgba(192,57,43,0.25)] active:scale-[0.98]"
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
