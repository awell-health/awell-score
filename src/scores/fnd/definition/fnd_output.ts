import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const FND_OUTPUT = {
  FAGERSTROM_TOTAL_SCORE: {
    label: { en: 'Fagerstrom Total Score' },
    type: z.number(),
  },
  FAGERSTROM_DEPENDENCE_LEVEL: {
    label: { en: 'Fagerstrom Dependence Level' },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
