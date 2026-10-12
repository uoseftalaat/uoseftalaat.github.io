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
    <section id="projects" className="py-24 relative bg-[#08090D] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0E1017] border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // TEST SUITE ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight headline-title">
              Production Quality Systems.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] max-w-xl body-subtext">
              Real-world systems where I architected manual and automated testing frameworks, multi-platform regression suites, and zero-defect deliveries.
            </p>
          </div>

          {/* Mono Segmented Filter Control (Scrollable on small mobile) */}
          <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10 self-start md:self-auto font-mono max-w-full overflow-x-auto scrollbar-none">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-3.5 py-2 rounded-lg text-xs whitespace-nowrap transition-colors mono-tap-feedback min-h-[38px] flex items-center shrink-0 ${
                    isActive ? 'text-white font-medium' : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-lg bg-white/10 border border-white/15"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
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
                  className="mono-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group bg-[#0E1017] border border-white/10 hover:border-white/20 transition-all"
                >
                  <div>
                    {/* Top Row: Company & Category */}
                    <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-white/8 text-xs font-mono">
                      <div className="flex items-center gap-2 text-[#9CA3AF]">
                        <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[#F3F4F6] font-medium">{project.company}</span>
                        {project.region && (
                          <span className="text-[#6B7280]">• {project.region}</span>
                        )}
                      </div>
                      <span className="px-2 py-0.5 rounded text-[11px] bg-[#141722] text-[#D1D5DB] border border-white/8">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1.5 mb-5">
                      {project.subtitle}
                    </p>

                    {/* Metrics Callout */}
                    {project.metrics && (
                      <div className="mb-5 px-3.5 py-2.5 rounded-lg bg-[#141722] border border-emerald-500/20 flex items-center gap-2.5 text-xs font-mono text-emerald-400">
                        <BarChart3 className="w-4 h-4 shrink-0 text-emerald-400" />
                        <span className="font-semibold tracking-tight">{project.metrics}</span>
                      </div>
                    )}

                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-5 text-sm text-[#D1D5DB] leading-relaxed">
                      {(isExpanded ? project.description : project.description.slice(0, 2)).map(
                        (desc, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
                        className="text-xs font-mono text-cyan-400 hover:text-cyan-300 mb-5 inline-flex items-center gap-1.5 mono-tap-feedback py-2 min-h-[40px] transition-colors"
                      >
                        <span>{isExpanded ? '[Collapse details]' : `[+${project.description.length - 2} more specification points]`}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}

                    <div className="pt-4 border-t border-white/8 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-[#141722] text-[#9CA3AF] border border-white/6"
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
