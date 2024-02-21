import { NumberInputType } from '../../../../../types/calculations/inputs/calculation-inputs.types'
import type { OMPQInputType } from '../../../../../types/calculations/inputs/custom/ompq.types'

export const DEFAULT_MIN_SCORE_PER_INPUT = 0
export const DEFAULT_MAX_SCORE_PER_INPUT = 10

const DEFAULT_INPUT_TYPE: NumberInputType = {
  type: 'number',
  allowed_answers: [
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
}

/**
 * Starts at question 5 because that's the first question needed for scoring
 * The first 4 questions of OMPQ are demographic questions (name, dob, ...) which is
 * already stored in Awell patient profile so is not asked in the form itself.
 * */
export const OMPQ_INPUTS: Array<OMPQInputType> = [
  {
    input_id: 'OMPQ_Q05',
    input_label: {
      en: 'Where do you have pain? Place a tick for all appropriate sites.',
      nl: '',
    },
    input_type: {
      type: 'strings_array',
      allowed_answers: [
        { value: 'neck', label: { en: 'Neck' } },
        { value: 'shoulder', label: { en: 'Shoulder' } },
        { value: 'arm', label: { en: 'Arm' } },
        { value: 'upper_back', label: { en: 'Upper back' } },
        { value: 'lower_back', label: { en: 'Lower back' } },
        { value: 'leg', label: { en: 'Leg' } },
        { value: 'other', label: { en: 'Other' } },
      ],
    },
    min_score: 2, // At least one item should be ticked by the patient and that score is multiplied by 2 (1*2=2)
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q06',
    input_label: {
      en: 'How many days of work have you missed because of pain during the past 18 months? Tick one.',
      nl: '',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
    min_score: 1,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q07',
    input_label: {
      en: 'How long have you had your current pain problem? Tick one.',
      nl: '',
    },
    input_type: {
      type: 'number',
      allowed_answers: [
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
    min_score: 1,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q08',
    input_label: {
      en: 'Is your work heavy or monotonous? Circle the best alternative.',
      nl: '',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q09',
    input_label: {
      en: 'How would you rate the pain that you have had during the past week? Circle one.',
      nl: '',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q10',
    input_label: {
      en: 'In the past three months, on average, how bad was your pain on a 0-10 scale? Circle one.',
      nl: '',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q11',
    input_label: {
      en: 'How often would you say that you have experience pain episodes, on average, during the past three months? Circle one.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q12',
    input_label: {
      en: 'Based on all things you do to cope, or deal with your pain, on an average day, how much are you able to decrease it? Circle the appropriate number.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q13',
    input_label: {
      en: 'How tense or anxious have you felt in the past week? Circle one.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q14',
    input_label: {
      en: 'How much have you been bothered by feeling depressed in the past week? Circle one.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q15',
    input_label: {
      en: 'In your view, how large is the risk that your current pain may become persistent? Circle one.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q16',
    input_label: {
      en: 'In your estimation, what are the chances that you will be able to work in six months? Circle one.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q17',
    input_label: {
      en: 'If you take into consideration your work routines, management, salary, promotion possibilities and work mates, how satisfied are you with your job? Circle one.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q18',
    input_label: {
      en: 'Physical activity makes my pain worse.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q19',
    input_label: {
      en: 'An increase in pain is an indication that I should stop what I’m doing until the pain decreases.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q20',
    input_label: {
      en: 'I should not do my normal work with my present pain.',
      nl: '',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q21',
    input_label: {
      en: 'I can do light work for an hour.',
      nl: '',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q22',
    input_label: {
      en: 'I can walk for an hour.',
      nl: '',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q23',
    input_label: {
      en: 'I can do ordinary household chores.',
      nl: '',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q24',
    input_label: {
      en: 'I can do the weekly shopping.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q25',
    input_label: {
      en: 'I can sleep at night.',
      nl: ' ',
    },
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
]
