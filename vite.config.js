import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: 'src',
  base: '/kavir-test-clone/',
  plugins: [
    tailwindcss(),
  ],
})