import { z } from "zod"
import { env } from "node:process"

const envSchema = z.object({
  EMAIL: z.string().email(),
  PORT: z.string()
    .transform(v => Number(v))
    .pipe(z.number().int().gt(1024))
})

const {
  EMAIL,
  PORT,
} = env

const parsed = envSchema.parse({
  EMAIL,
  PORT,
})

type Environment = z.infer<typeof envSchema>

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}
