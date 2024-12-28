import _l from 'lodash'
import R from 'ramda'

import type { CalculationOutputType } from '../../../../types/calculations.types'
import type {
  EORTCScaleType,
  TypeOfScaleType,
} from '../../../../types/calculations/subscales/custom/eortc.types'
import { subscaleIdLens } from '../../../lib/calculation_variants/api/subscale/lenses'
import { scaleTypeLens } from './lenses'

export const calculate_RS = (array_of_items: Array<number | undefined>) => {
  const valid_items = R.defaultTo([], _l.filter(array_of_items, _l.isNumber))

  return valid_items.length !== 0 ? R.mean(valid_items) : undefined
}

const SCALE = 100

export const apply_symptom_scale = (RS_score: unknown, range: unknown) =>
  ((Number(RS_score) - 1) / Number(range)) * SCALE

export const apply_functional_scale = (RS_score: unknown, range: unknown) =>
  (1 - (Number(RS_score) - 1) / Number(range)) * SCALE

export const filter_eortc_results_by_specific_scale_type = ({
  calculation_output,
  eortc_scales,
  scale_type,
}: {
  calculation_output: CalculationOutputType[]
  eortc_scales: EORTCScaleType[]
  scale_type: TypeOfScaleType
}) => {
  const scale_ids_of_specified_type = R.compose(
    R.flatten,
    R.map(scale => R.view(subscaleIdLens, scale)),
    R.filter(scale => R.view(scaleTypeLens, scale) === scale_type)
  )(eortc_scales)

  return R.filter(calculation_result => {
    const calculation_result_id = calculation_result.subresult_id

    return scale_ids_of_specified_type.includes(calculation_result_id)
  }, calculation_output)
}
