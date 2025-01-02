import R from 'ramda'

import type { InputType } from '../../../src/types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import {
  do_all_required_inputs_have_a_valid_value,
  get_valid_values,
} from '../../../lib/calculation_variants/simple_calculation'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'

//@ts-expect-error to do
const recode_input_9 = answer => {
  const numeric_answer = Number(answer)

  if (is_numeric(numeric_answer)) {
    const old_value_to_new_value_dict = {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 1,
      '4': 1,
    }

    //@ts-expect-error to do
    return old_value_to_new_value_dict[numeric_answer]
  }

  return MISSING_MESSAGE
}

export const calculate_total_and_subscale_score = (
  inputs_with_answers: Array<InputType>,
) => {
  /**
   * Recode question 9
   */
  const Q09_index = R.findIndex(input => R.view(inputIdLens, input) === 'Q09')(
    inputs_with_answers,
  )

  const recoded_value = recode_input_9(
    R.view(rawInputValueLens, inputs_with_answers[Q09_index]),
  )

  const start_back_inputs_with_q9_recoded = R.set(
    R.compose(R.lensIndex(Q09_index), rawInputValueLens),
    recoded_value,
    inputs_with_answers,
  )

  const START_BACK_SUBSCALE_QUESTIONS = ['Q05', 'Q06', 'Q07', 'Q08', 'Q09']

  const calclation_input_start_back_total_score =
    start_back_inputs_with_q9_recoded
  const calclation_input_start_back_psychosocial_subscale_score = R.filter(
    input => START_BACK_SUBSCALE_QUESTIONS.includes(R.view(inputIdLens, input)),
    start_back_inputs_with_q9_recoded,
  )

  let START_BACK_TOTAL_SCORE = MISSING_MESSAGE
  let START_BACK_SUBSCALE_SCORE = MISSING_MESSAGE

  if (
    do_all_required_inputs_have_a_valid_value(
      calclation_input_start_back_total_score,
    )
  ) {
    //@ts-expect-error to do
    START_BACK_TOTAL_SCORE = R.sum(
      get_valid_values(calclation_input_start_back_total_score),
    )
  }

  if (
    do_all_required_inputs_have_a_valid_value(
      calclation_input_start_back_psychosocial_subscale_score,
    )
  ) {
    //@ts-expect-error to do
    START_BACK_SUBSCALE_SCORE = R.sum(
      get_valid_values(calclation_input_start_back_psychosocial_subscale_score),
    )
  }

  const SBT_MAX_TOTAL_SCORE = 9
  const SBT_MAX_SUBSCALE_SCORE = 5

  return [
    {
      id: 'START_BACK_TOTAL',
      score: START_BACK_TOTAL_SCORE,
      interpretation: {
        en: `Maximum total score is ${SBT_MAX_TOTAL_SCORE}`,
        nl: `Maximale score is ${SBT_MAX_TOTAL_SCORE}`,
      },
    },
    {
      id: 'START_BACK_SUBSCALE',
      score: START_BACK_SUBSCALE_SCORE,
      interpretation: {
        en: `Maximum subscale score is ${SBT_MAX_SUBSCALE_SCORE}`,
        nl: `Maximale sub score is ${SBT_MAX_SUBSCALE_SCORE}`,
      },
    },
  ]
}
