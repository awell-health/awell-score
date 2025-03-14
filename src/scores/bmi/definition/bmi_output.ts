import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BMI_OUTPUT = {
  bmi: { 
    label: { en: 'Body Mass Index (BMI)' },
    type: z.number(), 
    unit: 'kg/m²' 
  }
} satisfies ScoreOutputSchemaType
