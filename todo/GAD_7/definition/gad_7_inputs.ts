import type { InputType } from '../../../src/types/calculations.types'

export const GAD7_INPUTS: Array<InputType> = [
  {
    input_id: 'GAD7_Q01',
    label: {
      en: 'Over the last two weeks, how often have you been bothered by feeling nervous, anxious, or on edge?',
    },
    type: {
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
    input_id: 'GAD7_Q02',
    label: {
      en: 'Over the last two weeks, how often have you been bothered by not being able to stop or control worrying?',
    },
    type: {
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
    input_id: 'GAD7_Q03',
    label: {
      en: 'Over the last two weeks, how often have you been bothered by worrying too much about different things?',
    },
    type: {
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
    input_id: 'GAD7_Q04',
    label: {
      en: 'Over the last two weeks, how often have you been bothered by trouble relaxing?',
    },
    type: {
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
    input_id: 'GAD7_Q05',
    label: {
      en: 'Over the last two weeks, how often have you been bothered by being so restless that it is hard to sit still?',
    },
    type: {
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
    input_id: 'GAD7_Q06',
    label: {
      en: 'Over the last two weeks, how often have you been bothered by becoming easily annoyed or irritable?',
    },
    type: {
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
    input_id: 'GAD7_Q07',
    label: {
      en: 'Over the last two weeks, how often have you been bothered by feeling afraid, as if something awful might happen?',
    },
    type: {
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
