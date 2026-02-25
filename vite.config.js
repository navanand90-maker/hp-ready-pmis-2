import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Changing from '/hp-ready-pmis-2/' to './' often fixes 404s
  base: './', 
})
