import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    server: {
      // host: "0.0.0.0",
      // hmr: { clientPort: 4321 },
      // port: 4321, 
      watch: {
        usePolling: true
      }
    }
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});

