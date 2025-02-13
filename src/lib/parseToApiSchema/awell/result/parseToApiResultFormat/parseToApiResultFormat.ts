import { z } from 'zod'
import { CalculationResultStatus, type ApiResultType } from './types'
import { type ScoreOutputSchemaType } from '../../../../../types'
import { getDefaultTerminology } from '../../schema/lib/outputSchemaToApiOutputSchema/outputSchemaToApiOutputSchema'

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
    const existingCodes = outputSchema[key]?.terminology?.code?.coding ?? []
    const codeText =
      outputSchema[key]?.terminology?.code?.text ??
      outputSchema[key]?.label?.en ??
      'unknown'

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
      terminology: {
        code: {
          coding: [
            getDefaultTerminology(
              key,
              outputSchema[key].label?.en ?? 'unknown',
            ),
            ...existingCodes,
          ],
          text: codeText,
        },
      },
    } satisfies ApiResultType
  })

  return apiResults
}
