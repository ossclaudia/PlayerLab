import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const labOptions = [
  { value: "technique", label: "Technique" },
  { value: "performance", label: "Performance" },
  { value: "position", label: "Position" },
  { value: "all", label: "Todos os Labs" },
];

const initialForm = {
  player_name: "",
  age: "",
  parent_name: "",
  email: "",
  phone: "",
  lab_interest: "all",
  position: "",
  message: "",
};

export default function RegistrationDialog({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const payload = { ...form, age: parseInt(form.age, 10) };
      if (!payload.parent_name) delete payload.parent_name;
      if (!payload.position) delete payload.position;
      if (!payload.message) delete payload.message;
      await axios.post(`${API}/registrations`, payload);
      setSuccess(true);
    } catch (err) {
      const msg = err?.response?.data?.detail;
      setError(typeof msg === "string" ? msg : "Erro ao enviar inscrição. Tenta novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setForm(initialForm);
    setSuccess(false);
    setError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleClose}
          data-testid="registration-overlay"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-ink-800 border border-white/10 max-h-[90vh] overflow-y-auto my-8"
            data-testid="registration-dialog"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
              data-testid="registration-close-btn"
              aria-label="fechar"
            >
              <X size={22} />
            </button>

            {success ? (
              <div className="p-12 text-center" data-testid="registration-success">
                <div className="w-16 h-16 bg-electric mx-auto flex items-center justify-center mb-6 animate-pulse-glow">
                  <Check size={32} className="text-white" strokeWidth={3} />
                </div>
                <h3 className="font-heading text-4xl font-black uppercase tracking-tight text-white">
                  Inscrição enviada!
                </h3>
                <p className="mt-4 text-zinc-400 font-body max-w-md mx-auto">
                  Recebemos a tua inscrição. Vamos entrar em contacto nas próximas 48h
                  para agendar a tua avaliação inicial.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 bg-electric text-white px-8 py-4 font-heading text-base uppercase tracking-widest hover:bg-electric-hover transition-all"
                  data-testid="registration-success-close-btn"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <div className="p-8 md:p-10">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-electric">
                  / Inscrição
                </span>
                <h3 className="mt-3 font-heading text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                  Junta-te ao <span className="text-electric">PlayerLab.</span>
                </h3>
                <p className="mt-3 text-zinc-400 text-sm font-body">
                  Preenche o formulário e entraremos em contacto em 48h.
                </p>

                <form onSubmit={submit} className="mt-8 space-y-5" data-testid="registration-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Nome do Jogador *">
                      <input
                        required
                        type="text"
                        value={form.player_name}
                        onChange={(e) => update("player_name", e.target.value)}
                        className="input"
                        placeholder="João Silva"
                        data-testid="form-player-name"
                      />
                    </Field>
                    <Field label="Idade *">
                      <input
                        required
                        type="number"
                        min="6"
                        max="25"
                        value={form.age}
                        onChange={(e) => update("age", e.target.value)}
                        className="input"
                        placeholder="12"
                        data-testid="form-age"
                      />
                    </Field>
                  </div>

                  <Field label="Nome do Encarregado de Educação">
                    <input
                      type="text"
                      value={form.parent_name}
                      onChange={(e) => update("parent_name", e.target.value)}
                      className="input"
                      placeholder="Opcional"
                      data-testid="form-parent-name"
                    />
                  </Field>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Email *">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="input"
                        placeholder="email@exemplo.pt"
                        data-testid="form-email"
                      />
                    </Field>
                    <Field label="Telefone *">
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="input"
                        placeholder="+351 ..."
                        data-testid="form-phone"
                      />
                    </Field>
                  </div>

                  <Field label="Lab de Interesse *">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {labOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt.value}
                          onClick={() => update("lab_interest", opt.value)}
                          data-testid={`form-lab-${opt.value}`}
                          className={`px-3 py-3 text-xs uppercase tracking-wider font-heading border transition-all ${
                            form.lab_interest === opt.value
                              ? "bg-electric border-electric text-white"
                              : "bg-ink-900 border-white/10 text-zinc-300 hover:border-electric/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Posição (opcional)">
                    <input
                      type="text"
                      value={form.position}
                      onChange={(e) => update("position", e.target.value)}
                      className="input"
                      placeholder="Guarda-redes / Defesa / Médio / Avançado"
                      data-testid="form-position"
                    />
                  </Field>

                  <Field label="Mensagem (opcional)">
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="input resize-none"
                      placeholder="Conta-nos um pouco sobre o jogador..."
                      data-testid="form-message"
                    />
                  </Field>

                  {error && (
                    <div className="text-sm text-red-400 border border-red-400/30 bg-red-500/10 px-4 py-3" data-testid="form-error">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="form-submit-btn"
                    className="w-full inline-flex items-center justify-center gap-3 bg-electric text-white px-6 py-5 font-heading text-lg uppercase tracking-widest hover:bg-electric-hover hover:shadow-[0_0_30px_rgba(0,85,255,0.5)] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> A enviar...
                      </>
                    ) : (
                      "Enviar Inscrição"
                    )}
                  </button>
                </form>
              </div>
            )}

            <style>{`
              .input {
                width: 100%;
                background: #0A0A0A;
                border: 1px solid rgba(255,255,255,0.08);
                color: #fff;
                padding: 14px 16px;
                font-family: 'Manrope', sans-serif;
                font-size: 14px;
                outline: none;
                transition: all 0.2s;
              }
              .input::placeholder { color: #52525b; }
              .input:focus {
                border-color: #0055FF;
                box-shadow: 0 0 0 1px #0055FF;
              }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
