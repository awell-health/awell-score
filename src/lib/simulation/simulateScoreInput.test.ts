import { z } from 'zod'
import { simulateScoreInput } from './simulateScoreInput'
import { ScoreInputSchemaType } from '../../types'
import { createZodObjectFromSchema } from '../createZodObjectFromInputSchema'

const inputSchema = createZodObjectFromSchema({
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
  dateInput: { type: z.string().optional().pipe(z.coerce.date().optional()) },
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
} satisfies ScoreInputSchemaType)

describe('Simulation', () => {
  test('should simulate the input', () => {
    const result = simulateScoreInput(inputSchema)

    expect(result).toEqual({
      simpleNumberInputWithRange: expect.any(Number),
      simpleNumberInput: expect.any(Number),
      booleanInput: expect.any(Boolean),
      dateInput: expect.any(String),
      stringInput: expect.any(String),
      enumStringInput: expect.any(String),
      enumNumberInput: expect.any(Number),
      numbersArrayInput: expect.any(Array),
      stringsArrayInput: expect.any(Array),
    })
  })
})
