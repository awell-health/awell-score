import type { CalculationInputValue } from '../../../../../../types/calculations.types'
import type { LabelType } from '../../../../../../types/localization.types'

export const boolean_validation = (
  input_value: CalculationInputValue
): {
  valid: boolean
  reason?: LabelType
} => {
  if (typeof input_value !== 'boolean')
    return {
      valid: false,
      reason: {
        en: 'Passed value is not of type boolean.',
        nl: 'Ingegeven waarde is geen boolean.',
      },
    }

  return {
    valid: true,
  }
}
