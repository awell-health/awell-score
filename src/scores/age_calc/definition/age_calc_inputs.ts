import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const AGE_CALC_INPUTS = {
  date_of_birth: {
    type: z.string().date(),
    label: {
      nl: 'Geboortedatum',
      en: 'Date of Birth',
      fr: 'Date de naissance',
      de: 'Geburtsdatum',
    },
  },
} satisfies ScoreInputSchemaType
