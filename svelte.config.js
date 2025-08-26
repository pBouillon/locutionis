import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex()],
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.GITHUB_PAGES ? '/locutionis' : ''
    }
  },
  extensions: ['.svelte', '.svx'],
  compilerOptions: { runes: true }
};

export default config;
