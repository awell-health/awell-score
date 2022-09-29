import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../helper_functions/calculation_variants/api/input/lenses'
import { add_raw_values_to_inputs } from '../../helper_functions/calculation_variants/simple_calculation'
import { create_calculation } from '../../helper_functions/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { DN4_INPUTS, DN4_OUTPUT } from './definition'

const calculate_dn4_scores = (
  inputs_with_answers: Array<InputType>
): WIPCalculationResultType => {
  const PATIENT_INTERVIEW_ITEMS = [
    'BURNING',
    'PAINFUL_COLD',
    'ELECTRIC_SHOCKS',
    'TINGLING',
    'PINS_AND_NEEDLES',
    'NUMBNESS',
    'ITCHING',
  ]

  const PATIENT_EXAMINATION_ITEMS = [
    'HYPOESTHESIA_TO_TOUCH',
    'HYPOESTHESIA_TO_PINPRICK',
    'BRUSHING',
  ]

  const get_input_values_for_score = (input_ids: string[]) =>
    R.compose(
      R.filter(val => typeof val === 'boolean'),
      R.map(input => R.view(rawInputValueLens, input)),
      R.filter(input => input_ids.includes(R.view(inputIdLens, input)))
    )(inputs_with_answers)

  //@ts-expect-error to do
  const yes_count = values => values.filter(Boolean).length

  const patient_interview_answers = get_input_values_for_score(
    PATIENT_INTERVIEW_ITEMS
  )

  const patient_examination_answers = get_input_values_for_score(
    PATIENT_EXAMINATION_ITEMS
  )

  return [
    {
      id: 'PATIENT_INTERVIEW_SCORE',
      score:
        patient_interview_answers.length === 0
          ? MISSING_MESSAGE
          : yes_count(patient_interview_answers),
    },
    {
      id: 'PATIENT_EXAMINIATION_SCORE',
      score:
        patient_examination_answers.length === 0
          ? MISSING_MESSAGE
          : yes_count(patient_examination_answers),
    },
    {
      id: 'PATIENT_TOTAL_SCORE',
      score:
        patient_interview_answers.length === 0 &&
        patient_examination_answers.length === 0
          ? MISSING_MESSAGE
          : yes_count([
              ...patient_interview_answers,
              ...patient_examination_answers,
            ]),
    },
  ]
}

export const specific_steps_dn4_calc = [
  calculate_dn4_scores,
  add_raw_values_to_inputs(DN4_INPUTS),
]

export const dn4: CalculationType = create_calculation({
  calculation_name: 'Douleur Neuropathique 4 (DN4)',
  readme_location: __dirname,
  calculation_steps: specific_steps_dn4_calc,
  calculation_definition: {
    input_definition: DN4_INPUTS,
    output_definition: DN4_OUTPUT,
  },
})
