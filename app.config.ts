import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    compatibilityDate: "2025-09-27",
    rollupConfig: {
      external: ["node:async_hooks"]
    }
  }
});