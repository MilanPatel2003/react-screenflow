import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ReactScreenflow',
      fileName: (format) => `react-screenflow.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'framer-motion': 'FramerMotion',
          'react-router-dom': 'ReactRouterDOM'
        }
      }
    },
    emptyOutDir: false
  }
})