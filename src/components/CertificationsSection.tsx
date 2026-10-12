import React, { useState, useEffect } from 'react';
import { 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  X, 
  Download, 
  ExternalLink 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { certificationsData, educationData, Certification } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Close modal on Escape key and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-24 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-pill-cream text-xs font-mono text-[#85532F] uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            Verified Credentials & Evidence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight headline-title">
            Certifications & Education
          </h2>
          <p className="mt-2 text-base text-[#585550] body-subtext">
            Backed by official International Software Testing Qualifications Board standards. Click any verified credential to view the official document proof.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={() => {
                if (cert.hasProof) setSelectedCert(cert);
              }}
              className={`apple-cream-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden ${
                cert.hasProof ? 'cursor-pointer hover:border-emerald-300/80 hover:shadow-lg' : ''
              }`}
            >
              {/* Apple Specular Bevel Top Highlight */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.badgeColor} rounded-t-3xl`}></div>

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-[#A3704C] group-hover:scale-105 transition-transform shadow-2xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-stone-100 text-[#1D1D1F] font-bold border border-stone-200">
                      {cert.code}
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-[#86847F] mt-1 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-[#585550] leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Bottom footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#86847F] font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#A3704C]" />
                  {cert.date}
                </span>

                {cert.hasProof ? (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 group-hover:bg-emerald-100 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Proof
                  </span>
                ) : (
                  <span className="text-[#0071E3] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Certified
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Degree Diploma Card */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="max-w-4xl mx-auto rounded-3xl apple-cream-elevated p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#A3704C] shrink-0 shadow-2xs">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#85532F]">
                  Higher Education
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs font-mono text-[#86847F]">{educationData.period}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mt-1">
                {educationData.degree}
              </h3>
              <p className="text-sm text-[#585550] mt-1">
                {educationData.institution}
              </p>
              <p className="text-xs text-[#6E6B65] mt-2 max-w-xl leading-relaxed">
                <strong className="text-[#1D1D1F] font-medium">Core Focus: </strong>
                {educationData.focus}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-xs font-mono text-[#585550] shrink-0 self-stretch md:self-auto pt-4 md:pt-0 border-t md:border-t-0 border-stone-100">
            <div className="flex items-center gap-1.5 bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200">
              <MapPin className="w-3.5 h-3.5 text-[#86847F]" />
              <span>{educationData.location}</span>
            </div>
            <span className="text-emerald-700 font-semibold flex items-center gap-1 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Graduated 2024
            </span>
          </div>
        </motion.div>

      </div>

      {/* Apple Exhibition Gallery Frame Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && selectedCert.imageJpg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
            
            {/* Frosted Scrim Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-stone-900/80 backdrop-blur-2xl"
            />

            {/* Gallery Frame Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative z-10 bg-[#12151B] text-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-stone-800"
            >
              {/* macOS Window Header */}
              <div className="flex items-center justify-between px-5 py-4 bg-[#191D24] border-b border-stone-800 shrink-0">
                <div className="flex items-center gap-3">
                  {/* Traffic lights / Close button */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCert(null)}
                    className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border border-[#e0443e] flex items-center justify-center text-black/70 hover:opacity-80 transition-opacity"
                    title="Close"
                  >
                    <X className="w-2.5 h-2.5" />
                  </motion.button>
                  <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></span>

                  <div className="ml-2 flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                      {selectedCert.title}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-amber-300 border border-white/10 hidden sm:inline">
                      {selectedCert.certificateNumber}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.imageJpg}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-xs text-stone-200 border border-white/10 apple-tap-feedback transition-colors"
                    title="Open Full Image in New Tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline">Full View</span>
                  </a>

                  <a
                    href={selectedCert.imageJpg}
                    download={`${selectedCert.code}_Certificate_Uosef_Talaat.jpg`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/20 hover:bg-blue-500/30 text-xs text-blue-300 border border-blue-500/30 apple-tap-feedback transition-colors"
                    title="Download Certificate"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-stone-300 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Mat Board Frame Container */}
              <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex items-center justify-center bg-[#07090e]">
                <div className="relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-white/15 to-white/5 shadow-2xl border border-white/15 max-w-3xl w-full">
                  <picture>
                    <source srcSet={selectedCert.imageWebp} type="image/webp" />
                    <img
                      src={selectedCert.imageJpg}
                      alt={selectedCert.title}
                      className="w-full h-auto max-h-[68vh] object-contain rounded-xl shadow-2xl bg-white"
                    />
                  </picture>
                </div>
              </div>

              {/* Window Footer with Official Verification Bar */}
              <div className="px-5 py-3.5 bg-[#191D24] border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
                <div className="flex items-center gap-2 text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>
                    Officially issued by <strong className="text-white">{selectedCert.issuer}</strong>
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="font-mono text-stone-400">{selectedCert.certificateNumber}</span>
                </div>

                <div className="flex items-center gap-3 text-stone-400 text-[11px] font-mono">
                  <span>Press Esc to close</span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
