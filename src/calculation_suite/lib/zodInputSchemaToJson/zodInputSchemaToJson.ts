import { z } from 'zod'
import { CalculationParameterInputType } from '../../../types/calculations/inputs/calculation-inputs.types'
import { isNil } from 'lodash'

const getUnionType = (
  value: z.ZodUnion<any>
): CalculationParameterInputType => {
  // Check that all options are literal, if not throw an error
  if (!value.options.every((option: any) => option instanceof z.ZodLiteral)) {
    throw new Error('All options in a union must be literal')
  }

  // Check that all options are of the same type (string or number)
  if (
    !value.options.every(
      (option: any) =>
        typeof option.value === 'string' || typeof option.value === 'number'
    )
  ) {
    throw new Error(
      'All options in a union must be of the same type (string or number)'
    )
  }

  const type = typeof value.options[0].value === 'string' ? 'string' : 'number'

  const allowedAnswers = value.options.map((option: z.ZodLiteral<any>) => ({
    value: option.value,
  }))

  return {
    type,
    allowed_answers: allowedAnswers,
  }
}

export const zodInputSchemaToJson = (
  schema: z.ZodObject<Record<string, z.ZodTypeAny>>
): Record<string, CalculationParameterInputType> => {
  const schemaShape = schema.shape

  const jsonSchema: Record<string, CalculationParameterInputType> = {}

  for (const [key, value] of Object.entries(schemaShape)) {
    if (value instanceof z.ZodBoolean) {
      jsonSchema[key] = {
        type: 'boolean',
      }
      continue
    }

    if (value instanceof z.ZodNumber) {
      const min = value.minValue
      const max = value.maxValue

      const range: any = {}

      if (!isNil(min)) {
        range.min = { value: min }
      }

      if (!isNil(max)) {
        range.max = { value: max }
      }

      const tempSchema: any = {
        type: 'number',
      }

      // Only include range if it's not empty
      if (Object.keys(range).length > 0) {
        tempSchema.range = range
      }

      // Assign the temporary object to the final schema
      jsonSchema[key] = tempSchema
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

    if (value instanceof z.ZodUnion) {
      const unionType = getUnionType(value)
      jsonSchema[key] = unionType
      continue
    }

    if (value instanceof z.ZodArray) {
      const itemType = value.element
      if (itemType instanceof z.ZodUnion) {
        const unionType = getUnionType(itemType)

        if (unionType.type === 'string') {
          jsonSchema[key] = {
            type: 'strings_array',
            // @ts-expect-error - we know that the allowed_answers are strings
            allowed_answers: unionType.allowed_answers,
          }
        }

        if (unionType.type === 'number') {
          jsonSchema[key] = {
            type: 'numbers_array',
            // @ts-expect-error - we know that the allowed_answers are numbers
            allowed_answers: unionType.allowed_answers,
          }
        }

        continue
      }

      throw new Error('An array type must have a union type')
    }

    // Add support for other Zod types as needed.
    throw new Error('Unsupported Zod type')
  }

  return jsonSchema
}
