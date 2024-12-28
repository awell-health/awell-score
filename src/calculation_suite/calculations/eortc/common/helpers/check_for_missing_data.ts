import R from 'ramda'

import type { EORTCScaleType } from '../../../../../types/calculations/subscales/custom/eortc.types'
import { stdInputValueLens } from '../../../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../../../lib/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE, NOT_APPLICABLE_MESSAGE } from '../../../../PARAMETERS'
import { is_numeric } from '../../../shared_functions'

export const check_for_missing_data = (
  scales: Array<EORTCScaleType>
): Array<EORTCScaleType> =>
  R.map((scale: EORTCScaleType) => {
    const current_score = R.view(scoreLens, scale)

    if (current_score === NOT_APPLICABLE_MESSAGE) {
      return scale
    }

    const inputs = R.view(inputsInSubscaleLens, scale)

    const valid_answers_in_scale = R.compose(
      R.filter(is_numeric),
      R.map(input => R.view(stdInputValueLens, input))
    )(inputs)

    // Have at least half of the items from the scale been answered?
    if (valid_answers_in_scale.length >= inputs.length / 2) {
      return scale
    }

    return R.set(scoreLens, MISSING_MESSAGE, scale)
  }, scales)
