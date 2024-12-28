/* eslint-disable no-magic-numbers */

import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'
import { PSQI_SUBSCALES } from '../definition/psqi_subscales'

export const calculate_habitual_sleep_efficiency = (
  inputs_with_answers: Array<InputType>
): number | string => {
  const INPUT_IDS_NEEDED_FOR_SCORING = PSQI_SUBSCALES.HABITUAL_SLEEP_EFFICIENCY

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.filter(input =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(R.view(inputIdLens, input))
    )
  )(inputs_with_answers)

  if (valid_answers_in_subscale.length === 0) {
    return MISSING_MESSAGE
  }

  let wakeUpTime = valid_answers_in_subscale[1]
  const bedTime = valid_answers_in_subscale[0]
  // If wake up time is before bed time, assume it's the next day
  if (wakeUpTime < bedTime) {
    wakeUpTime += 24
  }

  // Calculate the difference in hours
  const hoursInBed = wakeUpTime - bedTime

  const habitual_efficiency_score =
    (valid_answers_in_subscale[2] / hoursInBed) * 100

  if (habitual_efficiency_score >= 85) {
    return 0
  }

  if (habitual_efficiency_score >= 75 && habitual_efficiency_score <= 84) {
    return 1
  }

  if (habitual_efficiency_score >= 65 && habitual_efficiency_score <= 74) {
    return 2
  }

  return 3
}
