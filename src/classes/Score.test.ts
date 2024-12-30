import { z, ZodError } from 'zod'
import { Score } from './Score'

const score = new Score({
  name: 'Test Score',
  readme_location: __dirname,
  inputSchema: {
    simpleNumberInput: { type: z.number().optional() },
    simpleNumberInputWithRange: {
      type: z.number().min(10).max(20).optional(),
    },
    enumNumberInput: {
      type: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
    },
    dateInput: { type: z.string().date().optional() },
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
  },
  outputSchema: {
    result: { type: z.number(), label: { en: 'Result' } },
  },
  calculate: () => ({
    result: 999,
  }),
})

describe('Score', () => {
  describe('Calculate', () => {
    describe('Validation', () => {
      describe('Strict mode on', () => {
        test('should throw an error if the input is invalid', () => {
          expect(() =>
            score.calculate({
              payload: { simpleNumberInput: '1' },
              opts: { strictMode: true },
            }),
          ).toThrow(ZodError)
        })
      })

      describe('Strict mode off', () => {
        test('should not throw an error if the input is invalid', () => {
          expect(() =>
            score.calculate({
              payload: {
                simpleNumberInput: '1',
                enumNumberInput: '2',
                dateInput: '1993-11-30',
                stringInput: 3,
                enumStringInput: 'green',
                booleanInput: 'true',
                numbersArrayInput: ['1', '2', '3'],
                stringsArrayInput: [1, 2, 3],
              },
              opts: { strictMode: false },
            }),
          ).not.toThrow(ZodError)
        })
      })
    })
  })

  describe('Simulation', () => {
    test('should simulate the input', () => {
      const result = score.simulate()

      expect(result.simulatedInput).toEqual({
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

      expect(result.simulatedOutput).toEqual({
        result: 999,
      })
    })
  })

  describe('Casting inputs to exact types', () => {
    test('should not alter the orginal input if it already has the correct input types', () => {
      const input = {
        simpleNumberInput: 1,
        enumNumberInput: 2,
        dateInput: '2024-01-jhl01',
        stringInput: 'hello',
        enumStringInput: 'green',
        booleanInput: true,
        numbersArrayInput: [1, 2, 3],
        stringsArrayInput: ['1', '2', '3'],
      }

      const result = score.castInputsToExactTypes(input)
      expect(result).toEqual(input)
    })

    test('should cast the input to the correct types', () => {
      const input = {
        simpleNumberInput: '1',
        enumNumberInput: '2',
        dateInput: 'hello',
        stringInput: 3,
        enumStringInput: 'green',
        booleanInput: 'true',
        numbersArrayInput: ['1', '2', '3', 4, true, 'true', false, 'false'],
        stringsArrayInput: [1, 2, 3, '4', true, false, 'true', 'false'],
      }

      const result = score.castInputsToExactTypes(input)

      expect(result).toEqual({
        simpleNumberInput: 1,
        enumNumberInput: 2,
        dateInput: 'hello',
        stringInput: '3',
        enumStringInput: 'green',
        booleanInput: true,
        numbersArrayInput: [1, 2, 3, 4, 1, 1, 0, 0],
        stringsArrayInput: [
          '1',
          '2',
          '3',
          '4',
          'true',
          'false',
          'true',
          'false',
        ],
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

      const result = score.castInputsToExactTypes(input)
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
        const outcome = score.castInputsToExactTypes({
          simpleNumberInput: '17,2',
        })

        expect(outcome).toEqual({
          simpleNumberInput: 17.2,
        })
      })

      test('should cast string to number when using dot notation ', function () {
        const outcome = score.castInputsToExactTypes({
          simpleNumberInput: '17.2',
        })

        expect(outcome).toEqual({
          simpleNumberInput: 17.2,
        })
      })

      test('should cast string to number when the string has whitespaces ', function () {
        const outcome = score.castInputsToExactTypes({
          simpleNumberInput: '  3  ',
        })

        expect(outcome).toEqual({
          simpleNumberInput: 3,
        })
      })

      test('should NOT cast string to number when the string contains a number in the American format ', function () {
        const outcome = score.castInputsToExactTypes({
          simpleNumberInput: '12,345,678.90123',
        })

        expect(outcome).toEqual({
          simpleNumberInput: '12,345,678.90123',
        })
      })

      test('should NOT cast string to number when the string contains a number in the Ido format ', function () {
        const outcome = score.castInputsToExactTypes({
          simpleNumberInput: '12.345.678,90123',
        })

        expect(outcome).toEqual({
          simpleNumberInput: '12.345.678,90123',
        })
      })
    })
  })
})
