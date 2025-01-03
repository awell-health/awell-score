import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../types'

export const EQ5D_5L_OUTPUT = {
  EQ_HEALTH_STATE: {
    label: { en: 'EQ Health State' },
    type: z.number(),
  },
  EQ_VAS: {
    label: { en: 'EQ VAS' },
    type: z.number(),
  },
  UTILITY_VALUE_HEALTH_STATE_BELGIUM: {
    label: { en: 'Utility value of health state - Belgium' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
