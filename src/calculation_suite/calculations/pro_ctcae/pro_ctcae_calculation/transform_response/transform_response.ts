import R from 'ramda'

import { MISSING_MESSAGE } from '../../../../PARAMETERS'
import { extract_symptom_and_dimension_from_input } from '../extract_symptom_and_dimension_from_input/extract_symptom_and_dimension_from_input'
import { validate_transformed_response } from './validate_transformed_response'

type InputType = { [input_id: string]: number }

export type OutputType = {
  [symptom: string]: {
    severity?: number
    impact?: number
    boolean?: string
    frequency?: number
  }
}

export const transform_response = (form_response: InputType): OutputType => {
  //@ts-expect-error to do
  const keep_valid_answered_inputs = ([input_id]) => /^proctcae/.test(input_id)

  const res = Object.entries(form_response)
    //@ts-expect-error to do
    .filter(keep_valid_answered_inputs)
    .reduce((result, [input_id, answer]) => {
      const { symptom, dimension } =
        extract_symptom_and_dimension_from_input(input_id)
      return {
        ...result,
        [symptom]: {
          //@ts-expect-error to do
          ...(result[symptom] || {}),
          //@ts-expect-error to do
          [dimension]: answer === MISSING_MESSAGE ? undefined : Number(answer),
        },
      }
    }, {})
  validate_transformed_response(res)

  /**
   * A question can (but doesn't need to have) 3 dimensions
   * 1. Frequency
   * 2. Severity
   * 3. Impact
   */
  //@ts-expect-error to do
  const updated_res = R.map(symptom => {
    /**
     * Given that a symptom has the 3 dimensions:
     * --> If frequency is 0 then severity and impact need to be set to 0 as well (make sure they're not undefined)
     */
    if (
      'frequency' in symptom &&
      'severity' in symptom &&
      'impact' in symptom
    ) {
      const { frequency } = symptom
      if (frequency === 0) {
        return { frequency: 0, severity: 0, impact: 0 }
      }
    }

    /**
     * Given that a symptom only has the frequency and severity dimension
     * --> If frequency is 0 then severity needs to be set to 0 as well (make sure it's not undefined)
     */
    if (
      'frequency' in symptom &&
      'severity' in symptom &&
      !('impact' in symptom)
    ) {
      const { frequency } = symptom
      if (frequency === 0) {
        return { frequency: 0, severity: 0 }
      }
    }

    /**
     * Given that a symptom only has the severity and impact dimension
     * --> If severity is 0 then impact needs to be set to 0 as well (make sure it's not undefined)
     */
    if (
      !('frequency' in symptom) &&
      'severity' in symptom &&
      'impact' in symptom
    ) {
      const { severity } = symptom
      if (severity === 0) {
        return { severity: 0, impact: 0 }
      }
    }

    /**
     * Given that a symptom only has the frequency and impact dimension
     * --> If frequency is 0 then impact needs to be set to 0 as well (make sure it's not undefined)
     */
    if (
      'frequency' in symptom &&
      !('severity' in symptom) &&
      'impact' in symptom
    ) {
      const { frequency } = symptom
      if (frequency === 0) {
        return { frequency: 0, impact: 0 }
      }
    }

    return symptom
  }, res)

  //@ts-expect-error to do
  return updated_res
}
