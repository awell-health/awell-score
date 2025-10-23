import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../../../../types'

export const STOOL_FREQUENCY_FACTOR = 2
export const ABDOMINAL_PAIN_FACTOR = 5

export const PRO2_INPUTS = {
  STOOL_FREQUENCY: {
    label: {
      nl: 'Hoeveel vloeibare of zeer zachte stoelgangen had u gemiddeld per dag tijdens de laatste 7 dagen?',
    },
    type: z.number().min(0).max(20),
    info: {
      en: `Stool frequency will be multiplied with a factor ${STOOL_FREQUENCY_FACTOR}`,
      nl: `Stoelgang wordt vermenigvuldigd met een factor ${STOOL_FREQUENCY_FACTOR}`,
    },
  },
  ABDOMINAL_PAIN: {
    label: {
      nl: 'Duid het antwoord aan dat het best uw buikpijn beschrijft, gemiddeld gezien tijdens de laatste 7 dagen.',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        { value: 0, label: { nl: 'Geen' } },
        { value: 1, label: { nl: 'Mild' } },
        { value: 2, label: { nl: 'Matig' } },
        { value: 3, label: { nl: 'Ernstig' } },
      ],
    },
    info: {
      en: `Abdominal pain will be multiplied with a factor ${ABDOMINAL_PAIN_FACTOR}`,
      nl: `Buikpijn wordt vermenigvuldigd met een factor ${ABDOMINAL_PAIN_FACTOR}`,
    },
  },
  PRO2_CD_BASELINE_SCORE: {
    label: {
      nl: 'De baseline PRO2-score van de patiënt, indien beschikbaar. Deze waarde wordt gebruikt om te bepalen of een alertstatus is bereikt. De patiënt hoeft deze vraag niet in te vullen, dus ze kan uit de vragenlijst worden verwijderd. Als deze waarde niet wordt meegegeven, kan de alertstatus niet worden bepaald.',
    },
    type: z.number().optional(),
  },
} satisfies ScoreInputSchemaType
