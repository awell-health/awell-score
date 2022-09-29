import R from 'ramda'

import type {
  CalculationParameter,
  IncomingCalculationInputType,
} from '../../../../types/calculations.types'
import {
  simulate_boolean_answer,
  simulate_date_answer,
  simulate_number_answer,
  simulate_numbers_array_answer,
  simulate_string_answer,
  simulate_strings_array_answer,
} from './simulation'

const generate_random_answer = (
  calculation_parameter: CalculationParameter
): {
  id: string
  simulated_answer: unknown
} => {
  const { id, input_type } = calculation_parameter
  const { type } = input_type

  if (type === 'number') {
    return {
      id,
      simulated_answer: simulate_number_answer(input_type),
    }
  }

  if (type === 'string') {
    return {
      id,
      simulated_answer: simulate_string_answer(input_type),
    }
  }

  if (type === 'date') {
    return {
      id,
      simulated_answer: simulate_date_answer(),
    }
  }

  if (type === 'boolean') {
    return {
      id,
      simulated_answer: simulate_boolean_answer(),
    }
  }

  if (type === 'numbers_array') {
    return {
      id,
      simulated_answer: simulate_numbers_array_answer(input_type),
    }
  }

  if (type === 'strings_array') {
    return {
      id,
      simulated_answer: simulate_strings_array_answer(input_type),
    }
  }

  throw new Error('Invalid input type.')
}

export const generate_random_calculation_input_based_on_calculation_parameters =
  (
    calculation_parameters: CalculationParameter[]
  ): IncomingCalculationInputType => {
    const calculation_input_with_random_answers = R.compose(
      // @ts-expect-error not sure how to type
      a => a.reduce((o, key) => ({ ...o, [key.id]: key.simulated_answer }), {}),
      R.map(generate_random_answer)
    )(calculation_parameters)

    return calculation_input_with_random_answers
  }
