import type { ApiCalculationResultsType } from '../../../../types/api.types'
import type {
  CalculationScriptIdentifierType,
  IncomingCalculationInputType,
} from '../../../../types/calculations.types'
import {
  CalculationResult,
  ICalculationResult,
} from '../../../shared/models/calculation_result'

type FunctionType = {
  calculation_id: CalculationScriptIdentifierType
  calculation_input: IncomingCalculationInputType
  results: ApiCalculationResultsType
  meta_data: unknown
}

export const insert_calculation_result = async ({
  calculation_id,
  calculation_input,
  results,
  meta_data,
}: FunctionType): Promise<ICalculationResult> => {
  try {
    const calculationResult = new CalculationResult({
      calculation_id,
      calculation_input,
      results,
      meta_data,
    })

    const savedCalculationResult = await calculationResult.save()

    return savedCalculationResult
  } catch {
    throw new Error('Failed to save calculation result to Mongo.')
  }
}
