// @flow
// eslint-disable-next-line simple-import-sort/imports
import R from 'ramda'

import type { InputType } from '../../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens
} from '../../../../helper_functions/calculation_variants/api/input/lenses'
import { is_numeric } from '../../../shared_functions'
import { SF12_SUBSCALES, type SubscaleType } from '../definition/sf12_subscales'

export const validate_subscale_scores = (
  inputs_with_answers: Array<InputType>,
  subscale: SubscaleType
): boolean => {
  const INPUT_IDS_NEEDED_FOR_SCORING = SF12_SUBSCALES[subscale]

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map((raw_value) => Number(raw_value)),
    R.map((input) => R.view(rawInputValueLens, input)),
    R.filter((input) =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(R.view(inputIdLens, input))
    )
  )(inputs_with_answers)

  /**
   * We require all questions in a component scale to be
   * answered to calculate a score.
   */
  if (valid_answers_in_subscale.length !== SF12_SUBSCALES[subscale].length) {
    return false
  }

  return true
}
