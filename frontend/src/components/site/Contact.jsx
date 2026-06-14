import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, ArrowRight, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Contact({ onJoinClick }) {
  return (
    <section
      id="contactos"
      className="relative bg-navy text-white overflow-hidden"
      data-testid="contact-section"
    >
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-navy-700/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-12">
        {/* Final CTA band */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-white/10 pb-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold">
              / Próximo Passo
            </span>
            <h2 className="mt-5 font-heading font-black uppercase leading-[0.9] tracking-tighter text-balance"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              Descobre os <span className="text-gold-gradient">nossos packs</span> e <br />
              inscreve-te agora!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <button
              onClick={onJoinClick}
              data-testid="contact-cta-btn"
              className="group inline-flex items-center justify-center gap-3 bg-gold text-navy px-8 py-5 font-heading text-lg md:text-xl uppercase tracking-widest hover:bg-gold-400 hover:shadow-[0_0_40px_rgba(201,169,97,0.4)] transition-all duration-300"
            >
              Inscreve-te
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <Logo size={88} />
              <span className="font-heading text-4xl md:text-5xl font-black tracking-tight uppercase leading-none">
                Player<span className="text-gold">Lab</span>
              </span>
            </div>
            <p className="text-white/60 max-w-sm font-body text-sm leading-relaxed">
              Academia de desenvolvimento individual de futebol focada em
              libertar o potencial de cada jovem jogador.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading text-sm uppercase tracking-[0.25em] text-gold mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 font-body text-sm">
              <li><a href="#sobre" className="text-white/70 hover:text-white transition-colors">A Academia</a></li>
              <li><a href="#labs" className="text-white/70 hover:text-white transition-colors">Os Labs</a></li>
              <li><a href="#staff" className="text-white/70 hover:text-white transition-colors">Staff</a></li>
              <li><a href="#localizacao" className="text-white/70 hover:text-white transition-colors">Localização</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-heading text-sm uppercase tracking-[0.25em] text-gold mb-5">
              Contactos
            </h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>Campos de Sanguedo, Santa Maria da Feira</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:playerlabacademy@gmail.com" className="hover:text-white transition-colors break-all">
                  playerlabacademy@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+351918766314" className="hover:text-white transition-colors">
                  +351 918 766 314
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Instagram size={16} className="text-gold shrink-0" />
                <a href="https://instagram.com/playerlab_academy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @playerlab_academy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <span className="text-xs uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} PlayerLab. Todos os direitos reservados.
          </span>
          <span className="text-xs uppercase tracking-widest text-gold/80">
            Develop your game.
          </span>
        </div>
      </div>
    </section>
  );
}
