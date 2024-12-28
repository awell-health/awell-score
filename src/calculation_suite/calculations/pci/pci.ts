import R from 'ramda'

import type {
  CalculationType,
  IncomingCalculationInputType,
  SubscaleType,
  WIPCalculationResultType,
} from '../../../types/calculations.types'
import { rawInputValueLens } from '../../lib/calculation_variants/api/input/lenses'
import { scoreLens } from '../../lib/calculation_variants/api/subscale/lenses'
import { add_response_values_to_subscale_inputs } from '../../lib/calculation_variants/calculation_with_subscales'
import { create_calculation } from '../../lib/create_calculation'
import { MISSING_MESSAGE } from '../../PARAMETERS'
import { is_numeric } from '../shared_functions'
import { PCI_COPING_STRATEGIES, PCI_OUTPUT, PCI_SUBSCALES } from './definition'
import { type CopingScaleType } from './definition/pci_coping_strategies'

const calculate_score_for_each_subscale = (
  subscale: SubscaleType
): SubscaleType => {
  const { input_ids_in_subscale } = subscale

  const valid_answers_in_subscale = R.compose(
    R.filter(is_numeric),
    R.map(raw_value => Number(raw_value)),
    R.map(input => R.view(rawInputValueLens, input))
  )(input_ids_in_subscale)

  if (valid_answers_in_subscale.length !== input_ids_in_subscale.length)
    return R.set(scoreLens, MISSING_MESSAGE, subscale)

  return R.set(scoreLens, R.sum(valid_answers_in_subscale), subscale)
}

const calculate_pci_scale_scores = (
  calculation_input: IncomingCalculationInputType
): Array<SubscaleType> =>
  R.compose(
    R.map(calculate_score_for_each_subscale),
    add_response_values_to_subscale_inputs(calculation_input)
  )(PCI_SUBSCALES)

const add_coping_scores = (
  subscales_with_scores: Array<SubscaleType>
): WIPCalculationResultType => {
  const calculate_coping_score = (coping_scale: CopingScaleType) => {
    const { id, subscale_ids, normalization_function } = coping_scale

    const valid_coping_scale_subscale_scores = R.compose(
      R.filter(is_numeric),
      R.map(score => Number(score)),
      //@ts-expect-error to do
      R.map(subscale => subscale.score),
      //@ts-expect-error to do
      R.filter(subscale => subscale_ids.includes(subscale.id))
    )(subscales_with_scores)

    if (valid_coping_scale_subscale_scores.length !== subscale_ids.length)
      return {
        id,
        score: MISSING_MESSAGE,
      }

    const coping_score = R.sum(valid_coping_scale_subscale_scores)

    if (normalization_function)
      return {
        id,
        //@ts-expect-error to do
        score: normalization_function(coping_score),
      }

    return {
      id,
      score: coping_score,
    }
  }

  const coping_scores = R.map(calculate_coping_score, PCI_COPING_STRATEGIES)

  return [
    ...subscales_with_scores.map(({ id, score }) => ({
      id,
      score,
    })),
    ...coping_scores,
  ]
}

export const specific_steps_pci_calc = [
  add_coping_scores,
  calculate_pci_scale_scores,
]

export const pci: CalculationType = create_calculation({
  calculation_name: `Pain Coping Inventory (PCI)`,
  readme_location: __dirname,
  calculation_steps: specific_steps_pci_calc,
  calculation_definition: {
    input_definition: PCI_SUBSCALES,
    output_definition: PCI_OUTPUT,
  },
})
