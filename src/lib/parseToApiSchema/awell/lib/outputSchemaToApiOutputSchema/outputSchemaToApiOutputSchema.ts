import { z } from 'zod'
import { type ApiOutputType } from '../../types'
import { ScoreOutputSchemaType } from '../../../../../types'

export const outputSchemaToApiOutputSchema = (
  schema: ScoreOutputSchemaType,
): Array<ApiOutputType> => {
  const jsonSchema: Record<string, ApiOutputType> = {}

  for (const [key, value] of Object.entries(schema)) {
    const baseJson = {
      subresult_id: key,
      label: value.label,
      unit: value?.unit,
      interpretation: value?.interpretation,
      terminology: value?.terminology,
    }

    if (value.type instanceof z.ZodBoolean) {
      jsonSchema[key] = {
        ...baseJson,
        type: 'boolean',
      }
      continue
    }

    if (value.type instanceof z.ZodNumber) {
      jsonSchema[key] = {
        ...baseJson,
        type: 'number',
      }
      continue
    }

    if (value.type instanceof z.ZodString) {
      jsonSchema[key] = {
        ...baseJson,
        type: 'string',
      }
      continue
    }

    // Add support for other Zod types as needed.
    throw new Error('Unsupported Zod type')
  }

  return Object.values(jsonSchema)
}
