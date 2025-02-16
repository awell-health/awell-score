export const tryCastToString = (original_value: unknown): unknown => {
  if (typeof original_value === 'string') return original_value

  /** Only types that make sense to convert to a string
   *  are numbers and booleans */
  if (typeof original_value === 'number' || typeof original_value === 'boolean')
    return original_value.toString()

  return original_value
}
