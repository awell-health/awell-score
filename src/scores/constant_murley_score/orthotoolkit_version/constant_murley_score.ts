import { ScoreType } from '../../../types'
import { CMS_INPUTS, CMS_OUTPUT } from './definition'
import { sum, max, min } from 'lodash'

export const constant_murley_score: ScoreType<
  typeof CMS_INPUTS,
  typeof CMS_OUTPUT
> = {
  name: 'Constant Murley Score (CMS) - OrthoToolKit version',
  readmeLocation: __dirname,
  inputSchema: CMS_INPUTS,
  outputSchema: CMS_OUTPUT,
  calculate: ({ data }) => {
    /**
     * Mobility
     */
    const POINTS_PER_EXOROTATION_CRITERIUM = 2
    const exorotation_input = data.Q09_EXOROTATION_ROM
    const exorotation_score =
      exorotation_input.length * POINTS_PER_EXOROTATION_CRITERIUM

    const other_mobility_inputs = [
      data.Q06_FLEXION_ROM,
      data.Q07_ABDUCTION_ROM,
      data.Q08_ENDOROTATION_ROM,
    ]

    const mobility_score = sum(other_mobility_inputs) + exorotation_score

    /** Strength */
    const MAX_SCALE_SCORE = 25
    const CONVERT_KG_TO_LBS = 2.2

    const strength_inputs = [
      data.Q10_ATTEMPT_1,
      data.Q11_ATTEMPT_2,
      data.Q12_ATTEMPT_3,
    ]

    const max_strength_attempt = max(strength_inputs)
    const strength_score = min([
      Math.round((max_strength_attempt as number) * CONVERT_KG_TO_LBS),
      MAX_SCALE_SCORE,
    ])

    /** ADL */
    const adl_score = sum([
      data.Q03_WORK_ADL_SCORE,
      data.Q04_SPORTS_HOBBY_SCORE,
      data.Q02_SLEEP_SCORE,
      data.Q05_ADL_FUNCTIONING_SCORE,
    ])

    /** Pain */
    const pain_score = data.Q01_PAIN_SCORE

    return {
      PAIN: pain_score,
      ADL: adl_score,
      MOBILITY: mobility_score,
      STRENGTH: strength_score ?? null,
      TS: pain_score + adl_score + mobility_score + (strength_score ?? 0),
    }
  },
}
