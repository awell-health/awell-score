import { ScoreType } from '../../types'
import {
  MDS_UPDRS_INPUTS,
  MDS_UPDRS_SCALES,
  MDS_UPDRS_OUTPUT,
  UNABLE_TO_RATE,
  type SubscaleType,
} from './definition'
import { isNil, pick, sum } from 'lodash'

export const mds_updrs: ScoreType<
  typeof MDS_UPDRS_INPUTS,
  typeof MDS_UPDRS_OUTPUT
> = {
  name: "The Movement Disorder Society-Sponsored Revision of the Unified Parkinson's Disease Rating Scale (MDS-UPDRS)",
  readmeLocation: __dirname,
  inputSchema: MDS_UPDRS_INPUTS,
  outputSchema: MDS_UPDRS_OUTPUT,
  calculate: ({ data }) => {
    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const subscaleInputs = MDS_UPDRS_SCALES[subscale]
      const subscaleInputData = pick(data, subscaleInputs)

      const validSubscaleInputs = Object.values(subscaleInputData).filter(
        value => !isNil(value) && value !== UNABLE_TO_RATE,
      )

      if (validSubscaleInputs.length === 0) {
        return null
      }

      return sum(validSubscaleInputs)
    }

    const PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING = calculateSubscaleScore(
      'PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING',
    )
    const PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING = calculateSubscaleScore(
      'PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING',
    )
    const PART_3_MOTOR_EXAMINATION = calculateSubscaleScore(
      'PART_3_MOTOR_EXAMINATION',
    )
    const PART_4_MOTOR_COMPLICATIONS = calculateSubscaleScore(
      'PART_4_MOTOR_COMPLICATIONS',
    )

    const subscaleScores = [
      PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING,
      PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING,
      PART_3_MOTOR_EXAMINATION,
      PART_4_MOTOR_COMPLICATIONS,
    ]

    return {
      MDS_UPDRS_TOTAL: subscaleScores.every(score => score === null)
        ? null
        : sum(subscaleScores),
      PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING:
        PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING,
      PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING:
        PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING,
      PART_3_MOTOR_EXAMINATION: PART_3_MOTOR_EXAMINATION,
      PART_4_MOTOR_COMPLICATIONS: PART_4_MOTOR_COMPLICATIONS,
    }
  },
}
