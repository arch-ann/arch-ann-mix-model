import { useState, useMemo, useCallback } from "react";

// ─── BRAND TOKENS ────────────────────────────────────────────────────────────
// Arch Ann brand: Cinzel (wordmark/display caps), Lora (editorial serif body),
// Courier Prime (monospaced data/labels), Tenor Sans (spaced nav caps)
// Palette: warm parchment #F2EDE6, charcoal #2C2A24, stone #E4DDD4, dark footer #2E2C27, warm tan #A8957A

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&family=Courier+Prime:wght@400;700&family=Tenor+Sans&display=swap');

  :root {
    --parchment: #F2EDE6;
    --charcoal: #2C2A24;
    --stone: #E4DDD4;
    --dark: #2E2C27;
    --tan: #A8957A;
    --tan-light: #C4B09A;
    --muted: #8A8278;
    --border: #D6CFC6;
    --card: #FAF7F3;
    --positive: #4E6E58;
    --warn: #8B6F3A;
    --negative: #8A3A2E;

    --font-display: 'Cinzel', serif;
    --font-body: 'Lora', serif;
    --font-mono: 'Courier Prime', monospace;
    --font-label: 'Tenor Sans', sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--parchment); color: var(--charcoal); }
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--tan-light); border-radius: 2px; }
  input[type=range] { -webkit-appearance: none; background: transparent; width: 100%; cursor: pointer; }
  input[type=range]::-webkit-slider-runnable-track { height: 1px; background: var(--border); border-radius: 1px; }
  input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%; background: var(--charcoal); margin-top: -6.5px; border: 2px solid var(--parchment); box-shadow: 0 0 0 1px var(--charcoal); }
  input[type=number] { -moz-appearance: textfield; }
  input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .concept-card { animation: fadeUp 0.3s ease both; }
  .concept-card:nth-child(2) { animation-delay: 0.05s; }
  .concept-card:nth-child(3) { animation-delay: 0.1s; }
`;