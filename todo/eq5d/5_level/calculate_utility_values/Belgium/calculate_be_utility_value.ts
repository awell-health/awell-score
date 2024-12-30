import R from 'ramda'

import { BE_VALUE_SET } from './BE_value_set'

export const calculate_be_utility_value = (healthState: number) => {
  const matching_utility_row = R.find(R.propEq('state', healthState))(
    BE_VALUE_SET
  )

  if (R.isNil(matching_utility_row))
    throw new Error(
      `No matching utility value found for Health State ${healthState.toString()}`
    )

  //@ts-expect-error to do
  return matching_utility_row.value
}
