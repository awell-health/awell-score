import R from 'ramda'

import type { InputType } from '../../../../../types/calculations.types'
import type { EORTCScaleType } from '../../../../../types/calculations/subscales/custom/eortc.types'
import {
  inputIdLens,
  notApplicableInputLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../../../lib/calculation_variants/api/input/lenses'
import { inputsInSubscaleLens } from '../../../../lib/calculation_variants/api/subscale/lenses'
import { NOT_APPLICABLE_MESSAGE } from '../../../../PARAMETERS'
import { calculate_RS } from '../eortc_helper_functions'
import { rawScoreLens } from '../lenses'

export const add_raw_subscale_score_if_applicable =
  ({ additional_input = [] }: { additional_input?: InputType[] }) =>
  (scales: Array<EORTCScaleType>): Array<EORTCScaleType> => {
    const is_applicable = (scale: EORTCScaleType) => {
      const scale_not_applicable_based_on_another_input = R.view(
        notApplicableInputLens,
        scale
      )

      if (scale_not_applicable_based_on_another_input) {
        const { input_id, value_is_one_of } =
          scale_not_applicable_based_on_another_input

        const answer_value_of_other_item = R.compose(
          R.view(rawInputValueLens),
          R.find(input => R.view(inputIdLens, input) === input_id),
          R.flatten,
          //@ts-expect-error to do
          a => [...a, ...additional_input],
          R.map(s => R.view(inputsInSubscaleLens, s))
        )(scales)

        if (value_is_one_of.includes(answer_value_of_other_item)) return false
      }

      return true
    }

    return R.map((scale: EORTCScaleType) => {
      const scale_values = R.compose(
        R.map(input => R.view(stdInputValueLens, input)),
        R.view(inputsInSubscaleLens)
      )(scale)

      const raw_score = is_applicable(scale)
        ? calculate_RS(scale_values)
        : NOT_APPLICABLE_MESSAGE

      return R.set(rawScoreLens, raw_score, scale)
    }, scales)
  }
