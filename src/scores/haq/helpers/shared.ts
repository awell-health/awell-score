import { HAQ_INPUTS } from '../definition'
import { z } from 'zod'
import { SECTIONS_TO_AIDS_MAPPING, type Section } from '../haq.types'

export const needs_aids_and_devices_with_section = (
  inputs: z.infer<
    z.ZodObject<{
      [K in keyof typeof HAQ_INPUTS]: (typeof HAQ_INPUTS)[K]['type']
    }>
  >,
  section: Section,
): boolean => {
  const AIDS_OR_DEVICES_PART_1 = inputs.AIDS_OR_DEVICES_PART_1 ?? []
  const AIDS_OR_DEVICES_PART_2 = inputs.AIDS_OR_DEVICES_PART_2 ?? []

  const section_aids = SECTIONS_TO_AIDS_MAPPING[section]

  return section_aids.some(element =>
    [...AIDS_OR_DEVICES_PART_1, ...AIDS_OR_DEVICES_PART_2].includes(
      element as any,
    ),
  )
}

export const is_help_required_with_section = (
  inputs: z.infer<
    z.ZodObject<{
      [K in keyof typeof HAQ_INPUTS]: (typeof HAQ_INPUTS)[K]['type']
    }>
  >,
  section: Section,
): boolean => {
  const NEED_HELP_PART_1 = inputs.NEED_HELP_PART_1 ?? []
  const NEED_HELP_PART_2 = inputs.NEED_HELP_PART_2 ?? []

  return [...NEED_HELP_PART_1, ...NEED_HELP_PART_2].includes(section as any)
}
