// @ts-check
import { defineConfig } from 'astro/config';

// This site is published from the repository named below, so it lives in a
// sub-folder of adamquinlan.github.io. If the repository is renamed, change `base`.
export default defineConfig({
  site: 'https://adamquinlan.github.io',
  base: '/adamquinlan.github.io-eportfolio',
  trailingSlash: 'ignore',
});
