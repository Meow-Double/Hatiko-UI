/// <reference types="vitest" />

import { defineConfig as defineVitestConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'url';

export default defineVitestConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
   css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: 'config/vitest/setup.ts',
    include: ['src/**/?(*.)test.ts?(x)'],
    exclude: [
      '**/node_modules/**',
      '**/test/**',
      'src/main.tsx',
      '**/*.config.{js,ts,mjs,cjs,mts,cts}',
      '**/*.d.{js,ts}',
      '**/*.index.{js,ts}',
      '**/*.stories.{jsx,tsx, js, ts, mjx, mtx}'
    ],
  }
});