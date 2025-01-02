import { z } from 'zod'
import { parseToApiResultFormat } from './parseToApiResultFormat'
import { CalculationResultStatus } from './types'

describe('parseToApiResultFormat', () => {
  it('should return the correct API result format', () => {
    const results = {
      result1: true,
      result2: 2,
      result3: 'hello',
      result4: null,
    }

    const outputSchema = {
      result1: { type: z.boolean(), label: { en: 'Result 1' } },
      result2: { type: z.number(), label: { en: 'Result 2' } },
      result3: { type: z.string(), label: { en: 'Result 3' } },
      result4: {
        type: z.number(),
        label: { en: 'Result 4' },
        unit: { en: 'Unit 4' },
        interpretation: { en: 'Interpretation 4' },
        terminology: {
          code: {
            coding: [
              {
                system: 'http://awellhealth.com/scores/results',
                display: 'Disability Index',
                code: 'DI',
              },
              {
                system: 'http://awellhealth.com/scores/results',
                display: 'Disability Index',
                code: 'DI',
              },
            ],
            text: 'HAQ score (Disability Index)',
          },
        },
      },
    }

    const apiResults = parseToApiResultFormat(results, outputSchema)

    expect(apiResults).toEqual([
      {
        subresult_id: 'result1',
        label: { en: 'Result 1' },
        type: 'boolean',
        result: true,
        status: CalculationResultStatus.CALCULATED,
        terminology: {
          code: {
            coding: [
              {
                system: 'http://awellhealth.com/scores/results',
                code: 'result1',
                display: 'Result 1',
              },
            ],
            text: 'Result 1',
          },
        },
      },
      {
        subresult_id: 'result2',
        label: { en: 'Result 2' },
        type: 'number',
        result: 2,
        status: CalculationResultStatus.CALCULATED,
        terminology: {
          code: {
            coding: [
              {
                system: 'http://awellhealth.com/scores/results',
                code: 'result2',
                display: 'Result 2',
              },
            ],
            text: 'Result 2',
          },
        },
      },
      {
        subresult_id: 'result3',
        label: { en: 'Result 3' },
        type: 'string',
        result: 'hello',
        status: CalculationResultStatus.CALCULATED,
        terminology: {
          code: {
            coding: [
              {
                system: 'http://awellhealth.com/scores/results',
                code: 'result3',
                display: 'Result 3',
              },
            ],
            text: 'Result 3',
          },
        },
      },
      {
        subresult_id: 'result4',
        label: { en: 'Result 4' },
        type: 'number',
        result: undefined,
        status: CalculationResultStatus.MISSING,
        unit: { en: 'Unit 4' },
        interpretation: { en: 'Interpretation 4' },
        terminology: {
          code: {
            coding: [
              {
                system: 'http://awellhealth.com/scores/results',
                display: 'Result 4',
                code: 'result4',
              },
              {
                system: 'http://awellhealth.com/scores/results',
                display: 'Disability Index',
                code: 'DI',
              },
              {
                system: 'http://awellhealth.com/scores/results',
                display: 'Disability Index',
                code: 'DI',
              },
            ],
            text: 'HAQ score (Disability Index)',
          },
        },
      },
    ])
  })
})
