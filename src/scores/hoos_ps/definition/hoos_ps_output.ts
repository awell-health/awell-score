import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const HOOS_PS_OUTPUT = {
  HOOS_PS: {
    label: { en: 'HOOS PS score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
