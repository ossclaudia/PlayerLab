import React from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1612607696387-f139f76bdd6c?crop=entropy&cs=srgb&fm=jpg",
    alt: "Campo de futebol verde à noite",
    label: "Treino Técnico",
    cls: "md:col-span-6 md:row-span-2 aspect-[16/10] md:aspect-auto",
  },
  {
    src: "https://images.unsplash.com/photo-1599204606468-5c63999e6e26?crop=entropy&cs=srgb&fm=jpg",
    alt: "Baliza de futebol",
    label: "Finalização",
    cls: "md:col-span-3 aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1583214499157-ce8d6f368fef?crop=entropy&cs=srgb&fm=jpg",
    alt: "Jogadores em treino noturno",
    label: "Performance",
    cls: "md:col-span-3 aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1570877920464-4c2d38501303?crop=entropy&cs=srgb&fm=jpg",
    alt: "Preparação do jogador",
    label: "Preparação",
    cls: "md:col-span-4 aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?crop=entropy&cs=srgb&fm=jpg",
    alt: "Vista aérea do campo",
    label: "Campos de Sanguedo",
    cls: "md:col-span-8 aspect-[16/9]",
  },
];

export default function TrainingExperience() {
  return (
    <section
      id="experiencia"
      className="relative py-24 md:py-40 bg-ink-900"
      data-testid="experience-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-electric">
              / Experiência
            </span>
            <h2 className="mt-6 font-heading font-black uppercase text-white leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Vive o treino <br />
              de dentro.
            </h2>
          </div>
          <p className="max-w-sm text-zinc-400 font-body text-base leading-relaxed">
            Sessões intensas, focadas e desenhadas para criar
            ambientes reais de competição.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden ${img.cls}`}
              data-testid={`gallery-item-${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-electric">
                  / {String(i + 1).padStart(2, "0")}
                </span>
                <div className="font-heading text-xl md:text-2xl font-bold uppercase text-white mt-1">
                  {img.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
