import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const BMI_TEST_OUTPUT = {
  BMI_RESULT: { 
    label: { en: 'Body Mass Index (BMI)' },
    type: z.number(), 
    unit: 'kg/m²' 
  }
} satisfies ScoreOutputSchemaType
