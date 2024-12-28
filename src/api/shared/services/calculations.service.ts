import R from 'ramda'

import { CALCULATIONS } from '../../../calculation_suite/calculations/calculation_library'
import type {
  ApiCalculationResultsType,
  ApiSimulatedCalculationResultsType,
} from '../../../types/api.types'
import type {
  CalculationScriptIdentifierType,
  CalculationsLibraryType,
  CalculationType,
  IncomingCalculationInputType,
} from '../../../types/calculations.types'
import {
  filter_calculations_by_calculation_name,
  filter_out_non_applicable_inputs,
  generate_random_calculation_input_based_on_calculation_parameters,
} from '../utils'
import type { CalculationType as NewCalculationType } from '../classes/Calculation'

/**
 * Only return calculations where `is_private` is set to false
 */
const get_public_calculations = (): CalculationsLibraryType =>
  R.filter(
    (calculation): calculation is CalculationType =>
      'is_private' in calculation && calculation.is_private === false,
    CALCULATIONS
  )

/**
 * Only return calculations where `is_private` is set to true
 */
const get_private_calculations = (): CalculationsLibraryType =>
  R.filter(
    (calculation): calculation is CalculationType =>
      'is_private' in calculation && calculation.is_private === true,
    CALCULATIONS
  )

/**
 * Return all calculations
 */
const get_all_calculations = (): CalculationsLibraryType => CALCULATIONS

const get_calculation = (
  calculation_id: CalculationScriptIdentifierType
): CalculationType | NewCalculationType<any, any> | undefined => {
  const calculation = CALCULATIONS[calculation_id]

  if (R.isNil(calculation)) return undefined

  return calculation
}

const search_calculation = (
  calculation_name: string
): CalculationsLibraryType => {
  const all_public_calculations = get_public_calculations()

  return filter_calculations_by_calculation_name(calculation_name)(
    all_public_calculations
  )
}

const calculate = ({
  calculation_id,
  calculation,
  calculation_input,
}: {
  calculation_id: CalculationScriptIdentifierType
  calculation: CalculationType
  calculation_input: IncomingCalculationInputType
}): ApiCalculationResultsType => {
  const calculation_blueprint = calculation.calculation_blueprint
  const calculation_function = calculation.calculation_function

  return calculation_function({
    calculation_id,
    calculation_blueprint,
    calculation_input,
  })
}

const simulate = ({
  calculation_id,
  calculation,
}: {
  calculation_id: CalculationScriptIdentifierType
  calculation: CalculationType
}): ApiSimulatedCalculationResultsType => {
  const calculation_function = calculation.calculation_function

  const calculation_blueprint = calculation.calculation_blueprint

  const { input_definition } = calculation_blueprint

  const simulated_calculation_input = R.compose(
    filter_out_non_applicable_inputs(input_definition),
    generate_random_calculation_input_based_on_calculation_parameters
  )(input_definition)

  const simulated_calculation_results = calculation_function({
    calculation_id,
    calculation_blueprint,
    calculation_input: simulated_calculation_input,
  })

  return {
    simulated_calculation_input,
    simulated_calculation_results,
  }
}

export default {
  get_public_calculations,
  get_private_calculations,
  get_all_calculations,
  get_calculation,
  search_calculation,
  calculate,
  simulate,
}
