"use client";

import { useEffect } from "react";

// Duration the overlay stays visible (ms)
const LOADER_DURATION = 1200;

export default function PageLoader() {
  useEffect(() => {
    const overlay = document.getElementById("page-overlay");
    if (!overlay) return;

    const timer = setTimeout(() => {
      // Fade the static overlay out
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";

      // Hide after fade — don't remove from DOM to avoid hydration issues
      setTimeout(() => {
        overlay.style.display = "none";
      }, 520);
    }, LOADER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  // Nothing to render — the static overlay in layout.tsx handles the visual
  return null;
}
