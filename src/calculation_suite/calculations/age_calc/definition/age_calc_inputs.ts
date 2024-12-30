import { z } from 'zod'

export const AGE_CALC_INPUTS = {
  date_of_birth: {
    type: z.string().date(),
    input_label: {
      nl: 'Geboortedatum',
      en: 'Date of Birth',
      fr: 'Date de naissance',
      de: 'Geburtsdatum',
    },
  },
}
