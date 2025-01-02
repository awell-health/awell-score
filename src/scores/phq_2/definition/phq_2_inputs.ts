import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const PHQ2_INPUTS = {
  PHQ2_Q01: {
    label: {
      en: 'Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van weinig interesse of plezier in activiteiten?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        {
          label: { en: 'Not at all', nl: 'Helemaal niet' },
          value: 0,
        },
        {
          label: { en: 'Several days', nl: 'Meerdere dagen' },
          value: 1,
        },
        {
          label: {
            en: 'More than half the days',
            nl: 'Meer dan de helft van de dagen',
          },
          value: 2,
        },
        {
          label: { en: 'Nearly every day', nl: 'Bijna elke dag' },
          value: 3,
        },
      ],
    },
  },
  PHQ2_Q02: {
    label: {
      en: 'Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van u neerslachtig, depressief of wanhopig voelen?',
    },
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        {
          label: { en: 'Not at all', nl: 'Helemaal niet' },
          value: 0,
        },
        {
          label: { en: 'Several days', nl: 'Meerdere dagen' },
          value: 1,
        },
        {
          label: {
            en: 'More than half the days',
            nl: 'Meer dan de helft van de dagen',
          },
          value: 2,
        },
        {
          label: { en: 'Nearly every day', nl: 'Bijna elke dag' },
          value: 3,
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
