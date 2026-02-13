import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    open: "./src/index.html",
  },
  plugins: [
    tailwindcss(),
  ],
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  }
});
