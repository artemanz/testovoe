import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve("src"),
  publicDir: resolve("public"),
  build: {
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
});
