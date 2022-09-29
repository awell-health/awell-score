import R from 'ramda'

import type {
  DefaultSubscaleType,
  IncomingCalculationInputType,
} from '../../../../../types/calculations.types'
import type { CustomSubscalesType } from '../../../../../types/calculations/subscales/custom'
import { inputsInSubscaleLens } from '../../api/subscale/lenses'
import { add_raw_values_to_inputs } from '../../shared/add_raw_values_to_inputs'

export const add_response_values_to_subscale_inputs =
  (response: IncomingCalculationInputType) =>
  (
    subscales: DefaultSubscaleType[] | CustomSubscalesType
  ): DefaultSubscaleType[] | CustomSubscalesType =>
    R.map(subscale => {
      const inputs_with_answer_values = R.compose(
        //@ts-expect-error add types
        inputs => add_raw_values_to_inputs(inputs)(response),
        R.defaultTo([]),
        R.view(inputsInSubscaleLens)
      )(subscale)

      return R.set(inputsInSubscaleLens, inputs_with_answer_values, subscale)
    }, subscales)
