import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
} from '../../../../types/calculations.types'
import {
  try_cast_to_boolean,
  try_cast_to_number,
  try_cast_to_numbers_array,
  try_cast_to_string,
  try_cast_to_strings_array,
} from './cast_fn'

export const cast_incoming_calculation_input_to_exact_types = ({
  calculation,
  calculation_input,
}: {
  calculation: CalculationType
  calculation_input: IncomingCalculationInputType
}): IncomingCalculationInputType => {
  const calculation_input_definition =
    calculation.calculation_blueprint.input_definition

  const try_cast_input_to_correct_type = (input_value: any, key: string) => {
    const definition = R.find(
      input_definition => input_definition.id === key,
      calculation_input_definition
    )

    const type = definition?.input_type?.type

    if (type === 'number') return try_cast_to_number(input_value)

    if (type === 'string') return try_cast_to_string(input_value)

    if (type === 'boolean') return try_cast_to_boolean(input_value)

    if (type === 'numbers_array') return try_cast_to_numbers_array(input_value)

    if (type === 'strings_array') return try_cast_to_strings_array(input_value)

    return input_value
  }

  const casted_calculation_input = R.mapObjIndexed(
    try_cast_input_to_correct_type,
    calculation_input
  )

  return casted_calculation_input
}
