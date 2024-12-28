import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { get_valid_values } from '../../../lib/calculation_variants/simple_calculation'
import { type DomainType, MSQ_DOMAINS } from '../definition/msq_domains'

export const calculate_domain_scores = (
  inputs_with_answers: Array<InputType>,
  domain: DomainType
): number => {
  const INPUT_IDS_NEEDED_FOR_SCORING = MSQ_DOMAINS[domain].items

  const valid_answers_on_inputs_needed_for_scoring = R.compose(
    //@ts-expect-error to do
    inputs => get_valid_values(inputs),
    R.filter(({ input_id }: InputType) =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(input_id)
    )
  )(inputs_with_answers)

  const score = R.sum(valid_answers_on_inputs_needed_for_scoring)

  return score
}
