import React from "react";
import { motion } from "framer-motion";

const IMG = "https://images.unsplash.com/photo-1759210720456-c9814f721479?crop=entropy&cs=srgb&fm=jpg";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-24 md:py-40 bg-ink-900 overflow-hidden"
      data-testid="manifesto-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-electric">
              / Manifesto
            </span>
            <h2 className="mt-6 font-heading font-black uppercase text-white text-balance leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Cada jogador <br />
              evolui de forma <br />
              <span className="text-electric">diferente.</span>
            </h2>

            <div className="mt-10 space-y-6 text-zinc-300 text-lg leading-relaxed font-body max-w-xl">
              <p>
                O treino tradicional de equipa nem sempre permite o tempo necessário
                para trabalhar os <strong className="text-white">detalhes individuais</strong> que
                fazem a diferença no jogo.
              </p>
              <p>
                O PlayerLab foi criado para ajudar jovens jogadores a desenvolver
                capacidades técnicas, físicas e específicas de posição através
                de um treino <strong className="text-white">focado e especializado</strong>.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="font-heading text-5xl font-black text-electric leading-none">8-18</div>
                <div className="text-xs uppercase tracking-[0.25em] text-zinc-500 mt-2">Anos</div>
              </div>
              <div>
                <div className="font-heading text-5xl font-black text-white leading-none">3</div>
                <div className="text-xs uppercase tracking-[0.25em] text-zinc-500 mt-2">Labs Especializados</div>
              </div>
              <div>
                <div className="font-heading text-5xl font-black text-white leading-none">1:1</div>
                <div className="text-xs uppercase tracking-[0.25em] text-zinc-500 mt-2">Foco Individual</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={IMG}
                alt="Treino intenso de futebol"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-electric" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-electric" />
            <div className="absolute bottom-8 left-8 bg-ink-900/80 backdrop-blur-md px-5 py-3 border border-white/10">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-electric">
                / Foco Individual
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
