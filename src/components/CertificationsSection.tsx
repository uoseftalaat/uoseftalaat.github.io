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
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { certificationsData, educationData, Certification } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [copiedId, setCopiedId] = useState(false);

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

  const copyCertId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section id="certifications" className="py-24 sm:py-28 relative border-t border-[#DDD8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="section-title">
            Certifications & Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A453E] max-w-xl body-subtext leading-relaxed">
            Backed by official International Software Testing Qualifications Board standards. Click any verified credential to inspect the official document proof.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={() => setSelectedCert(cert)}
              className="editorial-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden bg-white border border-[#DDD8CF] cursor-pointer hover:border-[#C0392B]/50"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0392B] via-[#855C00] to-[#C0392B]"></div>

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#DDD8CF] flex items-center justify-center text-[#855C00] group-hover:scale-105 transition-transform shadow-xs">
                    <ShieldCheck className="w-5 h-5 text-[#855C00]" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-[#FAF7F2] text-[#1C1A17] font-bold border border-[#DDD8CF]">
                      {cert.code}
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-[#1C1A17] font-display group-hover:text-[#C0392B] transition-colors leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-[#855C00] font-mono mt-1 mb-3 font-semibold">
                  {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed mb-6 font-sans">
                  {cert.description}
                </p>
              </div>

              {/* Bottom footer */}
              <div className="pt-4 border-t border-[#DDD8CF] flex items-center justify-between text-xs text-[#7A7367] font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C0392B]" />
                  {cert.date}
                </span>

                <span className="bg-[#F8F4EA] border border-[#855C00]/30 text-[#855C00] px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 group-hover:bg-[#855C00] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Inspect Proof
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Degree Diploma Card */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="max-w-4xl mx-auto rounded-2xl editorial-card p-7 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden bg-white border border-[#DDD8CF]"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#DDD8CF] flex items-center justify-center text-[#855C00] shrink-0 shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#855C00]">
                  Higher Education
                </span>
                <span className="text-[#DDD8CF]">•</span>
                <span className="text-xs font-mono text-[#7A7367]">{educationData.period}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C1A17] font-display mt-1">
                {educationData.degree}
              </h3>
              <p className="text-sm font-semibold text-[#4A453E] mt-1 font-sans">
                {educationData.institution}
              </p>
              <p className="text-xs sm:text-sm text-[#7A7367] mt-2 max-w-xl leading-relaxed font-sans">
                <strong className="text-[#1C1A17] font-semibold">Core Focus: </strong>
                {educationData.focus}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-xs text-[#7A7367] shrink-0 self-stretch md:self-auto pt-4 md:pt-0 border-t md:border-t-0 border-[#DDD8CF]">
            <div className="flex items-center gap-1.5 bg-[#FAF7F2] px-3.5 py-1.5 rounded-lg border border-[#DDD8CF]">
              <MapPin className="w-3.5 h-3.5 text-[#C0392B]" />
              <span className="text-[#1C1A17] font-medium">{educationData.location}</span>
            </div>
            <span className="text-[#855C00] font-semibold flex items-center gap-1 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Graduated 2024
            </span>
          </div>
        </motion.div>

      </div>

      {/* Real Certificate Proof Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && selectedCert.imageJpg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
            
            {/* Scrim Backdrop (Apple Dim to Focus) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Document Frame Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative z-10 bg-white text-[#1C1A17] rounded-2xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden border border-[#DDD8CF]"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#FAF7F2] border-b border-[#DDD8CF] shrink-0 gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCert(null)}
                    className="w-3.5 h-3.5 rounded-full bg-[#C0392B] flex items-center justify-center text-white/90 hover:opacity-80 transition-opacity shrink-0"
                    title="Close"
                  >
                    <X className="w-2.5 h-2.5" />
                  </motion.button>
                  <span className="w-3 h-3 rounded-full bg-[#855C00]/40 hidden sm:inline-block shrink-0"></span>
                  <span className="w-3 h-3 rounded-full bg-[#DDD8CF] hidden sm:inline-block shrink-0"></span>

                  <div className="ml-1 sm:ml-2 flex items-center gap-2 truncate">
                    <span className="text-xs sm:text-sm font-bold font-display text-[#1C1A17] tracking-tight truncate">
                      {selectedCert.title}
                    </span>
                    {selectedCert.certificateNumber && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F8F4EA] text-[#855C00] border border-[#855C00]/30 hidden md:inline shrink-0 font-semibold">
                        {selectedCert.certificateNumber}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={selectedCert.imageJpg}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-xs font-mono text-[#1C1A17] border border-[#DDD8CF] transition-colors min-h-[36px] shadow-xs"
                    title="Open Full Image in New Tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#C0392B]" />
                    <span className="hidden sm:inline">Full Scan</span>
                  </a>

                  <a
                    href={selectedCert.imageJpg}
                    download={`${selectedCert.code}_Certificate_Uosef_Talaat.jpg`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#C0392B] hover:bg-[#9E2B1F] text-xs font-sans font-medium text-white transition-colors min-h-[36px] shadow-xs tap-feedback"
                    title="Download Certificate"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCert(null)}
                    className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-xl bg-white hover:bg-[#FAF7F2] text-[#7A7367] hover:text-[#1C1A17] border border-[#DDD8CF] transition-colors shadow-xs"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Real Certificate Image Frame */}
              <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-[rgba(28,26,23,0.03)]">
                <div className="relative rounded-xl p-2 bg-white border border-[#DDD8CF] max-w-3xl w-full shadow-lg">
                  <picture>
                    <source srcSet={selectedCert.imageWebp} type="image/webp" />
                    <img
                      src={selectedCert.imageJpg}
                      alt={`${selectedCert.title} - Official Proof`}
                      className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-sm bg-white"
                      loading="eager"
                    />
                  </picture>
                </div>
              </div>

              {/* Window Footer */}
              <div className="px-6 py-3.5 bg-[#FAF7F2] border-t border-[#DDD8CF] flex flex-wrap items-center justify-between gap-3 text-xs shrink-0 font-sans">
                <div className="flex items-center gap-2 text-[#4A453E]">
                  <CheckCircle2 className="w-4 h-4 text-[#855C00]" />
                  <span>
                    Officially issued by <strong className="text-[#1C1A17]">{selectedCert.issuer}</strong>
                  </span>
                  <span className="text-[#DDD8CF]">•</span>
                  <span className="text-[#855C00] font-mono font-medium">{selectedCert.certificateNumber}</span>
                </div>

                {selectedCert.certificateNumber && (
                  <button
                    onClick={() => copyCertId(selectedCert.certificateNumber || '')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-xs font-mono text-[#1C1A17] border border-[#DDD8CF] transition-colors shadow-xs tap-feedback"
                  >
                    {copiedId ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#C0392B]" />
                        <span className="text-[#C0392B] font-bold">Copied ID!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Certificate ID</span>
                      </>
                    )}
                  </button>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
