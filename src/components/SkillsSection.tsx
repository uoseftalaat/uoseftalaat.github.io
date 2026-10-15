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
    <section id="skills" className="py-24 sm:py-28 relative border-t border-[#DDD8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="section-title">
            Technical Competencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A453E] max-w-xl body-subtext leading-relaxed">
            A battle-tested blend of rigorous test automation engineering, multi-platform coverage, and AI acceleration.
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
                transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                className="editorial-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group bg-white border border-[#DDD8CF]"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#DDD8CF] text-[#C0392B] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#1C1A17] group-hover:text-[#C0392B] transition-colors">
                        {categoryGroup.category}
                      </h3>
                      <span className="text-xs font-mono text-[#7A7367]">
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
                            ? 'bg-[#F8F4EA] border-[#855C00]/30 text-[#1C1A17] font-semibold'
                            : 'bg-[#FAF7F2] border-[#DDD8CF] text-[#4A453E] hover:border-[#C0392B]/40 hover:bg-white'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]"></span>
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ml-1 ${
                            skill.level === 'Expert' 
                              ? 'bg-[#C0392B]/10 text-[#C0392B] border border-[#C0392B]/20 font-bold' 
                              : skill.level === 'Advanced'
                              ? 'bg-[#855C00]/10 text-[#855C00] border border-[#855C00]/25 font-bold'
                              : 'bg-[rgba(28,26,23,0.06)] text-[#7A7367]'
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
