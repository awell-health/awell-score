import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'
import { compactDateToIsoDate } from '../../../lib/zod/transformers/compactDateToIsoDate/compactDateToIsoDate'

export const AGE_CALC_INPUTS = {
  date_of_birth: {
    type: z
      .string()
      .min(1)
      .transform(compactDateToIsoDate)
      .pipe(z.coerce.date()),
    label: {
      nl: 'Geboortedatum',
      en: 'Date of Birth',
      fr: 'Date de naissance',
      de: 'Geburtsdatum',
    },
  },
} satisfies ScoreInputSchemaType
