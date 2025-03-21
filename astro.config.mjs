import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    format: "preserve",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
