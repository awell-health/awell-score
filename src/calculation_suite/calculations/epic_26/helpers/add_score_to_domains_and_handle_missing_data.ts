import R from 'ramda'

import type { EPICDomainType } from '../../../../types/calculations/subscales/custom/epic26.types'
import { stdInputValueLens } from '../../../helper_functions/calculation_variants/api/input/lenses'
import {
  inputsInSubscaleLens,
  scoreLens,
} from '../../../helper_functions/calculation_variants/api/subscale/lenses'
import { MISSING_MESSAGE } from '../../../PARAMETERS'
import { is_numeric } from '../../shared_functions'

export const add_score_to_domains_and_handle_missing_data = (
  domains: Array<EPICDomainType>
): Array<EPICDomainType> =>
  R.map((domain: EPICDomainType) => {
    const { nbr_non_missing } = domain
    const inputs_in_domain = R.view(inputsInSubscaleLens, domain)

    //@ts-expect-error to do
    const count_nbr_of_non_missing_items = R.compose(
      R.length,
      R.filter(is_numeric),
      R.map(item_val => Number(item_val)),
      R.map(input => R.view(stdInputValueLens, input))
    )(inputs_in_domain)

    //@ts-expect-error to do
    if (count_nbr_of_non_missing_items >= nbr_non_missing) {
      const domain_score = R.compose(
        R.mean,
        R.filter(is_numeric),
        R.map(item_val => Number(item_val)),
        R.map(input => R.view(stdInputValueLens, input))
      )(inputs_in_domain)

      return R.set(scoreLens, domain_score, domain)
    }

    return R.set(scoreLens, MISSING_MESSAGE, domain)
  })(domains)
