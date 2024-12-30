import { z } from 'zod'

export const AGE_CALC_OUTPUT = {
  AGE: {
    label: { en: 'Age' },
    unit: { en: 'years' },
    type: z.number(),
  },
}
