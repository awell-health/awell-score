import { tryCastToNumber } from './tryCastToNumber'

export const tryCastToNumbersArray = (orginal_value: unknown): unknown => {
  if (Array.isArray(orginal_value)) {
    if (
      orginal_value.every(
        value => typeof value === 'number' && !Number.isNaN(value),
      )
    )
      return orginal_value

    return orginal_value.map(tryCastToNumber)
  }

  return orginal_value
}
