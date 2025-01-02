import R from 'ramda'

import type { EORTCScaleType } from '../../../../src/types/calculations/subscales/custom/eortc.types'
import {
  inputInverseLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../../../lib/calculation_variants/api/input/lenses'
import { inputsInSubscaleLens } from '../../../../lib/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../../PARAMETERS'
import { is_numeric } from '../../../../src/calculation_suite/calculations/shared_functions'
import { MIN_ITEM_VALUE } from '../eortc_parameters'
import { rangeLens } from '../lenses'

export const inverse_raw_input_values_if_needed = (
  scales: Array<EORTCScaleType>,
): Array<EORTCScaleType> => {
  //@ts-expect-error to do
  const apply_inversion_if_needed = range => input => {
    const must_be_inversed = R.view(inputInverseLens, input)
    const answer = Number(R.view(rawInputValueLens, input))

    //@ts-expect-error to do
    if (!is_numeric(answer) || answer === MISSING_MESSAGE)
      return R.set(stdInputValueLens, MISSING_MESSAGE, input)

    const inverse_value = (value: number) => {
      const max_score = MIN_ITEM_VALUE + range
      return max_score + 1 - value
    }

    return R.set(
      stdInputValueLens,
      must_be_inversed ? inverse_value(answer) : answer,
      input,
    )
  }

  return R.map((scale: EORTCScaleType) => {
    const range = R.view(rangeLens, scale)

    const inputs_with_inversed_values = R.compose(
      R.map(apply_inversion_if_needed(range)),
      R.view(inputsInSubscaleLens),
    )(scale)

    return R.set(inputsInSubscaleLens, inputs_with_inversed_values, scale)
  }, scales)
}
