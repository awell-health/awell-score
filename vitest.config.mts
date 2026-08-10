import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Every test file uses bare describe/it/expect, so no imports are needed.
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/__tests__/**/*.ts'],
    // Anchored, unlike the substring patterns this replaces: jest's
    // modulePathIgnorePatterns: ['dist', 'todo'] silently skipped
    // body_q_appearance_distress.test.ts because 'distress' contains 'dist'.
    exclude: ['**/node_modules/**', 'dist/**', 'todo/**'],
  },
})
