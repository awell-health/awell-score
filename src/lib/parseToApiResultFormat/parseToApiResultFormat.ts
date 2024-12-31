import { z } from 'zod'
import { CalculationResultStatus, type ApiResultType } from './types'
import { type ScoreOutputSchemaType } from '../../types'

export const parseToApiResultFormat = <
  OutputSchema extends ScoreOutputSchemaType,
>(
  results: Record<
    keyof OutputSchema,
    z.infer<OutputSchema[keyof OutputSchema]['type']> | null
  >,
  outputSchema: OutputSchema,
): Array<ApiResultType> => {
  const getResultType = (
    type: z.ZodTypeAny,
  ): 'string' | 'number' | 'boolean' => {
    if (type instanceof z.ZodString) return 'string'
    if (type instanceof z.ZodNumber) return 'number'
    if (type instanceof z.ZodBoolean) return 'boolean'

    return 'string'
  }
  const apiResults = Object.entries(results).map(([key, value]) => {
    return {
      subresult_id: key,
      label: outputSchema[key].label,
      type: getResultType(outputSchema[key].type),
      unit: outputSchema[key].unit,
      result: value === null ? undefined : value,
      status:
        value === null
          ? CalculationResultStatus.MISSING
          : CalculationResultStatus.CALCULATED,
      interpretation: outputSchema[key].interpretation,
      terminology: outputSchema[key].terminology,
    } satisfies ApiResultType
  })

  return apiResults
}
