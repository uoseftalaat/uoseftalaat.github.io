import React from 'react';
import { 
  Terminal, 
  Bot, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Wrench 
} from 'lucide-react';
import { motion } from 'motion/react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Terminal,
    Bot,
    CheckCircle2,
    Code2,
    Layers,
  };

  return (
    <section id="skills" className="py-24 relative bg-[#08090D] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0E1017] border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>05 // CAPABILITIES & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight headline-title">
            Technical Competencies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] max-w-xl body-subtext">
            A battle-tested blend of rigorous test automation engineering, multi-platform coverage, and AI acceleration.
          </p>
        </div>

        {/* Bento Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((categoryGroup, index) => {
            const Icon = iconMap[categoryGroup.iconName] || Terminal;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                className="mono-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group bg-[#0E1017] border border-white/10 hover:border-white/20 transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#141722] border border-white/10 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                        {categoryGroup.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#6B7280]">
                        {categoryGroup.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors ${
                          skill.highlight
                            ? 'bg-[#141722] border-emerald-500/30 text-white'
                            : 'bg-[#0A0C11] border-white/8 text-[#D1D5DB] hover:border-white/20'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ml-1 ${
                            skill.level === 'Expert' 
                              ? 'mono-pill-emerald' 
                              : skill.level === 'Advanced'
                              ? 'mono-pill-cyan'
                              : 'bg-white/5 text-[#9CA3AF]'
                          }`}>
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
