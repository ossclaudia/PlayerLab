import React from "react";

// Logo a cores transparente (sem fundo) — versão mais recente
export const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_develop-your-game/artifacts/j0un5ooa_Logo%20sem%20fundo.png";

// Logo completo com texto "PlayerLab Academy"
export const LOGO_FULL_URL =
  "https://customer-assets.emergentagent.com/job_develop-your-game/artifacts/cfhgct1n_Logo%20sem%20fundo.png";

export default function Logo({ size = 56, className = "" }) {
  return (
    <img
      src={LOGO_URL}
      alt="PlayerLab"
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        flexShrink: 0,
      }}
    />
  );
}
