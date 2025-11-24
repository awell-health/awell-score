import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const AIS_OUTPUT = {
  AIS_SCORE: {
    label: { 
      en: 'AIS Score',
      pl: 'Wynik AIS'
    },
    type: z.number(),
  },
  AIS_INTERPRETATION: {
    label: { 
      en: 'AIS Interpretation',
      pl: 'Interpretacja AIS'
    },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
