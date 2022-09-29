import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../helper_functions/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../helper_functions/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../helper_functions/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import {
  MDS_UPDRS_OUTPUT,
  MDS_UPDRS_SCALES,
  UNABLE_TO_RATE,
} from './definition'

const calculate_score_for_each_scale = (
  subscale: SubscaleType
): SubscaleType => {
  const inputs_in_subscale = R.view(inputsInSubscaleLens, subscale)

  //@ts-expect-error to do
  const valid_scale_answers = R.compose(
    R.defaultTo([]),
    R.filter(answer => answer !== UNABLE_TO_RATE),
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(inputs_in_subscale)

  //@ts-expect-error to do
  if (valid_scale_answers.length === 0) {
    return R.set(scoreLens, MISSING_MESSAGE, subscale)
  }

  //@ts-expect-error to do
  const scale_score = R.sum(valid_scale_answers)

  return R.set(scoreLens, scale_score, subscale)
}

const calculate_mds_updrs_scale_scores = (
  calculation_input: IncomingCalculationInputType
): SubscaleType[] =>
  R.compose(
    R.map(calculate_score_for_each_scale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(MDS_UPDRS_SCALES)

const add_total_score = (
  scales_with_scores: Array<SubscaleType>
): WIPCalculationResultType => {
  //@ts-expect-error to do
  const valid_scale_scores = R.compose(
    R.defaultTo([]),
    R.filter(is_numeric),
    R.map(score => Number(score)),
    R.map(scale => R.view(scoreLens, scale))
  )(scales_with_scores)

  //@ts-expect-error to do
  if (valid_scale_scores.length === 0)
    return [
      ...scales_with_scores.map(({ id, score }) => ({
        id,
        score,
      })),
      {
        id: 'MDS_UPDRS_TOTAL',
        score: MISSING_MESSAGE,
      },
    ]

  return [
    ...scales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'MDS_UPDRS_TOTAL',
      //@ts-expect-error to do
      score: R.sum(valid_scale_scores),
    },
  ]
}

export const specific_steps_mds_updrs_calc = [
  add_total_score,
  calculate_mds_updrs_scale_scores,
]

export const mds_updrs: CalculationType = create_calculation({
  calculation_name:
    "The Movement Disorder Society-Sponsored Revision of the Unified Parkinson's Disease Rating Scale (MDS-UPDRS)",
  readme_location: __dirname,
  calculation_steps: specific_steps_mds_updrs_calc,
  calculation_definition: {
    input_definition: MDS_UPDRS_SCALES,
    output_definition: MDS_UPDRS_OUTPUT,
  },
})
