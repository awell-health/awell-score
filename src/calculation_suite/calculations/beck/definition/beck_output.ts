import { z } from 'zod'

export const BECK_OUTPUT = {
  beck: {
    label: { en: 'Total BDI score' },
    type: z.number(),
  },
}
