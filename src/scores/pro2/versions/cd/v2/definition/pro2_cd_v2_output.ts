import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../../../types'

export const PRO2_OUTPUT = {
  PRO2_CD_SCORE: {
    label: { en: 'PRO2 CD Score' },
    type: z.number(),
  },
  PRO2_CD_ALERT: {
    label: { en: 'PRO2 CD Alert' },
    type: z.boolean(),
  },
} satisfies ScoreOutputSchemaType
