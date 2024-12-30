import _l from 'lodash'

import type { OutputType } from './transform_response'

export const validate_transformed_response = (
  transformed_form_response: OutputType
): void => {
  const invalid_symptom = _l.findKey(
    transformed_form_response,
    dimensions => 'boolean' in dimensions && Object.keys(dimensions).length > 1
  )
  if (invalid_symptom !== undefined) {
    const invalid_dimensions = Object.keys(
      transformed_form_response[invalid_symptom]
    )
    throw new Error(
      `invalid symptom ${invalid_symptom}: if it contains the dimension boolean it should not have additional dimensions (i.e. ${invalid_dimensions.join(
        ', '
      )})`
    )
  }
}
