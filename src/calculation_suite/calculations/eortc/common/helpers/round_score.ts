import { round } from 'mathjs'
import R from 'ramda'

import type { EORTCScaleType } from '../../../../../types/calculations/subscales/custom/eortc.types'
import { scoreLens } from '../../../../lib/calculation_variants/api/subscale/lenses'

const ROUND_TO = 2

export const round_score = (
  scales: Array<EORTCScaleType>
): Array<EORTCScaleType> =>
  R.map(
    scale =>
      R.compose(
        rounded_score => R.set(scoreLens, rounded_score, scale),
        score => (typeof score === 'number' ? round(score, ROUND_TO) : score),
        R.view(scoreLens)
      )(scale),
    scales
  )
