import path from "path"
import vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"
import { defineConfig } from "vite"
import { UserConfigExport } from "vitest/config"

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
} as UserConfigExport)