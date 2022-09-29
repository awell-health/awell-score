import type { ApiCalculationResultsType } from '../../../../types/api.types'
import type {
  CalculationScriptIdentifierType,
  IncomingCalculationInputType,
} from '../../../../types/calculations.types'
import {
  CalculationResult,
  type ICalculationResult,
} from '../../../shared/models/calculation_result'

type FunctionType = {
  calculation_id: CalculationScriptIdentifierType
  calculation_input: IncomingCalculationInputType
  results: ApiCalculationResultsType
  meta_data: { [key in string]: unknown }
}

export const insert_calculation_result = async ({
  calculation_id,
  calculation_input,
  results,
  meta_data,
}: FunctionType): Promise<ICalculationResult> =>
  CalculationResult.create({
    calculation_id,
    calculation_input,
    results,
    meta_data,
  })
