import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const KOOS_OUTPUT = {
  KOOS: {
    label: { en: 'KOOS score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
