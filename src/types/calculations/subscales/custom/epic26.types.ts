import type {
  DefaultSubscaleType,
  InputType,
} from '../../../calculations.types'

export type EPICDomainType = DefaultSubscaleType & {
  input_ids_in_subscale: Array<
    InputType & {
      epic_item_number: number
    }
  >
  nbr_non_missing: number // Number of non-missing items needed to compute score (otherwise, set score to missing)
  score?: number
}
