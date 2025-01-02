import R from 'ramda'

import type { KCCQ12DomainType } from '../../../src/types/calculations/subscales/custom/KCCQ12.types'
import { SF_RESCALING_WEIGHT_TABLE } from './symptom_frequency/rescaling'

/**
 * The factors of the domain score formula (i.e. 100 and 4) are not explained
 * in the official calculation documentation.
 * Please see README.md for guidance if things are unclear
 */
const common_domain_score_formula = (domain_answers: number[]) =>
  R.compose(mean => (100 * (mean - 1)) / 4, R.mean)(domain_answers)

export const KCCQ_12_DOMAINS: Array<KCCQ12DomainType> = [
  {
    id: 'KCCQ12-PL',
    input_ids_in_subscale: [
      {
        input_id: 'KCCQ12_Q1_A',
        label: { nl: '', en: 'Showering/bathing' },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'Extremely Limited',
              },
            },
            {
              value: 2,
              label: {
                en: 'Quite a bit Limited',
              },
            },
            {
              value: 3,
              label: {
                en: 'Moderately limited',
              },
            },
            {
              value: 4,
              label: {
                en: 'Slightly limited',
              },
            },
            {
              value: 5,
              label: {
                en: 'Not at all Limited',
              },
            },
            {
              value: 6,
              label: {
                en: 'Limited for other reasons or did not do the activity',
              },
            },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q1_B',
        label: { nl: '', en: 'Walking 1 block on level ground' },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'Extremely Limited',
              },
            },
            {
              value: 2,
              label: {
                en: 'Quite a bit Limited',
              },
            },
            {
              value: 3,
              label: {
                en: 'Moderately limited',
              },
            },
            {
              value: 4,
              label: {
                en: 'Slightly limited',
              },
            },
            {
              value: 5,
              label: {
                en: 'Not at all Limited',
              },
            },
            {
              value: 6,
              label: {
                en: 'Limited for other reasons or did not do the activity',
              },
            },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q1_C',
        label: {
          nl: '',
          en: 'Hurrying or jogging (as if to catch a bus)',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'Extremely Limited',
              },
            },
            {
              value: 2,
              label: {
                en: 'Quite a bit Limited',
              },
            },
            {
              value: 3,
              label: {
                en: 'Moderately limited',
              },
            },
            {
              value: 4,
              label: {
                en: 'Slightly limited',
              },
            },
            {
              value: 5,
              label: {
                en: 'Not at all Limited',
              },
            },
            {
              value: 6,
              label: {
                en: 'Limited for other reasons or did not do the activity',
              },
            },
          ],
        },
      },
    ],
    answer_treated_as_missing_value: 6,
    min_answers_needed_to_calculate_score: 1, // I.e. if responses to two or more inputs are missing, no score is computed
    domain_score_formula: common_domain_score_formula,
  },
  {
    id: 'KCCQ12-SF',
    input_ids_in_subscale: [
      {
        input_id: 'KCCQ12_Q2',
        label: {
          nl: '',
          en: 'Over the past 2 weeks, how many times did you have swelling in your feet, ankles or legs when you woke up in the morning?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'Every morning',
              },
            },
            {
              value: 2,
              label: {
                en: '3 or more times per week but not every day',
              },
            },
            {
              value: 3,
              label: {
                en: '1-2 times per week',
              },
            },
            {
              value: 4,
              label: {
                en: 'Less than once a week',
              },
            },
            {
              value: 5,
              label: {
                en: 'Never over the past 2 weeks',
              },
            },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q3',
        label: {
          nl: '',
          en: 'Over the past 2 weeks, on average, how many times has fatigue limited your ability to do what you wanted?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'All of the time',
              },
            },
            {
              value: 2,
              label: {
                en: 'Several times per day',
              },
            },
            {
              value: 3,
              label: {
                en: 'At least once a day',
              },
            },
            {
              value: 4,
              label: {
                en: '3 or more times per week but not every day',
              },
            },
            {
              value: 5,
              label: {
                en: '1-2 times per week',
              },
            },
            {
              value: 6,
              label: {
                en: 'Less than once a week',
              },
            },
            {
              value: 7,
              label: {
                en: 'Never over the past 2 weeks',
              },
            },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q4',
        label: {
          nl: '',
          en: 'Over the past 2 weeks, on average, how many times has shortness of breath limited your ability to do what you wanted?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'All of the time',
              },
            },
            {
              value: 2,
              label: {
                en: 'Several times per day',
              },
            },
            {
              value: 3,
              label: {
                en: 'At least once a day',
              },
            },
            {
              value: 4,
              label: {
                en: '3 or more times per week but not every day',
              },
            },
            {
              value: 5,
              label: {
                en: '1-2 times per week',
              },
            },
            {
              value: 6,
              label: {
                en: 'Less than once a week',
              },
            },
            {
              value: 7,
              label: {
                en: 'Never over the past 2 weeks',
              },
            },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q5',
        label: {
          nl: '',
          en: 'Over the past 2 weeks, on average, how many times have you been forced to sleep sitting up in a chair or with at least 3 pillows to prop you up because of shortness of breath?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'Every night',
              },
            },
            {
              value: 2,
              label: {
                en: '3 or more times per week but not every day',
              },
            },
            {
              value: 3,
              label: {
                en: '1-2 times per week',
              },
            },
            {
              value: 4,
              label: {
                en: 'Less than once a week',
              },
            },
            {
              value: 5,
              label: {
                en: 'Never over the past 2 weeks',
              },
            },
          ],
        },
      },
    ],
    min_answers_needed_to_calculate_score: 1, // I.e. if responses to three or more inputs are missing, no score is computed
    rescaling_table: SF_RESCALING_WEIGHT_TABLE,
    rescaling_formula: (answer, weight) => (100 * (answer - 1)) / weight,
    domain_score_formula: domain_answers =>
      R.compose(R.mean, R.values)(domain_answers),
  },
  {
    id: 'KCCQ12-QL',
    input_ids_in_subscale: [
      {
        input_id: 'KCCQ12_Q6',
        label: {
          nl: '',
          en: 'Over the past 2 weeks, how much has your heart failure limited your enjoyment of life?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'It has extremely limited my enjoyment of life',
              },
            },
            {
              value: 2,
              label: {
                en: 'It has limited my enjoyment of life quite a bit',
              },
            },
            {
              value: 3,
              label: {
                en: 'It has moderately limited my enjoyment of life',
              },
            },
            {
              value: 4,
              label: {
                en: 'It has slightly limited my enjoyment of life',
              },
            },
            {
              value: 5,
              label: {
                en: 'It has not limited my enjoyment of life at all',
              },
            },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q7',
        label: {
          nl: '',
          en: 'If you had to spend the rest of your life with your heart failure the way it is right now, how would you feel about this?',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'Not at all satisfied',
              },
            },
            {
              value: 2,
              label: {
                en: 'Mostly dissatisfied',
              },
            },
            {
              value: 3,
              label: {
                en: 'Somewhat satisfied',
              },
            },
            {
              value: 4,
              label: {
                en: 'Mostly satisfied',
              },
            },
            {
              value: 5,
              label: {
                en: 'Completely satisfied',
              },
            },
          ],
        },
      },
    ],
    min_answers_needed_to_calculate_score: 1, // I.e. if responses to both inputs are missing, no score is computed.
    domain_score_formula: common_domain_score_formula,
  },
  {
    id: 'KCCQ12-SL',
    input_ids_in_subscale: [
      {
        input_id: 'KCCQ12_Q8_A',
        label: {
          nl: '',
          en: 'How much does your heart failure affect your lifestyle? Please indicate how your heart failure may have limited your participation in the following activities over the past 2 weeks: Hobbies, recreational activities',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'Severely Limited',
              },
            },
            {
              value: 2,
              label: {
                en: 'Limited quite a bit',
              },
            },
            {
              value: 3,
              label: {
                en: 'Moderately limited',
              },
            },
            {
              value: 4,
              label: {
                en: 'Slightly limited',
              },
            },
            {
              value: 5,
              label: {
                en: 'Did not limit at all',
              },
            },
            {
              value: 6,
              label: {
                en: 'Does not apply or did not do for other reasons',
              },
            },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q8_B',
        label: { nl: '', en: 'Working or doing household chores' },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'Severely Limited',
              },
            },
            {
              value: 2,
              label: {
                en: 'Limited quite a bit',
              },
            },
            {
              value: 3,
              label: {
                en: 'Moderately limited',
              },
            },
            {
              value: 4,
              label: {
                en: 'Slightly limited',
              },
            },
            {
              value: 5,
              label: {
                en: 'Did not limit at all',
              },
            },
            {
              value: 6,
              label: {
                en: 'Does not apply or did not do for other reasons',
              },
            },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q8_C',
        label: {
          nl: '',
          en: 'Visiting family or friends out of your home',
        },
        type: {
          type: 'number',
          allowed_answers: [
            {
              value: 1,
              label: {
                en: 'Severely Limited',
              },
            },
            {
              value: 2,
              label: {
                en: 'Limited quite a bit',
              },
            },
            {
              value: 3,
              label: {
                en: 'Moderately limited',
              },
            },
            {
              value: 4,
              label: {
                en: 'Slightly limited',
              },
            },
            {
              value: 5,
              label: {
                en: 'Did not limit at all',
              },
            },
            {
              value: 6,
              label: {
                en: 'Does not apply or did not do for other reasons',
              },
            },
          ],
        },
      },
    ],
    answer_treated_as_missing_value: 6,
    min_answers_needed_to_calculate_score: 1, // I.e. if responses to two or more inputs are missing, no score is computed
    domain_score_formula: common_domain_score_formula,
  },
]
