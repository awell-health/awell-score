import type { InputType } from '../../../../types/calculations.types'

export const GAD7_INPUTS: Array<InputType> = [
  {
    input_id: 'GAD7_Q01',
    input_label: {
      en: 'Over the last two weeks, how often have you been bothered by feeling nervous, anxious, or on edge?',
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
          label: { en: 'Nearly every day', nl: 'Bijna elkde dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'GAD7_Q02',
    input_label: {
      en: 'Over the last two weeks, how often have you been bothered by not being able to stop or control worrying?',
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
          label: { en: 'Nearly every day', nl: 'Bijna elkde dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'GAD7_Q03',
    input_label: {
      en: 'Over the last two weeks, how often have you been bothered by worrying too much about different things?',
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
          label: { en: 'Nearly every day', nl: 'Bijna elkde dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'GAD7_Q04',
    input_label: {
      en: 'Over the last two weeks, how often have you been bothered by trouble relaxing?',
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
          label: { en: 'Nearly every day', nl: 'Bijna elkde dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'GAD7_Q05',
    input_label: {
      en: 'Over the last two weeks, how often have you been bothered by being so restless that it is hard to sit still?',
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
          label: { en: 'Nearly every day', nl: 'Bijna elkde dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'GAD7_Q06',
    input_label: {
      en: 'Over the last two weeks, how often have you been bothered by becoming easily annoyed or irritable?',
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
          label: { en: 'Nearly every day', nl: 'Bijna elkde dag' },
          value: 3,
        },
      ],
    },
  },
  {
    input_id: 'GAD7_Q07',
    input_label: {
      en: 'Over the last two weeks, how often have you been bothered by feeling afraid, as if something awful might happen?',
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
          label: { en: 'Nearly every day', nl: 'Bijna elkde dag' },
          value: 3,
        },
      ],
    },
  },
]
