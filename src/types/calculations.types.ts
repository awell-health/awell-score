import type {
  PossibleInputType as CalculationParameterInputType,
  IncomingAnswerValueTypes,
} from './calculations/inputs/calculation-inputs.types'
import type { CustomSubscaleType } from './calculations/subscales/custom'
import type { LabelType } from './localization.types'
import type { CalculationType as NewCalculationType } from '../api/shared/classes/Calculation'

export type CalculationInputKey = string
export type CalculationInputValue = unknown

export type IncomingCalculationInputType = Record<
  CalculationInputKey,
  CalculationInputValue
>

type InputNotApplicableIf = {
  input_id: string
  value_is_one_of: unknown[]
}

type SubscaleNotApplicableIf = {
  subscale?: {
    subscale_id: string
    score: any
  }
  input?: {
    input_id: string
    value_is_one_of: unknown[]
  }
  not_applicable_score: string
}

export type CalculationScriptIdentifierType = string

export type MissingStatusType = 'MISSING'
export type NotApplicableStatusType = 'NOT APPLICABLE'
export type CalculatedStatusType = 'CALCULATED'
export type CalculationResultStatusType =
  | NotApplicableStatusType
  | MissingStatusType
  | CalculatedStatusType

export type OutputTypes = 'date' | 'boolean' | 'string' | 'number'

export type CalculationOutputDefinition = {
  subresult_id: string
  label: LabelType
  type: OutputTypes
  unit?: LabelType
  interpretation?: LabelType
  terminology?: unknown
}

export type SubresultIds<OutputFields extends CalculationOutputDefinition[]> =
  OutputFields[number]['subresult_id']

export type CalculationOutputType = {
  subresult_id: string
  label: LabelType
  type: OutputTypes
  unit?: LabelType
  result?: string | number | boolean
  status: CalculationResultStatusType
  interpretation?: LabelType
}

/**
 * Intermediarry calculation result type
 * WIPCalculationResultType is later standardized to CalculationOutputType
 */
export type WIPCalculationResultType = Array<{
  id: string
  score?: any
  interpretation?: LabelType
}>

export type CalculationParameter = {
  id: string
  label?: LabelType
  input_type: CalculationParameterInputType
  format?: string
  info?: LabelType
  not_applicable_if?: InputNotApplicableIf
}

export type CalculationBlueprintType = {
  input_definition: CalculationParameter[]
  output_definition: CalculationOutputDefinition[]
}

export type InputType = {
  input_id: string
  input_label?: LabelType
  input_type: CalculationParameterInputType
  required?: boolean
  raw_input_value?: IncomingAnswerValueTypes | MissingStatusType
  std_value?: IncomingAnswerValueTypes | MissingStatusType
  valid?: boolean
  format?: string
  inverse?: boolean // Some validated questionnaires have inputs that need to be scored in reverse
  info?: LabelType
  not_applicable_if?: InputNotApplicableIf
}

/**
 * Synonyms for subscales:
 * - Domains
 * - Scores
 */
export type DefaultSubscaleType = {
  id: string
  input_ids_in_subscale: InputType[]
  min_answers_needed_to_calculate_score?: number
  score?: number
  not_applicable_if?: SubscaleNotApplicableIf
}

export type SubscaleType = DefaultSubscaleType | CustomSubscaleType

type RawScore = number
type StdScore = number
type QuestionId = string

export type StandardizationSerieType = {
  items: QuestionId[]
  conversion_table: Array<{
    raw: RawScore
    std: StdScore
  }>
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type SpecificStepsType = Array<Function>

export type CalculationInputType = {
  calculation_id: string
  calculation_blueprint: CalculationBlueprintType
  calculation_input: IncomingCalculationInputType
}

export type CalculationFunctionSignature = (
  input: CalculationInputType
) => CalculationOutputType[]

export type CalculationType = {
  calculation_name: LabelType
  calculation_description: LabelType
  calculation_blueprint: CalculationBlueprintType
  calculation_function: CalculationFunctionSignature
  is_private: boolean
}

export type CalculationsLibraryType = Record<
  CalculationScriptIdentifierType,
  CalculationType | NewCalculationType<any, any>
>
