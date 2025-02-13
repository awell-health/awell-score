import { z } from 'zod'
import { isNil } from 'lodash'
import {
  LabelType,
  ScoreInputSchemaType,
  ScoreInputType,
} from '../../../../../../types'
import { ApiInputType } from '../../types'
import { getUnionType } from '../../../../../zod/getUnionType'

const getBooleanAllowedAnswers = (
  value: ScoreInputType,
): Array<{ value: boolean; label?: LabelType }> | undefined => {
  // @ts-expect-error this is fine
  const uiOptions = value.uiOptions?.options

  return (
    uiOptions ?? [
      { value: true, label: { en: 'Yes' } },
      { value: false, label: { en: 'No' } },
    ]
  )
}

const getStringEnumAllowedAnswers = (
  enumType: z.ZodUnion<
    [z.ZodLiteral<string | number>, ...z.ZodLiteral<string | number>[]]
  >,
  value: ScoreInputType,
): Array<{ value: string; label?: LabelType }> => {
  // @ts-expect-error this is fine
  const uiOptions = value.uiOptions?.options
  const enumOptions = enumType.options

  return enumOptions.map(option => ({
    value: String(option.value),
    // @ts-expect-error this is fine
    label: uiOptions?.find(uiOption => uiOption.value === option.value)?.label,
  }))
}

const getNumberEnumAllowedAnswers = (
  enumType: z.ZodUnion<
    [z.ZodLiteral<string | number>, ...z.ZodLiteral<string | number>[]]
  >,
  value: ScoreInputType,
): Array<{ value: number; label?: LabelType }> => {
  // @ts-expect-error this is fine
  const uiOptions = value.uiOptions?.options
  const enumOptions = enumType.options

  return enumOptions.map(option => ({
    value: Number(option.value),
    // @ts-expect-error this is fine
    label: uiOptions?.find(uiOption => uiOption.value === option.value)?.label,
  }))
}

export const inputSchemaToApiInputSchema = (
  schema: ScoreInputSchemaType,
): Array<ApiInputType> => {
  const jsonSchema: Record<string, ApiInputType> = {}

  for (const [key, value] of Object.entries(schema)) {
    let isOptional = false
    const getZodType = () => {
      if (value.type instanceof z.ZodOptional) {
        isOptional = true
        const unwrappedType = value.type.unwrap()
        return unwrappedType
      }

      return value.type
    }

    const inputType = getZodType()

    const baseJson = {
      id: key,
      label: value.label,
      info: value.info,
      format: value.unit?.en,
    }

    if (inputType instanceof z.ZodBoolean) {
      jsonSchema[key] = {
        ...baseJson,
        input_type: {
          type: 'boolean',
          required: !isOptional,
          allowed_answers: getBooleanAllowedAnswers(value),
        },
      }
      continue
    }

    if (inputType instanceof z.ZodNumber) {
      const min = inputType.minValue
      const max = inputType.maxValue

      const range: any = {}

      if (!isNil(min)) {
        // @ts-expect-error this is fine
        const minLabel = value.uiOptions?.range?.min?.label
        range.min = { value: min, label: minLabel }
      }

      if (!isNil(max)) {
        // @ts-expect-error this is fine
        const maxLabel = value.uiOptions?.range?.max?.label
        range.max = { value: max, label: maxLabel }
      }

      const tempSchema: any = {
        type: 'number',
      }

      // Only include range if it's not empty
      if (Object.keys(range).length > 0) {
        tempSchema.range = range
      }

      jsonSchema[key] = {
        ...baseJson,
        input_type: {
          ...tempSchema,
          required: !isOptional,
          // @ts-expect-error this is fine
          component: value?.uiOptions?.component,
        },
      }
      continue
    }

    if (inputType instanceof z.ZodString) {
      const isDate = inputType._def.checks.find(check => check.kind === 'date')
      if (isDate) {
        jsonSchema[key] = {
          ...baseJson,
          input_type: {
            type: 'date',
            required: !isOptional,
          },
        }
      } else {
        jsonSchema[key] = {
          ...baseJson,
          input_type: {
            type: 'string',
            required: !isOptional,
          },
        }
      }
      continue
    }

    if (inputType instanceof z.ZodUnion) {
      const unionType = getUnionType(inputType)

      if (unionType === 'string') {
        jsonSchema[key] = {
          ...baseJson,
          input_type: {
            type: 'string',
            required: !isOptional,
            allowed_answers: getStringEnumAllowedAnswers(inputType, value),
          },
        }
      }

      if (unionType === 'number') {
        jsonSchema[key] = {
          ...baseJson,
          input_type: {
            type: 'number',
            required: !isOptional,
            allowed_answers: getNumberEnumAllowedAnswers(inputType, value),
          },
        }
      }

      continue
    }

    if (inputType instanceof z.ZodArray) {
      const itemType = inputType.element

      if (itemType instanceof z.ZodUnion) {
        const unionType = getUnionType(itemType)

        if (unionType === 'string') {
          jsonSchema[key] = {
            ...baseJson,
            input_type: {
              type: 'strings_array',
              required: !isOptional,
              allowed_answers: getStringEnumAllowedAnswers(itemType, value),
            },
          }
        }

        if (unionType === 'number') {
          jsonSchema[key] = {
            ...baseJson,
            input_type: {
              type: 'numbers_array',
              required: !isOptional,
              allowed_answers: getNumberEnumAllowedAnswers(itemType, value),
            },
          }
        }

        continue
      }

      throw new Error('An array type must have a union type')
    }

    // Add support for other Zod types as needed.
    throw new Error('Unsupported Zod type')
  }

  return Object.values(jsonSchema)
}
