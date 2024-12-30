import { tryCastToString } from './tryCastToString'

export const tryCastToStringsArray = (orginal_value: unknown): unknown => {
  if (Array.isArray(orginal_value)) {
    if (orginal_value.every(value => typeof value === 'string'))
      return orginal_value

    return orginal_value.map(tryCastToString)
  }

  return orginal_value
}
