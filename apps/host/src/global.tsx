import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
    --color-bg: #f6f7fb;
    --color-surface: #ffffff;
    --color-text: #1f2937;
    --color-muted: #6b7280;
    --border-soft: rgba(17, 24, 39, 0.08);
    --radius: 14px;
    --shadow-lg: 0 10px 30px rgba(17, 24, 39, 0.08);
    --btn-bg: #111827;
    --btn-fg: #ffffff;
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body { margin: 0; background: var(--color-bg); color: var(--color-text); }
`
