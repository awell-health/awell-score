import { PRO2_INPUTS, PRO2_OUTPUT } from './definition'
import { ScoreType } from '../../../../../types'
import {
  STOOL_FREQUENCY_FACTOR,
  ABDOMINAL_PAIN_FACTOR,
} from './definition/pro2_cd_v2_inputs'
import { isNil, max } from 'lodash'

export const pro2_cd_v2: ScoreType<typeof PRO2_INPUTS, typeof PRO2_OUTPUT> = {
  name: "PRO2 | Crohn's Disease | Version 2 (10-2025)",
  readmeLocation: __dirname,
  inputSchema: PRO2_INPUTS,
  outputSchema: PRO2_OUTPUT,
  calculate: ({ data }) => {
    const weightedStoolFrequency =
      (max([1, data.STOOL_FREQUENCY]) as number) * STOOL_FREQUENCY_FACTOR
    const weightedAbdominalPain = data.ABDOMINAL_PAIN * ABDOMINAL_PAIN_FACTOR

    const totalScore = weightedAbdominalPain + weightedStoolFrequency

    return {
      PRO2_CD_SCORE: totalScore,
      PRO2_CD_ALERT: getAlert(totalScore, data.PRO2_CD_BASELINE_SCORE),
    }
  },
}

export const getAlert = (
  totalScore: number,
  baselineScore?: number,
): boolean => {
  const BASELINE_MAX_INCREASE = 5
  const SCORE_THRESHOLD = 14

  if (isNil(baselineScore)) return false

  const baselineScoreIncrease = totalScore - baselineScore

  const shouldTriggerAlert =
    totalScore > SCORE_THRESHOLD &&
    baselineScoreIncrease >= BASELINE_MAX_INCREASE

  return shouldTriggerAlert
}
