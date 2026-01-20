import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: { port: 5000 },
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        products: 'http://localhost:5001/assets/remoteEntry.js',
        cart: 'http://localhost:5002/assets/remoteEntry.js',
        users: 'http://localhost:5003/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'styled-components']
    })
  ],
  build: { target: 'esnext' }
})
