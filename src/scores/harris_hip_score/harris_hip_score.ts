import { find, pick, sum } from 'lodash'
import { ScoreType } from '../../types'
import {
  HARRIS_HIP_SCORE_INPUTS,
  HARRIS_HIP_SCORE_OUTPUT,
  TOTAL_RANGE_OF_MOTION_CONVERSION_TABLE,
} from './definition'

export const harris_hip_score: ScoreType<
  typeof HARRIS_HIP_SCORE_INPUTS,
  typeof HARRIS_HIP_SCORE_OUTPUT
> = {
  name: 'Harris Hip Score',
  readmeLocation: __dirname,
  inputSchema: HARRIS_HIP_SCORE_INPUTS,
  outputSchema: HARRIS_HIP_SCORE_OUTPUT,
  calculate: ({ data }) => {
    // Deformity score
    const deformityInput = data.ABSENCE_OF_DEFORMITY
    const nbrOfDeformities = deformityInput.length
    const DEFORMITIES_CUT_OFF = 4

    const DEFORMITY_ABSCENT_SCORE = 4
    const DEFORMITY_PRESENT_SCORE = 0

    const deformityScore =
      nbrOfDeformities === DEFORMITIES_CUT_OFF
        ? DEFORMITY_ABSCENT_SCORE
        : DEFORMITY_PRESENT_SCORE

    // Pain score
    const painScore = data.PAIN

    // Function score
    const functionInputIds = [
      'LIMP',
      'SUPPORT',
      'DISTANCE_WALKED',
      'SITTING',
      'STAIRS',
      'ENTER_PUBLIC_TRANSPORTATION',
      'PUT_ON_SOCKS_AND_SHOES',
    ]
    const functionInputs = pick(data, functionInputIds)
    const functionScore = sum(Object.values(functionInputs))

    // Range of motion score
    const romInputIds = [
      'RANGE_OF_MOTION_FLEXION',
      'RANGE_OF_MOTION_ABDUCTION',
      'RANGE_OF_MOTION_ADDUCTION',
      'RANGE_OF_MOTION_EXTERNAL_ROTATION',
      'RANGE_OF_MOTION_INTERNAL_ROTATION',
    ]
    const romInputs = pick(data, romInputIds)
    const romSum = sum(Object.values(romInputs))

    const romScore =
      find(TOTAL_RANGE_OF_MOTION_CONVERSION_TABLE, conversion => {
        const [min, max] = conversion.summed_range_of_motion_range

        return romSum >= min && romSum <= max
      })?.corresponding_score ?? null

    // Harris Hip Score
    const harrisHipScore = sum([
      deformityScore,
      painScore,
      functionScore,
      romScore,
    ])

    return {
      HARRIS_HIP_SCORE: harrisHipScore,
      RANGE_OF_MOTION_SCORE: romScore,
    }
  },
}
