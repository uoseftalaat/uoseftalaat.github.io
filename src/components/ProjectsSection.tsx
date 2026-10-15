import React, { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  BarChart3, 
  Building2,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/portfolioData';

type CategoryFilter = 'All' | 'AI & Automation' | 'FinTech' | 'SaaS';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories: CategoryFilter[] = ['All', 'AI & Automation', 'FinTech', 'SaaS'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 sm:py-28 relative border-t border-[#DDD8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="section-title">
              Production Quality Systems
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4A453E] max-w-xl body-subtext leading-relaxed">
              Real-world systems where I architected manual and automated testing frameworks, multi-platform regression suites, and zero-defect deliveries.
            </p>
          </div>

          {/* Apple Segmented Filter Control */}
          <div className="flex items-center p-1 rounded-xl bg-[rgba(28,26,23,0.05)] border border-[#DDD8CF] self-start md:self-auto max-w-full overflow-x-auto scrollbar-none shadow-xs">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-4 py-2 rounded-lg text-xs whitespace-nowrap transition-colors tap-feedback min-h-[38px] flex items-center shrink-0 ${
                    isActive ? 'text-[#1C1A17] font-semibold' : 'text-[#7A7367] hover:text-[#1C1A17]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-lg bg-white shadow-xs border border-[#DDD8CF]"
                      transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = expandedId === project.id;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ type: 'spring', damping: 26, stiffness: 260 }}
                  className="editorial-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between group bg-white border border-[#DDD8CF]"
                >
                  <div>
                    {/* Top Row: Company & Category */}
                    <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-[#DDD8CF] text-xs font-mono">
                      <div className="flex items-center gap-2 text-[#7A7367]">
                        <Building2 className="w-3.5 h-3.5 text-[#C0392B]" />
                        <span className="text-[#1C1A17] font-semibold">{project.company}</span>
                        {project.region && (
                          <span className="text-[#B5AFA5]">• {project.region}</span>
                        )}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-[#FAF7F2] text-[#4A453E] border border-[#DDD8CF] font-sans font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1C1A17] font-display group-hover:text-[#C0392B] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-editorial italic text-[#855C00] mt-1.5 mb-5 font-semibold">
                      {project.subtitle}
                    </p>

                    {/* Metrics Callout */}
                    {project.metrics && (
                      <div className="mb-5 px-4 py-2.5 rounded-xl bg-[#F8F4EA] border border-[#855C00]/25 flex items-center gap-2.5 text-xs text-[#855C00]">
                        <BarChart3 className="w-4 h-4 shrink-0 text-[#855C00]" />
                        <span className="font-semibold tracking-tight">{project.metrics}</span>
                      </div>
                    )}

                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-5 text-sm sm:text-base text-[#1C1A17] leading-relaxed">
                      {(isExpanded ? project.description : project.description.slice(0, 2)).map(
                        (desc, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#C0392B] shrink-0 mt-1" />
                            <span>{desc}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Bottom: Accordion trigger & Tag Pills */}
                  <div>
                    {project.description.length > 2 && (
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-xs font-semibold text-[#C0392B] hover:text-[#9E2B1F] mb-5 inline-flex items-center gap-1.5 tap-feedback py-2 min-h-[40px] transition-colors"
                      >
                        <span>{isExpanded ? '[Collapse details]' : `[+${project.description.length - 2} more specification points]`}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}

                    <div className="pt-4 border-t border-[#DDD8CF] flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#FAF7F2] text-[#4A453E] border border-[#DDD8CF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
