import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { ACRO_SUBSCALES, type SubscaleType } from '../definition/acro_subscales'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../helper_functions/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE, type MissingScoreType } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const calculate_scores = (
  inputs_with_answers: Array<InputType>,
  subscale: SubscaleType
): number | MissingScoreType => {
  const INPUT_IDS_NEEDED_FOR_SCORING = ACRO_SUBSCALES[subscale]

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.filter(input =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(R.view(inputIdLens, input))
    )
  )(inputs_with_answers)

  if (
    valid_answers_in_subscale.length !== INPUT_IDS_NEEDED_FOR_SCORING.length
  ) {
    return MISSING_MESSAGE
  }

  const subscaleTotal = R.sum(valid_answers_in_subscale)

  const bestScores = {
    PHYSICAL_SUBSCALE: 40,
    PSYCHOLOGICAL_APPEARANCE_SUBSCALE: 35,
    PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE: 35,
    TOTAL_SCORE: 110,
  }
  const hundred = 100
  /**
   * Original Calculcation:
   * 22 in this case is number of questions in the subscale
   * ( (x) - 22 / (110 - 22) ) * 100
   */
  const subscaleScore =
    ((subscaleTotal - INPUT_IDS_NEEDED_FOR_SCORING.length) /
      (bestScores[subscale] - INPUT_IDS_NEEDED_FOR_SCORING.length)) *
    hundred

  // we want to round the results to two decimal places
  return Math.round(subscaleScore * 1e2) / 1e2
}
