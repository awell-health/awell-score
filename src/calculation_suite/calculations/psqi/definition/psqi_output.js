// @flow

import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const PSQI_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'PSQI_TOTAL_SCORE',
    label: { en: 'PSQI Total Score' },
    type: 'number'
  },
  {
    subresult_id: 'SUBJECTIVE_SLEEP_QUALITY',
    label: { en: 'Subjective Sleep Quality' },
    type: 'number'
  },
  {
    subresult_id: 'SLEEP_LATENCY',
    label: { en: 'Sleep Latency' },
    type: 'number'
  },
  {
    subresult_id: 'SLEEP_DURATION',
    label: { en: 'Sleep Duration' },
    type: 'number'
  },
  {
    subresult_id: 'HABITUAL_SLEEP_EFFICIENCY',
    label: { en: 'Habitual Sleep Efficiency' },
    type: 'number'
  },
  {
    subresult_id: 'SLEEP_DISTURBANCES',
    label: { en: 'Sleep Disturbances' },
    type: 'number'
  },
  {
    subresult_id: 'USE_OF_SLEEPING_MEDICATION',
    label: { en: 'Use of Sleeping Medication' },
    type: 'number'
  },
  {
    subresult_id: 'DAYTIME_DYSFUNCTION',
    label: { en: 'Daytime Dysfunction' },
    type: 'number'
  }
]
