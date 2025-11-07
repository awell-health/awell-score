import { z } from 'zod'
import { ScoreInputSchemaType } from '../../../types'

// Shared answer option constants for repetitive patterns
const SHARED_ANSWER_OPTIONS = {
  // Pattern 1: Physical Activity Limitations (Q3-Q12)
  PHYSICAL_LIMITATION: [
    { value: 1, label: { en: 'Yes, limited a lot' } },
    { value: 2, label: { en: 'Yes, limited a little' } },
    { value: 3, label: { en: 'No, not limited at all' } },
  ],
  // Pattern 2: Work/Activity Limitations (Q13-Q19)
  YES_NO: [
    { value: 1, label: { en: 'Yes' } },
    { value: 2, label: { en: 'No' } },
  ],
  // Pattern 3: Time-Based Questions (Q23-Q31)
  TIME_FREQUENCY: [
    { value: 1, label: { en: 'All of the time' } },
    { value: 2, label: { en: 'Most of the time' } },
    { value: 3, label: { en: 'A good bit of the time' } },
    { value: 4, label: { en: 'Some of the time' } },
    { value: 5, label: { en: 'A little of the time' } },
    { value: 6, label: { en: 'None of the time' } },
  ],
  // Pattern 4: Health Statement True/False (Q33-Q36)
  TRUE_FALSE_SCALE: [
    { value: 1, label: { en: 'Definitely true' } },
    { value: 2, label: { en: 'Mostly true' } },
    { value: 3, label: { en: 'Don\'t know' } },
    { value: 4, label: { en: 'Mostly false' } },
    { value: 5, label: { en: 'Definitely false' } },
  ],
}

// Shared type schemas for repetitive patterns
const SHARED_TYPE_SCHEMAS = {
  PHYSICAL_LIMITATION: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  YES_NO: z.union([z.literal(1), z.literal(2)]).optional(),
  TIME_FREQUENCY: z.union([
    z.literal(1), z.literal(2), z.literal(3), 
    z.literal(4), z.literal(5), z.literal(6)
  ]).optional(),
  TRUE_FALSE_SCALE: z.union([
    z.literal(1), z.literal(2), z.literal(3), 
    z.literal(4), z.literal(5)
  ]).optional(),
}

export const SF36_INPUTS = {
  SF36_Q01: {
    label: {
      en: 'In general, would you say your health is:',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'Excellent' } },
        { value: 2, label: { en: 'Very good' } },
        { value: 3, label: { en: 'Good' } },
        { value: 4, label: { en: 'Fair' } },
        { value: 5, label: { en: 'Poor' } },
      ],
    },
  },
  SF36_Q02: {
    label: {
      en: 'Compared to one year ago, how would you rate your health in general now?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'Much better now than one year ago' } },
        { value: 2, label: { en: 'Somewhat better now than one year ago' } },
        { value: 3, label: { en: 'About the same' } },
        { value: 4, label: { en: 'Somewhat worse now than one year ago' } },
        { value: 5, label: { en: 'Much worse now than one year ago' } },
      ],
    },
  },
  SF36_Q03: {
    label: {
      en: 'The following items are about activities you might do during a typical day. Does your health now limit you in these activities? If so, how much? Vigorous activities, such as running, lifting heavy objects, participating in strenuous sports',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q04: {
    label: {
      en: 'Moderate activities, such as moving a table, pushing a vacuum cleaner, bowling, or playing golf',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q05: {
    label: {
      en: 'Lifting or carrying groceries',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q06: {
    label: {
      en: 'Climbing several flights of stairs',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q07: {
    label: {
      en: 'Climbing one flight of stairs',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q08: {
    label: {
      en: 'Bending, kneeling, or stooping',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q09: {
    label: {
      en: 'Walking more than a mile',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q10: {
    label: {
      en: 'Walking several blocks',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q11: {
    label: {
      en: 'Walking one block',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q12: {
    label: {
      en: 'Bathing or dressing yourself',
    },
    type: SHARED_TYPE_SCHEMAS.PHYSICAL_LIMITATION,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.PHYSICAL_LIMITATION,
    },
  },
  SF36_Q13: {
    label: {
      en: 'During the past 4 weeks, have you had any of the following problems with your work or other regular daily activities as a result of your physical health? Cut down the amount of time you spent on work or other activities',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q14: {
    label: {
      en: 'Accomplished less than you would like',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q15: {
    label: {
      en: 'Were limited in the kind of work or other activities',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q16: {
    label: {
      en: 'Had difficulty performing the work or other activities (for example, it took extra effort)',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q17: {
    label: {
      en: 'During the past 4 weeks, have you had any of the following problems with your work or other regular daily activities as a result of any emotional problems (such as feeling depressed or anxious)? Cut down the amount of time you spent on work or other activities',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q18: {
    label: {
      en: 'Accomplished less than you would like',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q19: {
    label: {
      en: 'Didn\'t do work or other activities as carefully as usual',
    },
    type: SHARED_TYPE_SCHEMAS.YES_NO,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.YES_NO,
    },
  },
  SF36_Q20: {
    label: {
      en: 'During the past 4 weeks, to what extent has your physical health or emotional problems interfered with your normal social activities with family, friends, neighbors, or groups?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'Not at all' } },
        { value: 2, label: { en: 'Slightly' } },
        { value: 3, label: { en: 'Moderately' } },
        { value: 4, label: { en: 'Quite a bit' } },
        { value: 5, label: { en: 'Extremely' } },
      ],
    },
  },
  SF36_Q21: {
    label: {
      en: 'How much bodily pain have you had during the past 4 weeks?',
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
        { value: 1, label: { en: 'None' } },
        { value: 2, label: { en: 'Very mild' } },
        { value: 3, label: { en: 'Mild' } },
        { value: 4, label: { en: 'Moderate' } },
        { value: 5, label: { en: 'Severe' } },
        { value: 6, label: { en: 'Very severe' } },
      ],
    },
  },
  SF36_Q22: {
    label: {
      en: 'During the past 4 weeks, how much did pain interfere with your normal work (including both work outside the home and housework)?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'Not at all' } },
        { value: 2, label: { en: 'A little bit' } },
        { value: 3, label: { en: 'Moderately' } },
        { value: 4, label: { en: 'Quite a bit' } },
        { value: 5, label: { en: 'Extremely' } },
      ],
    },
  },
  SF36_Q23: {
    label: {
      en: 'These questions are about how you feel and how things have been with you during the past 4 weeks. For each question, please give the one answer that comes closest to the way you have been feeling. How much of the time during the past 4 weeks... Did you feel full of pep?',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q24: {
    label: {
      en: 'Have you been a very nervous person?',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q25: {
    label: {
      en: 'Have you felt so down in the dumps that nothing could cheer you up?',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q26: {
    label: {
      en: 'Have you felt calm and peaceful?',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q27: {
    label: {
      en: 'Did you have a lot of energy?',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q28: {
    label: {
      en: 'Have you felt downhearted and blue?',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q29: {
    label: {
      en: 'Did you feel worn out?',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q30: {
    label: {
      en: 'Have you been a happy person?',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q31: {
    label: {
      en: 'Did you feel tired?',
    },
    type: SHARED_TYPE_SCHEMAS.TIME_FREQUENCY,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TIME_FREQUENCY,
    },
  },
  SF36_Q32: {
    label: {
      en: 'During the past 4 weeks, how much of the time has your physical health or emotional problems interfered with your social activities (like visiting with friends, relatives, etc.)?',
    },
    type: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
      ])
      .optional(),
    uiOptions: {
      options: [
        { value: 1, label: { en: 'All of the time' } },
        { value: 2, label: { en: 'Most of the time' } },
        { value: 3, label: { en: 'Some of the time' } },
        { value: 4, label: { en: 'A little of the time' } },
        { value: 5, label: { en: 'None of the time' } },
      ],
    },
  },
  SF36_Q33: {
    label: {
      en: 'How TRUE or FALSE is each of the following statements for you. I seem to get sick a little easier than other people',
    },
    type: SHARED_TYPE_SCHEMAS.TRUE_FALSE_SCALE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TRUE_FALSE_SCALE,
    },
  },
  SF36_Q34: {
    label: {
      en: 'I am as healthy as anybody I know',
    },
    type: SHARED_TYPE_SCHEMAS.TRUE_FALSE_SCALE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TRUE_FALSE_SCALE,
    },
  },
  SF36_Q35: {
    label: {
      en: 'I expect my health to get worse',
    },
    type: SHARED_TYPE_SCHEMAS.TRUE_FALSE_SCALE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TRUE_FALSE_SCALE,
    },
  },
  SF36_Q36: {
    label: {
      en: 'My health is excellent',
    },
    type: SHARED_TYPE_SCHEMAS.TRUE_FALSE_SCALE,
    uiOptions: {
      options: SHARED_ANSWER_OPTIONS.TRUE_FALSE_SCALE,
    },
  },
} satisfies ScoreInputSchemaType
