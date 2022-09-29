export const is_number = (value: unknown): boolean => {
  if (typeof value !== 'number' || Number.isNaN(value)) return false

  return true
}
