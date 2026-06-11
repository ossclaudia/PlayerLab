import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

export default function Location() {
  return (
    <section
      id="localizacao"
      className="relative py-20 md:py-32 bg-cream"
      data-testid="location-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold-600">
              / Onde treinamos
            </span>
            <h2 className="mt-6 font-heading font-black uppercase text-navy leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Campos de <br />
              <span className="text-gold-gradient">Sanguedo.</span>
            </h2>

            <p className="mt-8 text-navy/70 font-body text-base md:text-lg leading-relaxed max-w-md">
              Instalações modernas com relva natural e sintética, espaços
              técnicos dedicados e ambiente preparado para desenvolvimento
              de alto rendimento.
            </p>

            <div className="mt-10 space-y-1">
              <Row
                icon={MapPin}
                title="Morada"
                value="Campos de Sanguedo, Santa Maria da Feira, Portugal"
              />
              <Row
                icon={Clock}
                title="Horários"
                value="Seg-Dom · 9h-19h"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sanguedo+Santa+Maria+da+Feira"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="location-directions-btn"
              className="mt-10 inline-flex items-center gap-2 bg-navy text-white px-6 py-4 font-heading text-sm uppercase tracking-widest hover:bg-navy-800 hover:shadow-xl transition-all"
            >
              <Navigation size={16} />
              Como chegar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-mist shadow-xl bg-white">
              <iframe
                title="Mapa Sanguedo"
                src="https://www.google.com/maps?q=Sanguedo+Santa+Maria+da+Feira+Portugal&output=embed"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="location-map"
              />
            </div>
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-gold pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-gold pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, title, value }) {
  return (
    <div className="flex items-start gap-4 border-t border-mist py-4">
      <div className="w-10 h-10 bg-navy/5 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-navy" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-navy/50 font-bold">{title}</div>
        <div className="text-navy font-body mt-1">{value}</div>
      </div>
    </div>
  );
}
