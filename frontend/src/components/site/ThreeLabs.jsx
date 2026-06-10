import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Crosshair, ArrowUpRight } from "lucide-react";

const labs = [
  {
    id: "technique",
    num: "01",
    title: "PlayerLab Technique",
    desc: "Domina os fundamentos técnicos do futebol.",
    icon: Target,
    skills: ["Passe", "Receção", "Controlo de bola", "Primeiro toque", "Drible", "Finalização", "Condução"],
  },
  {
    id: "performance",
    num: "02",
    title: "PlayerLab Performance",
    desc: "Constrói velocidade, agilidade, potência e performance atlética.",
    icon: Zap,
    skills: ["Velocidade", "Agilidade", "Coordenação", "Mudança de direção", "Potência", "Prevenção de lesões"],
  },
  {
    id: "position",
    num: "03",
    title: "PlayerLab Position",
    desc: "Treina especificamente para as exigências da tua posição.",
    icon: Crosshair,
    skills: ["Guarda-redes", "Defesas", "Médios", "Avançados", "Tática específica", "Situações de jogo"],
  },
];

export default function ThreeLabs() {
  return (
    <section
      id="labs"
      className="relative py-24 md:py-40 bg-ink-800"
      data-testid="three-labs-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-electric">
            / Metodologia
          </span>
          <h2 className="mt-6 font-heading font-black uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}>
            Três Labs. <br />
            <span className="text-zinc-500">Um só objetivo:</span> <br />
            <span className="text-electric">Evolução.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labs.map((lab, i) => {
            const Icon = lab.icon;
            return (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                data-testid={`lab-card-${lab.id}`}
                className="group relative bg-ink-900 border border-white/5 p-8 md:p-10 hover:border-electric/50 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-electric/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="flex items-start justify-between mb-12 relative z-10">
                  <span className="font-heading text-7xl font-black text-white/5 group-hover:text-electric/30 transition-colors leading-none">
                    {lab.num}
                  </span>
                  <div className="w-14 h-14 bg-white/5 border border-white/10 group-hover:bg-electric group-hover:border-electric flex items-center justify-center transition-all duration-300">
                    <Icon size={24} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-white relative z-10">
                  {lab.title}
                </h3>
                <p className="mt-4 text-zinc-400 font-body text-base leading-relaxed relative z-10">
                  {lab.desc}
                </p>

                <div className="mt-8 flex flex-wrap gap-2 relative z-10">
                  {lab.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] tracking-wider uppercase px-3 py-1.5 bg-white/[0.03] border border-white/10 text-zinc-300 group-hover:border-electric/30 group-hover:text-white transition-all"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6 relative z-10">
                  <span className="text-[11px] tracking-[0.3em] uppercase text-zinc-500">
                    Programa Especializado
                  </span>
                  <ArrowUpRight size={20} className="text-zinc-500 group-hover:text-electric group-hover:rotate-45 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
