import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const KBILD_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'KBILD_RAW_TOTAL_SCORE',
    label: { en: 'KBILD Raw Total Score' },
    type: 'number',
  },
  {
    subresult_id: 'KBILD_RAW_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE',
    label: { en: 'KBILD Raw Breathlessness and Activities Domain Score' },
    type: 'number',
  },
  {
    subresult_id: 'KBILD_RAW_PSYCHOLOGICAL_DOMAIN_SCORE',
    label: { en: 'KBILD Raw Psychological Domain Score' },
    type: 'number',
  },
  {
    subresult_id: 'KBILD_RAW_CHEST_SYMPTOMS_DOMAIN_SCORE',
    label: { en: 'KBILD Raw Chest Symptoms Domain Score' },
    type: 'number',
  },
  {
    subresult_id: 'KBILD_TRANSFORMED_TOTAL_SCORE',
    label: { en: 'KBILD Transformed Total Score' },
    type: 'number',
  },
  {
    subresult_id:
      'KBILD_TRANSFORMED_BREATHLESSNESS_AND_ACTIVITIES_DOMAIN_SCORE',
    label: {
      en: 'KBILD Transformed Breathlessness and Activities Domain Score',
    },
    type: 'number',
  },
  {
    subresult_id: 'KBILD_TRANSFORMED_PSYCHOLOGICAL_DOMAIN_SCORE',
    label: { en: 'KBILD Transformed Psychological Domain Score' },
    type: 'number',
  },
  {
    subresult_id: 'KBILD_TRANSFORMED_CHEST_SYMPTOMS_DOMAIN_SCORE',
    label: { en: 'KBILD Transformed Chest Symptoms Domain Score' },
    type: 'number',
  },
]
