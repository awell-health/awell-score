import R from 'ramda'

import type { EORTCScaleType } from '../../../../../types/calculations/subscales/custom/eortc.types'
import {
  notApplicableScoreLens,
  scoreLens,
} from '../../../../lib/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE, NOT_APPLICABLE_MESSAGE } from '../../../../PARAMETERS'
import {
  apply_functional_scale,
  apply_symptom_scale,
} from '../eortc_helper_functions'
import { rangeLens, rawScoreLens, scaleTypeLens } from '../lenses'

export const add_scaled_subscale_score_based_on_raw_score = (
  scales: Array<EORTCScaleType>
): Array<EORTCScaleType> =>
  R.map((scale: EORTCScaleType) => {
    const raw_score = R.view(rawScoreLens, scale)
    const { score_as } = scale

    if (raw_score === NOT_APPLICABLE_MESSAGE)
      return R.set(scoreLens, NOT_APPLICABLE_MESSAGE, scale)

    if (R.isNil(raw_score)) {
      return R.set(scoreLens, MISSING_MESSAGE, scale)
    }

    const scale_type = R.isNil(score_as)
      ? R.view(scaleTypeLens, scale)
      : score_as
    const range = R.view(rangeLens, scale)
    const custom_not_applicable_message = R.view(notApplicableScoreLens, scale)

    const score =
      // eslint-disable-next-line no-nested-ternary
      raw_score === NOT_APPLICABLE_MESSAGE
        ? custom_not_applicable_message || NOT_APPLICABLE_MESSAGE
        : scale_type === 'functional'
        ? apply_functional_scale(raw_score, range)
        : apply_symptom_scale(raw_score, range)

    return R.set(scoreLens, score, scale)
  }, scales)
