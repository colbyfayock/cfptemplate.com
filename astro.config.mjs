import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cfptemplate.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
