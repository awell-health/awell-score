import moment from 'moment'

/**
 * All dates be ISO8601 dates
 */
export const is_date = (value: unknown): boolean => {
  if (typeof value === 'string') {
    const momentDate = moment(value, moment.ISO_8601)

    if (momentDate.isValid()) return true

    return false
  }

  return false
}
