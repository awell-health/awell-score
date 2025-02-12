// @flow
import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens
} from '../../../helper_functions/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE, type MissingScoreType } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'
import { SECTION_INPUT_IDS_MAPPING, type Section } from '../types'
import {
  is_help_required_with_section,
  needs_aids_and_devices_with_section
} from './shared'

export const calculate_section_score = (
  inputs: Array<InputType>,
  section: Section
): number | MissingScoreType => {
  const SECTION_INPUT_IDS = SECTION_INPUT_IDS_MAPPING[section]

  const section_inputs = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map((raw_value) => Number(raw_value)),
    R.map((input) => R.view(rawInputValueLens, input)),
    R.filter((input) => SECTION_INPUT_IDS.includes(R.view(inputIdLens, input)))
  )(inputs)

  if (section_inputs.length !== SECTION_INPUT_IDS.length) return MISSING_MESSAGE

  const help_required = is_help_required_with_section(inputs, section)
  const aids_needed = needs_aids_and_devices_with_section(inputs, section)

  const get_score = () => {
    /**
     * For each section the score given to that section is the worst score within the section, i.e. if one
     * question is scored 1 and another 2, then the score for the section is 2
     */
    const default_score = Math.max(...section_inputs)

    /**
     * In addition, if an aide or device is used or if help is required
     * from another individual, then the minimum score for that section is 2.
     * If the section score is already 2 or more then no modification is made.
     */
    if (help_required || aids_needed) return Math.max(default_score, 2)

    return default_score
  }

  return get_score()
}
