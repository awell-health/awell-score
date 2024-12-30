import type { InputType } from '../../../src/types/calculations.types'

export const GAD2_INPUTS: Array<InputType> = [
  {
    input_id: 'GAD2_Q01',
    input_label: {
      en: 'Over the last two weeks, how often have you been bothered by feeling nervous, anxious, or on edge?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van uzelf zenuwachtig, angstig of gespannen te voelen?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
  {
    input_id: 'GAD2_Q02',
    input_label: {
      en: 'Over the last two weeks, how often have you been bothered by not being able to stop or control worrying?',
      nl: 'Hoe vaak hebt u in de afgelopen 2 weken last gehad van niet in staat te zijn om te stoppen met piekeren of om controle te krijgen over het piekeren?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
]
