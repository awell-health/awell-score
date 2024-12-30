import type {
  CalculationBlueprintType,
  CalculationOutputType,
  CalculationScriptIdentifierType,
  IncomingCalculationInputType,
} from './calculations.types'
import type { LabelType } from './Label.types'

export type ApiCalculationType = {
  calculation_id: CalculationScriptIdentifierType
  calculation_name: LabelType
  calculation_description: LabelType
  calculation_blueprint: CalculationBlueprintType
  is_private: boolean
}

export type ApiCalculationsLibraryType = ApiCalculationType[]

export type ApiCalculationResultsType = CalculationOutputType[]

export type ApiSimulatedCalculationResultsType = {
  simulated_calculation_input: IncomingCalculationInputType
  simulated_calculation_results: ApiCalculationResultsType
}
