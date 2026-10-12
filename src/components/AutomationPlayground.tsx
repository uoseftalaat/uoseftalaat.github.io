import React, { useState, useEffect } from 'react';
import { Terminal, RotateCcw, CheckCircle2, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface TestSuite {
  id: string;
  name: string;
  framework: string;
  command: string;
  logs: string[];
  stats: { total: number; passed: number; failed: number; duration: string };
}

export const AutomationPlayground: React.FC = () => {
  const suites: TestSuite[] = [
    {
      id: 'playwright',
      name: 'Playwright E2E & Web',
      framework: 'TypeScript / Playwright',
      command: 'npx playwright test --project=chromium,firefox,webkit',
      logs: [
        '[info] Running 4 workers across Chromium, Firefox, Mobile Safari...',
        '✓ [chromium] cadaa.spec.ts:18:5 › FinTech Real Estate › Validate transaction ledger & reconciliation (212ms)',
        '✓ [chromium] cadaa.spec.ts:42:5 › Back-office Admin › Role-based access & security tokens (145ms)',
        '✓ [firefox] domo-tenant.spec.ts:12:3 › Multi-Tenant Isolation › Verify data containment across tenant UUIDs (318ms)',
        '✓ [webkit] ucaffee-order.spec.ts:24:5 › Café POS Flow › Verify checkout & kitchen payload sync (189ms)',
        '✓ [chromium] arm-skills.spec.ts:31:3 › AI Skill Execution › Blueprints execution pass without timeout (276ms)',
        '[report] 5 passed (1.84s)',
        '✨ Automation Coverage: 85% | Zero Flakiness Detected',
      ],
      stats: { total: 5, passed: 5, failed: 0, duration: '1.84s' },
    },
    {
      id: 'speckit',
      name: 'SpecKit AI Agent Workflows',
      framework: 'Generative AI / SpecKit',
      command: 'speckit generate --blueprint=knowledge-graph --accelerate',
      logs: [
        '[speckit] Ingesting product user stories & OpenAPI schemas...',
        '[speckit] Constructing domain ontology & scenario knowledge graph...',
        '[speckit] Modeling 14 edge cases: concurrency collisions, boundary timeouts, null mutations',
        '✓ Generated test scenario matrix in 1.4s (30% faster authoring cycle)',
        '✓ Synthesized deterministic assertion blueprints with zero hallucinations',
        '✓ Exported structured test spec suite to Playwright (TypeScript)',
        '✨ AI Optimization Verified: Pass rate 100% on validation gates',
      ],
      stats: { total: 14, passed: 14, failed: 0, duration: '1.40s' },
    },
    {
      id: 'api',
      name: 'API Regression Test Suite',
      framework: 'HTTParty / Postman / REST',
      command: 'bundle exec rspec spec/api/atlas_backend_spec.rb',
      logs: [
        'POST /api/v1/auth/session - Status 200 OK (38ms)',
        'GET /api/v1/tenants/atlas/menu - Status 200 OK (45ms)',
        'POST /api/v1/orders/reconcile - Status 201 Created (64ms)',
        'PUT /api/v1/transactions/batch - Idempotency Verified (52ms)',
        '✓ Atlas Backend Suite: 90% endpoint test coverage verified',
        '✨ Zero regression regressions found on critical endpoints',
      ],
      stats: { total: 28, passed: 28, failed: 0, duration: '0.98s' },
    },
    {
      id: 'appium',
      name: 'Mobile Cross-Platform Sanity',
      framework: 'Appium (Ruby) / Android & iOS',
      command: 'appium test --platform=android,ios --device=local-runner',
      logs: [
        '[Appium] Initialized local execution environment (zero cloud latency)',
        '✓ [Android 14 Pixel 8] App Launch -> Biometric Login -> Dashboard Render (1.2s)',
        '✓ [iOS 17 iPhone 15] Navigation Stack -> Checkout Sheet -> Receipt Verification (1.4s)',
        '✓ Offline sync simulation & reconnect packet re-transmission verified',
        '✨ Local pipeline execution completed with 0 server dependency overhead',
      ],
      stats: { total: 8, passed: 8, failed: 0, duration: '2.60s' },
    },
  ];

  const [activeSuiteId, setActiveSuiteId] = useState<string>('playwright');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  const activeSuite = suites.find((s) => s.id === activeSuiteId) || suites[0];

  const runSimulation = () => {
    setIsRunning(true);
    setVisibleLogs([]);

    const logsToPrint = activeSuite.logs;
    let currentIdx = 0;

    const interval = setInterval(() => {
      if (currentIdx < logsToPrint.length) {
        const nextLog = logsToPrint[currentIdx];
        setVisibleLogs((prev) => [...prev, nextLog]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 240);
  };

  useEffect(() => {
    runSimulation();
  }, [activeSuiteId]);

  return (
    <section id="playground" className="py-24 relative overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-pill-cream text-xs font-mono text-[#85532F] uppercase tracking-wider mb-2">
            <Terminal className="w-3.5 h-3.5" />
            Interactive QA Terminal
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight headline-title">
            Direct test execution demo.
          </h2>
          <p className="mt-2 text-base text-[#585550] body-subtext">
            Simulate live test suites across Playwright, SpecKit AI, API endpoints, and Mobile local runners.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Apple Segmented Suite Selector on Cream Canvas */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-stone-200/60 border border-stone-300/60 mb-5 justify-center sm:justify-start">
            {suites.map((s) => {
              const isActive = activeSuiteId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSuiteId(s.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors apple-tap-feedback flex items-center gap-1.5 ${
                    isActive ? 'text-[#1D1D1F] font-semibold' : 'text-[#6E6B65] hover:text-[#1D1D1F]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSuitePill"
                      className="absolute inset-0 rounded-full bg-white border border-stone-200/90 shadow-sm"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                  <Cpu className="w-3.5 h-3.5 relative z-10 text-[#0071E3]" />
                  <span className="relative z-10">{s.name}</span>
                </button>
              );
            })}
          </div>

          {/* High-Contrast Obsidian macOS Terminal Window */}
          <div className="rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(25,20,15,0.25)] font-mono text-xs border border-stone-800 bg-[#12151B]">
            
            {/* macOS Title Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#191D24] border-b border-stone-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]"></span>
                <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></span>
                <span className="ml-3 text-stone-400 text-[11px] font-mono">
                  qa-runner@apple-macbook:~/{activeSuite.id}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-stone-400 hidden sm:inline">
                  Framework: <span className="text-sky-300 font-semibold">{activeSuite.framework}</span>
                </span>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={runSimulation}
                  disabled={isRunning}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-[11px] border border-stone-700 disabled:opacity-50 transition-colors"
                >
                  <RotateCcw className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                  Re-run
                </motion.button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 min-h-[270px] bg-[#12151B] text-stone-300 space-y-2.5">
              <div className="text-stone-500 flex items-center gap-2 pb-2.5 border-b border-stone-800">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-stone-200 font-semibold">{activeSuite.command}</span>
              </div>

              {visibleLogs.map((log, idx) => {
                const isPass = log.includes('✓') || log.includes('PASS') || log.includes('passed');
                const isHighlight = log.includes('✨');
                return (
                  <div
                    key={idx}
                    className={`leading-relaxed transition-opacity duration-200 ${
                      isHighlight
                        ? 'text-amber-300 font-bold pt-1'
                        : isPass
                        ? 'text-emerald-400 font-medium'
                        : 'text-stone-300'
                    }`}
                  >
                    {log}
                  </div>
                );
              })}

              {isRunning && (
                <div className="flex items-center gap-2 text-sky-400 animate-pulse pt-2 font-sans">
                  <span className="inline-block w-2 h-4 bg-sky-400"></span>
                  <span className="text-xs">Executing test assertions in parallel...</span>
                </div>
              )}
            </div>

            {/* Terminal Status Bar */}
            <div className="px-6 py-3.5 bg-[#191D24] border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-[11px]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {activeSuite.stats.passed} Passed
                </span>
                <span className="text-stone-500">0 Failed</span>
                <span className="text-stone-400">Time: {activeSuite.stats.duration}</span>
              </div>

              <div className="flex items-center gap-2 text-stone-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Deterministic Quality Verification</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
