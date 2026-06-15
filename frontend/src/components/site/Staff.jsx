import React from "react";
import { motion } from "framer-motion";

const COACH_PHOTO =
  "https://customer-assets.emergentagent.com/job_develop-your-game/artifacts/7qde8jy5_sanguedo_edit_042.JPG";

export default function Staff() {
  return (
    <section
      id="staff"
      className="relative py-20 md:py-32 bg-cream-100 overflow-hidden"
      data-testid="staff-section"
    >
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gold/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold-600">
            / Equipa Técnica
          </span>
          <h2
            className="mt-6 font-heading font-black uppercase text-navy leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
          >
            Staff.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
            data-testid="staff-photo-wrapper"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-navy shadow-2xl">
              <img
                src={COACH_PHOTO}
                alt="João Durães"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="staff-photo"
              />
              <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-md px-3 py-1.5 text-white text-[10px] uppercase tracking-[0.3em] font-bold pointer-events-none">
                / Coach
              </div>
            </div>
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-gold pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-gold pointer-events-none" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold-600">
              / Head Coach
            </span>
            <h3
              className="mt-4 font-heading font-black uppercase text-navy leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
              data-testid="staff-coach-name"
            >
              João <br /> Durães
            </h3>
            <div className="mt-6 w-16 h-px bg-gold" />
            <p
              className="mt-6 text-navy/80 font-body text-lg md:text-xl leading-snug max-w-md"
              data-testid="staff-coach-role"
            >
              Treinador de formação do{" "}
              <strong className="text-navy">Sporting Clube de Portugal</strong>.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {["UEFA", "Formação", "Sporting CP"].map((t) => (
                <span
                  key={t}
                  className="text-[11px] tracking-wider uppercase px-3 py-1.5 bg-white border border-mist text-navy/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
