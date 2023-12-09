import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/React_Ecommerce/',
  mode:'hash',
  build: {
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1500,
    cssCodeSplit: true,
    // ...
  }
})

