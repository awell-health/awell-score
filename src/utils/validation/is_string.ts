export const is_string = (value: unknown): boolean => {
  if (typeof value !== 'string') return false

  return true
}
