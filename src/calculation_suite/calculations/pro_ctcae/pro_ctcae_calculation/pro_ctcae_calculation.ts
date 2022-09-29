import _l from 'lodash'

import type { IncomingCalculationInputType } from '../../../../types/calculations.types'
import { pretty_scoring_table } from '../scoring_table'
import { transform_response } from './transform_response/transform_response'

type OutputType = {
  [symptom: string]: number
}

export const pro_ctcae_calculation = (
  calculation_input: IncomingCalculationInputType
): OutputType => {
  //@ts-expect-error to do
  const transformed_form_response = transform_response(calculation_input)
  return _l.mapValues(transformed_form_response, dimensions => {
    if ('boolean' in dimensions) {
      /**
       * Edge case: some inputs have format proctcae_5_SYMPTOM_NAME_boolean
       * In this scenario we just return the number of the boolean dimension.
       *
       * IMPORTANT:
       * In the PROCTCAE forms in Awell 0 = Yes and 1 = No
       */
      return dimensions.boolean
    }

    const is_match_with_dimensions =
      //@ts-expect-error to do


        d =>
        //@ts-expect-error to do
        ({ frequency, severity, impact, amt }) =>
          frequency === d.frequency &&
          severity === d.severity &&
          impact === d.impact &&
          amt === d.amt

    const match_in_table = _l.find(
      pretty_scoring_table,
      is_match_with_dimensions(dimensions)
    )

    //@ts-expect-error to do
    return match_in_table === undefined ? undefined : match_in_table.score
  })
}
