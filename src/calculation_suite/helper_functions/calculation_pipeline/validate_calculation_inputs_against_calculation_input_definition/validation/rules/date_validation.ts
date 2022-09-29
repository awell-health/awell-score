import moment from 'moment'

import type { CalculationInputValue } from '../../../../../../types/calculations.types'
import type { LabelType } from '../../../../../../types/localization.types'

/**
 * All incoming dates should be ISO8601 dates
 */
export const date_validation = (
  input_value: CalculationInputValue
): {
  valid: boolean
  reason?: LabelType
} => {
  if (typeof input_value === 'string') {
    const momentDate = moment(input_value, moment.ISO_8601)

    if (momentDate.isValid()) return { valid: true }
  }

  return {
    valid: false,
    reason: {
      en: 'Passed value is not a valid date in the ISO_8601 format.',
      nl: 'Ingegeven waarde is geen valide datum in het ISO_8601 formaat.',
    },
  }
}
