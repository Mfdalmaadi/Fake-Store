import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    target: "esnext", // Or 'modules', 'es2015', etc.
    outDir: "dist", // Ensures output goes to the correct directory
    sourcemap: true, // Helps debug issues
  },
  server: {
    port: 3000, // Optional: Change dev server port
  },
});
