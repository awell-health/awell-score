import R from 'ramda'

import { type InputType } from '../../../../types/calculations.types'
import type { CustomInputsType } from '../../../../types/calculations/inputs/custom'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { inputRequiredLens, rawInputValueLens } from '../api/input/lenses'

export const get_valid_values = (
  inputs: InputType[] | CustomInputsType
): number[] => {
  const is_numeric = (answer: any): boolean =>
    typeof answer === 'number' && !Number.isNaN(answer)

  //@ts-expect-error add types
  return R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(answer => Number(answer)),
    R.filter(answer => answer !== MISSING_MESSAGE),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs)
}

export const do_all_required_inputs_have_a_valid_value = (
  inputs: InputType[] | CustomInputsType
): boolean => {
  //@ts-expect-error add types
  const nbr_of_required_inputs = R.compose(
    R.length,
    R.filter(required => required === true),
    R.map(input => R.view(inputRequiredLens, input))
  )(inputs)

  const valid_answers = get_valid_values(inputs)

  if (valid_answers.length !== nbr_of_required_inputs) return false

  return true
}
