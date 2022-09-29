export const is_boolean = (value: unknown): boolean => {
  if (typeof value !== 'boolean') return false

  return true
}
