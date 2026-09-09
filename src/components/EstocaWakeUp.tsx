"use client";

import { useEffect } from "react";

const ESTOCA_HEALTH_URL = "https://estoca-api.onrender.com/healthz";

let warmingRequested = false;

export default function EstocaWakeUp() {
  useEffect(() => {
    if (warmingRequested) return;
    warmingRequested = true;

    void fetch(ESTOCA_HEALTH_URL, {
      mode: "no-cors",
      credentials: "omit",
      keepalive: true,
      referrerPolicy: "no-referrer",
    }).catch(() => {
      // O aquecimento é apenas uma otimização e não deve afetar o portfólio.
    });
  }, []);

  return null;
}
