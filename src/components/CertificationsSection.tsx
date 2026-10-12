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
    <section id="certifications" className="py-24 relative bg-[#08090D] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0E1017] border border-white/10 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>06 // VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight headline-title">
            Certifications & Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF] max-w-xl body-subtext">
            Backed by official International Software Testing Qualifications Board standards. Click any verified credential to view official document proof.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={() => {
                if (cert.hasProof) setSelectedCert(cert);
              }}
              className={`mono-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden bg-[#0E1017] border border-white/10 hover:border-white/20 transition-all ${
                cert.hasProof ? 'cursor-pointer hover:border-emerald-500/50' : ''
              }`}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.badgeColor}`}></div>

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#141722] border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#141722] text-white font-bold border border-white/8">
                      {cert.code}
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-[#9CA3AF] font-mono mt-1 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-6 font-sans">
                  {cert.description}
                </p>
              </div>

              {/* Bottom footer */}
              <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs text-[#9CA3AF] font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  {cert.date}
                </span>

                {cert.hasProof ? (
                  <span className="mono-pill-emerald px-2.5 py-1 rounded text-[11px] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Inspect Proof
                  </span>
                ) : (
                  <span className="text-cyan-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
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
          className="max-w-4xl mx-auto rounded-2xl mono-elevated p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden bg-[#0E1017] border border-white/12"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-lg bg-[#141722] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                  Higher Education
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono text-[#9CA3AF]">{educationData.period}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {educationData.degree}
              </h3>
              <p className="text-sm font-mono text-[#9CA3AF] mt-1">
                {educationData.institution}
              </p>
              <p className="text-xs text-[#D1D5DB] mt-2 max-w-xl leading-relaxed font-sans">
                <strong className="text-white font-medium">Core Focus: </strong>
                {educationData.focus}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-xs font-mono text-[#9CA3AF] shrink-0 self-stretch md:self-auto pt-4 md:pt-0 border-t md:border-t-0 border-white/8">
            <div className="flex items-center gap-1.5 bg-[#141722] px-3 py-1.5 rounded-md border border-white/8">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{educationData.location}</span>
            </div>
            <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Graduated 2024
            </span>
          </div>
        </motion.div>

      </div>

      {/* Proof Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && selectedCert.imageJpg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
            
            {/* Scrim Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Gallery Frame Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative z-10 bg-[#0A0C11] text-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-white/15"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 sm:px-5 py-3 sm:py-3.5 bg-[#0F121A] border-b border-white/8 shrink-0 gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCert(null)}
                    className="w-3.5 h-3.5 rounded-full bg-[#EF4444] flex items-center justify-center text-black/70 hover:opacity-80 transition-opacity shrink-0"
                    title="Close"
                  >
                    <X className="w-2.5 h-2.5" />
                  </motion.button>
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] hidden sm:inline-block shrink-0"></span>
                  <span className="w-3 h-3 rounded-full bg-[#10B981] hidden sm:inline-block shrink-0"></span>

                  <div className="ml-1 sm:ml-2 flex items-center gap-2 truncate">
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-tight truncate">
                      {selectedCert.title}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-emerald-400 border border-white/10 hidden md:inline shrink-0">
                      {selectedCert.certificateNumber}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <a
                    href={selectedCert.imageJpg}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#141722] hover:bg-[#1A1E2C] text-xs font-mono text-[#D1D5DB] border border-white/10 transition-colors min-h-[36px]"
                    title="Open Full Image in New Tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="hidden sm:inline">Full View</span>
                  </a>

                  <a
                    href={selectedCert.imageJpg}
                    download={`${selectedCert.code}_Certificate_Uosef_Talaat.jpg`}
                    className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs font-mono font-semibold text-[#08090D] transition-colors min-h-[36px]"
                    title="Download Certificate"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCert(null)}
                    className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-[#9CA3AF] hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Document Image Frame Container */}
              <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-black/60">
                <div className="relative rounded-xl p-2 bg-[#0E1017] border border-white/10 max-w-3xl w-full">
                  <picture>
                    <source srcSet={selectedCert.imageWebp} type="image/webp" />
                    <img
                      src={selectedCert.imageJpg}
                      alt={selectedCert.title}
                      className="w-full h-auto max-h-[68vh] object-contain rounded-lg shadow-xl bg-white"
                    />
                  </picture>
                </div>
              </div>

              {/* Window Footer */}
              <div className="px-5 py-3.5 bg-[#0F121A] border-t border-white/8 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0 font-mono">
                <div className="flex items-center gap-2 text-[#9CA3AF]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>
                    Officially issued by <strong className="text-white">{selectedCert.issuer}</strong>
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-cyan-400">{selectedCert.certificateNumber}</span>
                </div>

                <div className="flex items-center gap-3 text-[#6B7280] text-[11px]">
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
