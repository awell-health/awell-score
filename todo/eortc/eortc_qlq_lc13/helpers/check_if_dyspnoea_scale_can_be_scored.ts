import R from 'ramda'

import type { EORTCScaleType } from '../../../../../types/calculations/subscales/custom/eortc.types'
import { stdInputValueLens } from '../../../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../../../lib/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../../PARAMETERS'
import { is_numeric } from '../../../shared_functions'

/**
 * The dyspnoea scale should only be used if all three items have been answered. Some respondents ignore question 5
 * because they never climb stairs; in this case, the score for the dyspnoea scale would be biased if it were based upon
 * the other two items. Hence if item 5 is missing then items 3 and 4 should be used as single-item measures.
 */
export const check_if_dyspnoea_scale_can_be_scored = (
  scales: Array<EORTCScaleType>
): Array<EORTCScaleType> =>
  R.map((scale: EORTCScaleType) => {
    const DYSPNOEA_SCALE_ID = 'LCDY'

    if (scale.id !== DYSPNOEA_SCALE_ID) {
      return scale
    }

    const inputs = R.view(inputsInSubscaleLens, scale)

    const valid_answers_in_scale = R.compose(
      R.filter(is_numeric),
      R.map(input => R.view(stdInputValueLens, input))
    )(inputs)

    /**
     * Have all items of the dyspnoea scale been answered?
     * If not, set score to "missing"
     */
    if (valid_answers_in_scale.length !== inputs.length) {
      return R.set(scoreLens, MISSING_MESSAGE, scale)
    }

    return scale
  }, scales)
