import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from "vite-plugin-node-polyfills"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // 필요 시 세부 설정
    }),
  ],
  base: '/knitting-text/',
  resolve: {
    alias: {
      util: "util/",
    },
  },
  optimizeDeps: {
    include: ["util"],
  },
});
