import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
    alt: "Estádio de futebol à noite",
  },
  {
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    alt: "Jogador a chutar a bola",
  },
  {
    url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=1200&q=80",
    alt: "Treino de futebol",
  },
  {
    url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    alt: "Atletas em corrida",
  },
];

export default function Hero({ onJoinClick }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-cream-100"
      data-testid="hero-section"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-36 pb-20 min-h-screen flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
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
            o teu <span className="text-gold-600">jogo.</span>
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-mist pt-6"
          >
            <Stat num="4+" label="Anos" />
            <Stat num="3" label="Labs" />
            <Stat num="1:1" label="Individual ou Pequenos Grupos" />
          </motion.div>
        </div>

        {/* RIGHT — carousel */}
        <div className="flex-1 w-full max-w-xl relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto"
            data-testid="hero-carousel"
          >
            <div className="absolute inset-0 overflow-hidden shadow-2xl bg-navy">
              <AnimatePresence mode="sync">
                <motion.img
                  key={idx}
                  src={SLIDES[idx].url}
                  alt={SLIDES[idx].alt}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`slide ${i + 1}`}
                    data-testid={`hero-slide-dot-${i}`}
                    className={`h-1.5 transition-all ${
                      i === idx ? "w-8 bg-gold" : "w-1.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-gold" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ num, label }) {
  return (
    <div>
      <div className="font-heading text-4xl md:text-5xl font-black text-navy leading-none">{num}</div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-navy/50 mt-2 font-bold leading-tight">{label}</div>
    </div>
  );
}
