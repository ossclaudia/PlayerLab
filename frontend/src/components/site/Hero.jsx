import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_develop-your-game/artifacts/l8zctd3g_Logo.png";

const FOOTBALL_IMG =
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBsYXllciUyMHNpbGhvdWV0dGUlMjBzdGFkaXVtJTIwbGlnaHRzJTIwZGFya3xlbnwwfHx8fDE3ODEwODI1OTJ8MA&ixlib=rb-4.1.0&q=85";

export default function Hero({ onJoinClick }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-cream-100"
      data-testid="hero-section"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      {/* Subtle navy glow blob */}
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-20 min-h-screen flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* LEFT — text */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 border border-navy/10 mb-8"
            data-testid="hero-location-badge"
          >
            <MapPin size={14} className="text-gold-600" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-navy">
              Campos de Sanguedo · Portugal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black uppercase text-navy leading-[0.85] tracking-tighter text-balance"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            data-testid="hero-headline"
          >
            Desenvolve <br />
            o teu <span className="text-gold-gradient">jogo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg md:text-xl text-navy/70 font-body leading-relaxed"
            data-testid="hero-subheadline"
          >
            O <strong className="text-navy">PlayerLab</strong> é uma academia
            especializada no desenvolvimento individual de jovens jogadores
            — Técnica, Performance e Posição. Trabalhamos os detalhes que
            o treino de equipa não consegue cobrir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onJoinClick}
              data-testid="hero-primary-cta"
              className="group inline-flex items-center justify-center gap-3 bg-navy text-white px-8 py-5 font-heading text-lg md:text-xl uppercase tracking-widest hover:bg-navy-800 hover:shadow-2xl transition-all duration-300"
            >
              Inscreve-te no PlayerLab
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#labs"
              data-testid="hero-secondary-cta"
              className="inline-flex items-center justify-center bg-transparent border-2 border-navy text-navy px-8 py-5 font-heading text-lg md:text-xl uppercase tracking-widest hover:bg-navy hover:text-white transition-all duration-300"
            >
              Conhecer os Labs
            </a>
          </motion.div>

          {/* trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-mist pt-6"
          >
            <Stat num="8-18" label="Anos" />
            <Stat num="3" label="Labs" />
            <Stat num="1:1" label="Foco Individual" />
          </motion.div>
        </div>

        {/* RIGHT — logo + image */}
        <div className="flex-1 w-full max-w-xl relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto"
          >
            {/* Navy block with logo */}
            <div className="absolute inset-0 bg-navy shadow-2xl overflow-hidden">
              <img
                src={FOOTBALL_IMG}
                alt="Futebol"
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/70 to-navy-900" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                <motion.img
                  src={LOGO_URL}
                  alt="PlayerLab"
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
                  className="w-48 md:w-60 object-contain"
                  data-testid="hero-logo"
                />
              </div>
              <div className="absolute bottom-6 left-6 text-white/80 text-[10px] tracking-[0.3em] uppercase font-bold">
                Academia · 2026
              </div>
              <div className="absolute top-6 right-6 text-gold text-[10px] tracking-[0.3em] uppercase font-bold">
                / Player Development
              </div>
            </div>

            {/* gold corner accents */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-gold" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-gold" />
          </motion.div>
        </div>
      </div>

      {/* bottom scroll cue */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-navy/40 hover:text-navy transition-colors"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-navy/40 to-transparent" />
      </motion.a>
    </section>
  );
}

function Stat({ num, label }) {
  return (
    <div>
      <div className="font-heading text-4xl md:text-5xl font-black text-navy leading-none">{num}</div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-navy/50 mt-2 font-bold">{label}</div>
    </div>
  );
}
