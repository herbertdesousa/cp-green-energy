import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { BalanceHandle } from './src/api/balance';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        bypass: BalanceHandle,
      }
    }
  }
})
