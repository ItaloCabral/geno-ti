import { z } from "zod"
import { config } from "dotenv"

config()

const envSchema = z.string().nullish()

export const env = envSchema.parse(process.env.NEXT_PUBLIC_API_URL)
