import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../../types'

export const PRO2_OUTPUT = {
  TOTAL_SCORE: {
    label: { en: 'Total score' },
    type: z.number(),
  },
  STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE: {
    label: { en: 'Subscore (SF & AP)' },
    type: z.number(),
  },
  REMISSION: {
    label: { en: 'Remission' },
    type: z.boolean(),
  },
} satisfies ScoreOutputSchemaType
