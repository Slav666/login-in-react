/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup-test-env.ts'],
  },
});
