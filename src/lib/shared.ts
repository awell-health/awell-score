import { isEmpty } from 'lodash'

export const is_numeric = (val: unknown): boolean =>
  typeof val === 'number' && !Number.isNaN(val)

type RemoveUndefined<T> = {
  [K in keyof T]-?: Exclude<T[K], undefined>
}

/**
 * Checks if all values in the object are defined and refines the type.
 * @param data - The object to check.
 * @returns True if all values are defined; false otherwise.
 */
export const areAllValuesDefined = <T extends Record<string, unknown>>(
  data: T,
): data is RemoveUndefined<T> => {
  if (isEmpty(data)) {
    return false
  }
  return Object.values(data).every(value => value !== undefined)
}
