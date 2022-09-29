import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const DAST10_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'DAST10_SCORE',
    label: { en: 'DAST-10 Score' },
    type: 'number',
  },
  {
    subresult_id: 'DAST10_DEGREE_OF_PROBLEMS',
    label: { en: 'Degree of problems related to drug abuse' },
    type: 'string',
  },
]
