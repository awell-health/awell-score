import type { CalculationParameterInputType } from '../../types/calculations/inputs/calculation-inputs.types'
import type { LabelType } from '../../types/localization.types'

export type InvalidInputType = {
  input_id: string
  input_type: CalculationParameterInputType
  passed_answer: unknown
  reason?: LabelType
}

export type InvalidInputsType = InvalidInputType[]

export class InvalidInputsError extends Error {
  invalid_inputs: InvalidInputsType

  constructor(
    {
      invalid_inputs,
      calculation_name,
    }: {
      invalid_inputs: InvalidInputsType
      calculation_name: string
    },
    ...params: string[]
  ) {
    super(...params)
    this.name = 'InvalidInputsError'
    this.message = `${calculation_name} could not be calculated because some inputs have invalid values passed.`
    this.invalid_inputs = invalid_inputs
  }
}
