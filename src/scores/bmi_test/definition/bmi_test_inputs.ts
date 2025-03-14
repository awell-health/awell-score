import { z } from 'zod'
import type { ScoreInputSchemaType } from '../../../types'

export const BMI_TEST_INPUTS = {
  weight: {
    type: z.number().positive(),
    label: { en: 'Weight (kg)' },
    unit: 'kg',
  },
  height: {
    type: z.number().positive(),
    label: { en: 'Height (cm)' },
    unit: 'cm',
  },
} satisfies ScoreInputSchemaType
