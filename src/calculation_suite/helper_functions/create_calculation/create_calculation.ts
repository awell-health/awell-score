import R from 'ramda'

import type {
  CalculationInputType,
  CalculationOutputDefinition,
  CalculationType,
  DefaultSubscaleType,
  InputType,
  SpecificStepsType,
} from '../../../types/calculations.types'
import type { CustomInputsType } from '../../../types/calculations/inputs/custom'
import type { CustomSubscalesType } from '../../../types/calculations/subscales/custom'
import type { LabelType } from '../../../types/localization.types'
import { create_calculation_pipeline } from '../calculation_pipeline/create_calculation_pipeline'
import { get_calculation_blueprint_from_definition } from './get_calculation_blueprint_from_definition'
import { parse_readme_to_html } from './parse_readme_to_html'

type FunctionInputType = {
  calculation_name: LabelType | string
  readme_location: string
  calculation_steps: SpecificStepsType
  calculation_definition: {
    input_definition:
      | InputType[]
      | DefaultSubscaleType[]
      | CustomSubscalesType
      | CustomInputsType
    output_definition: CalculationOutputDefinition[]
  }
  calculation_additional_inputs?: InputType[]
  is_private?: boolean
}

export const create_calculation = ({
  calculation_name,
  readme_location,
  calculation_steps,
  calculation_definition,
  calculation_additional_inputs,
  is_private,
}: FunctionInputType): CalculationType => {
  const calculation_description = parse_readme_to_html(readme_location)
  const is_calculation_private = R.defaultTo(false, is_private)
  const calculation_function = (input: CalculationInputType) =>
    create_calculation_pipeline(calculation_steps)(input)

  return {
    calculation_name:
      typeof calculation_name === 'string'
        ? { en: calculation_name }
        : calculation_name,
    calculation_description: { en: calculation_description },
    calculation_function,
    calculation_blueprint: {
      input_definition: get_calculation_blueprint_from_definition({
        calculation_definition: calculation_definition.input_definition,
        additional_inputs: calculation_additional_inputs,
      }),
      output_definition: calculation_definition.output_definition,
    },
    is_private: is_calculation_private,
  }
}
