import { env } from '@/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL
  },
  out: './src/db/migrations',
  schema: './src/db/schemas/index.ts',
  casing: 'snake_case'
})