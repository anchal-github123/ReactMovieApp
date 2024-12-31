import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ReactMovieApp/', // Set this to your repo name on GitHub
  build: {
    outDir: 'build' // Ensure the build folder is used for GitHub Pages
  }
  
})