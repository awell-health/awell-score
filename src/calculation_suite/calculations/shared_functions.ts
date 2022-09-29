import R from 'ramda'

import type {
  CalculationOutputType,
  DefaultSubscaleType,
  InputType,
} from '../../types/calculations.types'
import type { CustomInputsType } from '../../types/calculations/inputs/custom'
import type {
  CustomSubscalesType,
  CustomSubscaleType,
} from '../../types/calculations/subscales/custom'
import { inputIdLens } from '../helper_functions/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  subscaleIdLens,
} from '../helper_functions/calculation_variants/api/subscale/lenses'

export const is_numeric = (val: unknown): boolean =>
  typeof val === 'number' && !Number.isNaN(val)

export const get_input_ids_from_calculation_blueprint = (
  inputs: InputType[] | CustomInputsType
): string[] => inputs.map(input => R.view(inputIdLens, input))

export const get_input_ids_in_subscale = (
  subscale: DefaultSubscaleType | CustomSubscaleType
): string[] =>
  //@ts-expect-error add types
  R.view(inputsInSubscaleLens, subscale).map(input =>
    R.view(inputIdLens, input)
  )

export const get_input_ids_for_specific_subscale =
  (subscale_id: string) =>
  (subscales: DefaultSubscaleType[] | CustomSubscalesType): string[] =>
    //@ts-expect-error to do
    R.compose(
      R.flatten,
      get_input_ids_in_subscale,
      R.find(subscale => R.view(subscaleIdLens, subscale) === subscale_id)
    )(subscales)

export const view_status =
  (score_id = '') =>
  (scores: CalculationOutputType[]): unknown => {
    /** If calculation only has one result/outcome
     * => Return that status
     */
    if (scores.length === 1) return scores[0].status

    return R.compose(
      (subresult: CalculationOutputType | undefined) => subresult?.status,
      R.find((score: CalculationOutputType) => score.subresult_id === score_id)
    )(scores)
  }
