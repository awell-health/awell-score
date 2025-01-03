import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../types'

export const EQ5D_3L_OUTPUT = {
  EQ_HEALTH_STATE: {
    label: { en: 'EQ_HEALTH_STATE' },
    type: z.number(),
  },
  EQ_VAS: {
    label: { en: 'EQ_VAS' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
