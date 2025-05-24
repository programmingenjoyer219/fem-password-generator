import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	test: {
		globals: true,
		include: ['**/*.test.ts', '**/*.test.js', '**/*.svelte.test.ts'], // Include Svelte tests
		environment: 'jsdom'
	},
	plugins: [svelte()]
});
