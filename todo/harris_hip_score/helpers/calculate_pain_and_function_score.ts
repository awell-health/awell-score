import R from 'ramda'

import type { InputType } from '../../../src/types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'

export const calculate_pain_and_function_score = (
  inputs: InputType[],
): {
  pain_score?: number
  function_score?: number
} => {
  const INPUTS_NEEDED_TO_CALCULATE_PAIN_SCORE = ['PAIN']

  const INPUTS_NEEDED_TO_CALCULATE_FUNCTION_SCORE = [
    'LIMP',
    'SUPPORT',
    'DISTANCE_WALKED',
    'SITTING',
    'STAIRS',
    'ENTER_PUBLIC_TRANSPORTATION',
    'PUT_ON_SOCKS_AND_SHOES',
  ]

  const get_input_values_for_score = (input_ids: string[]) =>
    R.compose(
      R.filter(is_numeric),
      R.map(raw_value => Number(raw_value)),
      R.map(input => R.view(rawInputValueLens, input)),
      R.filter(input => input_ids.includes(R.view(inputIdLens, input))),
    )(inputs)

  const pain_values = get_input_values_for_score(
    INPUTS_NEEDED_TO_CALCULATE_PAIN_SCORE,
  )
  const function_values = get_input_values_for_score(
    INPUTS_NEEDED_TO_CALCULATE_FUNCTION_SCORE,
  )

  return {
    pain_score: pain_values.length === 0 ? undefined : R.sum(pain_values),
    function_score:
      function_values.length === 0 ? undefined : R.sum(function_values),
  }
}
