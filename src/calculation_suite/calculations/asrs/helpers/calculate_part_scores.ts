import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { ASRS_PARTS, type PartType } from '../definition/asrs_parts'
import { ASRS_INPUTS } from '../definition'
import { is_numeric } from '../../shared_functions'

import {
  inputIdLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../../helper_functions/calculation_variants/api/input/lenses'

export const calculate_part_scores = (
  inputs_with_answers: Array<InputType>,
  part: PartType
): number | string => {
  const INPUT_IDS_NEEDED_FOR_SCORING = ASRS_PARTS[part]

  const valid_standardized_input_scores = R.compose(
    R.filter(is_numeric),
    R.map(stdValue => Number(stdValue)),
    R.filter(stdValue => stdValue !== MISSING_MESSAGE),
    R.map(input => R.view(stdInputValueLens, input)),
    R.map(input => {
      const inputValue = R.view(rawInputValueLens, input)

      if (inputValue === MISSING_MESSAGE)
        return R.set(stdInputValueLens, MISSING_MESSAGE, input)

      const input_definition = ASRS_INPUTS.find(
        id => R.view(inputIdLens, id) === R.view(inputIdLens, input)
      )

      if (!input_definition) {
        return R.set(stdInputValueLens, MISSING_MESSAGE, input)
      }

      if (input_definition.positive_scores.includes(inputValue)) {
        return R.set(stdInputValueLens, 1, input)
      }

      return R.set(stdInputValueLens, 0, input)
    }),
    R.filter(({ input_id }: InputType) =>
      INPUT_IDS_NEEDED_FOR_SCORING.includes(input_id)
    )
  )(inputs_with_answers)

  if (valid_standardized_input_scores.length === 0) return MISSING_MESSAGE

  return R.sum(valid_standardized_input_scores)
}
