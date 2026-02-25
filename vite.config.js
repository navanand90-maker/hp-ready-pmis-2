import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hp-ready-pmis-2/', // THIS MUST MATCH YOUR REPO NAME
})
