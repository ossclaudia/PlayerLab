import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

const coaches = [
  {
    name: "Rui Marques",
    role: "Head Coach · Técnica",
    img: "https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=srgb&fm=jpg",
    certs: ["UEFA B", "10+ anos de experiência"],
    bio: "Especialista em desenvolvimento técnico individual.",
  },
  {
    name: "André Pinto",
    role: "Performance Coach",
    img: "https://images.unsplash.com/photo-1652400744403-8f29705bd6a5?crop=entropy&cs=srgb&fm=jpg",
    certs: ["Licenciado em Ciências do Desporto", "FIFA Diploma Fitness"],
    bio: "Foco em velocidade, agilidade e prevenção de lesões.",
  },
  {
    name: "Miguel Santos",
    role: "Position Coach",
    img: "https://images.unsplash.com/photo-1434847868581-86e8a2b8e7a3?crop=entropy&cs=srgb&fm=jpg",
    certs: ["UEFA A", "Ex-jogador profissional"],
    bio: "Treino tático e técnico específico por posição.",
  },
];

export default function Coaches() {
  return (
    <section
      id="coaches"
      className="relative py-24 md:py-40 bg-ink-800"
      data-testid="coaches-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-electric">
            / Equipa Técnica
          </span>
          <h2 className="mt-6 font-heading font-black uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Conhece os <br />
            <span className="text-electric">treinadores.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coaches.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              data-testid={`coach-card-${i + 1}`}
              className="group relative overflow-hidden bg-ink-900 border border-white/5 hover:border-electric/30 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="w-8 h-8 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-electric transition-colors">
                    <Instagram size={14} className="text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-electric transition-colors">
                    <Linkedin size={14} className="text-white" />
                  </a>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-electric">
                  {c.role}
                </span>
                <h3 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-white">
                  {c.name}
                </h3>
                <p className="mt-2 text-zinc-400 text-sm font-body">{c.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.certs.map((cert) => (
                    <span key={cert} className="text-[10px] uppercase tracking-wider px-2.5 py-1 border border-white/10 text-zinc-300">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
