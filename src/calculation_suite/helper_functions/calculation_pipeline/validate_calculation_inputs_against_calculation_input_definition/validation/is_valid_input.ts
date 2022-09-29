import R from 'ramda'

import type {
  CalculationInputValue,
  CalculationParameter,
} from '../../../../../types/calculations.types'
import type { CalculationParameterInputType } from '../../../../../types/calculations/inputs/calculation-inputs.types'
import type { InvalidInputType } from '../../../../errors/InvalidInputsError'
import { inputTypeLens } from '../../../calculation_variants/api/input/lenses'
import {
  boolean_validation,
  date_validation,
  number_validation,
  numbers_array_validation,
  string_validation,
  strings_array_validation,
} from './rules'

export const is_valid_input = (
  input_value: CalculationInputValue,
  input_definition: CalculationParameter
): {
  valid: boolean
  invalid_input?: InvalidInputType
} => {
  const input_type: CalculationParameterInputType = R.view(
    inputTypeLens,
    input_definition
  )
  const { type } = input_type

  if (type === 'number') {
    const { valid, reason } = number_validation(input_value, input_type)

    if (valid) return { valid: true }

    return {
      valid: false,
      invalid_input: {
        input_id: input_definition.id,
        input_type,
        passed_answer: input_value,
        reason,
      },
    }
  }

  if (type === 'string') {
    const { valid, reason } = string_validation(input_value, input_type)

    if (valid) return { valid: true }

    return {
      valid: false,
      invalid_input: {
        input_id: input_definition.id,
        input_type,
        passed_answer: input_value,
        reason,
      },
    }
  }

  if (type === 'date') {
    const { valid, reason } = date_validation(input_value)

    if (valid) return { valid: true }

    return {
      valid: false,
      invalid_input: {
        input_id: input_definition.id,
        input_type,
        passed_answer: input_value,
        reason,
      },
    }
  }

  if (type === 'boolean') {
    const { valid, reason } = boolean_validation(input_value)

    if (valid) return { valid: true }

    return {
      valid: false,
      invalid_input: {
        input_id: input_definition.id,
        input_type,
        passed_answer: input_value,
        reason,
      },
    }
  }

  if (type === 'numbers_array') {
    const { valid, reason } = numbers_array_validation(input_value, input_type)

    if (valid) return { valid: true }

    return {
      valid: false,
      invalid_input: {
        input_id: input_definition.id,
        input_type,
        passed_answer: input_value,
        reason,
      },
    }
  }

  if (type === 'strings_array') {
    const { valid, reason } = strings_array_validation(input_value, input_type)

    if (valid) return { valid: true }

    return {
      valid: false,
      invalid_input: {
        input_id: input_definition.id,
        input_type,
        passed_answer: input_value,
        reason,
      },
    }
  }

  throw new Error('Invalid input type.')
}
