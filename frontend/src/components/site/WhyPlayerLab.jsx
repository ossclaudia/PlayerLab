import React from "react";
import { motion } from "framer-motion";
import { User, Users, Lightbulb, TrendingUp, Compass, Heart } from "lucide-react";

const features = [
  { icon: User, title: "Desenvolvimento Individual", desc: "Cada plano é desenhado à medida do jogador, com objetivos próprios." },
  { icon: Users, title: "Treino em Pequenos Grupos", desc: "Grupos reduzidos garantem atenção e qualidade em todas as sessões." },
  { icon: Lightbulb, title: "Metodologia Especializada", desc: "Treinos baseados nas melhores práticas internacionais de formação." },
  { icon: TrendingUp, title: "Foco na Performance", desc: "Combinação de técnica, físico e tática para resultados reais no jogo." },
  { icon: Compass, title: "Treino por Posição", desc: "Sessões adaptadas às exigências reais de cada posição em campo." },
  { icon: Heart, title: "Ambiente Positivo", desc: "Espaço de aprendizagem onde o jogador se sente seguro para evoluir." },
];

export default function WhyPlayerLab() {
  return (
    <section
      id="why"
      className="relative py-24 md:py-40 bg-ink-800"
      data-testid="why-section"
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
            / Porquê PlayerLab
          </span>
          <h2 className="mt-6 font-heading font-black uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}>
            Construído para <br />
            <span className="text-electric">jogadores</span> ambiciosos.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                data-testid={`why-feature-${i + 1}`}
                className="group relative bg-ink-900 p-8 md:p-10 hover:bg-ink-800 transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 bg-white/[0.03] border border-white/10 group-hover:border-electric group-hover:bg-electric/10 flex items-center justify-center mb-6 transition-all">
                  <Icon size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white mb-3">
                  {f.title}
                </h3>
                <p className="text-zinc-400 font-body text-sm md:text-base leading-relaxed">
                  {f.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-electric group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
