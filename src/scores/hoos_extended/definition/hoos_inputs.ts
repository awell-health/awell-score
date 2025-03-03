import { z } from 'zod'
import { EnumNumberInputType, type ScoreInputSchemaType } from '../../../types'

const type = {
  type: z
    .union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
    ])
    .optional(),
} satisfies EnumNumberInputType

export const HOOS_INPUTS = {
  s1: {
    label: {
      nl: '',
      en: 'Do you feel grinding, hear clicking or any other type of noise from your hip?',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'Never' } },
        { value: 1, label: { nl: '', en: 'Rarely' } },
        { value: 2, label: { nl: '', en: 'Sometimes' } },
        { value: 3, label: { nl: '', en: 'Often' } },
        { value: 4, label: { nl: '', en: 'Always' } },
      ],
    },
  },
  s2: {
    label: { nl: '', en: 'Difficulties spreading legs wide apart' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  s3: {
    label: { nl: '', en: 'Difficulties to stride out when walking' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  s4: {
    label: {
      nl: '',
      en: 'How severe is your hip joint stiffness after first wakening in the morning?',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  s5: {
    label: {
      nl: '',
      en: 'How severe is your hip stiffness after sitting, lying or resting later in the day?',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },

  p1: {
    label: { nl: '', en: 'How often is your hip painful?' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'Never' } },
        { value: 1, label: { nl: '', en: 'Monthly' } },
        { value: 2, label: { nl: '', en: 'Weekly' } },
        { value: 3, label: { nl: '', en: 'Daily' } },
        { value: 4, label: { nl: '', en: 'Always' } },
      ],
    },
  },
  p2: {
    label: { nl: '', en: 'Straightening your hip fully' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  p3: {
    label: { nl: '', en: 'Bending your hip fully' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  p4: {
    label: { nl: '', en: 'Walking on a flat surface' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  p5: {
    label: { nl: '', en: 'Going up or down stairs' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  p6: {
    label: { nl: '', en: 'At night while in bed' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  p7: {
    label: { nl: '', en: 'Sitting or lying' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  p8: {
    label: { nl: '', en: 'Standing upright' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  p9: {
    label: {
      nl: '',
      en: 'Walking on a hard surface (asphalt, concrete, etc.)',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  p10: {
    label: { nl: '', en: 'Walking on an uneven surface' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },

  a1: {
    label: { nl: '', en: 'Descending stairs' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a2: {
    label: { nl: '', en: 'Ascending stairs' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a3: {
    label: { nl: '', en: 'Rising from sitting' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a4: {
    label: { nl: '', en: 'Standing' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a5: {
    label: { nl: '', en: 'Bending to the floor/pick up an object' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a6: {
    label: { nl: '', en: 'Walking on a flat surface' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a7: {
    label: { nl: '', en: 'Getting in/out of car' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a8: {
    label: { nl: '', en: 'Going shopping' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a9: {
    label: { nl: '', en: 'Putting on socks/stockings' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a10: {
    label: { nl: '', en: 'Rising from bed' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a11: {
    label: { nl: '', en: 'Taking off socks/stockings' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a12: {
    label: {
      nl: '',
      en: 'Lying in bed (turning over, maintaining hip position)',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a13: {
    label: { nl: '', en: 'Getting in/out of bath' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a14: {
    label: { nl: '', en: 'Sitting' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a15: {
    label: { nl: '', en: 'Getting on/off toilet' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a16: {
    label: {
      nl: '',
      en: 'Heavy domestic duties (moving heavy boxes, scrubbing floors, etc)',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  a17: {
    label: {
      nl: '',
      en: 'Light domestic duties (cooking, dusting, etc)',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  sp1: {
    label: { nl: '', en: 'Squatting' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  sp2: {
    label: { nl: '', en: 'Running' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  sp3: {
    label: { nl: '', en: 'Twisting/pivoting on loaded leg' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  sp4: {
    label: { nl: '', en: 'Walking on uneven surface' },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
  q1: {
    label: {
      nl: '',
      en: 'How often are you aware of your hip problem?',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'Never' } },
        { value: 1, label: { nl: '', en: 'Monthly' } },
        { value: 2, label: { nl: '', en: 'Weekly' } },
        { value: 3, label: { nl: '', en: 'Daily' } },
        { value: 4, label: { nl: '', en: 'Constantly' } },
      ],
    },
  },
  q2: {
    label: {
      nl: '',
      en: 'Have you modified your life style to avoid activities potentially damaging to your hip?',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'Not at all' } },
        { value: 1, label: { nl: '', en: 'Mildly' } },
        { value: 2, label: { nl: '', en: 'Moderately' } },
        { value: 3, label: { nl: '', en: 'Severely' } },
        { value: 4, label: { nl: '', en: 'Totally' } },
      ],
    },
  },
  q3: {
    label: {
      nl: '',
      en: 'How much are you troubled with lack of confidence in your hip?',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'Not at all' } },
        { value: 1, label: { nl: '', en: 'Mildly' } },
        { value: 2, label: { nl: '', en: 'Moderately' } },
        { value: 3, label: { nl: '', en: 'Severely' } },
        { value: 4, label: { nl: '', en: 'Extremely' } },
      ],
    },
  },
  q4: {
    label: {
      nl: '',
      en: 'In general, how much difficulty do you have with your hip?',
    },
    ...type,
    uiOptions: {
      options: [
        { value: 0, label: { nl: '', en: 'None' } },
        { value: 1, label: { nl: '', en: 'Mild' } },
        { value: 2, label: { nl: '', en: 'Moderate' } },
        { value: 3, label: { nl: '', en: 'Severe' } },
        { value: 4, label: { nl: '', en: 'Extreme' } },
      ],
    },
  },
} satisfies ScoreInputSchemaType
