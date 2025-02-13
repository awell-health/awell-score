import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const PAQ_C_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'ACTIVITY_SUMMARY_SCORE',
    label: { en: 'PAQ-C activity summary score' },
    type: 'number',
  },
  {
    subresult_id: 'ITEM_1_SPARE_TIME_ACTIVITY_SCORE',
    label: { en: 'Spare time activity score (item 1)' },
    type: 'number',
  },
  {
    subresult_id: 'ITEMS_2_TO_8_ACTIVITY_SCORE',
    label: { en: 'Activity score items 2 to 8' },
    type: 'number',
  },
  {
    subresult_id: 'ITEM_9_ACTIVITY_SCORE',
    label: { en: 'Activity score item 9' },
    type: 'number',
  },
]
