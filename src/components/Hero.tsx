import React from 'react';
import { 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  Layers,
  ArrowRight,
  Code2
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#FAF7F2]">
      
      {/* Apple Ambient Warm Specular Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-100/40 via-stone-200/25 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-50/50 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Keynote Typography & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="lg:col-span-7 space-y-7"
          >
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-pill-cream text-xs font-medium text-[#585550]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-[#1D1D1F]">{personalInfo.availability}</span>
              <span className="text-stone-300">•</span>
              <span className="text-[#85532F] font-mono">{personalInfo.location}</span>
            </div>

            {/* Apple Large Display Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] display-title">
                Flawless quality. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3704C] via-[#85532F] to-[#1D1D1F]">
                  Manual & Automation.
                </span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-[#585550] font-normal body-subtext max-w-xl">
                I'm <strong className="text-[#1D1D1F] font-semibold">{personalInfo.name}</strong>, a Software Tester / QC Engineer delivering comprehensive <span className="text-[#1D1D1F] font-medium">Manual and Automated Testing</span> across Web, Mobile (Android & iOS), and API layers.
              </p>
            </div>

            {/* Capability Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: 'Manual & Automation Testing', icon: CheckCircle2 },
                { label: 'Playwright (TypeScript)', icon: Terminal },
                { label: 'Selenium / Capybara', icon: Code2 },
                { label: 'Appium', icon: Cpu },
                { label: 'Testing Mobile (Android & iOS)', icon: Layers },
                { label: '3x ISTQB Certified', icon: ShieldCheck },
              ].map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-[#4A4742] shadow-[0_1px_3px_rgba(45,35,20,0.04)] hover:border-[#A3704C]/40 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#A3704C]" />
                    {pill.label}
                  </span>
                );
              })}
            </div>

            {/* Apple Tactile CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.a
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                href={personalInfo.resumePath}
                download="Uosef_Talaat_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-sm shadow-md shadow-blue-500/20 border-t border-white/25"
              >
                <Download className="w-4 h-4" />
                Download CV (PDF)
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full apple-cream-card text-[#1D1D1F] font-medium text-sm hover:border-stone-400/60"
              >
                View Experience
                <ArrowRight className="w-4 h-4 text-[#86847F]" />
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                href="#projects"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-stone-200/60 border border-stone-300/70 text-[#1D1D1F] text-sm font-medium hover:bg-stone-200"
              >
                Projects
              </motion.a>
            </div>

            {/* Direct Contact Links Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-[#6E6B65] border-t border-stone-200/80">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-[#0071E3] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#86847F]" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-[#0071E3] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#86847F]" />
                {personalInfo.phone}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#0071E3] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#86847F]" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                LinkedIn
                <ExternalLink className="w-3 h-3 text-[#A8A6A1]" />
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#86847F]" />
                Cairo, Egypt
              </span>
            </div>

          </motion.div>

          {/* Right Column: macOS Sonoma Porcelain Inspector Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 26, stiffness: 200, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Apple Porcelain Glass Container */}
              <div className="apple-cream-elevated rounded-3xl p-6 relative overflow-hidden">
                
                {/* macOS Window Chrome Header */}
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></span>
                    <span className="ml-2 font-mono text-xs text-[#6E6B65]">test-pipeline.config.ts</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Live QA Engine
                  </span>
                </div>

                {/* Dashboard Metrics */}
                <div className="space-y-4">
                  
                  {/* Regression Pass Rate */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#585550] font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Regression Pass Rate
                      </span>
                      <span className="font-mono font-bold text-emerald-600 text-sm">99.8%</span>
                    </div>
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-500 to-[#0071E3] h-full rounded-full w-[99.8%]"></div>
                    </div>
                  </div>

                  {/* Multi-Platform Matrix Grid */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <div className="text-xs text-[#6E6B65] font-medium mb-3 flex items-center justify-between">
                      <span>Multi-Platform Coverage</span>
                      <span className="text-[11px] text-[#0071E3] font-mono">End-to-End</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-[#585550]">Web (Playwright)</span>
                        <span className="text-emerald-600 font-semibold">85%</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-[#585550]">Backend API</span>
                        <span className="text-emerald-600 font-semibold">99%</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-[#585550]">Android (Appium)</span>
                        <span className="text-[#0071E3] font-semibold">Active</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200/90 flex items-center justify-between shadow-2xs">
                        <span className="text-[#585550]">iOS (Appium)</span>
                        <span className="text-[#0071E3] font-semibold">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Manual & Automation Excellence Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/70 via-stone-50 to-white border border-amber-200/70">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#85532F] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Manual & Automation Excellence
                    </div>
                    <p className="text-xs text-[#585550] leading-relaxed">
                      Structured exploratory testing, risk-based test suites, and high-performance cross-platform automation delivering zero-defect releases.
                    </p>
                  </div>

                  {/* ISTQB Verified Credentials Bar */}
                  <div className="pt-2 border-t border-stone-200/80 flex items-center justify-between text-xs">
                    <span className="text-[#86847F] font-mono text-[11px]">ISTQB Standards:</span>
                    <div className="flex items-center gap-1.5 font-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                        CTFL
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Mobile MAT
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        GenAI
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
