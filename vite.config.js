import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        farming: resolve(__dirname, 'farming.html'),
        staking: resolve(__dirname, 'staking.html')
      }
    }
  }
});