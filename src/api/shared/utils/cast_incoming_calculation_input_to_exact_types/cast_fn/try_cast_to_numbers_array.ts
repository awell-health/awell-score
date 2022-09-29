import { is_number } from '../../../../../utils/validation/is_number'
import { try_cast_to_number } from './try_cast_to_number'

export const try_cast_to_numbers_array = (orginal_value: unknown): unknown => {
  if (Array.isArray(orginal_value)) {
    if (orginal_value.every(is_number)) return orginal_value

    return orginal_value.map(try_cast_to_number)
  }

  return orginal_value
}
