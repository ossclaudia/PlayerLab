import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBsYXllciUyMHNpbGhvdWV0dGUlMjBzdGFkaXVtJTIwbGlnaHRzJTIwZGFya3xlbnwwfHx8fDE3ODEwODI1OTJ8MA&ixlib=rb-4.1.0&q=85";

const stats = [
  { num: "01", label: "Técnica" },
  { num: "02", label: "Performance" },
  { num: "03", label: "Posição" },
];

export default function Hero({ onJoinClick }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
      data-testid="hero-section"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Jogadores de futebol num estádio à noite"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/60 to-ink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,85,255,0.15),transparent_70%)]" />
      </div>

      {/* Side rails */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-3 items-center">
        <div className="w-px h-24 bg-white/20" />
        <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase rotate-180" style={{ writingMode: "vertical-rl" }}>
          PlayerLab / 2026
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 bg-white/5 backdrop-blur-md mb-8"
          data-testid="hero-location-badge"
        >
          <MapPin size={14} className="text-electric" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/90">
            Campos de Sanguedo · Portugal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-black uppercase text-white leading-[0.85] tracking-tighter text-balance"
          style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
          data-testid="hero-headline"
        >
          Desenvolve <br />
          <span className="text-white/90">o teu</span>{" "}
          <span className="text-electric text-glow">Jogo.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-zinc-300 font-body leading-relaxed"
          data-testid="hero-subheadline"
        >
          Treino especializado de futebol pensado para libertar
          o potencial individual de cada jogador.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={onJoinClick}
            data-testid="hero-primary-cta"
            className="group inline-flex items-center justify-center gap-3 bg-electric text-white px-8 py-5 font-heading text-lg md:text-xl uppercase tracking-widest hover:bg-electric-hover hover:shadow-[0_0_40px_rgba(0,85,255,0.6)] transition-all duration-300"
          >
            Inscreve-te no PlayerLab
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#labs"
            data-testid="hero-secondary-cta"
            className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-5 font-heading text-lg md:text-xl uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-300"
          >
            Explora Programas
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 md:mt-28 grid grid-cols-3 max-w-2xl border-t border-white/10 pt-6"
          data-testid="hero-stats"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
              className="flex flex-col gap-1"
            >
              <span className="font-heading text-electric text-sm font-bold tracking-[0.25em]">
                {s.num}
              </span>
              <span className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
