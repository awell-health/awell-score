import R from 'ramda'

import type { CalculationOutputType } from '../../../types/calculations.types'

type FunctionType = (calculation_output: CalculationOutputType[]) => string[]

export const get_result_ids_from_calculation_output: FunctionType =
  calculation_output => {
    return R.flatten(calculation_output.map(result => result.subresult_id))
  }
