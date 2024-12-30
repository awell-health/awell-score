import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const PHQ4_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PHQ4_ANXIETY_SCORE',
    label: { en: 'PHQ-4 Anxiety Score' },
    type: 'number',
  },
  {
    subresult_id: 'PHQ4_ANXIETY_POSITIVE_SCREENING',
    label: { en: 'PHQ-4 Anxiety Positive Screening' },
    type: 'boolean',
  },
  {
    subresult_id: 'PHQ4_DEPRESSION_SCORE',
    label: { en: 'PHQ-4 Depression Score' },
    type: 'number',
  },
  {
    subresult_id: 'PHQ4_DEPRESSION_POSITIVE_SCREENING',
    label: { en: 'PHQ-4 Depression Positive Screening' },
    type: 'boolean',
  },
  {
    subresult_id: 'PHQ4_TOTAL_SCORE',
    label: { en: 'PHQ-4 Total Score' },
    type: 'number',
  },
  {
    subresult_id: 'PHQ4_TOTAL_SCORE_INTERPRETATION',
    label: { en: 'PHQ-4 Total Score Interpretation' },
    type: 'string',
  },
]
