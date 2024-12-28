import { z } from 'zod'
import { OutputTypes } from '../../../types/calculations.types'

export const zodOutputSchemaToJson = (
  schema: z.ZodObject<Record<string, z.ZodTypeAny>>
): Record<string, { type: OutputTypes }> => {
  const schemaShape = schema.shape

  const jsonSchema: Record<string, { type: OutputTypes }> = {}

  for (const [key, value] of Object.entries(schemaShape)) {
    if (value instanceof z.ZodBoolean) {
      jsonSchema[key] = {
        type: 'boolean',
      }
      continue
    }

    if (value instanceof z.ZodNumber) {
      jsonSchema[key] = {
        type: 'number',
      }
      continue
    }

    if (value instanceof z.ZodString) {
      const isDate = value._def.checks.find(check => check.kind === 'date')
      if (isDate) {
        jsonSchema[key] = {
          type: 'date',
        }
      } else {
        jsonSchema[key] = {
          type: 'string',
        }
      }
      continue
    }

    // Add support for other Zod types as needed.
    throw new Error('Unsupported Zod type')
  }

  return jsonSchema
}
