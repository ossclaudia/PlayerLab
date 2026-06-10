import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Avaliação",
    desc: "Análise técnica, física e tática para identificar pontos fortes e áreas a desenvolver.",
  },
  {
    num: "02",
    title: "Definição de Objetivos",
    desc: "Plano de desenvolvimento individualizado com metas claras e mensuráveis.",
  },
  {
    num: "03",
    title: "Treino Especializado",
    desc: "Sessões focadas nas três áreas — Técnica, Performance e Posição.",
  },
  {
    num: "04",
    title: "Desenvolvimento Contínuo",
    desc: "Acompanhamento permanente, ajustes e evolução ao longo da época.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section
      id="processo"
      className="relative py-24 md:py-40 bg-ink-900 overflow-hidden"
      data-testid="process-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-electric">
            / Processo
          </span>
          <h2 className="mt-6 font-heading font-black uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}>
            Como <span className="text-electric">evoluímos</span> <br />
            cada jogador.
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric/0 via-electric/30 to-electric/0" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    isLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                  data-testid={`process-step-${i + 1}`}
                >
                  <div className={isLeft ? "md:text-right md:pr-16" : "md:pl-16"}>
                    <span className="font-heading text-7xl md:text-8xl font-black text-electric/20 leading-none block">
                      {step.num}
                    </span>
                    <h3 className="mt-2 font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className={`mt-4 text-zinc-400 text-base md:text-lg leading-relaxed max-w-md font-body ${
                      isLeft ? "md:ml-auto" : ""
                    }`}>
                      {step.desc}
                    </p>
                  </div>

                  {/* dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-electric shadow-[0_0_20px_rgba(0,85,255,0.6)]" />

                  <div className={isLeft ? "md:pl-16" : "md:pr-16 md:text-right"}>
                    <div className="bg-ink-800 border border-white/5 p-6 md:p-8 inline-block">
                      <div className="font-heading text-electric text-xs tracking-[0.3em] uppercase mb-2">
                        Etapa {step.num}
                      </div>
                      <div className="font-heading text-2xl font-bold uppercase text-white">
                        {step.title}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
