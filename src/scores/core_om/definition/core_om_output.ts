import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const CORE_OM_OUTPUT = {
  TOTAL_RAW: {
    label: { en: 'Total - Raw Score' },
    type: z.number(),
  },
  SUBJECTIVE_WELL_BEING_DEFICITS_RAW: {
    label: { en: 'Subjective well-being deficits - Raw Score' },
    type: z.number(),
  },
  SUBJECTIVE_WELL_BEING_DEFICITS_MEAN: {
    label: { en: 'Subjective well-being deficits - Mean Score' },
    type: z.number(),
  },
  PROBLEMS_SYMPTOMS_RAW: {
    label: { en: 'Problems/symptoms - Raw Score' },
    type: z.number(),
  },
  PROBLEMS_SYMPTOMS_MEAN: {
    label: { en: 'Problems/symptoms - Mean Score' },
    type: z.number(),
  },
  LIFE_FUNCTIONING_DIFFICULTIES_RAW: {
    label: { en: 'Life functioning difficulties - Raw Score' },
    type: z.number(),
  },
  LIFE_FUNCTIONING_DIFFICULTIES_MEAN: {
    label: { en: 'Life functioning difficulties - Mean Score' },
    type: z.number(),
  },
  RISK_HARM_RAW: {
    label: { en: 'Risk/harm - Raw Score' },
    type: z.number(),
  },
  RISK_HARM_MEAN: {
    label: { en: 'Risk/harm - Mean Score' },
    type: z.number(),
  },
  TOTAL_MEAN: {
    label: { en: 'Total - Mean Score' },
    type: z.number(),
  },
} satisfies ScoreOutputSchemaType
