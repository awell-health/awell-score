import R from 'ramda'

import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import { MSQ_INPUTS, MSQ_OUTPUT } from './definition'
import { calculate_domain_scores, interpret_score } from './helpers'

const calculate_scores = (
  inputs_with_answers: Array<InputType>,
): WIPCalculationResultType => {
  const HEAD_TOTAL = calculate_domain_scores(inputs_with_answers, 'HEAD')
  const EYES_TOTAL = calculate_domain_scores(inputs_with_answers, 'EYES')
  const EARS_TOTAL = calculate_domain_scores(inputs_with_answers, 'EARS')
  const NOSE_TOTAL = calculate_domain_scores(inputs_with_answers, 'NOSE')
  const MOUTH_THROAT_TOTAL = calculate_domain_scores(
    inputs_with_answers,
    'MOUTH_THROAT',
  )
  const SKIN_TOTAL = calculate_domain_scores(inputs_with_answers, 'SKIN')
  const HEART_TOTAL = calculate_domain_scores(inputs_with_answers, 'HEART')
  const LUNGS_TOTAL = calculate_domain_scores(inputs_with_answers, 'LUNGS')
  const DIGESTIVE_TRACT_TOTAL = calculate_domain_scores(
    inputs_with_answers,
    'DIGESTIVE_TRACT',
  )
  const JOINTS_MUSCLE_TOTAL = calculate_domain_scores(
    inputs_with_answers,
    'JOINTS_MUSCLE',
  )
  const WEIGHT_TOTAL = calculate_domain_scores(inputs_with_answers, 'WEIGHT')
  const ENERGY_ACTIVITY_TOTAL = calculate_domain_scores(
    inputs_with_answers,
    'ENERGY_ACTIVITY',
  )
  const MIND_TOTAL = calculate_domain_scores(inputs_with_answers, 'MIND')
  const EMOTIONS_TOTAL = calculate_domain_scores(
    inputs_with_answers,
    'EMOTIONS',
  )
  const OTHER_TOTAL = calculate_domain_scores(inputs_with_answers, 'OTHER')

  const GRAND_TOTAL = R.sum([
    HEAD_TOTAL,
    EYES_TOTAL,
    EARS_TOTAL,
    NOSE_TOTAL,
    MOUTH_THROAT_TOTAL,
    SKIN_TOTAL,
    HEART_TOTAL,
    LUNGS_TOTAL,
    DIGESTIVE_TRACT_TOTAL,
    JOINTS_MUSCLE_TOTAL,
    WEIGHT_TOTAL,
    ENERGY_ACTIVITY_TOTAL,
    MIND_TOTAL,
    EMOTIONS_TOTAL,
    OTHER_TOTAL,
  ])

  return [
    {
      id: 'MSQ_HEAD_TOTAL',
      score: HEAD_TOTAL,
    },
    {
      id: 'MSQ_EYES_TOTAL',
      score: EYES_TOTAL,
    },
    {
      id: 'MSQ_EARS_TOTAL',
      score: EARS_TOTAL,
    },
    {
      id: 'MSQ_NOSE_TOTAL',
      score: NOSE_TOTAL,
    },
    {
      id: 'MSQ_MOUTH_THROAT_TOTAL',
      score: MOUTH_THROAT_TOTAL,
    },
    {
      id: 'MSQ_SKIN_TOTAL',
      score: SKIN_TOTAL,
    },
    {
      id: 'MSQ_HEART_TOTAL',
      score: HEART_TOTAL,
    },
    {
      id: 'MSQ_LUNGS_TOTAL',
      score: LUNGS_TOTAL,
    },
    {
      id: 'MSQ_DIGESTIVE_TRACT_TOTAL',
      score: DIGESTIVE_TRACT_TOTAL,
    },
    {
      id: 'MSQ_JOINTS_MUSCLE_TOTAL',
      score: JOINTS_MUSCLE_TOTAL,
    },
    {
      id: 'MSQ_WEIGHT_TOTAL',
      score: WEIGHT_TOTAL,
    },
    {
      id: 'MSQ_ENERGY_ACTIVITY_TOTAL',
      score: ENERGY_ACTIVITY_TOTAL,
    },
    {
      id: 'MSQ_MIND_TOTAL',
      score: MIND_TOTAL,
    },
    {
      id: 'MSQ_EMOTIONS_TOTAL',
      score: EMOTIONS_TOTAL,
    },
    {
      id: 'MSQ_OTHER_TOTAL',
      score: OTHER_TOTAL,
    },
    {
      id: 'MSQ_GRAND_TOTAL',
      score: GRAND_TOTAL,
    },
    {
      id: 'MSQ_INTERPRETATION',
      score: interpret_score(GRAND_TOTAL),
    },
  ]
}

export const specific_steps_calc = [
  calculate_scores,
  add_raw_values_to_inputs(MSQ_INPUTS),
]

export const msq: CalculationType = create_calculation({
  calculation_name: 'Medical Symptoms Questionnaire (MSQ)',
  readme_location: __dirname,
  calculation_steps: specific_steps_calc,
  calculation_definition: {
    input_definition: MSQ_INPUTS,
    output_definition: MSQ_OUTPUT,
  },
})
