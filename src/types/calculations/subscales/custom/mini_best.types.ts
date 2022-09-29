import type {
  DefaultSubscaleType,
  InputType,
} from '../../../calculations.types'

export type MiniBestSectionType = DefaultSubscaleType & {
  input_ids_in_subscale: Array<
    InputType & {
      bilateral?: boolean
    }
  >
}
