import { CalculationType } from '../../../api/shared/classes/Calculation'
import { InputSchema, ACRO_OUTPUT } from './definition'
import { calculate_scores } from './helpers'

export const acro: CalculationType<typeof InputSchema, typeof ACRO_OUTPUT> = {
  name: 'Acromegaly Quality of Life Questionnaire (AcroQoL)',
  readme_location: __dirname,
  inputSchema: InputSchema,
  outputSchema: ACRO_OUTPUT,
  calculate: ({ data }) => {
    const PHYSICAL_SUBSCALE_SCORE = calculate_scores(data, 'PHYSICAL_SUBSCALE')
    const PSYCHOLOGICAL_APPEARANCE_SUBSCALE = calculate_scores(
      data,
      'PSYCHOLOGICAL_APPEARANCE_SUBSCALE'
    )
    const PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE = calculate_scores(
      data,
      'PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE'
    )
    const TOTAL_SCORE = calculate_scores(data, 'TOTAL_SCORE')

    return {
      ACRO_GLOBAL_SCORE: TOTAL_SCORE,
      ACRO_PHYSICAL_SUBSCALE_SCORE: PHYSICAL_SUBSCALE_SCORE,
      ACRO_PSYCHOLOGICAL_APPEARANCE_SUBSCALE: PSYCHOLOGICAL_APPEARANCE_SUBSCALE,
      ACRO_PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE:
        PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE,
    }
  },
}
