import React from 'react';
import { Zap, Target, Award, GitBranch, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const MetricsBar: React.FC = () => {
  return (
    <section id="metrics" className="py-24 sm:py-28 relative midnight-gallery border-t border-[#2D3139] border-b border-[#2D3139]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="section-title-dark">
            Measurable Engineering Outcomes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A39D93] max-w-2xl body-subtext leading-relaxed">
            Deterministic results achieved through rigorous test planning, CI/CD pipeline optimization, and AI-augmented automation.
          </p>
        </div>

        {/* Midnight Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Bento Item 1: AI Speedup (2 cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="lg:col-span-2 midnight-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C0392B] bg-[#C0392B]/15 px-2.5 py-1 rounded border border-[#C0392B]/30">
                  METRIC_01
                </span>
                <span className="text-xs font-mono text-[#A39D93]">VELOCITY OPTIMIZATION</span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 text-[#F5F1EB] border border-[#2D3139] flex items-center gap-1.5">
                SpecKit & AI <ArrowUpRight className="w-3.5 h-3.5 text-[#C0392B]" />
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-5xl sm:text-7xl font-bold text-[#F5F1EB] tracking-tight font-display">
                  30%
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#C0392B] font-display">
                  FASTER
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mt-4 font-display">
                Test Authoring & Delivery Velocity
              </h3>
              <p className="text-sm text-[#A39D93] mt-2 leading-relaxed max-w-2xl font-sans">
                Pioneered autonomous testing blueprints and domain knowledge graphs with SpecKit and Agentic AI, reducing test creation cycles while maintaining strict defect-detection standards.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 2: API Coverage (1 col) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="midnight-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#D4956A] bg-[#855C00]/20 px-2.5 py-1 rounded border border-[#855C00]/40">
                  METRIC_02
                </span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 text-[#D4956A] border border-[#855C00]/30">
                100% Deterministic
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-5xl sm:text-6xl font-bold text-[#F5F1EB] tracking-tight font-display">
                  99%
                </span>
                <span className="text-lg font-bold text-[#D4956A] font-display">
                  COVERAGE
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mt-4 font-display">
                Automated API Suite
              </h3>
              <p className="text-xs sm:text-sm text-[#A39D93] mt-2 leading-relaxed font-sans">
                Architected and maintaining 99% automated test coverage across critical backend endpoints and microservice APIs across all products.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 3: 20% CI Speedup & Cost Drop (2 cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="lg:col-span-2 midnight-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C0392B] bg-[#C0392B]/15 px-2.5 py-1 rounded border border-[#C0392B]/30">
                  METRIC_03
                </span>
                <span className="text-xs font-mono text-[#A39D93]">INFRASTRUCTURE SAVINGS</span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 text-[#F5F1EB] border border-[#2D3139] flex items-center gap-1.5">
                Git Pre-Commit <GitBranch className="w-3.5 h-3.5 text-[#C0392B]" />
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-5xl sm:text-7xl font-bold text-[#F5F1EB] tracking-tight font-display">
                  20%
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[#C0392B] font-display">
                  FASTER CI & MERGES
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mt-4 font-display">
                Pre-Commit Lint Architecture & Pipeline Cloud Cost Reduction
              </h3>
              <p className="text-sm text-[#A39D93] mt-2 leading-relaxed max-w-2xl font-sans">
                Engineered automated Git pre-commit hooks that completely eliminated cloud linter pipelines. By shifting code quality checks locally to the developer machine, cloud pipeline costs dropped significantly and PR merge velocity accelerated by 20%.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 4: 3x ISTQB Certified (1 col) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="midnight-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#D4956A] bg-[#855C00]/20 px-2.5 py-1 rounded border border-[#855C00]/40">
                  METRIC_04
                </span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 text-[#F5F1EB] border border-[#2D3139]">
                ESTB / ISTQB
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-5xl sm:text-6xl font-bold text-[#F5F1EB] tracking-tight font-display">
                  3x
                </span>
                <span className="text-lg font-bold text-[#D4956A] font-display">
                  CERTIFIED
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mt-4 font-display">
                ISTQB Industry Credentials
              </h3>
              <p className="text-xs sm:text-sm text-[#A39D93] mt-2 leading-relaxed font-sans">
                Certified in Foundation Level (CTFL), Mobile Application Testing (MAT), and Generative AI Testing standards.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
