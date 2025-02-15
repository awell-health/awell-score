import { z } from 'zod'
import { type ScoreOutputSchemaType } from '../../../types'

export const AUDIT_OUTPUT = {
  TOTAL: {
    label: { en: 'Total AUDIT score' },
    type: z.number(),
  },
  CONSUMPTION: {
    label: { en: 'Consumption score' },
    type: z.number(),
  },
  DEPENDENCE: {
    label: { en: 'Dependence score' },
    type: z.number(),
  },
  ALCOHOL_RELATED_PROBLEMS: {
    label: { en: 'Alcohol-related problems score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
