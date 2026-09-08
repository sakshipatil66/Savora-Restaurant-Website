import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  // Disable Lovable's default Cloudflare Nitro build
  nitro: false,

  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  vite: {
    plugins: [netlify()],
  },
});