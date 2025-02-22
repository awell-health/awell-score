import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const HRQOL_4_OUTPUT = {
  HRQOL_4_UNHEALTHY_DAYS_INDEX: {
    label: { en: 'HRQOL-4 - Unhealthy Days Index' },
    type: z.number(),
  },
  HRQOL_4_GENERAL_HEALTH_STATUS: {
    label: { en: 'HRQOL-4 - General Health Status' },
    type: z.number(),
  },
  HRQOL_4_PHYSICALLY_UNHEALTHY_DAYS: {
    label: { en: 'HRQOL-4 - Physically Unhealthy Days' },
    type: z.number(),
  },
  HRQOL_4_MENTALLY_UNHEALTHY_DAYS: {
    label: { en: 'HRQOL-4 - Mentally Unhealthy Days' },
    type: z.number(),
  },
  HRQOL_4_ACTIVITY_LIMITATION_DAYS: {
    label: { en: 'HRQOL-4 - Activity Limitation Days' },
    type: z.number(),
  },
  HRQOL_4_HEALTHY_DAYS_INDEX: {
    label: { en: 'HRQOL-4 - Healthy Days Index' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
