// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://evoluciona2023.github.io',
  base: '/guacanal',
  integrations: [tailwind()]
});
