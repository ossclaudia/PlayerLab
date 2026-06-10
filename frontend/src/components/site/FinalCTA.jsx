import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA({ onJoinClick }) {
  return (
    <section
      id="cta-final"
      className="relative py-32 md:py-48 bg-ink-900 overflow-hidden border-t border-electric/20"
      data-testid="final-cta-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,85,255,0.15),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-bold tracking-[0.3em] uppercase text-electric"
        >
          / Próximo Passo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-6 font-heading font-black uppercase text-white leading-[0.88] tracking-tighter text-balance"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
        >
          O teu <br />
          desenvolvimento <br />
          <span className="text-electric text-glow">começa agora.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-zinc-300 font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Dá o próximo passo na tua jornada no futebol e desbloqueia o
          teu potencial com o PlayerLab.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <button
            onClick={onJoinClick}
            data-testid="final-cta-btn"
            className="group inline-flex items-center justify-center gap-3 bg-electric text-white px-10 py-6 font-heading text-xl md:text-2xl uppercase tracking-widest hover:bg-electric-hover hover:shadow-[0_0_60px_rgba(0,85,255,0.6)] transition-all duration-300"
          >
            Inscreve-te no PlayerLab
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
