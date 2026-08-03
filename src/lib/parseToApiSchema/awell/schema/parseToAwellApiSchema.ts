import {
  TerminologyType,
  type ScoreInputSchemaType,
  type ScoreOutputSchemaType,
  type LicensingStatusType,
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
  licensing_status,
  license_contact,
}: {
  scoreId: string
  scoreName: string
  scoreDescription: string
  inputSchema: ScoreInputSchemaType
  outputSchema: ScoreOutputSchemaType
  terminology?: TerminologyType
  licensing_status: LicensingStatusType
  license_contact: string | null
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
    licensing_status,
    license_contact,
  }
}
