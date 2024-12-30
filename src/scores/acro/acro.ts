import { ACRO_INPUTS, ACRO_OUTPUT } from './definition'
import { calculate_scores } from './helpers'
import { ScoreType } from '../../types'

export const acro: ScoreType<typeof ACRO_INPUTS, typeof ACRO_OUTPUT> = {
  name: 'Acromegaly Quality of Life Questionnaire (AcroQoL)',
  readme_location: __dirname,
  inputSchema: ACRO_INPUTS,
  outputSchema: ACRO_OUTPUT,
  calculate: ({ data }) => {
    const PHYSICAL_SUBSCALE_SCORE = calculate_scores(data, 'PHYSICAL_SUBSCALE')
    const PSYCHOLOGICAL_APPEARANCE_SUBSCALE = calculate_scores(
      data,
      'PSYCHOLOGICAL_APPEARANCE_SUBSCALE',
    )
    const PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE = calculate_scores(
      data,
      'PSYCHOLOGICAL_PERSONAL_RELATIONSHIPS_SUBSCALE',
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
