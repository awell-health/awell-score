import R from 'ramda'

import type {
  CalculationParameter,
  DefaultSubscaleType,
  InputType,
} from '../../../../types/calculations.types'
import type { CustomInputsType } from '../../../../types/calculations/inputs/custom'
import type { CustomSubscalesType } from '../../../../types/calculations/subscales/custom'
import {
  inputFormatLens,
  inputIdLens,
  inputInfoLens,
  inputLabelLens,
  inputTypeLens,
  notApplicableIfLens,
} from '../../calculation_variants/api/input/lenses'
import { inputsInSubscaleLens } from '../../calculation_variants/api/subscale/lenses'

type FunctionInputType = {
  calculation_definition:
    | InputType[]
    | DefaultSubscaleType[]
    | CustomSubscalesType
    | CustomInputsType
  additional_inputs?: Array<InputType>
}

export const get_calculation_blueprint_from_definition = ({
  calculation_definition,
  additional_inputs = [],
}: FunctionInputType): CalculationParameter[] => {
  const get_parameters = (input: InputType) => ({
    id: R.view(inputIdLens, input),
    label: R.view(inputLabelLens, input),
    info: R.view(inputInfoLens, input),
    input_type: R.compose(R.view(inputTypeLens))(input),
    format: R.view(inputFormatLens, input),
    not_applicable_if: R.view(notApplicableIfLens, input),
  })

  /**
   * To check whether the incoming definition is an array of subscales
   * or an array of inputs we check whether the first element in the array
   * has 'input_ids_in_subscale" key. If yes, we know we are working with subscales.
   */
  const definition_is_a_subscale_type = R.compose(
    R.view(inputsInSubscaleLens),
    R.head
  )(calculation_definition)

  let all_calculation_parameters = []

  if (definition_is_a_subscale_type) {
    all_calculation_parameters = [
      ...R.compose(
        R.map(get_parameters),
        R.flatten,
        R.map(R.view(inputsInSubscaleLens))
      )(calculation_definition),
      ...additional_inputs.map(get_parameters),
    ]
  } else {
    all_calculation_parameters = [
      //@ts-expect-error add types
      ...calculation_definition.map(get_parameters),
      ...additional_inputs.map(get_parameters),
    ]
  }

  return all_calculation_parameters
}
