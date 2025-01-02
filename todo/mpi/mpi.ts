/* eslint-disable sort-imports */
import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../src/types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../../src/calculation_suite/calculations/shared_functions'
import { MPI_DOMAINS, MPI_OUTPUT } from './definition'

const calculate_score_for_each_domain = (
  domain: SubscaleType,
): SubscaleType => {
  const { input_ids_in_subscale } = domain
  // "Domain" and "subscale" are synonyms
  const inputs_in_domain = input_ids_in_subscale

  const valid_answers_in_domain = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
  )(inputs_in_domain)

  if (valid_answers_in_domain.length !== inputs_in_domain.length)
    return R.set(scoreLens, MISSING_MESSAGE, domain)

  return R.set(scoreLens, R.sum(valid_answers_in_domain), domain)
}

const calculate_mpi_scale_scores = (
  calculation_input: IncomingCalculationInputType,
): Array<SubscaleType> =>
  R.compose(
    R.map(calculate_score_for_each_domain),
    add_response_values_to_subscale_inputs(calculation_input),
  )(MPI_DOMAINS)

const add_total_score = (
  domain_with_scores: Array<SubscaleType>,
): WIPCalculationResultType => {
  const EXPECTED_AMOUNT_OF_ANSWERS = 52

  const valid_answers = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input)),
    R.flatten,
    R.map(scale => R.view(inputsInSubscaleLens, scale)),
  )(domain_with_scores)

  if (valid_answers.length !== EXPECTED_AMOUNT_OF_ANSWERS)
    return [
      ...domain_with_scores.map(({ id, score }) => ({
        id,
        score,
      })),
      {
        id: 'MPI_TOTAL',
        score: MISSING_MESSAGE,
      },
    ]

  return [
    ...domain_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    {
      id: 'MPI_TOTAL',
      score: R.sum(valid_answers),
    },
  ]
}

export const specific_steps_mpi_calc = [
  add_total_score,
  calculate_mpi_scale_scores,
]

export const mpi: CalculationType = create_calculation({
  calculation_name: `Multidimensional Pain Inventory (MPI)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_mpi_calc,
  calculation_definition: {
    input_definition: MPI_DOMAINS,
    output_definition: MPI_OUTPUT,
  },
})
