import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command }) => ({

  plugins: [react()],
  base: '/Portfolio/', // Add this line - this is the key fix
  build: {
    sourcemap: false,    // ← turn off source-maps in prod
     outDir: 'dist',  
  },
}))
