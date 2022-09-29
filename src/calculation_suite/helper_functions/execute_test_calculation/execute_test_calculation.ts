import type {
  CalculationOutputType,
  CalculationType,
  IncomingCalculationInputType,
} from '../../../types/calculations.types'

type FunctionType = (
  calculation: CalculationType
) => (
  calculation_input: IncomingCalculationInputType
) => CalculationOutputType[]

export const execute_test_calculation: FunctionType =
  calculation => calculation_input => {
    const calculation_function = calculation.calculation_function

    return calculation_function({
      calculation_id: calculation.calculation_name.en || '',
      calculation_blueprint: calculation.calculation_blueprint,
      calculation_input,
    })
  }
