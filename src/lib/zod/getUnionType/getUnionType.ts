import { z } from 'zod'

export const getUnionType = (value: z.ZodUnion<any>): 'string' | 'number' => {
  // Check that all options are literal, if not throw an error
  if (!value.options.every((option: any) => option instanceof z.ZodLiteral)) {
    throw new Error('All options in a union must be literal')
  }

  // Check that all options are of the same type (string or number)
  if (
    !value.options.every(
      (option: any) =>
        typeof option.value === 'string' || typeof option.value === 'number',
    )
  ) {
    throw new Error(
      'All options in a union must be of the same type (string or number)',
    )
  }

  return typeof value.options[0].value === 'string' ? 'string' : 'number'
}
