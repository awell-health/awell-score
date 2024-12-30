import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const HARRIS_HIP_SCORE_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'RANGE_OF_MOTION_SCORE',
    label: { en: 'Range of motion score' },
    type: 'number',
  },
  {
    subresult_id: 'HARRIS_HIP_SCORE',
    label: { en: 'Harris Hip Score' },
    type: 'number',
  },
]
