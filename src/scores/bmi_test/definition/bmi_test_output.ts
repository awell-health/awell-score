import { z } from 'zod'
import { ScoreOutputSchemaType } from '../../../types'

export const BMI_TEST_OUTPUT = {
  BMI: {
    label: { en: 'Body Mass Index' },
    type: z.number(),
    unit: 'kg/m²',
  },
} satisfies ScoreOutputSchemaType
