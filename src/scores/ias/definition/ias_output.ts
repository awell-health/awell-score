import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const IAS_OUTPUT = {
  HEALTH_ANXIETY: {
    label: { en: 'Health anxiety' },
    type: z.number(),
  },
  ILNESS_BEHAVIOUR: {
    label: { en: 'Ilness behaviour' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
