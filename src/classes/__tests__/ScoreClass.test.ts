import { z, ZodError } from 'zod'
import { Score } from '../Score'
import { CalculationResultStatus } from '../../lib/parseToApiSchema/awell/result/parseToApiResultFormat/types'
import { type ScoreInputSchemaType } from '../../types'

const createScore = (inputSchema?: ScoreInputSchemaType) => {
  return new Score({
    id: 'test_score',
    name: 'Test Score',
    readmeLocation: __dirname,
    inputSchema: inputSchema || {
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
      dateInput: {
        type: z.string().optional().pipe(z.coerce.date().optional()),
      },
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
}

describe('Score', () => {
  const defaultScore = createScore()

  describe('Calculate', () => {
    describe('Validation', () => {
      describe('Strict mode on', () => {
        test('should throw an error if the input is invalid', () => {
          expect(() =>
            createScore().calculate({
              payload: { simpleNumberInput: '1' },
              opts: { strictMode: true },
            }),
          ).toThrow(ZodError)
        })
      })

      describe('Strict mode off', () => {
        test('should not throw an error if the input is invalid', () => {
          expect(() =>
            defaultScore.calculate({
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

    describe('Return missing on ZodError (only for missing inputs)', () => {
      const newScore = createScore({
        simpleNumberInputOne: { type: z.number() }, // required
        simpleNumberInputTwo: { type: z.number() }, // required
      })

      test('should throw an error if an input is invalid', () => {
        expect(() =>
          newScore.calculate({
            payload: {
              simpleNumberInputOne: 'invalid',
              simpleNumberInputTwo: 2,
            },
            opts: { nullOnMissingInputs: true },
          }),
        ).toThrow(ZodError)
      })

      test('should not throw and return null score if an input is missing', () => {
        const result = newScore.calculate({
          payload: {
            // simpleNumberInputOne: 1, -- MISSING while required
            simpleNumberInputTwo: 2,
          },
          opts: { nullOnMissingInputs: true },
        })

        expect(result).toEqual({
          result: null,
        })
      })
    })
  })

  describe('Simulation', () => {
    test('should simulate the input and return the results in the awell format', () => {
      const result = defaultScore.simulate()
      const awellResults = defaultScore.formatResults(result.results, {
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
      expect(defaultScore.apiSchema).toEqual({
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
              input_type: {
                type: 'number',
                required: false,
              },
            },
            {
              id: 'simpleNumberInputWithRange',
              input_type: {
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
              input_type: {
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
              input_type: {
                type: 'date',
                required: false,
              },
            },
            {
              id: 'stringInput',
              input_type: {
                type: 'string',
                required: false,
              },
            },
            {
              id: 'enumStringInput',
              input_type: {
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
              input_type: {
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
              input_type: {
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
              input_type: {
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

  describe('Error handling (zod)', () => {
    describe('Simple number input', () => {
      test('Required input is missing', () => {
        expect(() =>
          createScore({
            input: { type: z.number() },
          }).calculate({
            payload: {},
          }),
        ).toThrow(
          expect.objectContaining({
            issues: expect.arrayContaining([
              expect.objectContaining({
                code: 'invalid_type',
                expected: 'number',
                received: 'undefined',
                path: ['input'],
                message: 'Required',
              }),
            ]),
          }),
        )
      })

      test('Input is invalid', () => {
        expect(() =>
          createScore({
            input: { type: z.number() },
          }).calculate({
            payload: { input: 'hello-world' },
          }),
        ).toThrow(
          expect.objectContaining({
            issues: [
              {
                code: 'invalid_type',
                expected: 'number',
                received: 'string',
                path: ['input'],
                message: 'Expected number, received string',
              },
            ],
          }),
        )
      })
    })

    describe('Enum number input', () => {
      test('Required input is missing', () => {
        expect(() =>
          createScore({
            input: { type: z.union([z.literal(1), z.literal(2)]) },
          }).calculate({
            payload: {},
          }),
        ).toThrow(
          expect.objectContaining({
            issues: [
              {
                code: 'invalid_union',
                unionErrors: expect.any(Array),
                path: ['input'],
                message: 'Required',
              },
            ],
          }),
        )
      })

      test('Input is invalid', () => {
        expect(() =>
          createScore({
            input: { type: z.union([z.literal(1), z.literal(2)]) },
          }).calculate({
            payload: { input: 3 },
          }),
        ).toThrow(
          expect.objectContaining({
            issues: [
              {
                code: 'invalid_union',
                unionErrors: expect.any(Array),
                path: ['input'],
                message: 'Invalid input',
              },
            ],
          }),
        )
      })
    })

    describe('Array of enum number input', () => {
      test('Required input is missing (undefined)', () => {
        expect(() =>
          createScore({
            input: { type: z.array(z.union([z.literal(1), z.literal(2)])) },
          }).calculate({
            payload: {},
          }),
        ).toThrow(
          expect.objectContaining({
            issues: [
              {
                code: 'invalid_type',
                expected: 'array',
                received: 'undefined',
                path: ['input'],
                message: 'Required',
              },
            ],
          }),
        )
      })

      test('Input is invalid', () => {
        expect(() =>
          createScore({
            input: { type: z.array(z.union([z.literal(1), z.literal(2)])) },
          }).calculate({
            payload: { input: [1, 2, 3] },
          }),
        ).toThrow(
          expect.objectContaining({
            issues: [
              {
                code: 'invalid_union',
                unionErrors: expect.any(Array),
                path: ['input', 2],
                message: 'Invalid input',
              },
            ],
          }),
        )
      })
    })

    describe('Mixed inputs', () => {
      test('should throw', () => {
        expect(() =>
          createScore({
            inputOne: { type: z.array(z.union([z.literal(1), z.literal(2)])) },
            inputTwo: {
              type: z.array(z.union([z.literal(1), z.literal(2)])).optional(),
            },
            inputThree: { type: z.number() },
          }).calculate({
            payload: {
              inputTwo: [2],
            },
          }),
        ).toThrow(
          expect.objectContaining({
            issues: [
              {
                code: 'invalid_type',
                expected: 'array',
                received: 'undefined',
                path: ['inputOne'],
                message: 'Required',
              },
              {
                code: 'invalid_type',
                expected: 'number',
                received: 'undefined',
                path: ['inputThree'],
                message: 'Required',
              },
              // Does not contain the invalid inputTwo
              // as we first preprocess the payload and check for missing inputs
            ],
          }),
        )
      })
    })
  })
})
