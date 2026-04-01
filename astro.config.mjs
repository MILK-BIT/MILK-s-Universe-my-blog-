import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://MILK-BIT.github.io',
  base:'/MILK-s-Universe-my-blog-'
});
