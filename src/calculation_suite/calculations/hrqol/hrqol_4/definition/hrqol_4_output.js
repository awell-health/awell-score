// @flow

import type { CalculationOutputDefinition } from '../../../../../types/calculations.types'

export const HRQOL_4_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'HRQOL_4_GENERAL_HEALTH_STATUS',
    label: { en: 'HRQOL-4 - General Health Status' },
    type: 'number'
  },
  {
    subresult_id: 'HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS',
    label: { en: 'HRQOL-4 - Physically Unhealthy Days' },
    type: 'number'
  },
  {
    subresult_id: 'HRQOL_4_MENTALLY_UNHEALTHY_DAYS',
    label: { en: 'HRQOL-4 - Mentally Unhealthy Days' },
    type: 'number'
  },
  {
    subresult_id: 'HRQOL_4_ACTIVITY_LIMITATION_DAYS',
    label: { en: 'HRQOL-4 - Activity Limitation Days' },
    type: 'number'
  },
  {
    subresult_id: 'HRQOL_4_UNHEALTHY_DAYS_INDEX',
    label: { en: 'HRQOL-4 - Unhealthy Days Index' },
    type: 'number'
  },
  {
    subresult_id: 'HRQOL_4_HEALTHY_DAYS_INDEX',
    label: { en: 'HRQOL-4 - Healthy Days Index' },
    type: 'number'
  }
]
