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
    <section id="projects" className="py-24 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-pill-cream text-xs font-mono text-[#85532F] uppercase tracking-wider mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight headline-title">
              Engineered for resilience.
            </h2>
            <p className="mt-2 text-base text-[#585550] max-w-xl body-subtext">
              Production systems where I delivered comprehensive manual and automated testing, multi-platform quality, and zero-defect releases.
            </p>
          </div>

          {/* Apple Sliding Segmented Control */}
          <div className="flex items-center p-1 rounded-full bg-stone-200/60 border border-stone-300/60 self-start md:self-auto">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors apple-tap-feedback ${
                    isActive ? 'text-[#1D1D1F] font-semibold' : 'text-[#6E6B65] hover:text-[#1D1D1F]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-full bg-white border border-stone-200/90 shadow-sm"
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = expandedId === project.id;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ type: 'spring', damping: 26, stiffness: 260 }}
                  className="apple-cream-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between group transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(45,35,20,0.06)]"
                >
                  <div>
                    {/* Top Row: Company & Category Pill */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-[#6E6B65] font-medium tracking-wide">
                        <Building2 className="w-4 h-4 text-[#86847F]" />
                        <span>{project.company}</span>
                        {project.region && (
                          <span className="text-stone-400">• {project.region}</span>
                        )}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100/90 text-[#585550] border border-stone-200/60 shadow-2xs">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle (Without repetitive QC Engineer label) */}
                    <h3 className="text-2xl sm:text-[26px] font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#85532F] font-medium mt-2 mb-6 leading-normal">
                      {project.subtitle}
                    </p>

                    {/* Relaxed Metrics Callout */}
                    {project.metrics && (
                      <div className="mb-6 px-4 py-2.5 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#85532F]">
                        <BarChart3 className="w-4 h-4 text-[#A3704C] shrink-0" />
                        <span className="font-semibold tracking-tight">{project.metrics}</span>
                      </div>
                    )}

                    {/* Bullet Points with generous breathing room */}
                    <ul className="space-y-3.5 mb-6 text-sm text-[#585550] leading-relaxed">
                      {(isExpanded ? project.description : project.description.slice(0, 2)).map(
                        (desc, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600/90 shrink-0 mt-0.5" />
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
                        className="text-xs sm:text-sm font-medium text-[#0071E3] hover:text-[#005bb5] mb-6 inline-flex items-center gap-1.5 apple-tap-feedback py-1 transition-colors"
                      >
                        <span>{isExpanded ? 'Show Less' : `View ${project.description.length - 2} More Highlights`}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}

                    <div className="pt-6 border-t border-stone-200/60 flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-stone-100/90 text-[#585550] border border-stone-200/60"
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
