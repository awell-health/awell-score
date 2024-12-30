import R from 'ramda'

import type { InputType } from '../../../src/types/calculations.types'
import { PSQI_SUBSCALES, type SubscaleType } from '../definition/psqi_subscales'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE, type MissingScoreType } from '../../../PARAMETERS'
import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'

export const calculate_subscale_scores = (
  inputs_with_answers: Array<InputType>,
  subscale: SubscaleType,
): number | MissingScoreType => {
  const INPUT_IDS_NEEDED_FOR_SCORING = PSQI_SUBSCALES[subscale]

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.filter(input =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(R.view(inputIdLens, input)),
    ),
  )(inputs_with_answers)

  if (valid_answers_in_subscale.length === 0) {
    return MISSING_MESSAGE
  }

  const subscaleScore = R.sum(valid_answers_in_subscale)

  return subscaleScore
}
