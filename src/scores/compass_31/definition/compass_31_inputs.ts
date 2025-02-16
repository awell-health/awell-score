import { z } from 'zod'
import { type ScoreInputSchemaType } from '../../../types'

export const COMPASS_31_INPUTS = {
  Q01: {
    label: {
      en: 'In the past year, have you ever felt faint, dizzy, "goofy", or had difficulty thinking soon after standing up from a sitting or lying position?',
    },
    type: z.union([z.literal(1), z.literal(2)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No (if you marked No, please skip to question 5)',
          },
        },
      ],
    },
  },
  Q02: {
    label: {
      en: 'When standing up, how frequently do you get these feelings or symptoms?',
    },
    type: z
      .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Rarely' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Almost always',
          },
        },
      ],
    },
  },
  Q03: {
    label: {
      en: 'How would you rate the severity of these feelings or symptoms?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Mild' },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
      ],
    },
  },
  Q04: {
    label: {
      en: 'In the past year, have these feelings or symptoms that you have experienced:',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Gotten much worse' },
        },
        {
          value: 2,
          label: {
            en: 'Gotten somewhat worse',
          },
        },
        {
          value: 3,
          label: {
            en: 'Stayed about the same',
          },
        },
        {
          value: 4,
          label: {
            en: 'Gotten somewhat better',
          },
        },
        {
          value: 5,
          label: {
            en: 'Gotten much better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
  },
  Q05: {
    label: {
      en: 'In the past year, have you ever noticed color changes in your skin, such as red, white, or purple?',
    },
    type: z.union([z.literal(1), z.literal(2)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No (if you marked No, please skip to question 8)',
          },
        },
      ],
    },
  },
  Q06: {
    label: {
      en: 'What parts of your body are affected by these color changes? (Check all that apply)',
    },
    type: z.array(z.union([z.literal(1), z.literal(2)])).optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Hands' },
        },
        {
          value: 2,
          label: {
            en: 'Feet',
          },
        },
      ],
    },
  },
  Q07: {
    label: {
      en: 'Are these changes in your skin color:',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Getting much worse' },
        },
        {
          value: 2,
          label: {
            en: 'Getting somewhat worse',
          },
        },
        {
          value: 3,
          label: {
            en: 'Staying about the same',
          },
        },
        {
          value: 4,
          label: {
            en: 'Getting somewhat better',
          },
        },
        {
          value: 5,
          label: {
            en: 'Getting much better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
  },
  Q08: {
    label: {
      en: 'In the past 5 years, what changes, if any, have occurred in your general body sweating?',
    },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'I sweat much more than I used to' },
        },
        {
          value: 2,
          label: {
            en: 'I sweat somewhat more than I used to',
          },
        },
        {
          value: 3,
          label: {
            en: "I haven't noticed any changes in my sweating",
          },
        },
        {
          value: 4,
          label: {
            en: 'I sweat somewhat less than I used to',
          },
        },
        {
          value: 5,
          label: {
            en: 'I sweat much less than I used to ',
          },
        },
      ],
    },
  },
  Q09: {
    label: {
      en: 'Do your eyes feel excessively dry?',
    },
    type: z.union([z.literal(1), z.literal(2)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No',
          },
        },
      ],
    },
  },
  Q10: {
    label: {
      en: 'Does you mouth feel excessively dry?',
    },
    type: z.union([z.literal(1), z.literal(2)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No',
          },
        },
      ],
    },
  },
  Q11: {
    label: {
      en: 'For the symptom of dry eyes or dry mouth that you have had for the longest period of time, is this symptom:',
    },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
    ]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'I have not had any of these symptoms' },
        },
        {
          value: 2,
          label: { en: 'Getting much worse' },
        },
        {
          value: 3,
          label: {
            en: 'Getting somewhat worse',
          },
        },
        {
          value: 4,
          label: {
            en: 'Staying about the same',
          },
        },
        {
          value: 5,
          label: {
            en: 'Getting somewhat better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Getting much better',
          },
        },
        {
          value: 7,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
  },
  Q12: {
    label: {
      en: 'In the past year, have you noticed any changes in how quickly you get full when eating a meal?',
    },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'I get full a lot more quickly now than I used to' },
        },
        {
          value: 2,
          label: {
            en: 'I get full more quickly now than I used to',
          },
        },
        {
          value: 3,
          label: {
            en: "I haven't noticed any change",
          },
        },
        {
          value: 4,
          label: {
            en: 'I get full less quickly now than I used to',
          },
        },
        {
          value: 5,
          label: {
            en: 'I get full a lot less quickly now than I used to',
          },
        },
      ],
    },
  },
  Q13: {
    label: {
      en: 'In the past year, have you felt excessively full or persistently full (bloated feeling) after a meal?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Sometimes',
          },
        },
        {
          value: 3,
          label: {
            en: 'A lot of the time',
          },
        },
      ],
    },
  },
  Q14: {
    label: {
      en: 'In the past year, have you vomited after a meal?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Sometimes',
          },
        },
        {
          value: 3,
          label: {
            en: 'A lot of the time',
          },
        },
      ],
    },
  },
  Q15: {
    label: {
      en: 'In the past year, have you had a cramping or colicky abdominal pain?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Sometimes',
          },
        },
        {
          value: 3,
          label: {
            en: 'A lot of the time',
          },
        },
      ],
    },
  },
  Q16: {
    label: {
      en: 'In the past year, have you had any bouts of diarrhea?',
    },
    type: z.union([z.literal(1), z.literal(2)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No (if you marked No, please skip to question 20)',
          },
        },
      ],
    },
  },
  Q17: {
    label: {
      en: 'How frequently does this occur?',
    },
    type: z
      .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Rarely' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  Q18: {
    label: {
      en: 'How severe are these bouts of diarrhea?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Mild' },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
      ],
    },
  },
  Q19: {
    label: {
      en: 'Are your bouts of diarrhea getting:',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Much worse' },
        },
        {
          value: 2,
          label: {
            en: 'Somewhat worse',
          },
        },
        {
          value: 3,
          label: {
            en: 'Staying the same',
          },
        },
        {
          value: 4,
          label: {
            en: 'Somewhat better',
          },
        },
        {
          value: 5,
          label: {
            en: 'Much better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
  },
  Q20: {
    label: {
      en: 'In the past year, have you been constipated?',
    },
    type: z.union([z.literal(1), z.literal(2)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Yes' },
        },
        {
          value: 2,
          label: {
            en: 'No (if you marked No, please skip to question 24)',
          },
        },
      ],
    },
  },
  Q21: {
    label: {
      en: 'How frequently are you constipated?',
    },
    type: z
      .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Rarely' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  Q22: {
    label: {
      en: 'How severe are these episodes of constipation?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Mild' },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
      ],
    },
  },
  Q23: {
    label: {
      en: 'Is your constipation getting:',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
      ])
      .optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Much worse' },
        },
        {
          value: 2,
          label: {
            en: 'Somewhat worse',
          },
        },
        {
          value: 3,
          label: {
            en: 'Staying the same',
          },
        },
        {
          value: 4,
          label: {
            en: 'Somewhat better',
          },
        },
        {
          value: 5,
          label: {
            en: 'Much better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
  },
  Q24: {
    label: {
      en: 'In the past year, have you ever lost control of your bladder function?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  Q25: {
    label: {
      en: 'In the past year, have you had difficulty passing urine?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  Q26: {
    label: {
      en: 'In the past year, have you had trouble completely emptying your bladder?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Never' },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  Q27: {
    label: {
      en: 'In the past year, without sunglasses or tinted glasses, has bright light bothered your eyes?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: {
            en: 'Never (if you marked Never, please skip to question 29)',
          },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  Q28: {
    label: {
      en: 'How severe is this sensitivity to bright light',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Mild' },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
      ],
    },
  },
  Q29: {
    label: {
      en: 'In the past year, have you had trouble focusing your eyes?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: {
            en: 'Never (if you marked Never, please skip to question 31)',
          },
        },
        {
          value: 2,
          label: {
            en: 'Occasionally',
          },
        },
        {
          value: 3,
          label: {
            en: 'Frequently',
          },
        },
        {
          value: 4,
          label: {
            en: 'Constantly',
          },
        },
      ],
    },
  },
  Q30: {
    label: {
      en: 'How severe is this focusing problem?',
    },
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'Mild' },
        },
        {
          value: 2,
          label: {
            en: 'Moderate',
          },
        },
        {
          value: 3,
          label: {
            en: 'Severe',
          },
        },
      ],
    },
  },
  Q31: {
    label: {
      en: 'Is the most troublesome symptom with your eyes (i.e. sensitivity to bright light or trouble focusing) getting:',
    },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
    ]),
    uiOptions: {
      options: [
        {
          value: 1,
          label: { en: 'I have not had any of these symptoms' },
        },
        {
          value: 2,
          label: {
            en: 'Much worse',
          },
        },
        {
          value: 3,
          label: {
            en: 'Somewhat worse',
          },
        },
        {
          value: 4,
          label: {
            en: 'Staying about the same',
          },
        },
        {
          value: 5,
          label: {
            en: 'Somewhat better',
          },
        },
        {
          value: 6,
          label: {
            en: 'Much better',
          },
        },
        {
          value: 7,
          label: {
            en: 'Completely gone',
          },
        },
      ],
    },
  },
} satisfies ScoreInputSchemaType
