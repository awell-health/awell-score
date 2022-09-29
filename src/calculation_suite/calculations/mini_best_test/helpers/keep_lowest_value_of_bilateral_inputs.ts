import R from 'ramda'

import type { SubscaleType } from '../../../../types/calculations.types'
import { rawInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import { inputsInSubscaleLens } from '../../../helper_functions/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'

/**
 * Input 3 & 6 have right and left assessment in
 * which the lower score is used within the total score.
 */
export const keep_lowest_value_of_bilateral_inputs = (
  sections: Array<SubscaleType>
): Array<SubscaleType> =>
  R.map((section: SubscaleType) => {
    //@ts-expect-error to do
    const input_is_bilateral = input => 'bilateral' in input

    const input_is_not_bilateral = R.complement(input_is_bilateral)

    const bilateral_inputs_in_section = R.compose(
      R.filter(input_is_bilateral),
      R.view(inputsInSubscaleLens)
    )(section)

    if (R.isEmpty(bilateral_inputs_in_section)) {
      return section
    }

    const minimum = R.compose(
      R.defaultTo(MISSING_MESSAGE),
      //@ts-expect-error to do
      values => Math.min(...values),
      R.map(input => R.view(rawInputValueLens, input))
    )(bilateral_inputs_in_section)

    const input_with_minimum_answer = R.compose(
      R.take(1), // When both inputs have the minimum value we only take one of them
      R.filter(input => Number(R.view(rawInputValueLens, input)) === minimum)
    )(bilateral_inputs_in_section)

    return R.set(
      inputsInSubscaleLens,
      R.compose(
        //@ts-expect-error to do
        R.append(...input_with_minimum_answer),
        R.filter(input_is_not_bilateral),
        R.view(inputsInSubscaleLens)
      )(section),
      section
    )
  }, sections)
