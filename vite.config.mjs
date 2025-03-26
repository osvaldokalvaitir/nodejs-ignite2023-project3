import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    coverage: {
      all: false,
    },
    dir: 'src',
    workspace: [
      {
        extends: true,
        test: {
          dir: 'src/http/controllers',
          name: 'e2e',
          environment: './prisma/vitest-environments/prisma.ts',
        },
      },
      {
        extends: true,
        test: {
          dir: 'src/use-cases',
          environment: 'node',
          name: 'unit',
        },
      },
    ],
  },
})
