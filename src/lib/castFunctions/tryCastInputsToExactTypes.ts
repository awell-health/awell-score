import { mapValues } from 'lodash'
import { type ScoreInputSchemaType } from '../../types'
import {
  tryCastToBoolean,
  tryCastToNumber,
  tryCastToString,
  tryCastToStringsArray,
  tryCastToNumbersArray,
} from './lib'
import { z } from 'zod'
import { getUnionType } from '../zod'

/**
 * Casts a single input value to its exact type.
 * @param input_value - The value to cast.
 * @param key - The key of the input field.
 * @returns The cast value.
 */
const castInputToExactType = <InputSchema extends ScoreInputSchemaType>(
  input_value: unknown,
  key: string,
  schema: InputSchema,
) => {
  const inputTypeSchema = schema[key]?.type

  if (!inputTypeSchema) return input_value

  /**
   * Retrieves the base Zod type, unwrapping optional types if necessary.
   * @returns The base Zod type.
   */
  const getZodType = () => {
    if (inputTypeSchema instanceof z.ZodOptional) {
      const unwrappedType = inputTypeSchema.unwrap()
      return unwrappedType
    }

    return inputTypeSchema
  }

  const inputType = getZodType()

  if (inputType instanceof z.ZodNumber) return tryCastToNumber(input_value)

  if (inputType instanceof z.ZodString) return tryCastToString(input_value)

  if (inputType instanceof z.ZodBoolean) return tryCastToBoolean(input_value)

  if (inputType instanceof z.ZodUnion) {
    const unionType = getUnionType(inputType)

    if (unionType === 'number') {
      return tryCastToNumber(input_value)
    }

    if (unionType === 'string') {
      return tryCastToString(input_value)
    }
  }

  if (inputType instanceof z.ZodArray) {
    const itemType = inputType.element

    if (itemType instanceof z.ZodUnion) {
      const unionType = getUnionType(itemType)

      if (unionType === 'number') {
        return tryCastToNumbersArray(input_value)
      }
      if (unionType === 'string') {
        return tryCastToStringsArray(input_value)
      }
    }
  }

  return input_value
}

/**
 * Tries to cast input values to their exact types based on the input schema.
 * @param input - The input data to cast.
 * @returns The cast input data.
 */
export const tryCastInputsToExactTypes = <
  InputSchema extends ScoreInputSchemaType,
>(
  schema: InputSchema,
  data: Record<string, unknown>,
): Record<string, unknown> => {
  return mapValues(data, (input_value, key) =>
    castInputToExactType(input_value, key, schema),
  )
}
