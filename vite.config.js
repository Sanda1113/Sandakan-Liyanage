import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// The site is served at the root of the custom domain https://sandakan.is-a.dev/
// (GitHub Pages with the CNAME file in /public). If you ever drop the custom
// domain, set base back to '/Sandakan-Liyanage/' to match the repository name.
// All in-app asset paths go through withBase(), so nothing else changes.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE ?? '/',
})
