import React from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative bg-ink-900 border-t border-white/5 pt-20 pb-10"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-electric flex items-center justify-center">
                <span className="font-heading font-black text-white text-2xl leading-none">P</span>
              </div>
              <span className="font-heading text-3xl font-black tracking-tight uppercase">
                Player<span className="text-electric">Lab</span>
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm font-body text-sm leading-relaxed">
              Academia de desenvolvimento individual de futebol focada em libertar
              o potencial de cada jogador.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="font-heading text-sm uppercase tracking-[0.25em] text-electric mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 font-body text-sm">
              <li><a href="#manifesto" className="text-zinc-400 hover:text-white transition-colors">Manifesto</a></li>
              <li><a href="#labs" className="text-zinc-400 hover:text-white transition-colors">Os Labs</a></li>
              <li><a href="#processo" className="text-zinc-400 hover:text-white transition-colors">Processo</a></li>
              <li><a href="#coaches" className="text-zinc-400 hover:text-white transition-colors">Treinadores</a></li>
              <li><a href="#faq" className="text-zinc-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4">
            <h4 className="font-heading text-sm uppercase tracking-[0.25em] text-electric mb-5">
              Contactos
            </h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin size={16} className="text-electric mt-0.5" />
                <span>Campos de Sanguedo, Portugal</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail size={16} className="text-electric" />
                <a href="mailto:geral@playerlab.pt" className="hover:text-white transition-colors">geral@playerlab.pt</a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone size={16} className="text-electric" />
                <a href="tel:+351910000000" className="hover:text-white transition-colors">+351 910 000 000</a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Instagram size={16} className="text-electric" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@playerlab.pt</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <span className="text-xs uppercase tracking-widest text-zinc-600">
            © {new Date().getFullYear()} PlayerLab. Todos os direitos reservados.
          </span>
          <span className="text-xs uppercase tracking-widest text-zinc-600">
            Develop your game.
          </span>
        </div>
      </div>
    </footer>
  );
}
