import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#labs", label: "Os Labs" },
  { href: "#processo", label: "Processo" },
  { href: "#why", label: "Porquê" },
  { href: "#coaches", label: "Treinadores" },
  { href: "#localizacao", label: "Localização" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar({ onJoinClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink-900/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center gap-2" data-testid="navbar-logo">
          <div className="w-9 h-9 bg-electric flex items-center justify-center">
            <span className="font-heading font-black text-white text-xl leading-none">P</span>
          </div>
          <span className="font-heading text-2xl font-black tracking-tight uppercase">
            Player<span className="text-electric">Lab</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-zinc-400 text-sm font-medium uppercase tracking-widest hover:text-white transition-colors"
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onJoinClick}
            data-testid="navbar-join-btn"
            className="hidden md:inline-flex items-center bg-electric text-white px-5 py-3 font-heading text-base uppercase tracking-widest hover:bg-electric-hover hover:shadow-[0_0_20px_rgba(0,85,255,0.5)] transition-all"
          >
            Inscreve-te
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
            data-testid="navbar-mobile-toggle"
            aria-label="menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-ink-800 border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-300 text-lg font-medium uppercase tracking-widest"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { setOpen(false); onJoinClick(); }}
                className="mt-2 bg-electric text-white px-5 py-3 font-heading text-base uppercase tracking-widest"
                data-testid="navbar-mobile-join-btn"
              >
                Inscreve-te
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
