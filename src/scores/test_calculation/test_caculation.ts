import { ScoreType } from '../../types'
import { z } from 'zod'

const inputSchema = {
  simpleNumberInput: { type: z.number().optional() },
  simpleNumberInputWithRange: {
    type: z.number().min(10).max(20).optional(),
  },
  enumNumberInput: {
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'One' } },
        { value: 2, label: { en: 'Two' } },
        { value: 3, label: { en: 'Three' } },
      ],
    },
  },
  dateInput: { type: z.coerce.date().optional() },
  stringInput: { type: z.string().optional() },
  enumStringInput: {
    type: z
      .union([z.literal('blue'), z.literal('green'), z.literal('red')])
      .optional(),
  },
  booleanInput: { type: z.boolean().optional() },
  numbersArrayInput: {
    type: z
      .array(z.union([z.literal(1), z.literal(2), z.literal(3)]))
      .optional(),
  },
  stringsArrayInput: {
    type: z
      .array(z.union([z.literal('1'), z.literal('2'), z.literal('3')]))
      .optional(),
  },
}

const outputSchema = {
  result: { type: z.number(), label: { en: 'Result' } },
}

export const test_calculation: ScoreType<
  typeof inputSchema,
  typeof outputSchema
> = {
  name: 'Test Calculation',
  readmeLocation: __dirname,
  inputSchema,
  outputSchema,
  calculate: ({ data }) => {
    return {
      result: 10,
    }
  },
}
