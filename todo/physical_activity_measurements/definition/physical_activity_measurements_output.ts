import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const PHYSICAL_ACTIVITY_MEASUREMENTS_OUTPUT: CalculationOutputDefinition[] =
  [
    {
      subresult_id: 'PA_MINUTES_PER_WEEK',
      label: { en: 'Physical activity in minutes/week' },
      type: 'number',
    },
    {
      subresult_id: 'PA_MET_MINUTES_PER_WEEK',
      label: { en: 'Physical activity in MET-minutes/week' },
      type: 'number',
    },
    {
      subresult_id: 'ENOUGH_PA',
      label: { en: 'Enough physical activity' },
      type: 'number',
    },
  ]
