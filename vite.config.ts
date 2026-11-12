import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Render sets RENDER=true and serves from the root; GitHub Pages uses a subpath
  base: process.env.RENDER ? "/" : "/ruletaaleatoria/"
})
