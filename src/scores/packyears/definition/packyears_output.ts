import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const PACKYEARS_OUTPUT = {
  PACKYEARS: {
    label: { en: 'Packyears' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
