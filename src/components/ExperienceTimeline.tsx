import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GitBranch } from 'lucide-react';
import { motion } from 'motion/react';
import { experienceData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#08090D] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0E1017] border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02 // PRODUCTION TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight headline-title">
            Engineering Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] max-w-xl body-subtext">
            Driving release verification, CI/CD acceleration, and AI-augmented test architecture in fast-paced production environments.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="mono-elevated rounded-2xl p-6 sm:p-9 relative overflow-hidden bg-[#0E1017] border border-white/12"
            >
              {/* Git commit/branch bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/8 text-xs font-mono text-[#6B7280]">
                <div className="flex items-center gap-2 text-emerald-400">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>origin/main › release-cadence</span>
                </div>
                <span className="mono-pill-emerald px-2 py-0.5 rounded text-[10px]">
                  VERIFIED PRODUCTION ROLE
                </span>
              </div>

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/8">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                      {item.role}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono mono-pill-emerald">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-mono text-white/90 mt-1 flex flex-wrap items-center gap-2">
                    <span>{item.company}</span>
                    <span className="text-[#6B7280]">•</span>
                    <span className="text-[#9CA3AF] text-xs sm:text-sm">FinTech, SaaS & AI Products</span>
                  </h3>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-[#9CA3AF] font-mono">
                  <div className="flex items-center gap-1.5 bg-[#141722] px-3 py-1.5 rounded-md border border-white/8">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#141722] px-3 py-1.5 rounded-md border border-white/8">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="mt-7 space-y-4">
                <h4 className="text-xs uppercase font-mono tracking-wider text-[#9CA3AF] font-semibold">
                  Engineering Contributions & Impact:
                </h4>
                <ul className="space-y-3">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-[#D1D5DB] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Strip */}
              <div className="mt-8 pt-6 border-t border-white/8">
                <div className="text-xs font-mono text-[#9CA3AF] mb-3">
                  Production Stack & Tooling:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.highlightTechnologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#141722] text-[#D1D5DB] border border-white/8 hover:border-emerald-500/40 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
