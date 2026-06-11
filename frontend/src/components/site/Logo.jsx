import React from "react";

export const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_develop-your-game/artifacts/kvhyae7u_Logo%20-%20C%C3%B3pia.png";

/**
 * Logo painted via CSS mask — works on any background.
 * `color` accepts any CSS color (e.g. "#0E152C", "white").
 */
export default function Logo({ size = 48, color = "#0E152C", className = "" }) {
  return (
    <div
      role="img"
      aria-label="PlayerLab"
      className={className}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${LOGO_URL})`,
        maskImage: `url(${LOGO_URL})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        flexShrink: 0,
      }}
    />
  );
}
