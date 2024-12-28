import type {
  CalculationType,
  InputType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { add_raw_values_to_inputs } from '../../lib/calculation_variants/simple_calculation'
import { create_calculation } from '../../lib/create_calculation'
import {
  CORE_OM_INPUTS,
  CORE_OM_OUTPUT,
  CORE_OM_SUBSCALE_ITEMS,
} from './definition'
import { calculate_mean_score, calculate_raw_score } from './helpers'

const calculate_core_om_scores = (
  calculation_input: Array<InputType>
): WIPCalculationResultType => [
  {
    id: 'SUBJECTIVE_WELL_BEING_DEFICITS_RAW',
    score: calculate_raw_score(calculation_input)(
      CORE_OM_SUBSCALE_ITEMS.SUBJECTIVE_WELLBEING
    ),
  },
  {
    id: 'SUBJECTIVE_WELL_BEING_DEFICITS_MEAN',
    score: calculate_mean_score(calculation_input)(
      CORE_OM_SUBSCALE_ITEMS.SUBJECTIVE_WELLBEING
    ),
  },
  {
    id: 'PROBLEMS_SYMPTOMS_RAW',
    score: calculate_raw_score(calculation_input)(
      CORE_OM_SUBSCALE_ITEMS.PROBLEMS_SYMPTOMS
    ),
  },
  {
    id: 'PROBLEMS_SYMPTOMS_MEAN',
    score: calculate_mean_score(calculation_input)(
      CORE_OM_SUBSCALE_ITEMS.PROBLEMS_SYMPTOMS
    ),
  },
  {
    id: 'LIFE_FUNCTIONING_DIFFICULTIES_RAW',
    score: calculate_raw_score(calculation_input)(
      CORE_OM_SUBSCALE_ITEMS.LIFE_FUNCTIONING_DIFFICULTIES
    ),
  },
  {
    id: 'LIFE_FUNCTIONING_DIFFICULTIES_MEAN',
    score: calculate_mean_score(calculation_input)(
      CORE_OM_SUBSCALE_ITEMS.LIFE_FUNCTIONING_DIFFICULTIES
    ),
  },
  {
    id: 'RISK_HARM_RAW',
    score: calculate_raw_score(calculation_input)(
      CORE_OM_SUBSCALE_ITEMS.RISK_HARM
    ),
  },
  {
    id: 'RISK_HARM_MEAN',
    score: calculate_mean_score(calculation_input)(
      CORE_OM_SUBSCALE_ITEMS.RISK_HARM
    ),
  },
  {
    id: 'TOTAL_RAW',
    score: calculate_raw_score(calculation_input)([
      ...CORE_OM_SUBSCALE_ITEMS.SUBJECTIVE_WELLBEING,
      ...CORE_OM_SUBSCALE_ITEMS.RISK_HARM,
      ...CORE_OM_SUBSCALE_ITEMS.LIFE_FUNCTIONING_DIFFICULTIES,
      ...CORE_OM_SUBSCALE_ITEMS.PROBLEMS_SYMPTOMS,
    ]),
  },
  {
    id: 'TOTAL_MEAN',
    score: calculate_mean_score(calculation_input)([
      ...CORE_OM_SUBSCALE_ITEMS.SUBJECTIVE_WELLBEING,
      ...CORE_OM_SUBSCALE_ITEMS.RISK_HARM,
      ...CORE_OM_SUBSCALE_ITEMS.LIFE_FUNCTIONING_DIFFICULTIES,
      ...CORE_OM_SUBSCALE_ITEMS.PROBLEMS_SYMPTOMS,
    ]),
  },
]

export const specific_steps_core_om_calc = [
  calculate_core_om_scores,
  add_raw_values_to_inputs(CORE_OM_INPUTS),
]

export const core_om: CalculationType = create_calculation({
  calculation_name: 'Clinical Outcomes in Routine Evaluation (CORE-OM)',
  readme_location: __dirname,
  calculation_steps: specific_steps_core_om_calc,
  calculation_definition: {
    input_definition: CORE_OM_INPUTS,
    output_definition: CORE_OM_OUTPUT,
  },
})
