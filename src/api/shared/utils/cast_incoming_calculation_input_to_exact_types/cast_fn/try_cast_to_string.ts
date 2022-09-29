import { is_string } from '../../../../../utils/validation'

export const try_cast_to_string = (original_value: unknown): unknown => {
  if (is_string(original_value)) return original_value

  /** Only types that make sense to convert to a string
   *  are numbers and booleans */
  if (typeof original_value === 'number' || typeof original_value === 'boolean')
    return original_value.toString()

  return original_value
}
