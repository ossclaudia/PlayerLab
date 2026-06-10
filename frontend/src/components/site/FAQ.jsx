import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const faqs = [
  {
    q: "Que idades podem participar?",
    a: "O PlayerLab é dedicado a jogadores entre os 8 e os 18 anos, com programas adaptados ao estágio de desenvolvimento de cada faixa etária.",
  },
  {
    q: "Posso inscrever-me apenas num Lab?",
    a: "Sim. Podes escolher PlayerLab Technique, Performance ou Position de forma individual, ou combinar os três num plano integrado de evolução.",
  },
  {
    q: "O PlayerLab substitui o treino de clube?",
    a: "Não. O PlayerLab complementa o treino de clube, dando o tempo individualizado que muitas vezes não existe no treino coletivo.",
  },
  {
    q: "Quantas sessões existem por semana?",
    a: "Existem múltiplas sessões semanais distribuídas por horários após escola, à noite e ao fim de semana. O plano é ajustado à disponibilidade.",
  },
  {
    q: "Como me inscrevo?",
    a: "Carrega em \"Inscreve-te no PlayerLab\" e preenche o formulário. Em 48h entramos em contacto para agendar uma avaliação inicial.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-24 md:py-40 bg-ink-800"
      data-testid="faq-section"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-electric">
            / Dúvidas Frequentes
          </span>
          <h2 className="mt-6 font-heading font-black uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Perguntas <br />
            <span className="text-electric">Frequentes.</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-white/10 last:border-b-0"
              data-testid={`faq-item-${i + 1}`}
            >
              <AccordionTrigger className="text-left text-white hover:text-electric hover:no-underline py-6 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight">
                <span className="flex items-start gap-4">
                  <span className="text-electric text-sm font-bold tracking-widest mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{f.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 text-base md:text-lg leading-relaxed font-body pb-6 pl-10">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
