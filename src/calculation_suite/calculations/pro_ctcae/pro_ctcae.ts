import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../lib/calculation_variants/api/input/lenses'
import { inputsInSubscaleLens } from '../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { PRO_CTCAE_OUTPUT, PRO_CTCAE_SYMPTOMS } from './definition'
import { pro_ctcae_calculation } from './pro_ctcae_calculation/pro_ctcae_calculation'

const transform_to_response_format = (
  pro_ctcae_symptoms_with_answers: Array<SubscaleType>
): IncomingCalculationInputType =>
  R.compose(
    array_of_inputs =>
      Object.assign(
        {},
        //@ts-expect-error to do
        ...array_of_inputs.map(input => ({
          [R.view(inputIdLens, input)]: R.defaultTo(
            MISSING_MESSAGE,
            Number(R.view(rawInputValueLens, input))
          ),
        }))
      ),
    R.flatten,
    R.map(symptom_scale => R.view(inputsInSubscaleLens, symptom_scale))
  )(pro_ctcae_symptoms_with_answers)

const transform_to_wip_calculation_result = (
  //@ts-expect-error to do
  results
): WIPCalculationResultType =>
  Object.keys(results).map(key => {
    const score = R.defaultTo(MISSING_MESSAGE, results[key])

    return { id: key, score }
  })

export const calculate_proctcae_scores = (
  calculation_input: IncomingCalculationInputType
): WIPCalculationResultType =>
  R.compose(
    transform_to_wip_calculation_result,
    pro_ctcae_calculation,
    transform_to_response_format,
    add_response_values_to_subscale_inputs(calculation_input)
  )(PRO_CTCAE_SYMPTOMS)

export const specific_steps_proctcae_calc = [calculate_proctcae_scores]

export const pro_ctcae: CalculationType = create_calculation({
  calculation_name: 'PRO-CTCAE',
  readme_location: __dirname,
  calculation_steps: specific_steps_proctcae_calc,
  calculation_definition: {
    input_definition: PRO_CTCAE_SYMPTOMS,
    output_definition: PRO_CTCAE_OUTPUT,
  },
})
