
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://haisiuleth.github.io',
  base: '/portafolio',
  integrations: [tailwind()],
});
