import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: { port: 5000 },
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      exposes: {
        './cartStore': './src/store.ts'
      },
      remotes: {
        products: 'http://localhost:5006/assets/remoteEntry.js',
        cart: 'http://localhost:5009/assets/remoteEntry.js',
        users: 'http://localhost:5008/assets/remoteEntry.js',
        'selected-products': 'http://localhost:5010/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'styled-components', 'zustand']
    })
  ],
  build: { target: 'esnext' }
})
