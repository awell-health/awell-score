import { is_number } from '../../../../../utils/validation/is_number'

const parse_comma_notation_to_dot_notation = (value: string): string =>
  value.replace(/,/g, '.')

export const try_cast_to_number = (orginal_value: unknown): unknown => {
  if (is_number(orginal_value)) return orginal_value

  /**
   * Only makes sense to try cast strings and booleans to numbers.
   * Other input types (date, numbers_array ...) cannot be casted to a number.
   */
  if (typeof orginal_value === 'string') {
    if (orginal_value === 'true') return 1

    if (orginal_value === 'false') return 0

    const value_with_dot_notation =
      parse_comma_notation_to_dot_notation(orginal_value)

    const numberValue = Number(value_with_dot_notation)

    if (!Number.isNaN(numberValue)) {
      return numberValue
    }

    return orginal_value
  }

  if (typeof orginal_value === 'boolean') {
    if (orginal_value) return 1

    return 0
  }

  return orginal_value
}
