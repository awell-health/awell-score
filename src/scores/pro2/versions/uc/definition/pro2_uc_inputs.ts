import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../../../types'

export const PRO2_UC_INPUTS = {
  STOOL_FREQUENCY: {
    label: {
      nl: 'Hoeveel stoelgangen had u gemiddeld tijdens de laatste 3 dagen, vergeleken met het aantal stoelgangen wanneer de ziekte volledig onder controle is of voor u ziek werd?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Normaal aantal stoelgangen' } },
        { value: 1, label: { en: '1-2 stoelgangen per dag meer dan normaal' } },
        { value: 2, label: { en: '3-4 stoelgangen per dag meer dan normaal' } },
        {
          value: 3,
          label: { en: '5 of meer stoelgangen per dag meer dan normaal' },
        },
      ],
    },
  },
  BLOOD_IN_STOOL: {
    label: {
      nl: 'Duid het antwoord aan dat het best de hoeveelheid bloed beschrijft die u de afgelopen 3 dagen gemiddeld genomen in uw ontlasting hebt gezien.',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        { value: 0, label: { en: 'Geen bloed' } },
        {
          value: 1,
          label: {
            en: 'Streepjes bloed bij de stoelgang minder dan de helft van de tijd',
          },
        },
        {
          value: 2,
          label: {
            en: 'Duidelijke bloedbijmenging, bij de meeste stoelgangen',
          },
        },
        { value: 3, label: { en: 'Ontlasting met alleen puur bloed' } },
      ],
    },
  },
} satisfies ScoreInputSchemaType
