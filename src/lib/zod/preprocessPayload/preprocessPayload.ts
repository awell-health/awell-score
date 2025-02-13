import { isNil } from 'lodash'
import { z } from 'zod'

export const preprocessPayload = (
  inputSchema: z.ZodObject<{ [key: string]: z.ZodTypeAny }>,
  payload: Record<string, unknown>,
) => {
  const issues: z.ZodIssue[] = []

  // Check for missing required fields based on inputSchema
  for (const key of Object.keys(inputSchema.shape)) {
    const schemaType = inputSchema.shape[key]
    const value = payload[key]

    // Handle missing required inputs for unions
    if (schemaType instanceof z.ZodUnion && isNil(value)) {
      issues.push({
        code: 'invalid_union',
        unionErrors: [],
        path: [key],
        message: 'Required',
      })
    }

    // Handle missing required inputs for array of unions
    if (
      schemaType instanceof z.ZodArray &&
      schemaType.element instanceof z.ZodUnion &&
      (isNil(value) || (Array.isArray(value) && value.length === 0))
    ) {
      issues.push({
        code: 'invalid_type',
        expected: 'array',
        received: 'undefined',
        path: [key],
        message: 'Required',
      })
    }
  }

  // If there are any validation issues, throw them all at once
  if (issues.length > 0) {
    throw new z.ZodError(issues)
  }
}
