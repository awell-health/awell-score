import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const BMI_TEST_INPUTS = {
  weight: {
    label: { en: 'Weight (kg)' },
    type: z.number().nonnegative(),
    unit: 'kg',
  },
  height: {
    label: { en: 'Height (cm)' },
    type: z.number().positive(),
    unit: 'cm',
  },
} satisfies ScoreInputSchemaType
