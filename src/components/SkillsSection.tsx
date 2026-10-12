import React from 'react';
import { 
  Terminal, 
  Bot, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Sparkles, 
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
    <section id="skills" className="py-24 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-pill-cream text-xs font-mono text-[#85532F] uppercase tracking-wider mb-2">
            <Wrench className="w-3.5 h-3.5" />
            Capabilities & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight headline-title">
            Technical Competencies
          </h2>
          <p className="mt-2 text-base text-[#585550] body-subtext">
            A battle-tested blend of rigorous test automation engineering, multi-platform coverage, and cutting-edge AI acceleration.
          </p>
        </div>

        {/* Bento Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((categoryGroup, index) => {
            const Icon = iconMap[categoryGroup.iconName] || Terminal;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                className="apple-cream-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200/80 text-[#A3704C] flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1D1D1F] text-base group-hover:text-[#0071E3] transition-colors">
                        {categoryGroup.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#86847F]">
                        {categoryGroup.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                          skill.highlight
                            ? 'bg-amber-50/80 border-amber-200 text-[#85532F]'
                            : 'bg-stone-100 border-stone-200/80 text-[#4B4844] hover:border-stone-300'
                        }`}
                      >
                        {skill.highlight && (
                          <Sparkles className="w-3 h-3 text-[#A3704C]" />
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ml-1 ${
                            skill.level === 'Expert' 
                              ? 'bg-amber-200/60 text-[#6B4226] font-semibold' 
                              : 'bg-stone-200/70 text-[#585550]'
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
