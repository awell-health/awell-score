import R from 'ramda'

import type { InputType } from '../../../src/types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'

export const calculate_deformity_score = (
  inputs: InputType[],
): number | undefined => {
  const DEFORMITIES_INPUT_ID = 'ABSENCE_OF_DEFORMITY'

  /**
   * To score this section all deformities must be checked in order to get get 4 points.
   * Nb. Not 1 point for each; four or nothing.
   */
  const DEFORMITIES_CUT_OFF = 4

  //@ts-expect-error to do
  const amount_of_abscent_deformities = R.compose(
    R.length,
    R.flatten,
    R.defaultTo([]),
    R.map(input => R.view(rawInputValueLens, input)),
    R.filter(input => R.view(inputIdLens, input) === DEFORMITIES_INPUT_ID),
  )(inputs)

  const DEFORMITY_ABSCENT_SCORE = 4
  const DEFORMITY_PRESENT_SCORE = 0

  if (amount_of_abscent_deformities === DEFORMITIES_CUT_OFF)
    return DEFORMITY_ABSCENT_SCORE

  return DEFORMITY_PRESENT_SCORE
}
