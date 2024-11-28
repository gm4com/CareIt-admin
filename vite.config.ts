import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`
    }
  },
  plugins: [react()],
  server: {
    port: 1900
  },
  css: {
    devSourcemap: true
  }
})
