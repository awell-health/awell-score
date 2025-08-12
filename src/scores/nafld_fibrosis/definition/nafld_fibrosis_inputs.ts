import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const NAFLD_FIBROSIS_INPUTS = {
  age: {
    type: z.number().min(0),
    label: { en: 'Age' },
    unit: { en: 'years' },
  },
  bmi: {
    type: z.number().min(0),
    label: { en: 'BMI' },
    unit: { en: 'kg/m2' },
  },
  ifg_or_diabetes: {
    type: z.boolean(),
    label: { en: 'Impaired fasting glucose or diabetes' },
  },
  ast: {
    type: z.number().min(1),
    label: { en: 'AST' },
    unit: { en: 'U/L' },
  },
  alt: {
    type: z.number().min(1),
    label: { en: 'ALT' },
    unit: { en: 'U/L' },
  },
  platelet: {
    type: z.number().min(0),
    label: { en: 'Platelet count' },
    unit: { en: '×10^9/L' },
  },
  albumin: {
    type: z.number().min(0),
    label: { en: 'Albumin' },
    unit: { en: 'g/dL' },
  },
} satisfies ScoreInputSchemaType
