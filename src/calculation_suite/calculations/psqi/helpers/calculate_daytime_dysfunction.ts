/* eslint-disable no-magic-numbers */

import type { InputType } from '../../../../types/calculations.types'
import { calculate_subscale_scores } from './calculate_subscale_scores'

export const calculate_daytime_dysfunction = (
  inputs_with_answers: Array<InputType>
): number | string => {
  const DAYTIME_DYSFUNCTION_SCORE = calculate_subscale_scores(
    inputs_with_answers,
    'DAYTIME_DYSFUNCTION'
  )

  if (typeof DAYTIME_DYSFUNCTION_SCORE === 'string') {
    return DAYTIME_DYSFUNCTION_SCORE
  }

  let DAYTIME_DYSFUNCTION
  if (DAYTIME_DYSFUNCTION_SCORE === 0) {
    DAYTIME_DYSFUNCTION = 0
  } else if (DAYTIME_DYSFUNCTION_SCORE >= 1 && DAYTIME_DYSFUNCTION_SCORE <= 2) {
    DAYTIME_DYSFUNCTION = 1
  } else if (DAYTIME_DYSFUNCTION_SCORE >= 3 && DAYTIME_DYSFUNCTION_SCORE <= 4) {
    DAYTIME_DYSFUNCTION = 2
  } else {
    DAYTIME_DYSFUNCTION = 3
  }

  return DAYTIME_DYSFUNCTION
}
