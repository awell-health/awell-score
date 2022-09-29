import R from 'ramda'

import type {
  CalculationType,
  WIPCalculationResultType,
} from '../../../../types/calculations.types'
import type { OMPQInputType } from '../../../../types/calculations/inputs/custom/ompq.types'
import { stdInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'
import { OMPQ_INPUTS, OMPQ_OUTPUT } from './definition'
import { add_score_to_ompq_inputs } from './helpers/add_score_to_omp_inputs'

const calculate_ompq_total_score = (
  ompq_inputs_with_scores: Array<OMPQInputType>
): WIPCalculationResultType => {
  const valid_scores = R.compose(
    R.filter(is_numeric),
    R.map(answer => Number(answer)),
    R.map(input => R.view(stdInputValueLens, input))
  )(ompq_inputs_with_scores)

  /**
   * All inputs should be answered,
   * as missing values will reduce validity.
   */
  const expected_amount_of_scores = OMPQ_INPUTS.length

  if (valid_scores.length < expected_amount_of_scores) {
    return [
      {
        id: 'OMPQ',
        score: MISSING_MESSAGE,
      },
    ]
  }

  /**
   * A cut-off score of 105 has been found to predict those who will recover (with 95 per cent accuracy),
   * those who will have no further sick leave in the next six months (with 81 per cent accuracy),
   * and those who will have long-term sick leave (with 67 per cent accuracy).
   */
  const total_score = R.sum(valid_scores)

  return [
    {
      id: 'OMPQ',
      score: total_score,
    },
  ]
}

export const specific_steps_ompq_calc = [
  calculate_ompq_total_score,
  add_score_to_ompq_inputs,
  add_raw_values_to_inputs(OMPQ_INPUTS),
]

export const ompq: CalculationType = create_calculation({
  calculation_name: `Orebro Musculoskeletal Pain Questionnaire (OMPQ)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_ompq_calc,
  calculation_definition: {
    input_definition: OMPQ_INPUTS,
    output_definition: OMPQ_OUTPUT,
  },
})
