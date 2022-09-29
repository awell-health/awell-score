import R from 'ramda'

import type {
  CalculationOutputDefinition,
  CalculationOutputType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import {
  is_boolean,
  is_date,
  is_number,
  is_string,
} from '../../../../utils/validation'
import {
  CALCULATED_STATUS,
  MISSING_MESSAGE,
  MISSING_STATUS,
  NOT_APPLICABLE_MESSAGE,
  NOT_APPLICABLE_STATUS,
} from '../../../PARAMETERS'

export const map_calculation_output_to_wip_calculation_results =
  (calculation_output: CalculationOutputDefinition[]) =>
  (
    wip_calculation_resuls: WIPCalculationResultType
  ): CalculationOutputType[] => {
    const add_result_from_wip_calculation_results = (
      calculation_result_output: CalculationOutputDefinition
    ) => {
      const { subresult_id, type } = calculation_result_output

      const corresponding_wip_result = R.find(
        wip_result => wip_result.id === subresult_id,
        wip_calculation_resuls
      )

      if (R.isNil(corresponding_wip_result))
        throw new Error(
          `No corresponding wip result found for calculation output ${subresult_id}. Every subresult from the defined calculation output should have corresponding wip result.`
        )

      const score = corresponding_wip_result?.score
      let result

      let status

      /**
       * Legacy alert:
       * --------------
       * Missing or not applicable results were put in the score. It's easier
       * to have a separate status for it.
       */
      if (score === MISSING_MESSAGE) {
        status = MISSING_STATUS
      } else if (score === NOT_APPLICABLE_MESSAGE) {
        status = NOT_APPLICABLE_STATUS
      } else {
        status = CALCULATED_STATUS
        result = score
      }

      if (!R.isNil(result)) {
        if (type === 'date' && !is_date(score)) {
          throw new Error(
            `Result for calculation output ${subresult_id} should be a date.`
          )
        } else if (type === 'boolean' && !is_boolean(score)) {
          throw new Error(
            `Result for calculation output ${subresult_id} should be a boolean.`
          )
        } else if (type === 'string' && !is_string(score)) {
          throw new Error(
            `Result for calculation output ${subresult_id} should be a string.`
          )
        } else if (type === 'number' && !is_number(score)) {
          throw new Error(
            `Result for calculation output ${subresult_id} should be a number.`
          )
        }
      }

      return {
        ...calculation_result_output,
        result,
        status,
      }
    }

    return calculation_output.map(add_result_from_wip_calculation_results)
  }
