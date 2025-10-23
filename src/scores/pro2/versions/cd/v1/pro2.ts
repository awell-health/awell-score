import { PRO2_INPUTS, PRO2_OUTPUT } from './definition'
import { ScoreType } from '../../../../../types'
import { sum, omit } from 'lodash'
import {
  GENERAL_WELL_BEING_FACTOR,
  STOOL_FREQUENCY_FACTOR,
} from './definition/pro2_inputs'
import { ABDOMINAL_PAIN_FACTOR } from './definition/pro2_inputs'

export const pro2: ScoreType<typeof PRO2_INPUTS, typeof PRO2_OUTPUT> = {
  name: "Patient-Reported Outcome (PRO-2) - Crohn's disease outcome measure",
  readmeLocation: __dirname,
  inputSchema: PRO2_INPUTS,
  outputSchema: PRO2_OUTPUT,
  calculate: ({ data }) => {
    const weightedAbdominalPain = data.ABDOMINAL_PAIN * ABDOMINAL_PAIN_FACTOR
    const weightedStoolFrequency = data.STOOL_FREQUENCY * STOOL_FREQUENCY_FACTOR
    const weightedGeneralWellBeing =
      data.GENERAL_WELL_BEING * GENERAL_WELL_BEING_FACTOR

    const totalScore = sum([
      weightedAbdominalPain,
      weightedStoolFrequency,
      weightedGeneralWellBeing,
      ...Object.values(
        omit(data, [
          // We use the weighted values for the total score
          'STOOL_FREQUENCY',
          'ABDOMINAL_PAIN',
          'GENERAL_WELL_BEING',
        ]),
      ),
    ])

    const getRemission = (): boolean => {
      const UNWEIGHTED_SF_CUT_OFF = 3
      const UNWEIGHTED_AP_CUT_OFF = 1
      const WEIGHTED_SUM_OF_SF_AND_AP_CUT_OFF = 11

      const checkStoolFrequency = data.STOOL_FREQUENCY <= UNWEIGHTED_SF_CUT_OFF

      const checkAbdominalPain = data.ABDOMINAL_PAIN <= UNWEIGHTED_AP_CUT_OFF

      const checkSumOfWeightedStoolFrequencyAndAbdominalPain =
        data.STOOL_FREQUENCY + data.ABDOMINAL_PAIN <=
        WEIGHTED_SUM_OF_SF_AND_AP_CUT_OFF

      return (
        checkStoolFrequency &&
        checkAbdominalPain &&
        checkSumOfWeightedStoolFrequencyAndAbdominalPain
      )
    }

    const remission = getRemission()

    return {
      TOTAL_SCORE: totalScore,
      STOOL_FREQUENCY_AND_ABDOMINAL_PAIN_SUBSCORE:
        weightedAbdominalPain + weightedStoolFrequency,
      REMISSION: remission,
    }
  },
}
