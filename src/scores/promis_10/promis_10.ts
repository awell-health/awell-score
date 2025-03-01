import { ScoreType } from '../../types'
import {
  PROMIS_10_INPUTS,
  PROMIS_10_OUTPUT,
  type ScaleType,
  PROMIS_10_SCALES,
  GLOBAL_PHYSICAL_HEALTH_T_TABLE,
  GLOBAL_MENTAL_HEALTH_T_TABLE,
} from './definition'
import { sum, isNil, pick } from 'lodash'

const q7RecodingTable = {
  '0': 5,
  '1': 4,
  '2': 4,
  '3': 4,
  '4': 3,
  '5': 3,
  '6': 3,
  '7': 2,
  '8': 2,
  '9': 2,
  '10': 1,
}

export const promis_10: ScoreType<
  typeof PROMIS_10_INPUTS,
  typeof PROMIS_10_OUTPUT
> = {
  name: 'PROMIS-10',
  readmeLocation: __dirname,
  inputSchema: PROMIS_10_INPUTS,
  outputSchema: PROMIS_10_OUTPUT,
  calculate: ({ data }) => {
    const q7Recoded = isNil(data.PROMIS_10_Q07RC)
      ? null
      : q7RecodingTable[
          data.PROMIS_10_Q07RC.toString() as keyof typeof q7RecodingTable
        ]

    const recodedData = {
      ...data,
      PROMIS_10_Q07RC: q7Recoded,
    }

    const validInputs = Object.values(recodedData).filter(
      value => !isNil(value),
    )

    if (validInputs.length === 0)
      return {
        GLOBAL_PHYSICAL_HEALTH_RAW_SCORE: null,
        GLOBAL_MENTAL_HEALTH_RAW_SCORE: null,
        GLOBAL_PHYSICAL_HEALTH_T_SCORE: null,
        GLOBAL_MENTAL_HEALTH_T_SCORE: null,
      }

    const calculateRawScaleScore = (scale: ScaleType) => {
      const inputIds = PROMIS_10_SCALES[scale]
      const scaleInputValues = pick(recodedData, inputIds)
      const validScaleInputs = Object.values(scaleInputValues).filter(
        value => !isNil(value),
      )
      if (validScaleInputs.length === 0) return null

      return sum(validScaleInputs)
    }

    const physicalHealthRawScore = calculateRawScaleScore(
      'GLOBAL_PHYSICAL_HEALTH',
    )
    const mentalHealthRawScore = calculateRawScaleScore('GLOBAL_MENTAL_HEALTH')

    const physicalHealthTScore =
      physicalHealthRawScore === null
        ? null
        : (GLOBAL_PHYSICAL_HEALTH_T_TABLE[
            physicalHealthRawScore.toString() as keyof typeof GLOBAL_PHYSICAL_HEALTH_T_TABLE
          ] ?? null)

    const mentalHealthTScore =
      mentalHealthRawScore === null
        ? null
        : (GLOBAL_MENTAL_HEALTH_T_TABLE[
            mentalHealthRawScore.toString() as keyof typeof GLOBAL_MENTAL_HEALTH_T_TABLE
          ] ?? null)

    return {
      GLOBAL_PHYSICAL_HEALTH_RAW_SCORE: physicalHealthRawScore,
      GLOBAL_MENTAL_HEALTH_RAW_SCORE: mentalHealthRawScore,
      GLOBAL_PHYSICAL_HEALTH_T_SCORE: physicalHealthTScore,
      GLOBAL_MENTAL_HEALTH_T_SCORE: mentalHealthTScore,
    }
  },
}
