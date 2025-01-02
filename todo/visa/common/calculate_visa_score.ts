import R from 'ramda'

import type {
  InputType,
  WIPCalculationResultType,
} from '../../../src/types/calculations.types'
import {
  inputRequiredLens,
  rawInputValueLens,
} from '../../../lib/calculation_variants/api/input/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../../src/calculation_suite/calculations/shared_functions'

export const calculate_visa_score =
  (calculation_name: string) =>
  (visa_inputs: Array<InputType>): WIPCalculationResultType => {
    //@ts-expect-error to do
    const nbr_of_required_inputs = R.compose(
      R.length,
      R.filter(required => required === true),
      R.map(input => R.view(inputRequiredLens, input)),
    )(visa_inputs)

    const valid_answers = R.compose(
      R.filter(is_numeric),
      R.map(answer => Number(answer)),
      R.map(input => R.view(rawInputValueLens, input)),
    )(visa_inputs)

    //@ts-expect-error to do
    if (valid_answers.length > nbr_of_required_inputs)
      throw new Error(
        `${calculation_name} could not be calculated because for question 8 there are too many answers passed. Question 8 is conditional, meaning that patient only needs to answer question 8A, 8B or 8C.`,
      )

    if (valid_answers.length !== nbr_of_required_inputs)
      return [
        {
          id: calculation_name,
          score: MISSING_MESSAGE,
        },
      ]

    return [
      {
        id: calculation_name,
        score: R.sum(valid_answers),
      },
    ]
  }
