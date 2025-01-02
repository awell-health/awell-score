import { z } from 'zod'
import { ScoreInputSchemaType } from '../../types'

export const createZodObjectFromSchema = <T extends ScoreInputSchemaType>(
  schema: T,
): z.ZodObject<{ [K in keyof T]: T[K]['type'] }> => {
  const zodShape: Record<string, z.ZodTypeAny> = {}

  for (const [key, value] of Object.entries(schema)) {
    zodShape[key] = value.type
  }

  return z.object(zodShape) as z.ZodObject<{ [K in keyof T]: T[K]['type'] }>
}
