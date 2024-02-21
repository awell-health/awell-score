import type { InputType } from '../../../../types/calculations.types'

export const PHQ4_INPUTS: Array<InputType> = [
  {
    input_id: 'PHQ4_Q01',
    input_label: {
      en: 'Over the last two weeks, how often have you been bothered by feeling nervous, anxious or on edge?',
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
    input_id: 'PHQ4_Q02',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by not being able to stop or control worrying?',
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
    input_id: 'PHQ4_Q03',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by feeling down, depressed or hopeless?',
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
    input_id: 'PHQ4_Q04',
    input_label: {
      en: 'Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?',
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
