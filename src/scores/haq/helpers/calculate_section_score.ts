import { SECTION_INPUT_IDS_MAPPING, type Section } from '../haq.types'
import {
  is_help_required_with_section,
  needs_aids_and_devices_with_section,
} from './shared'
import { HAQ_INPUTS } from '../definition'
import { z } from 'zod'
import { pick, pickBy } from 'lodash'

export const calculate_section_score = (
  inputs: z.infer<
    z.ZodObject<{
      [K in keyof typeof HAQ_INPUTS]: (typeof HAQ_INPUTS)[K]['type']
    }>
  >,
  section: Section,
): number | null => {
  const SECTION_INPUT_IDS = SECTION_INPUT_IDS_MAPPING[section]
  const sectionInputs = pick(inputs, SECTION_INPUT_IDS)

  const validSectionInputs = pickBy(
    sectionInputs,
    input => input !== undefined && typeof input === 'number',
  )

  if (Object.keys(validSectionInputs).length !== SECTION_INPUT_IDS.length)
    return null

  const help_required = is_help_required_with_section(inputs, section)
  const aids_needed = needs_aids_and_devices_with_section(inputs, section)

  const get_score = () => {
    /**
     * For each section the score given to that section is the worst score within the section, i.e. if one
     * question is scored 1 and another 2, then the score for the section is 2
     */
    const default_score = Math.max(...Object.values(validSectionInputs))

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
