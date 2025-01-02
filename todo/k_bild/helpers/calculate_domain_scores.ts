import R from 'ramda'
import { round } from 'mathjs'

import type { InputType } from '../../../src/types/calculations.types'
import { get_valid_values } from '../../../lib/calculation_variants/simple_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { type DomainType, KBILD_DOMAINS } from '../definition/k_bild_domains'

export const calculate_domain_scores = (
  inputs_with_answers: Array<InputType>,
  domain: DomainType,
): { raw: number | string; transformed: number | string } => {
  const INPUT_IDS_NEEDED_FOR_SCORING = KBILD_DOMAINS[domain]

  const valid_answers_on_inputs_needed_for_scoring = R.compose(
    //@ts-expect-error to do
    inputs => get_valid_values(inputs),
    R.filter(({ input_id }: InputType) =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(input_id),
    ),
  )(inputs_with_answers)

  if (valid_answers_on_inputs_needed_for_scoring.length === 0)
    return { raw: MISSING_MESSAGE, transformed: MISSING_MESSAGE }

  const raw_score = R.sum(valid_answers_on_inputs_needed_for_scoring)
  const lowest_possible_score =
    valid_answers_on_inputs_needed_for_scoring.length
  const HIGEST_ITEM_SCORE = 7
  const higest_possible_score =
    valid_answers_on_inputs_needed_for_scoring.length * HIGEST_ITEM_SCORE
  const range = higest_possible_score - lowest_possible_score

  const ROUND_TO = 2

  return {
    raw: raw_score,
    transformed: round(
      ((raw_score - lowest_possible_score) / range) *
        // eslint-disable-next-line no-magic-numbers
        100,
      ROUND_TO,
    ),
  }
}
