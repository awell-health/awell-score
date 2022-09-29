import R from 'ramda'

import {
  type InputType,
  type StandardizationSerieType,
  type SubscaleType,
} from '../../../../../types/calculations.types'
import { MISSING_MESSAGE } from '../../../../PARAMETERS'
import {
  inputIdLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../api/input/lenses'
import { inputsInSubscaleLens } from '../../api/subscale/lenses'

export const add_standardized_values_to_subscale_inputs =
  ({
    standardization_table,
    readable_calculation_name = 'Score',
  }: {
    standardization_table: Array<StandardizationSerieType>
    readable_calculation_name: string
  }) =>
  (subscales: Array<SubscaleType>): Array<SubscaleType> => {
    const add_standardized_value_to_input = (input: InputType) => {
      const input_id = R.view(inputIdLens, input)
      const raw_value = R.view(rawInputValueLens, input)

      //@ts-expect-error add types
      const conversion_table = R.compose(
        R.prop('conversion_table'),
        //@ts-expect-error add types
        R.find(serie => serie.items.includes(input_id))
      )(standardization_table)

      //@ts-expect-error add types
      const std_value = R.compose(
        R.prop('std'),
        //@ts-expect-error add types
        R.find(entry => entry.raw === Number(raw_value))
      )(conversion_table)

      if (R.isNil(std_value) && raw_value !== MISSING_MESSAGE)
        throw new Error(
          `${readable_calculation_name} could not be calculated because we weren't able to find a standardized value for input id ${input_id} with raw value ${raw_value}`
        )

      return R.set(
        stdInputValueLens,
        R.defaultTo(MISSING_MESSAGE)(std_value),
        input
      )
    }

    return R.map((subscale: SubscaleType) => {
      const inputs_with_standardized_values = R.compose(
        R.map(add_standardized_value_to_input),
        R.defaultTo([]),
        R.view(inputsInSubscaleLens)
      )(subscale)

      return R.set(
        inputsInSubscaleLens,
        inputs_with_standardized_values,
        subscale
      )
    }, subscales)
  }
