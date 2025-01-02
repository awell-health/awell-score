import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const DRI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'BASIC_ACTIVITIES',
    label: { en: 'Common basic activities' },
    type: 'number',
  },
  {
    subresult_id: 'PHYSICAL_ACTIVITIES',
    label: { en: 'More demanding daily physical activities' },
    type: 'number',
  },
  {
    subresult_id: 'WORK_RELATED_ACTIVITIES',
    label: { en: 'More vigorous activities' },
    type: 'number',
  },
  {
    subresult_id: 'DRI',
    label: { en: 'Total DRI score' },
    type: 'number',
  },
]
