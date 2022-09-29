import R from 'ramda'

import type { InputType } from '../../../../types/calculations.types'
import {
  inputIdLens,
  rawInputValueLens,
} from '../../../helper_functions/calculation_variants/api/input/lenses'

export const get_domain_value = (domainId: string) => (domains: InputType[]) =>
  R.compose(
    R.view(rawInputValueLens),
    R.find(input => R.view(inputIdLens, input) === domainId)
  )(domains)
