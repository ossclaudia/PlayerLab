import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section
      id="localizacao"
      className="relative py-24 md:py-40 bg-ink-900"
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
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-electric">
              / Localização
            </span>
            <h2 className="mt-6 font-heading font-black uppercase text-white leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Campos de <br />
              <span className="text-electric">Sanguedo.</span>
            </h2>

            <p className="mt-8 text-zinc-400 font-body text-base md:text-lg leading-relaxed max-w-md">
              Instalações desportivas modernas com relva natural e sintética,
              espaços técnicos dedicados e ambiente preparado para o desenvolvimento
              de alto rendimento.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 border-t border-white/5 pt-4">
                <MapPin size={20} className="text-electric mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Morada</div>
                  <div className="text-white font-body mt-1">Campos de Sanguedo, Santa Maria da Feira, Portugal</div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-white/5 pt-4">
                <Phone size={20} className="text-electric mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Telefone</div>
                  <div className="text-white font-body mt-1">+351 910 000 000</div>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-white/5 pt-4">
                <Mail size={20} className="text-electric mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Email</div>
                  <div className="text-white font-body mt-1">geral@playerlab.pt</div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sanguedo+Santa+Maria+da+Feira"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="location-directions-btn"
              className="mt-10 inline-flex items-center gap-2 bg-transparent border border-white/30 hover:border-electric hover:text-electric text-white px-6 py-3 font-heading text-sm uppercase tracking-widest transition-all"
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
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <iframe
                title="Mapa Sanguedo"
                src="https://www.google.com/maps?q=Sanguedo+Santa+Maria+da+Feira+Portugal&output=embed"
                className="absolute inset-0 w-full h-full grayscale contrast-125 invert-[0.92] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="location-map"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-electric pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-electric pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
