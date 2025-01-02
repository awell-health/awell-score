import { z, ZodTypeAny } from 'zod'

/**
 * Removes all optional types from a Zod object schema.
 * @param schema - The Zod object schema to process.
 * @returns A new Zod object schema with optional types removed.
 */
export const stripOptionalFromZodObject = <T extends z.ZodObject<any>>(
  schema: T,
): z.ZodObject<any> => {
  const shape = schema.shape // Get the shape of the Zod object schema

  const strippedShape: Record<string, ZodTypeAny> = Object.fromEntries(
    Object.entries(shape).map(([key, value]) => {
      if (value instanceof z.ZodOptional) {
        return [key, value.unwrap()] // Unwrap optional types
      }
      return [key, value]
    }),
  )

  return z.object(strippedShape) // Return a new Zod object schema
}
