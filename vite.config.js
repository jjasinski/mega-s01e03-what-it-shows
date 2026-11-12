import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { resolve } from 'node:path';
export default defineConfig({ plugins: [sveltekit({
  extensions: ['.svelte', '.svx'],
  preprocess: [mdsvex({ extensions: ['.svx'], layout: { runbook: resolve('src/lib/layouts/runbook.svelte') } })],
  adapter: adapter(), alias: { '#lib': './src/lib' }
})] });
