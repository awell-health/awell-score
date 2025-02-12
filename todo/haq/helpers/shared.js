// @flow
import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import { SECTIONS_TO_AIDS_MAPPING, type Section } from '../types'

const get_answers =
  (input_id: string) =>
  (calculation_input: Array<InputType>): string[] =>
    // $FlowFixMe
    R.compose(
      (input) => input?.raw_input_value,
      R.find((input) => input.input_id === input_id)
    )(calculation_input)

export const needs_aids_and_devices_with_section = (
  inputs: Array<InputType>,
  section: Section
): boolean => {
  const AIDS_OR_DEVICES_PART_1 = get_answers('AIDS_OR_DEVICES_PART_1')(inputs)
  const AIDS_OR_DEVICES_PART_2 = get_answers('AIDS_OR_DEVICES_PART_2')(inputs)

  const section_aids = SECTIONS_TO_AIDS_MAPPING[section]

  return section_aids.some((element) =>
    [...AIDS_OR_DEVICES_PART_1, ...AIDS_OR_DEVICES_PART_2].includes(element)
  )
}

export const is_help_required_with_section = (
  inputs: Array<InputType>,
  section: Section
): boolean => {
  const NEED_HELP_PART_1 = get_answers('NEED_HELP_PART_1')(inputs)
  const NEED_HELP_PART_2 = get_answers('NEED_HELP_PART_2')(inputs)

  return [...NEED_HELP_PART_1, ...NEED_HELP_PART_2].includes(section)
}
