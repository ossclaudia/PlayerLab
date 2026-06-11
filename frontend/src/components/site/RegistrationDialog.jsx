import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Loader2 } from "lucide-react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdTiFRKrLJNT8IU8JmhUnytOpmuP0_aRSu1Q2o1jbiEfp8ljg/viewform";
const FORM_EMBED_URL = `${FORM_URL}?embedded=true`;

export default function RegistrationDialog({ open, onClose }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (open) setLoading(true);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-navy/70 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto"
          onClick={onClose}
          data-testid="registration-overlay"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-cream-100 border border-mist shadow-2xl max-h-[92vh] flex flex-col"
            data-testid="registration-dialog"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-mist bg-white">
              <div>
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold-600">
                  / Inscrição
                </span>
                <h3 className="mt-1 font-heading text-2xl md:text-3xl font-black uppercase tracking-tight text-navy">
                  Junta-te ao <span className="text-gold-gradient">PlayerLab.</span>
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center text-navy hover:bg-cream-200 transition-colors"
                data-testid="registration-close-btn"
                aria-label="fechar"
              >
                <X size={22} />
              </button>
            </div>

            {/* Iframe wrapper */}
            <div className="relative flex-1 min-h-[60vh] bg-white">
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 bg-cream-100">
                  <Loader2 size={28} className="animate-spin text-navy" />
                  <span className="text-xs uppercase tracking-[0.25em] text-navy/60 font-bold">
                    A carregar formulário...
                  </span>
                </div>
              )}
              <iframe
                title="Formulário de inscrição PlayerLab"
                src={FORM_EMBED_URL}
                className="w-full h-[70vh] md:h-[75vh] border-0"
                onLoad={() => setLoading(false)}
                data-testid="registration-form-iframe"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 md:px-8 py-4 border-t border-mist bg-cream-100">
              <span className="text-[11px] uppercase tracking-[0.25em] text-navy/50 font-bold">
                Os dados são recebidos diretamente pela equipa PlayerLab.
              </span>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-navy hover:text-gold-600 transition-colors"
                data-testid="registration-open-external"
              >
                Abrir em nova janela
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
