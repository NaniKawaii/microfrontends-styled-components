import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: { port: 5003 },
  plugins: [
    react(),
    federation({
      name: 'users',
      filename: 'remoteEntry.js',
      exposes: {
        './PerfilUsuario': './src/PerfilUsuario.tsx',
        './BotonEditar': './src/BotonEditar.tsx'
      },
      shared: ['react', 'react-dom', 'styled-components']
    })
  ],
  build: { target: 'esnext' }
})
