import { z } from 'zod'
import type { ScoreOutputSchemaType } from '../../../types'

export const BMI_TEST_OUTPUT = {
  bmi: {
    type: z.number(),
    label: { en: 'Body Mass Index (BMI)' },
    unit: 'kg/m²',
  },
} satisfies ScoreOutputSchemaType
