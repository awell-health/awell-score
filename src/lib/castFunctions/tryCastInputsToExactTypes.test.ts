import { z } from 'zod'
import { tryCastInputsToExactTypes } from './tryCastInputsToExactTypes'

describe('Casting inputs to exact types', () => {
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
  }

  test('should not alter the orginal input if it already has the correct input types', () => {
    const input = {
      simpleNumberInput: 1,
      enumNumberInput: 2,
      dateInput: '2024-01-01',
      stringInput: 'hello',
      enumStringInput: 'green',
      booleanInput: true,
      numbersArrayInput: [1, 2, 3],
      stringsArrayInput: ['1', '2', '3'],
    }

    const result = tryCastInputsToExactTypes(inputSchema, input)
    expect(result).toEqual(input)
  })

  test('should cast the input to the correct types', () => {
    const input = {
      simpleNumberInput: '1',
      enumNumberInput: '2',
      dateInput: '2024/01/01',
      stringInput: 3,
      enumStringInput: 'green',
      booleanInput: 'true',
      numbersArrayInput: ['1', '2', '3', 4, true, 'true', false, 'false'],
      stringsArrayInput: [1, 2, 3, '4', true, false, 'true', 'false'],
    }

    const result = tryCastInputsToExactTypes(inputSchema, input)

    expect(result).toEqual({
      simpleNumberInput: 1,
      enumNumberInput: 2,
      dateInput: '2024/01/01',
      stringInput: '3',
      enumStringInput: 'green',
      booleanInput: true,
      numbersArrayInput: [1, 2, 3, 4, 1, 1, 0, 0],
      stringsArrayInput: ['1', '2', '3', '4', 'true', 'false', 'true', 'false'],
    })
  })

  test('If casting fails, the original input should be returned', () => {
    const input = {
      simpleNumberInput: 'Hello world',
      stringInput: [1, 2, 3],
      booleanInput: 'not a boolean',
      numbersArrayInput: [[], []],
      stringsArrayInput: [[], []],
    }

    const result = tryCastInputsToExactTypes(inputSchema, input)
    expect(result).toEqual({
      simpleNumberInput: 'Hello world',
      stringInput: [1, 2, 3],
      booleanInput: 'not a boolean',
      numbersArrayInput: [[], []],
      stringsArrayInput: [[], []],
    })
  })

  describe('Edge cases', () => {
    test('should cast string to number when using comma notation ', function () {
      const outcome = tryCastInputsToExactTypes(inputSchema, {
        simpleNumberInput: '17,2',
      })

      expect(outcome).toEqual({
        simpleNumberInput: 17.2,
      })
    })

    test('should cast string to number when using dot notation ', function () {
      const outcome = tryCastInputsToExactTypes(inputSchema, {
        simpleNumberInput: '17.2',
      })

      expect(outcome).toEqual({
        simpleNumberInput: 17.2,
      })
    })

    test('should cast string to number when the string has whitespaces ', function () {
      const outcome = tryCastInputsToExactTypes(inputSchema, {
        simpleNumberInput: '  3  ',
      })

      expect(outcome).toEqual({
        simpleNumberInput: 3,
      })
    })

    test('should NOT cast string to number when the string contains a number in the American format ', function () {
      const outcome = tryCastInputsToExactTypes(inputSchema, {
        simpleNumberInput: '12,345,678.90123',
      })

      expect(outcome).toEqual({
        simpleNumberInput: '12,345,678.90123',
      })
    })

    test('should NOT cast string to number when the string contains a number in the Ido format ', function () {
      const outcome = tryCastInputsToExactTypes(inputSchema, {
        simpleNumberInput: '12.345.678,90123',
      })

      expect(outcome).toEqual({
        simpleNumberInput: '12.345.678,90123',
      })
    })
  })
})
