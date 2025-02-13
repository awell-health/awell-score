import {
  TerminologyType,
  type ScoreInputSchemaType,
  type ScoreOutputSchemaType,
} from '../../../../types'
import { type ApiScoreType } from './types'
import { inputSchemaToApiInputSchema } from './lib/inputSchemaToApiInputSchema/inputSchemaToApiInputSchema'
import { outputSchemaToApiOutputSchema } from './lib/outputSchemaToApiOutputSchema/outputSchemaToApiOutputSchema'

export const parseToAwellApiSchema = ({
  scoreId,
  scoreName,
  scoreDescription,
  inputSchema,
  outputSchema,
  terminology,
}: {
  scoreId: string
  scoreName: string
  scoreDescription: string
  inputSchema: ScoreInputSchemaType
  outputSchema: ScoreOutputSchemaType
  terminology?: TerminologyType
}): ApiScoreType => {
  const DEFAULT_SCORE_TERMINOLOGY = {
    category: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'survey',
            display: 'Survey',
          },
        ],
        text: 'Survey',
      },
    ],
  }

  return {
    calculation_id: scoreId,
    calculation_name: { en: scoreName },
    calculation_description: { en: scoreDescription },
    calculation_blueprint: {
      input_definition: inputSchemaToApiInputSchema(inputSchema),
      output_definition: outputSchemaToApiOutputSchema(outputSchema),
    },
    terminology: terminology ?? DEFAULT_SCORE_TERMINOLOGY,
  }
}
