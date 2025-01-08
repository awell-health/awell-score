import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../../types'

export const VISA_A_OUTPUT = {
  VISA_A: {
    label: { en: 'VISA-A Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
