import React from 'react';
import { Zap, Target, Award, GitBranch, ArrowUpRight, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export const MetricsBar: React.FC = () => {
  return (
    <section id="metrics" className="py-24 relative bg-[#08090D] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0E1017] border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>01 // QUANTIFIED IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight headline-title">
            Measurable engineering outcomes.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] max-w-xl body-subtext">
            Deterministic results achieved through rigorous test planning, CI/CD pipeline optimization, and AI automation.
          </p>
        </div>

        {/* Mono Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Bento Item 1: AI Speedup */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="lg:col-span-2 mono-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  METRIC_01
                </span>
                <span className="text-xs font-mono text-[#6B7280]">VELOCITY OPTIMIZATION</span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#141722] text-[#D1D5DB] border border-white/8 flex items-center gap-1.5">
                SpecKit & AI <ArrowUpRight className="w-3 h-3 text-emerald-400" />
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                <span className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-mono">
                  30%
                </span>
                <span className="text-lg sm:text-2xl font-bold text-emerald-400 font-mono">
                  FASTER
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mt-3 font-sans">
                Test Authoring & Delivery Velocity
              </h3>
              <p className="text-sm text-[#9CA3AF] mt-1.5 leading-relaxed max-w-xl font-sans">
                Pioneered autonomous testing blueprints and domain knowledge graphs with SpecKit and Agentic AI, reducing test creation cycles while maintaining strict defect-detection standards.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 2: API Coverage */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="mono-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  METRIC_02
                </span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#141722] text-emerald-400 border border-emerald-500/20">
                100% Deterministic
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white tracking-tight font-mono">
                  99%
                </span>
                <span className="text-lg font-bold text-emerald-400 font-mono">
                  COVERAGE
                </span>
              </div>

              <h3 className="text-base font-bold text-white mt-3 font-sans">
                Automated API Suite
              </h3>
              <p className="text-xs text-[#9CA3AF] mt-1.5 leading-relaxed font-sans">
                Architected and maintaining 99% automated test coverage across critical backend endpoints and microservice APIs across all products.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 3: 20% CI Speedup & Cost Drop */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="lg:col-span-2 mono-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  METRIC_03
                </span>
                <span className="text-xs font-mono text-[#6B7280]">INFRASTRUCTURE SAVINGS</span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#141722] text-[#D1D5DB] border border-white/8 flex items-center gap-1.5">
                Git Pre-Commit <GitBranch className="w-3 h-3 text-cyan-400" />
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                <span className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-mono">
                  20%
                </span>
                <span className="text-lg sm:text-2xl font-bold text-cyan-400 font-mono">
                  FASTER CI & MERGES
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mt-3 font-sans">
                Pre-Commit Lint Architecture & Pipeline Cloud Cost Reduction
              </h3>
              <p className="text-sm text-[#9CA3AF] mt-1.5 leading-relaxed max-w-xl font-sans">
                Engineered automated Git pre-commit hooks that completely eliminated cloud linter pipelines. By shifting code quality checks locally to the developer machine, cloud pipeline costs dropped significantly and PR merge velocity accelerated by 20%.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 4: 3x ISTQB Certified */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="mono-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  METRIC_04
                </span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#141722] text-white border border-white/10">
                ESTB / ISTQB
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white tracking-tight font-mono">
                  3x
                </span>
                <span className="text-lg font-bold text-white font-mono">
                  CERTIFIED
                </span>
              </div>

              <h3 className="text-base font-bold text-white mt-3 font-sans">
                ISTQB Industry Credentials
              </h3>
              <p className="text-xs text-[#9CA3AF] mt-1.5 leading-relaxed font-sans">
                Certified in Foundation Level (CTFL), Mobile Application Testing (MAT), and Generative AI Testing standards.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
