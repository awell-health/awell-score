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
    input_type: {
      type: 'number',
      allowed_answers: [
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
    min_score: 1,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q07',
    input_type: {
      type: 'number',
      allowed_answers: [
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
    min_score: 1,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q08',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q09',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q10',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q11',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q12',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q13',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q14',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q15',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q16',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q17',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q18',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q19',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q20',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: false,
  },
  {
    input_id: 'OMPQ_Q21',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q22',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q23',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q24',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
  {
    input_id: 'OMPQ_Q25',
    input_type: DEFAULT_INPUT_TYPE,
    min_score: DEFAULT_MIN_SCORE_PER_INPUT,
    max_score: DEFAULT_MAX_SCORE_PER_INPUT,
    inverse: true,
  },
]
