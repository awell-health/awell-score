import { EnumNumberInputType, ScoreInputSchemaType } from '../../../types'
import { z } from 'zod'

const type = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
  uiOptions: {
    options: [
      { value: 0, label: { nl: 'Geen', en: 'None', fr: 'Absente' } },
      { value: 1, label: { nl: 'Gering', en: 'Mild', fr: 'Légère' } },
      { value: 2, label: { nl: 'Matig', en: 'Moderate', fr: 'Modérée' } },
      { value: 3, label: { nl: 'Veel', en: 'Severe', fr: 'Forte' } },
      { value: 4, label: { nl: 'Erg veel', en: 'Extreme', fr: 'Extrême' } },
    ],
  },
} satisfies EnumNumberInputType

export const HOOS_PS_INPUTS = {
  '1_stairs': {
    label: {
      nl: 'Trap aflopen',
      en: 'Descending stairs',
      fr: 'Descendre les escaliers',
    },
    ...type,
  },
  '2_bath_shower': {
    label: {
      nl: 'In/uit bad of douche gaan',
      en: 'Getting in/out of bath or shower',
      fr: 'Entrer ou sortir d’une baignoire',
    },
    ...type,
  },
  '3_sit': {
    label: { nl: 'Zitten', en: 'Sitting', fr: 'Rester assis(e)' },
    ...type,
  },
  '4_running': {
    label: { nl: 'Hardlopen', en: 'Running', fr: 'Courir' },
    ...type,
  },
  '5_turn_on_leg': {
    label: {
      nl: 'Draaien op een belast been',
      en: 'Twisting/pivoting on your loaded leg',
      fr: 'Tourner, pivoter sur votre jambe',
    },
    ...type,
  },
} satisfies ScoreInputSchemaType
