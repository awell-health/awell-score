import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

export const GAD2_INPUTS = {
  GAD2_Q01: {
    label: {
      en: 'Over the last two weeks, how often have you been bothered by feeling nervous, anxious, or on edge?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van uzelf zenuwachtig, angstig of gespannen te voelen?',
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
  GAD2_Q02: {
    label: {
      en: 'Over the last two weeks, how often have you been bothered by not being able to stop or control worrying?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van niet in staat te zijn om te stoppen met piekeren of om controle te krijgen over het piekeren?',
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
