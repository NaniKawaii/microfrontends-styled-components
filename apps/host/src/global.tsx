import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", "San Francisco", Roboto, Ubuntu, Cantarell, "Noto Sans", Arial;
    --color-bg: linear-gradient(135deg, #fff1f2, #fdf4ff); /* rose -> fuchsia */
    --color-surface: #fff7fb;
    --color-text: #5b2a3a;
    --color-muted: #8c6a7a;
    --border-soft: rgba(91, 42, 58, 0.12);
    --radius: 18px;
    --shadow-lg: 0 14px 36px rgba(91, 42, 58, 0.12);
    --btn-bg: #ec4899; /* default accent */
    --btn-fg: #ffffff;
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body { margin: 0; background: var(--color-bg); color: var(--color-text); }
`
