import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Keep each image as its own hashed file instead of inlining small ones as base64.
    assetsInlineLimit: 0,
  },
});
