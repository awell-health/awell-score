import R from 'ramda'

import type { InputType } from '../../../types/calculations.types'
import type {
  RescalingFormula,
  RescalingTableType,
} from '../../../types/calculations/subscales/custom/KCCQ12.types'
import {
  inputIdLens,
  rawInputValueLens,
  stdInputValueLens,
} from '../../lib/calculation_variants/api/input/lenses'

export const remove_answers_considered_as_missing_values =
  (answer_treated_as_missing_value?: number) =>
  (domain_inputs_with_answers: Array<InputType>): Array<InputType> =>
    answer_treated_as_missing_value
      ? R.filter(
          input =>
            Number(R.view(rawInputValueLens, input)) !==
            answer_treated_as_missing_value,
          domain_inputs_with_answers
        )
      : domain_inputs_with_answers

export const are_enough_inputs_answered_to_compute_score =
  (min_amount_of_answers_to_compute_score?: number) =>
  (answers: number[]): boolean =>
    min_amount_of_answers_to_compute_score
      ? answers.length >= min_amount_of_answers_to_compute_score
      : false

export const rescale_domain_answers =
  (
    rescaling_table?: RescalingTableType,
    rescaling_formula?: RescalingFormula
  ) =>
  (domain_inputs_with_answers: Array<InputType>): Array<InputType> =>
    R.map(input => {
      const raw_value = R.view(rawInputValueLens, input)
      const input_id = R.view(inputIdLens, input)

      /**
       * When no rescaling is needed, we set the raw value
       * as the standardized value.
       */
      if (rescaling_table && rescaling_formula) {
        const std_value = rescaling_formula(
          raw_value,

          R.prop(input_id, rescaling_table)
        )

        return R.set(stdInputValueLens, std_value, input)
      }

      return R.set(stdInputValueLens, raw_value, input)
    }, domain_inputs_with_answers)
