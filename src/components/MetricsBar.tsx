import React from 'react';
import { Zap, Target, Award, GitBranch, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { keyMetrics } from '../data/portfolioData';

export const MetricsBar: React.FC = () => {
  return (
    <section id="metrics" className="py-20 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-pill-cream text-xs font-mono text-[#85532F] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Quantified Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight headline-title">
            Measurable engineering outcomes.
          </h2>
        </div>

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Bento Item 1: Hero Impact Card (AI Speedup) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="lg:col-span-2 apple-cream-elevated rounded-3xl p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Subtle warm glow layer */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/20 via-orange-100/10 to-transparent blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#A3704C] group-hover:scale-105 transition-transform shadow-2xs">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-[#585550] border border-stone-200 flex items-center gap-1">
                SpecKit & Agentic AI <ArrowUpRight className="w-3 h-3 text-[#A3704C]" />
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight display-title font-mono">
                  30%
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#A3704C] font-mono">
                  Faster
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1D1D1F] mt-2">
                Test Authoring & Delivery Velocity
              </h3>
              <p className="text-sm text-[#585550] mt-1.5 leading-relaxed max-w-xl">
                Pioneered autonomous testing blueprints and domain knowledge graphs with SpecKit and Agentic AI, reducing test creation cycles while maintaining strict defect-detection standards.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 2: API Coverage */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="apple-cream-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform shadow-2xs">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50/80 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                All Projects
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight display-title font-mono">
                  99%
                </span>
                <span className="text-lg font-bold text-emerald-600 font-mono">
                  Coverage
                </span>
              </div>

              <h3 className="text-base font-bold text-[#1D1D1F] mt-2">
                Automated API Suite
              </h3>
              <p className="text-xs text-[#585550] mt-1 leading-relaxed">
                Architected and maintaining 99% automated test coverage across backend endpoints and microservice APIs across all projects.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 3: 20% CI Speedup & Cost Drop */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="lg:col-span-2 apple-cream-card rounded-3xl p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#0071E3] group-hover:scale-105 transition-transform shadow-2xs">
                <GitBranch className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80 flex items-center gap-1">
                CI/CD & Cloud Cost
              </span>
            </div>

            <div className="relative z-10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight display-title font-mono">
                  20%
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#0071E3] font-mono">
                  Faster CI & Merges
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1D1D1F] mt-2">
                Pre-Commit Lint Architecture & Pipeline Cost Drop
              </h3>
              <p className="text-sm text-[#585550] mt-1.5 leading-relaxed max-w-xl">
                Engineered automated Git pre-commit hooks that completely eliminated the need for cloud linter pipelines. By shifting code quality checks locally to the developer machine, cloud pipeline costs dropped significantly and PR merge velocity accelerated by 20%.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 4: 3x ISTQB Certified */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="apple-cream-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform shadow-2xs">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-purple-700 bg-purple-50/80 px-2.5 py-0.5 rounded-full border border-purple-200/80">
                ESTB / ISTQB
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight display-title font-mono">
                  3x
                </span>
                <span className="text-lg font-bold text-purple-600 font-mono">
                  Certified
                </span>
              </div>

              <h3 className="text-base font-bold text-[#1D1D1F] mt-2">
                ISTQB Credentials
              </h3>
              <p className="text-xs text-[#585550] mt-1 leading-relaxed">
                Certified in Foundation Level (CTFL), Mobile Application Testing (MAT), and GenAI Testing standards.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
