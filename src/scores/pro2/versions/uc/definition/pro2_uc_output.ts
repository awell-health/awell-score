import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../../types'

export const PRO2_UC_OUTPUT = {
  PRO2_UC_SCORE: {
    label: { en: 'PRO2 UC Score' },
    type: z.number(),
  },
  PRO2_UC_ALERT: {
    label: { en: 'PRO2 UC Alert' },
    type: z.boolean(),
  },
} satisfies ScoreOutputSchemaType
