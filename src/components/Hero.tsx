import React, { useState } from 'react';
import { 
  Download, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  Layers,
  ArrowRight,
  Code2,
  Award,
  Zap,
  Target,
  Smartphone,
  Check,
  Activity,
  Flame
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const verificationLayers = [
    {
      id: 1,
      title: 'Contract & API Automation',
      icon: Terminal,
      coverage: '99% Coverage',
      subtext: 'REST endpoints, microservice payload integrity, and schema regression prevention.',
      tech: ['Postman', 'HTTParty', 'Playwright API'],
      status: 'VERIFIED',
      accent: '#C0392B'
    },
    {
      id: 2,
      title: 'Multi-Platform Mobile QA',
      icon: Smartphone,
      coverage: 'Android & iOS',
      subtext: 'Real-device test matrix, deep UI flows, hardware fragmentation, and POS validation.',
      tech: ['Appium', 'UiAutomator2', 'XCUITest'],
      status: 'PARALLEL GRID',
      accent: '#855C00'
    },
    {
      id: 3,
      title: 'Web E2E & Agentic AI Testing',
      icon: Cpu,
      coverage: '30% Faster Velocity',
      subtext: 'Autonomous testing blueprints with SpecKit and AI-accelerated test scenario generation.',
      tech: ['Playwright (TS)', 'SpecKit AI', 'CI/CD Gates'],
      status: 'DETERMINISTIC',
      accent: '#C0392B'
    }
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      
      {/* Subtle Warm Editorial Radial Accent */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-b from-[#C0392B]/5 via-[#855C00]/3 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Monumental Editorial Text (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="lg:col-span-7 space-y-7"
          >
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD8CF] text-xs font-sans text-[#7A7367] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C0392B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C0392B]"></span>
              </span>
              <span className="text-[#1C1A17] font-medium">{personalInfo.availability}</span>
              <span className="text-[#DDD8CF]">|</span>
              <span className="text-[#855C00] font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 inline" />
                {personalInfo.location}
              </span>
            </div>

            {/* Monumental Headline in Reem Kufi */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1A17] display-title">
                Flawless quality. <br />
                <span className="text-[#C0392B] font-extrabold">
                  Manual & Automation.
                </span>
              </h1>
              
              <p className="mt-3 font-editorial text-lg sm:text-xl text-[#4A453E] italic">
                «Architecting deterministic quality, precision automation, and zero-defect deliveries across Web, Mobile, and API systems.»
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#4A453E] body-subtext max-w-2xl leading-relaxed">
                I'm <strong className="text-[#1C1A17] font-semibold">{personalInfo.name}</strong>, a certified Software Tester / QC Engineer with 3x ISTQB certifications (<span className="text-[#1C1A17] font-semibold">CTFL</span>, <span className="text-[#1C1A17] font-semibold">CTFL-MAT</span>, and <span className="text-[#1C1A17] font-semibold">CT-GenAI</span>), delivering comprehensive <span className="text-[#1C1A17] font-semibold">Manual and Automated Testing</span> across Web, Mobile (Android & iOS), and API layers.
              </p>
            </div>

            {/* Editorial Stat Counter Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-2 pb-1 max-w-lg">
              <div className="p-3.5 rounded-xl bg-white border border-[#DDD8CF] shadow-xs">
                <div className="flex items-center gap-1 text-[#855C00] mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase font-bold tracking-wider font-mono">ISTQB</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#1C1A17] font-display">3x</div>
                <div className="text-[11px] text-[#7A7367] leading-tight mt-0.5">Certified Engineer</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#DDD8CF] shadow-xs">
                <div className="flex items-center gap-1 text-[#C0392B] mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Velocity</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#1C1A17] font-display">30%</div>
                <div className="text-[11px] text-[#7A7367] leading-tight mt-0.5">Faster Authoring</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#DDD8CF] shadow-xs">
                <div className="flex items-center gap-1 text-[#1C1A17] mb-1">
                  <Target className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Coverage</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#1C1A17] font-display">99%</div>
                <div className="text-[11px] text-[#7A7367] leading-tight mt-0.5">API Suite Coverage</div>
              </div>
            </div>

            {/* Capability Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
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
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white border border-[#DDD8CF] text-[#4A453E] hover:border-[#C0392B]/50 hover:text-[#1C1A17] transition-colors shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#C0392B]" />
                    {pill.label}
                  </span>
                );
              })}
            </div>

            {/* Apple Fluid CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3">
              <motion.a
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                href={personalInfo.resumePath}
                download="Uosef_Talaat_CV.pdf"
                className="w-full sm:w-auto justify-center min-h-[46px] inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C0392B] hover:bg-[#9E2B1F] text-white font-medium text-xs shadow-[0_4px_16px_rgba(192,57,43,0.25)] transition-all tap-feedback"
              >
                <Download className="w-4 h-4" />
                Get My CV
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                href="#projects"
                className="w-full sm:w-auto justify-center min-h-[46px] inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#DDD8CF] text-[#1C1A17] hover:border-[#C0392B]/40 hover:bg-[#FAF7F2] font-medium text-xs shadow-xs transition-colors tap-feedback"
              >
                <Layers className="w-4 h-4 text-[#855C00]" />
                Explore Projects
                <ArrowRight className="w-3.5 h-3.5 text-[#7A7367]" />
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                href="#contact"
                className="w-full sm:w-auto justify-center min-h-[46px] inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[rgba(28,26,23,0.05)] border border-[#DDD8CF] text-[#4A453E] hover:text-[#1C1A17] font-medium text-xs hover:bg-[rgba(28,26,23,0.08)] transition-colors tap-feedback"
              >
                <Mail className="w-3.5 h-3.5 text-[#C0392B]" />
                Get in Touch
              </motion.a>
            </div>

          </motion.div>

          {/* Right Column: Code-Driven Interactive Quality Assurance Atelier (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 24, stiffness: 200, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full rounded-2xl bg-white border border-[#DDD8CF] p-6 sm:p-7 shadow-[0_12px_36px_rgba(28,26,23,0.08)]">
              
              {/* Card Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#DDD8CF]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C0392B] animate-pulse"></span>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#1C1A17]">
                    QUALITY ASSURANCE MATRIX
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#F8F4EA] text-[#855C00] border border-[#855C00]/30">
                  ESTB • ISTQB VERIFIED
                </span>
              </div>

              {/* Stacked Verification Blueprint Layers */}
              <div className="space-y-3">
                {verificationLayers.map((layer) => {
                  const Icon = layer.icon;
                  const isHovered = activeLayer === layer.id;

                  return (
                    <motion.div
                      key={layer.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => setActiveLayer(layer.id)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isHovered 
                          ? 'bg-[#FAF7F2] border-[#C0392B]/50 shadow-sm' 
                          : 'bg-white border-[#DDD8CF] hover:border-[#DDD8CF]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                            style={{ backgroundColor: layer.accent }}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#1C1A17] font-display">
                              {layer.title}
                            </h4>
                            <span className="text-[11px] font-mono text-[#855C00] font-semibold">
                              {layer.coverage}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 text-[#7A7367] border border-[#DDD8CF]">
                          {layer.status}
                        </span>
                      </div>

                      <p className="text-xs text-[#4A453E] leading-relaxed mb-3">
                        {layer.subtext}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {layer.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#DDD8CF] text-[#1C1A17]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Verification Seal */}
              <div className="mt-5 pt-4 border-t border-[#DDD8CF] flex items-center justify-between text-xs text-[#7A7367]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#855C00]" />
                  <span className="font-sans font-medium text-[#1C1A17]">3x ISTQB Standards Compliant</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#855C00]">
                  <Check className="w-3.5 h-3.5" />
                  <span>100% Deterministic</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
