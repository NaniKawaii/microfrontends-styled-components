import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: { port: 5006 },
  plugins: [
    react(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsWidget': './src/ProductsWidget.tsx',
        './CardProducto': './src/components/CardProducto.tsx',
        './BotonComprar': './src/components/BotonComprar.tsx'
      },

      shared: ['react', 'react-dom', 'styled-components', 'zustand']
    })
  ],
  build: { target: 'esnext' }
})
