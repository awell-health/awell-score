import type {
  CalculationBlueprintType,
  CalculationInputKey,
} from '../../types/calculations.types'

export type UnexpectedInputsType = CalculationInputKey[]

export class UnexpectedInputsError extends Error {
  unexpected_inputs: UnexpectedInputsType
  calculation_blueprint: CalculationBlueprintType

  constructor(
    {
      unexpected_inputs,
      calculation_name,
      calculation_blueprint,
    }: {
      unexpected_inputs: UnexpectedInputsType
      calculation_name: string
      calculation_blueprint: CalculationBlueprintType
    },
    ...params: string[]
  ) {
    super(...params)
    this.name = 'UnexpectedInputsError'
    this.message = `Unexpected inputs were passed into ${calculation_name}. Please make sure that the calculation inputs you pass match the calculation blueprint.`
    this.unexpected_inputs = unexpected_inputs
    this.calculation_blueprint = calculation_blueprint
  }
}
