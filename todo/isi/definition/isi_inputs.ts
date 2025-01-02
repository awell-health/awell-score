import type { InputType } from '../../../src/types/calculations.types'

export const ISI_INPUTS: Array<InputType> = [
  {
    input_id: 'ISI_Q01',
    input_label: {
      en: 'Difficulty falling asleep',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'None' },
        },
        {
          value: 1,
          label: {
            en: 'Mild',
          },
        },
        {
          value: 2,
          label: {
            en: 'moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
        {
          value: 4,
          label: {
            en: 'Very severe',
          },
        },
      ],
    },
  },
  {
    input_id: 'ISI_Q02',
    input_label: {
      en: 'Difficulty staying asleep',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'None' },
        },
        {
          value: 1,
          label: {
            en: 'Mild',
          },
        },
        {
          value: 2,
          label: {
            en: 'moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
        {
          value: 4,
          label: {
            en: 'Very severe',
          },
        },
      ],
    },
  },
  {
    input_id: 'ISI_Q03',
    input_label: {
      en: 'Problems waking up too early',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'None' },
        },
        {
          value: 1,
          label: {
            en: 'Mild',
          },
        },
        {
          value: 2,
          label: {
            en: 'moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
        {
          value: 4,
          label: {
            en: 'Very severe',
          },
        },
      ],
    },
  },
  {
    input_id: 'ISI_Q04',
    input_label: {
      en: 'How SATISFIED/DISSATISFIED are you with your CURRENT sleep pattern?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Very satisfied' },
        },
        {
          value: 1,
          label: {
            en: 'Satisfied',
          },
        },
        {
          value: 2,
          label: {
            en: 'Moderately satisfied',
          },
        },
        {
          value: 3,
          label: {
            en: 'Dissatisfied',
          },
        },
        {
          value: 4,
          label: {
            en: 'Very dissatisfied',
          },
        },
      ],
    },
  },
  {
    input_id: 'ISI_Q05',
    input_label: {
      en: 'How NOTICEABLE to others do you think your sleep problem is in terms of impairing the quality of your life?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Not at all noticeable' },
        },
        {
          value: 1,
          label: {
            en: 'A little',
          },
        },
        {
          value: 2,
          label: {
            en: 'Somewhat',
          },
        },
        {
          value: 3,
          label: {
            en: 'Much',
          },
        },
        {
          value: 4,
          label: {
            en: 'Very much noticeable',
          },
        },
      ],
    },
  },
  {
    input_id: 'ISI_Q06',
    input_label: {
      en: 'How WORRIED/DISTRESSED are you about your current sleep problem?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Not at all woried' },
        },
        {
          value: 1,
          label: {
            en: 'A little',
          },
        },
        {
          value: 2,
          label: {
            en: 'Somewhat',
          },
        },
        {
          value: 3,
          label: {
            en: 'Much',
          },
        },
        {
          value: 4,
          label: {
            en: 'Very much woried',
          },
        },
      ],
    },
  },
  {
    input_id: 'ISI_Q07',
    input_label: {
      en: 'To what extent do you consider your sleep problem to INTERFERE with your daily functioning (e.g. daytime fatigue, mood, ability to function at work/daily chores, concentration, memory, mood, etc.) CURRENTLY?',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
        {
          value: 0,
          label: { en: 'Not at all interfering' },
        },
        {
          value: 1,
          label: {
            en: 'A little',
          },
        },
        {
          value: 2,
          label: {
            en: 'Somewhat',
          },
        },
        {
          value: 3,
          label: {
            en: 'Much',
          },
        },
        {
          value: 4,
          label: {
            en: 'Very much interfering',
          },
        },
      ],
    },
  },
]
