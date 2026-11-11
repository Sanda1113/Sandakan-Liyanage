import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// The site is published as a GitHub Pages project site at
// https://sanda1113.github.io/Sandakan-Liyanage/, so assets are served under
// that path. Switch `base` to '/' if you move to a custom domain, Netlify or
// Vercel. All in-app asset paths go through withBase(), so nothing else changes.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE ?? '/Sandakan-Liyanage/',
})
