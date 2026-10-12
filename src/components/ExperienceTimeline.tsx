import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { experienceData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-pill-cream text-xs font-mono text-[#85532F] uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight headline-title">
            Professional Experience
          </h2>
          <p className="mt-2 text-base text-[#585550] body-subtext">
            Driving release quality, CI/CD speedups, and AI test modernization in production.
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
              className="apple-cream-elevated rounded-3xl p-7 sm:p-9 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0071E3] via-[#A3704C] to-[#1D1D1F]"></div>

              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200/80">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight">
                      {item.role}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0071E3] mt-1">
                    {item.company}
                  </h3>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-[#6E6B65] font-mono">
                  <div className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200">
                    <Calendar className="w-3.5 h-3.5 text-[#A3704C]" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-full border border-stone-200">
                    <MapPin className="w-3.5 h-3.5 text-[#86847F]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="mt-7 space-y-3.5">
                <h4 className="text-xs uppercase font-mono tracking-wider text-[#86847F] font-semibold">
                  Key Deliverables & Engineering Impact:
                </h4>
                <ul className="space-y-3">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-[#4B4844] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Strip */}
              <div className="mt-8 pt-6 border-t border-stone-100">
                <div className="text-xs font-mono text-[#86847F] mb-3">
                  Core Technologies & Methodologies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.highlightTechnologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-stone-100 text-[#4B4844] border border-stone-200 hover:border-stone-300 transition-colors"
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
