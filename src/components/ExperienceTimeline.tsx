import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GitBranch } from 'lucide-react';
import { motion } from 'motion/react';
import { experienceData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-28 relative border-t border-[#DDD8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="section-title">
            Engineering Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A453E] max-w-2xl body-subtext leading-relaxed">
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
              className="editorial-card rounded-2xl p-7 sm:p-10 relative overflow-hidden bg-white border border-[#DDD8CF]"
            >
              {/* Git commit/branch bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DDD8CF] text-xs font-mono text-[#7A7367]">
                <div className="flex items-center gap-2 text-[#C0392B] font-medium">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>origin/main › release-cadence</span>
                </div>
                <span className="bg-[#F8F4EA] text-[#855C00] border border-[#855C00]/30 font-semibold px-2.5 py-0.5 rounded-full text-[11px] tracking-wide">
                  VERIFIED PRODUCTION ROLE
                </span>
              </div>

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DDD8CF]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-[#1C1A17] font-display tracking-tight">
                      {item.role}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(28,26,23,0.05)] text-[#1C1A17] border border-[#DDD8CF]">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base text-[#4A453E] font-medium mt-1.5 flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-[#1C1A17]">{item.company}</span>
                    <span className="text-[#DDD8CF]">•</span>
                    <span className="text-[#7A7367]">FinTech, SaaS & AI Products</span>
                  </h3>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-[#7A7367]">
                  <div className="flex items-center gap-1.5 bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#DDD8CF]">
                    <Calendar className="w-3.5 h-3.5 text-[#C0392B]" />
                    <span className="font-medium text-[#1C1A17]">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#FAF7F2] px-3 py-1.5 rounded-lg border border-[#DDD8CF]">
                    <MapPin className="w-3.5 h-3.5 text-[#855C00]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="mt-8 space-y-4">
                <h4 className="text-xs uppercase font-mono tracking-wider text-[#7A7367] font-bold">
                  Engineering Contributions & Impact:
                </h4>
                <ul className="space-y-3">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#1C1A17] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#C0392B] shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Strip */}
              <div className="mt-8 pt-6 border-t border-[#DDD8CF]">
                <div className="text-xs font-mono text-[#7A7367] font-semibold mb-3">
                  Production Stack & Tooling:
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.highlightTechnologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#FAF7F2] text-[#1C1A17] border border-[#DDD8CF] hover:border-[#C0392B]/50 hover:bg-white transition-colors"
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
