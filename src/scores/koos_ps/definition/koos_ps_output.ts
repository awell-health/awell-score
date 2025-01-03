import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const KOOS_PS_OUTPUT = {
  KOOS_PS: {
    label: { en: 'KOOS PS score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
