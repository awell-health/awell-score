import { round } from 'mathjs'
import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import type { KCCQ12DomainType } from '../../src/types/calculations/subscales/custom/KCCQ12.types'
import { stdInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import { scoreLens } from '../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { KCCQ_12_DOMAINS, KCCQ_12_OUTPUT } from './definition'
import {
  are_enough_inputs_answered_to_compute_score,
  remove_answers_considered_as_missing_values,
  rescale_domain_answers,
} from './KCCQ_12_helpers'

const calculate_score_for_each_domain = (
  domain: KCCQ12DomainType,
): KCCQ12DomainType => {
  const {
    input_ids_in_subscale,
    answer_treated_as_missing_value,
    min_answers_needed_to_calculate_score,
    rescaling_table,
    domain_score_formula,
    rescaling_formula,
  } = domain

  const domain_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(stdInputValueLens, input)),
    rescale_domain_answers(rescaling_table, rescaling_formula),
    remove_answers_considered_as_missing_values(
      answer_treated_as_missing_value,
    ),
  )(input_ids_in_subscale)

  const can_score_for_domain_be_computed =
    are_enough_inputs_answered_to_compute_score(
      min_answers_needed_to_calculate_score,
    )(domain_answers)

  if (can_score_for_domain_be_computed)
    return R.set(
      scoreLens,
      round(domain_score_formula(domain_answers), 2),
      domain,
    )

  return R.set(scoreLens, MISSING_MESSAGE, domain)
}

const calculate_KCCQ_12_domain_scores = (
  calculation_input: IncomingCalculationInputType,
): Array<KCCQ12DomainType> =>
  R.compose(
    R.map(calculate_score_for_each_domain),
    //@ts-expect-error to do
    add_response_values_to_subscale_inputs(calculation_input), // "Subscale" is a synonym for "Domain"
  )(KCCQ_12_DOMAINS)

const calculate_and_append_KCCQ_12_summary_score = (
  KCCQ12_domains_with_scores: Array<KCCQ12DomainType>,
): WIPCalculationResultType => {
  const MIN_DOMAIN_SCORES_NEEDED_TO_CALCULATE_TOTAL_SCORE = 1

  const valid_domain_scores = R.compose(
    R.filter(is_numeric),
    //@ts-expect-error to do
    R.map(result => result.score),
  )(KCCQ12_domains_with_scores)

  /**
   * If all four domain scores are missing, no summary score is computed.
   * Otherwise, the score is calculated as the average of the non-missing domain scores.
   */
  if (
    valid_domain_scores.length >=
    MIN_DOMAIN_SCORES_NEEDED_TO_CALCULATE_TOTAL_SCORE
  )
    return [
      ...KCCQ12_domains_with_scores.map(({ id, score }) => ({
        id,
        score,
      })),
      {
        id: 'KCCQ12',

        score: R.compose(mean => round(mean, 2), R.mean)(valid_domain_scores),
      },
    ]

  return [
    ...KCCQ12_domains_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'KCCQ12',
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_KCCQ_12_calc = [
  calculate_and_append_KCCQ_12_summary_score,
  calculate_KCCQ_12_domain_scores,
]

export const KCCQ_12: CalculationType = create_calculation({
  calculation_name: `Kansas City Cardiomyopathy Questionnaire - Short version (KCCQ-12)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_KCCQ_12_calc,
  calculation_definition: {
    input_definition: KCCQ_12_DOMAINS,
    output_definition: KCCQ_12_OUTPUT,
  },
})
