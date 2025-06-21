import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react()
  ],
  define: {
    __DEFINES__: '{}',
    __HMR_PROTOCOL__: '"http"',
    __HMR_HOSTNAME__: '"localhost"',
    __HMR_PORT__: '24678',
    __HMR_TIMEOUT__: '30000',
    __HMR_ENABLE_OVERLAY__: 'true',
    __BASE__: '"/"',
    __MODE__: '"production"',
    __DEV__: 'false',
    __PROD__: 'true',
    __SSR__: 'false'
  },
  server: {
    port: 3000,
    open: true
  }
}) 