import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: { port: 5002 },
  plugins: [
    react(),
    federation({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartWidget': './src/CartWidget.tsx'
      },
      shared: ['react', 'react-dom', 'styled-components']
    })
  ],
  build: { target: 'esnext' }
})
