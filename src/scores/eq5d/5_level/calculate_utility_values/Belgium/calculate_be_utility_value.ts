import { BE_VALUE_SET } from './BE_value_set'

export const calculate_be_utility_value = (healthState: number): number => {
  const match = BE_VALUE_SET.find(row => row.state == healthState)

  if (match === undefined)
    throw new Error(
      `No matching utility value found for Health State ${healthState.toString()}`,
    )

  return match.value
}
