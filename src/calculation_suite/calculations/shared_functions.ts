export const is_numeric = (val: unknown): boolean =>
  typeof val === 'number' && !Number.isNaN(val)
