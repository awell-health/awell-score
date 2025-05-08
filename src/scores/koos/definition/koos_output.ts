import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const KOOS_OUTPUT = {
  KOOS: {
    label: { en: 'KOOS score' },
    type: z.number(),
  },
  PAIN: {
    label: { en: 'Pain score', fr: 'Douleur', nl: 'Pijn' },
    type: z.number(),
  },
  SYMPTOMS: {
    label: { en: 'Symptoms score', fr: 'Symptômes', nl: 'Symptomen' },
    type: z.number(),
  },
  ADL_FUNCTION: {
    label: { en: 'ADL function score', fr: 'Fonctionnalité ADL', nl: 'ADL functie score' },
    type: z.number(),
  },
  SPORT_FUNCTION: {
    label: { en: 'Sport function score', fr: 'Fonctionnalité sportive', nl: 'Sport functie score' },
    type: z.number(),
  },
  QUALITY_OF_LIFE: {
    label: { en: 'Quality of life score', fr: 'Qualité de vie', nl: 'Levenkwaliteit score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
