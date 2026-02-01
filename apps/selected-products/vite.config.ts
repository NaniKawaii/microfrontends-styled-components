import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: { port: 5007 },
  plugins: [
    react(),
    federation({
      name: 'selected-products',
      filename: 'remoteEntry.js',
      exposes: {
        './SelectedProductsWidget': './src/SelectedProductsWidget.tsx'
      },
      shared: ['react', 'react-dom', 'styled-components', 'zustand']
    })
  ],
  build: { target: 'esnext' }
})