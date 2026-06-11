import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Crosshair, ArrowUpRight } from "lucide-react";

const labs = [
  {
    id: "technique",
    num: "01",
    title: "Technique",
    sub: "Domínio Técnico",
    desc: "Sessões dedicadas a cada detalhe do toque ao remate.",
    icon: Target,
    skills: ["Passe", "Receção", "Controlo", "1.º toque", "Drible", "Finalização", "Condução"],
  },
  {
    id: "performance",
    num: "02",
    title: "Performance",
    sub: "Performance Física",
    desc: "Sessões focadas na performance física e prevenção a lesões.",
    icon: Zap,
    skills: ["Velocidade", "Agilidade", "Coordenação", "Mudança de direção", "Potência", "Prevenção"],
  },
  {
    id: "position",
    num: "03",
    title: "Position",
    sub: "Treino por Posição",
    desc: "Sessões adaptadas às exigências reais de cada posição em campo.",
    icon: Crosshair,
    skills: ["Guarda-redes", "Defesas", "Médios", "Avançados", "Tática específica"],
  },
];

export default function ThreeLabs() {
  return (
    <>
      <section
        id="sobre"
        className="relative py-20 md:py-28 bg-cream"
        data-testid="about-section"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold-600"
          >
            / Metodologia PlayerLab
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-6 font-heading font-black uppercase text-navy leading-[0.95] tracking-tight text-balance"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
          >
            Três áreas. <span className="text-gold-gradient">Um plano único</span> para cada jogador.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl mx-auto text-navy/70 text-base md:text-lg leading-relaxed font-body"
          >
            O PlayerLab complementa o treino de clube com trabalho individual
            focado nos detalhes que fazem a diferença.
          </motion.p>
        </div>
      </section>

      <section
        id="labs"
        className="relative py-20 md:py-32 bg-cream-100"
        data-testid="three-labs-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {labs.map((lab, i) => {
              const Icon = lab.icon;
              return (
                <motion.div
                  key={lab.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  data-testid={`lab-card-${lab.id}`}
                  className="group relative bg-white border border-mist p-6 md:p-8 hover:border-navy hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-gold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="flex items-start justify-between mb-10 relative z-10">
                    <span className="font-heading text-7xl font-black text-mist group-hover:text-gold/40 transition-colors leading-none">
                      {lab.num}
                    </span>
                    <div className="w-14 h-14 bg-navy/5 border border-navy/10 group-hover:bg-navy group-hover:border-navy flex items-center justify-center transition-all duration-300 shrink-0">
                      <Icon size={24} className="text-navy group-hover:text-gold transition-colors" strokeWidth={1.5} />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold-600">
                    PlayerLab
                  </span>
                  <h3
                    className="mt-1 font-heading font-black uppercase tracking-tight text-navy relative z-10 leading-[0.95] break-words"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                  >
                    {lab.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm font-bold uppercase tracking-widest text-navy/50">
                    {lab.sub}
                  </p>
                  <p className="mt-5 text-navy/70 font-body text-base leading-relaxed relative z-10">
                    {lab.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2 relative z-10">
                    {lab.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] tracking-wider uppercase px-3 py-1.5 bg-cream border border-mist text-navy/80 group-hover:border-navy/30 transition-all"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex items-center justify-between border-t border-mist pt-6 relative z-10">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-navy/50 font-bold">
                      Programa Especializado
                    </span>
                    <ArrowUpRight size={20} className="text-navy/40 group-hover:text-gold-600 group-hover:rotate-45 transition-all" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
