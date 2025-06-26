import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Bassi-Ecommecer/', // 👈 nombre exacto del repositorio
  plugins: [react()],
})