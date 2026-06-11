import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_develop-your-game/artifacts/l8zctd3g_Logo.png";

const links = [
  { href: "#sobre", label: "A Academia" },
  { href: "#labs", label: "Os Labs" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contactos", label: "Contactos" },
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
        scrolled ? "bg-cream-100/85 backdrop-blur-xl border-b border-mist shadow-sm" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-20">
        <a href="#hero" className="flex items-center gap-3" data-testid="navbar-logo">
          <div className="w-11 h-11 bg-navy flex items-center justify-center rounded-sm">
            <img src={LOGO_URL} alt="PlayerLab" className="w-9 h-9 object-contain" />
          </div>
          <span className="font-heading text-2xl font-black tracking-tight uppercase text-navy hidden sm:inline">
            Player<span className="text-gold">Lab</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-navy/70 text-sm font-semibold uppercase tracking-[0.18em] hover:text-navy transition-colors"
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
            className="hidden md:inline-flex items-center bg-navy text-white px-5 py-3 font-heading text-base uppercase tracking-widest hover:bg-navy-800 hover:shadow-lg transition-all"
          >
            Inscreve-te
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-navy"
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
            className="lg:hidden bg-cream-100 border-t border-mist overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-navy text-lg font-semibold uppercase tracking-[0.18em]"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { setOpen(false); onJoinClick(); }}
                className="mt-2 bg-navy text-white px-5 py-3 font-heading text-base uppercase tracking-widest"
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
