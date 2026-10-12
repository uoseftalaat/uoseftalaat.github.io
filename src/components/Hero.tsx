import React from 'react';
import { 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  Layers,
  ArrowRight,
  Code2,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#08090D] mono-grid-pattern">
      
      {/* Subtle Technical Radial Grid Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-emerald-500/5 via-cyan-500/3 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          className="max-w-4xl space-y-7"
        >
          
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E1017] border border-white/10 text-xs font-mono text-[#9CA3AF]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white font-medium">{personalInfo.availability}</span>
            <span className="text-white/20">|</span>
            <span className="text-emerald-400">{personalInfo.location}</span>
          </div>

          {/* Mono Tech Display Headline */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5" />
              <span>Deterministic Quality Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#F3F4F6] display-title">
              Flawless quality. <br />
              <span className="text-white font-extrabold tracking-tight">
                Manual & Automation.
              </span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#9CA3AF] font-normal body-subtext max-w-2xl leading-relaxed">
              I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, a certified Software Tester / QC Engineer with 3x ISTQB certifications (<span className="text-white font-medium">CTFL</span>, <span className="text-white font-medium">CTFL-MAT</span>, and <span className="text-white font-medium">CT-GenAI</span>), delivering comprehensive <span className="text-white font-medium">Manual and Automated Testing</span> across Web, Mobile (Android & iOS), and API layers.
            </p>
          </div>

          {/* Capability Chips (Mono Tech Tags) */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono">
            {[
              { label: 'Manual & Automation Testing', icon: CheckCircle2 },
              { label: 'Playwright (TypeScript)', icon: Terminal },
              { label: 'Selenium / Capybara', icon: Code2 },
              { label: 'Appium (Mobile)', icon: Cpu },
              { label: 'Android & iOS Testing', icon: Layers },
              { label: '3x ISTQB Certified', icon: ShieldCheck },
            ].map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg bg-[#0E1017] border border-white/10 text-[#D1D5DB] hover:border-emerald-500/40 hover:text-white transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-400" />
                  {pill.label}
                </span>
              );
            })}
          </div>

          {/* Tactile CTA Buttons (Full width on mobile, inline on desktop) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3">
            <motion.a
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              href={personalInfo.resumePath}
              download="Uosef_Talaat_CV.pdf"
              className="w-full sm:w-auto justify-center min-h-[46px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#08090D] font-mono font-semibold text-xs shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-all"
            >
              <Download className="w-4 h-4" />
              Get My CV
            </motion.a>

            <motion.a
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              href="#projects"
              className="w-full sm:w-auto justify-center min-h-[46px] inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0E1017] border border-white/12 text-[#F3F4F6] font-mono text-xs hover:border-emerald-500/50 hover:bg-[#141722] transition-colors"
            >
              <Layers className="w-4 h-4 text-emerald-400" />
              Explore Projects
              <ArrowRight className="w-3.5 h-3.5 text-[#6B7280]" />
            </motion.a>

            <motion.a
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              href="#contact"
              className="w-full sm:w-auto justify-center min-h-[46px] inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[#141722] border border-white/8 text-[#9CA3AF] hover:text-white font-mono text-xs hover:bg-[#1A1E2C] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              Get in Touch
            </motion.a>
          </div>

          {/* Direct Contact Links Strip */}
          <div className="pt-6 flex flex-wrap items-center gap-y-2.5 gap-x-5 text-xs font-mono text-[#9CA3AF] border-t border-white/8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="min-h-[44px] inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="min-h-[44px] inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              {personalInfo.phone}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              LinkedIn
              <ExternalLink className="w-3 h-3 text-[#6B7280]" />
            </a>
            <span className="min-h-[44px] inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Cairo, Egypt
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
