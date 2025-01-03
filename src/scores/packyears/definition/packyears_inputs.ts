import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const PACKYEARS_INPUTS = {
  cigarettes_per_day: {
    label: {
      nl: 'Hoeveel sigaretten rook of rookte je gemiddeld per dag?',
      en: 'On average, how many cigarettes do or did you smoke per day?',
      fr: 'En moyenne, combien de cigarettes fumiez-vous ou fumiez-vous par jour?',
      de: 'Wie viele Zigaretten haben oder haben Sie durchschnittlich pro Tag geraucht?',
    },
    type: z.number().min(0).max(100),
    unit: { en: 'Cigarettes/day' },
    info: {
      nl: 'Er zitten 20 sigaretten in een pakje. Als je een pakje per dag rookt, vul je dus 20 in.',
      en: 'There are 20 cigarettes in a pack. If you smoke one pack per day, you fill in 20.',
      fr: 'Il y a 20 cigarettes dans un paquet. Si vous fumez un paquet par jour, vous en remplissez 20.',
      de: 'Eine Packung enthält 20 Zigaretten. Wenn Sie eine Packung pro Tag rauchen, füllen Sie 20 aus.',
    },
  },
  number_years_smoking: {
    label: {
      nl: 'Hoeveel jaar rook je of heb je gerookt?',
      en: 'For how many years have you been smoking or have you smoked?',
      fr: "Depuis combien d'années fumez-vous ou fumez-vous?",
      de: 'Seit wie vielen Jahren rauchst du oder hast du geraucht?',
    },
    type: z.number().min(0).max(100),
    unit: { en: 'Number of years smoking' },
  },
} satisfies ScoreInputSchemaType
