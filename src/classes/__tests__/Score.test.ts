import { z, ZodError } from 'zod'
import { Score } from '../Score'
import { CalculationResultStatus } from '../../lib/parseToApiResultFormat/types'

const score = new Score({
  id: 'test_score',
  name: 'Test Score',
  readmeLocation: __dirname,
  inputSchema: {
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
  terminology: {
    category: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'vital-signs',
            display: 'Vital Signs',
          },
        ],
      },
    ],
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

      expect(result.results).toEqual({
        result: 999,
      })
    })

    test('should simulate the input and return the results in the awell format', () => {
      const result = score.simulate()
      const awellResults = score.formatResults(result.results, {
        format: 'awell',
      })

      expect(awellResults).toEqual([
        {
          subresult_id: 'result',
          label: { en: 'Result' },
          type: 'number',
          result: 999,
          status: CalculationResultStatus.CALCULATED,
          terminology: {
            code: {
              coding: [
                {
                  system: 'http://awellhealth.com/scores/results',
                  code: 'result',
                  display: 'Result',
                },
              ],
              text: 'Result',
            },
          },
        },
      ])
    })
  })

  describe('API schema', () => {
    test('should return the API schema', () => {
      expect(score.apiSchema).toEqual({
        calculation_id: 'test_score',
        calculation_name: {
          en: 'Test Score',
        },
        calculation_description: {
          en: '<p>This is a test README file.</p>',
        },
        calculation_blueprint: {
          input_definition: [
            {
              id: 'simpleNumberInput',
              type: {
                type: 'number',
                required: false,
              },
            },
            {
              id: 'simpleNumberInputWithRange',
              type: {
                type: 'number',
                range: {
                  min: {
                    value: 10,
                  },
                  max: {
                    value: 20,
                  },
                },
                required: false,
              },
            },
            {
              id: 'enumNumberInput',
              type: {
                type: 'number',
                required: false,
                allowed_answers: [
                  { value: 1, label: { en: 'One' } },
                  { value: 2, label: { en: 'Two' } },
                  { value: 3, label: { en: 'Three' } },
                ],
              },
            },
            {
              id: 'dateInput',
              type: {
                type: 'date',
                required: false,
              },
            },
            {
              id: 'stringInput',
              type: {
                type: 'string',
                required: false,
              },
            },
            {
              id: 'enumStringInput',
              type: {
                type: 'string',
                required: false,
                allowed_answers: [
                  {
                    value: 'blue',
                  },
                  {
                    value: 'green',
                  },
                  {
                    value: 'red',
                  },
                ],
              },
            },
            {
              id: 'booleanInput',
              type: {
                type: 'boolean',
                required: false,
                allowed_answers: [
                  {
                    value: true,
                    label: {
                      en: 'Yes',
                    },
                  },
                  {
                    value: false,
                    label: {
                      en: 'No',
                    },
                  },
                ],
              },
            },
            {
              id: 'numbersArrayInput',
              type: {
                type: 'numbers_array',
                required: false,
                allowed_answers: [
                  {
                    value: 1,
                  },
                  {
                    value: 2,
                  },
                  {
                    value: 3,
                  },
                ],
              },
            },
            {
              id: 'stringsArrayInput',
              type: {
                type: 'strings_array',
                required: false,
                allowed_answers: [
                  {
                    value: '1',
                  },
                  {
                    value: '2',
                  },
                  {
                    value: '3',
                  },
                ],
              },
            },
          ],
          output_definition: [
            {
              subresult_id: 'result',
              label: {
                en: 'Result',
              },
              type: 'number',
              terminology: {
                code: {
                  coding: [
                    {
                      system: 'http://awellhealth.com/scores/results',
                      code: 'result',
                      display: 'Result',
                    },
                  ],
                  text: 'Result',
                },
              },
            },
          ],
        },
        terminology: {
          category: [
            {
              coding: [
                {
                  system:
                    'http://terminology.hl7.org/CodeSystem/observation-category',
                  code: 'vital-signs',
                  display: 'Vital Signs',
                },
              ],
            },
          ],
        },
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

      const result = score.tryCastInputsToExactTypes(input)
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

      const result = score.tryCastInputsToExactTypes(input)

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

      const result = score.tryCastInputsToExactTypes(input)
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
        const outcome = score.tryCastInputsToExactTypes({
          simpleNumberInput: '17,2',
        })

        expect(outcome).toEqual({
          simpleNumberInput: 17.2,
        })
      })

      test('should cast string to number when using dot notation ', function () {
        const outcome = score.tryCastInputsToExactTypes({
          simpleNumberInput: '17.2',
        })

        expect(outcome).toEqual({
          simpleNumberInput: 17.2,
        })
      })

      test('should cast string to number when the string has whitespaces ', function () {
        const outcome = score.tryCastInputsToExactTypes({
          simpleNumberInput: '  3  ',
        })

        expect(outcome).toEqual({
          simpleNumberInput: 3,
        })
      })

      test('should NOT cast string to number when the string contains a number in the American format ', function () {
        const outcome = score.tryCastInputsToExactTypes({
          simpleNumberInput: '12,345,678.90123',
        })

        expect(outcome).toEqual({
          simpleNumberInput: '12,345,678.90123',
        })
      })

      test('should NOT cast string to number when the string contains a number in the Ido format ', function () {
        const outcome = score.tryCastInputsToExactTypes({
          simpleNumberInput: '12.345.678,90123',
        })

        expect(outcome).toEqual({
          simpleNumberInput: '12.345.678,90123',
        })
      })
    })
  })
})
