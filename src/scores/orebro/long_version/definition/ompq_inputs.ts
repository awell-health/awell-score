import { z } from 'zod'
import {
  ScoreInputSchemaType,
  type EnumNumberInputType,
} from '../../../../types'

export const DEFAULT_MIN_SCORE_PER_INPUT = 0
export const DEFAULT_MAX_SCORE_PER_INPUT = 10

const DEFAULT_INPUT_TYPE = {
  type: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
  ]),
  uiOptions: {
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
    ],
  },
} satisfies EnumNumberInputType

export const INVERSE_ITEMS = [
  'OMPQ_Q12',
  'OMPQ_Q16',
  'OMPQ_Q17',
  'OMPQ_Q21',
  'OMPQ_Q22',
  'OMPQ_Q23',
  'OMPQ_Q24',
  'OMPQ_Q25',
]

/**
 * Starts at question 5 because that's the first question needed for scoring
 * The first 4 questions of OMPQ are demographic questions (name, dob, ...).
 * */
export const OMPQ_INPUTS = {
  OMPQ_Q05: {
    label: {
      en: 'Where do you have pain? Place a tick for all appropriate sites.',
      nl: '',
    },
    type: z.array(
      z.union([
        z.literal('neck'),
        z.literal('shoulder'),
        z.literal('arm'),
        z.literal('upper_back'),
        z.literal('lower_back'),
        z.literal('leg'),
        z.literal('other'),
      ]),
    ),
    uiOptions: {
      options: [
        { value: 'neck', label: { en: 'Neck' } },
        { value: 'shoulder', label: { en: 'Shoulder' } },
        { value: 'arm', label: { en: 'Arm' } },
        { value: 'upper_back', label: { en: 'Upper back' } },
        { value: 'lower_back', label: { en: 'Lower back' } },
        { value: 'leg', label: { en: 'Leg' } },
        { value: 'other', label: { en: 'Other' } },
      ],
    },
    // min_score: 2, // At least one item should be ticked by the patient and that score is multiplied by 2 (1*2=2)
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q06: {
    label: {
      en: 'How many days of work have you missed because of pain during the past 18 months? Tick one.',
      nl: '',
    },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
      z.literal(8),
      z.literal(9),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        { value: 1, label: { en: '0 days' } },
        { value: 2, label: { en: '1-2 days' } },
        { value: 3, label: { en: '3-7 days' } },
        { value: 4, label: { en: '8-14 days' } },
        { value: 5, label: { en: '15-30 days' } },
        { value: 6, label: { en: '1 month' } },
        { value: 7, label: { en: '2 months' } },
        { value: 8, label: { en: '3-6 months' } },
        { value: 9, label: { en: '6-12 months' } },
        { value: 10, label: { en: 'Over 1 year' } },
      ],
    },
    // min_score: 1,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q07: {
    label: {
      en: 'How long have you had your current pain problem? Tick one.',
      nl: '',
    },
    type: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
      z.literal(8),
      z.literal(9),
      z.literal(10),
    ]),
    uiOptions: {
      options: [
        { value: 1, label: { en: '0-1 week' } },
        { value: 2, label: { en: '1-2 weeks' } },
        { value: 3, label: { en: '3-4 weeks' } },
        { value: 4, label: { en: '4-5 weeks' } },
        { value: 5, label: { en: '6-8 weeks' } },
        { value: 6, label: { en: '9-11 weeks' } },
        { value: 7, label: { en: '3-6 months' } },
        { value: 8, label: { en: '6-9 months' } },
        { value: 9, label: { en: '9-12 months' } },
        { value: 10, label: { en: 'over 1 year' } },
      ],
    },
    // min_score: 1,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q08: {
    label: {
      en: 'Is your work heavy or monotonous? Circle the best alternative.',
      nl: '',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q09: {
    label: {
      en: 'How would you rate the pain that you have had during the past week? Circle one.',
      nl: '',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q10: {
    label: {
      en: 'In the past three months, on average, how bad was your pain on a 0-10 scale? Circle one.',
      nl: '',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q11: {
    label: {
      en: 'How often would you say that you have experience pain episodes, on average, during the past three months? Circle one.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q12: {
    label: {
      en: 'Based on all things you do to cope, or deal with your pain, on an average day, how much are you able to decrease it? Circle the appropriate number.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q13: {
    label: {
      en: 'How tense or anxious have you felt in the past week? Circle one.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q14: {
    label: {
      en: 'How much have you been bothered by feeling depressed in the past week? Circle one.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q15: {
    label: {
      en: 'In your view, how large is the risk that your current pain may become persistent? Circle one.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q16: {
    label: {
      en: 'In your estimation, what are the chances that you will be able to work in six months? Circle one.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q17: {
    label: {
      en: 'If you take into consideration your work routines, management, salary, promotion possibilities and work mates, how satisfied are you with your job? Circle one.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q18: {
    label: {
      en: 'Physical activity makes my pain worse.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q19: {
    label: {
      en: 'An increase in pain is an indication that I should stop what I’m doing until the pain decreases.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q20: {
    label: {
      en: 'I should not do my normal work with my present pain.',
      nl: '',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q21: {
    label: {
      en: 'I can do light work for an hour.',
      nl: '',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q22: {
    label: {
      en: 'I can walk for an hour.',
      nl: '',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q23: {
    label: {
      en: 'I can do ordinary household chores.',
      nl: '',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q24: {
    label: {
      en: 'I can do the weekly shopping.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
  OMPQ_Q25: {
    label: {
      en: 'I can sleep at night.',
      nl: ' ',
    },
    ...DEFAULT_INPUT_TYPE,
    // min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    // max_score: DEFAULT_MAX_SCORE_PER_INPUT,
  },
} satisfies ScoreInputSchemaType
