import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const FSFI_OUTPUT = {
  FSFI_DESIRE_SCORE: {
    label: { 
      en: 'FSFI Desire Domain Score',
      pl: 'FSFI Wynik domeny pożądania'
    },
    type: z.number(),
  },
  FSFI_AROUSAL_SCORE: {
    label: { 
      en: 'FSFI Arousal Domain Score',
      pl: 'FSFI Wynik domeny podniecenia'
    },
    type: z.number(),
  },
  FSFI_LUBRICATION_SCORE: {
    label: { 
      en: 'FSFI Lubrication Domain Score',
      pl: 'FSFI Wynik domeny lubrykacji'
    },
    type: z.number(),
  },
  FSFI_ORGASM_SCORE: {
    label: { 
      en: 'FSFI Orgasm Domain Score',
      pl: 'FSFI Wynik domeny orgazmu'
    },
    type: z.number(),
  },
  FSFI_SATISFACTION_SCORE: {
    label: { 
      en: 'FSFI Satisfaction Domain Score',
      pl: 'FSFI Wynik domeny satysfakcji'
    },
    type: z.number(),
  },
  FSFI_PAIN_SCORE: {
    label: { 
      en: 'FSFI Pain Domain Score',
      pl: 'FSFI Wynik domeny bólu'
    },
    type: z.number(),
  },
  FSFI_TOTAL_SCORE: {
    label: { 
      en: 'FSFI Total Score',
      pl: 'FSFI Wynik całkowity'
    },
    type: z.number(),
  },
  FSFI_INTERPRETATION: {
    label: { 
      en: 'FSFI Clinical Interpretation',
      pl: 'FSFI Interpretacja kliniczna'
    },
    type: z.string(),
  },
} satisfies ScoreOutputSchemaType
