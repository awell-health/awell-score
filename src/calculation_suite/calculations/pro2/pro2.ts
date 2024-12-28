import R from 'ramda'

import type {
  CalculationType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import type { PRO2InputType } from '../../../types/calculations/inputs/custom/pro2.types'
import {
  inputIdLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../lib/calculation_variants/api/input/lenses'
import {
  add_raw_values_to_inputs,
  do_all_required_inputs_have_a_valid_value,
} from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { PRO2_INPUTS, PRO2_OUTPUT, SUBSCORE_QUESTIONS } from './definition'
import { determine_remission } from './determine_remission/determine_remission'

const CALCULATION_NAME_SUB_SCORE = 'STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE'
const CALCULATION_NAME_TOTAL_SCORE = 'TOTAL_SCORE' // Needs to stay the same for legacy purposes
const CALCULATION_NAME_REMISSION_STATUS = 'REMISSION'

const add_weighted_scores_as_std_values = (
  PRO2_INPUTS_with_answers: Array<PRO2InputType>
): Array<PRO2InputType> =>
  R.map((input: PRO2InputType) => {
    const { factor } = input

    const raw_answer = R.view(rawInputValueLens, input)
    const std_answer = Number(raw_answer) * factor

    return R.set(stdInputValueLens, std_answer, input)
  }, PRO2_INPUTS_with_answers)

const calculate_pro2_scores = (
  PRO2_INPUTS_with_answers: Array<PRO2InputType>
): WIPCalculationResultType => {
  if (do_all_required_inputs_have_a_valid_value(PRO2_INPUTS_with_answers)) {
    const unweighted_sf_score = R.compose(
      R.view(rawInputValueLens),
      R.find(input => R.view(inputIdLens, input) === 'STOOL_FREQUENCY')
    )(PRO2_INPUTS_with_answers)

    const unweighted_ap_score = R.compose(
      R.view(rawInputValueLens),
      R.find(input => R.view(inputIdLens, input) === 'ABDOMINAL_PAIN')
    )(PRO2_INPUTS_with_answers)

    const weighted_ap_and_sf_subscore = R.compose(
      R.sum,
      R.map(input => R.view(stdInputValueLens, input)),
      R.filter(input => SUBSCORE_QUESTIONS.includes(R.view(inputIdLens, input)))
    )(PRO2_INPUTS_with_answers)

    const patient_in_remission = determine_remission({
      unweighted_stool_frequency_score: unweighted_sf_score,
      unweighted_abdominal_pain_score: unweighted_ap_score,
      sum_of_weighted_stool_frequency_and_abdominal_pain:
        weighted_ap_and_sf_subscore,
    })

    const total_score = R.compose(
      R.sum,
      R.map(input => R.view(stdInputValueLens, input))
    )(PRO2_INPUTS_with_answers)

    return [
      {
        id: CALCULATION_NAME_SUB_SCORE,
        score: weighted_ap_and_sf_subscore,
      },
      {
        id: CALCULATION_NAME_TOTAL_SCORE,
        score: total_score,
      },
      {
        id: CALCULATION_NAME_REMISSION_STATUS,
        score: patient_in_remission,
      },
    ]
  }

  return [
    {
      id: CALCULATION_NAME_SUB_SCORE,
      score: MISSING_MESSAGE,
    },
    {
      id: CALCULATION_NAME_TOTAL_SCORE,
      score: MISSING_MESSAGE,
    },
    {
      id: CALCULATION_NAME_REMISSION_STATUS,
      score: MISSING_MESSAGE,
    },
  ]
}

export const specific_steps_pro2_calc = [
  calculate_pro2_scores,
  add_weighted_scores_as_std_values,
  add_raw_values_to_inputs(PRO2_INPUTS),
]

export const PRO2: CalculationType = create_calculation({
  calculation_name: `Patient-Reported Outcome (PRO-2) - Crohn's disease outcome measure`,
  readme_location: __dirname,
  calculation_steps: specific_steps_pro2_calc,
  calculation_definition: {
    input_definition: PRO2_INPUTS,
    output_definition: PRO2_OUTPUT,
  },
})
