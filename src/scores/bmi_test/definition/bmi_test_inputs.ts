import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const BMI_TEST_INPUTS = {
  weight: {
    label: { en: 'Weight in kilograms' },
    type: z.number().nonnegative(),
    unit: 'kg',
  },
  height: {
    label: { en: 'Height in centimeters' },
    type: z.number().positive(),
    unit: 'cm',
  },
} satisfies ScoreInputSchemaType
