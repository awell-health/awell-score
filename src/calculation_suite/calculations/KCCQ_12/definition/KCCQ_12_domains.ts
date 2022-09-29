import R from 'ramda'

import type { KCCQ12DomainType } from '../../../../types/calculations/subscales/custom/KCCQ12.types'
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
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q1_B',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q1_C',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
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
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q3',
        input_label: { nl: '', en: '' },
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
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q4',
        input_label: { nl: '', en: '' },
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
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q5',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
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
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q7',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
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
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q8_B',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
          ],
        },
      },
      {
        input_id: 'KCCQ12_Q8_C',
        input_label: { nl: '', en: '' },
        input_type: {
          type: 'number',
          allowed_answers: [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
          ],
        },
      },
    ],
    answer_treated_as_missing_value: 6,
    min_answers_needed_to_calculate_score: 1, // I.e. if responses to two or more inputs are missing, no score is computed
    domain_score_formula: common_domain_score_formula,
  },
]
