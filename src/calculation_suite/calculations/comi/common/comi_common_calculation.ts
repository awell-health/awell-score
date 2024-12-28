import R from 'ramda'

import type {
  IncomingCalculationInputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import type { COMIDomainType } from '../../../../types/calculations/subscales/custom/comi.types'
import { rawInputValueLens } from '../../../lib/calculation_variants/api/input/lenses'
import { scoreLens } from '../../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../../lib/calculation_variants/calculation_with_subscales'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

const calculate_score_for_each_domain = (
  subscale: COMIDomainType
): COMIDomainType => {
  const { input_ids_in_subscale, score_fn } = subscale

  const valid_subscale_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(input_ids_in_subscale)

  /**
   * All questions in the subscale should be answered in order
   * to calculate a score.
   */
  if (valid_subscale_answers.length < input_ids_in_subscale.length)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  const subscale_score = score_fn(valid_subscale_answers)

  return R.set(scoreLens, subscale_score, subscale)
}

export const comi_common_calculation =
  (COMI_DOMAINS: COMIDomainType[]) =>
  (
    calculation_input: IncomingCalculationInputType
  ): WIPCalculationResultType => {
    const comi_domains_with_scores = R.compose(
      R.map(calculate_score_for_each_domain),
      //@ts-expect-error to do
      add_response_values_to_subscale_inputs(calculation_input)
    )(COMI_DOMAINS)

    const calculate_total_score = (domain_scores: Array<number>) =>
      domain_scores.length === 0 ? MISSING_MESSAGE : R.mean(domain_scores)

    const total_score = R.compose(
      calculate_total_score,
      R.filter(is_numeric),
      R.map(score => Number(score)),
      R.map(domain => R.view(scoreLens, domain))
    )(comi_domains_with_scores)

    return [
      ...comi_domains_with_scores.map(({ id, score }) => ({
        id,
        score,
      })),
      {
        id: 'TOTAL',
        score: total_score,
      },
    ]
  }
