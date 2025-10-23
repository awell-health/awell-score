import { PRO2_UC_INPUTS, PRO2_UC_OUTPUT } from './definition'
import { ScoreType } from '../../../../types'

export const pro2_uc: ScoreType<typeof PRO2_UC_INPUTS, typeof PRO2_UC_OUTPUT> =
  {
    name: 'PRO2 | Ulcerative Colitis | Version 10-2025',
    readmeLocation: __dirname,
    inputSchema: PRO2_UC_INPUTS,
    outputSchema: PRO2_UC_OUTPUT,
    calculate: ({ data }) => {
      return {
        PRO2_UC_SCORE: data.STOOL_FREQUENCY + data.BLOOD_IN_STOOL,
        PRO2_UC_ALERT: getAlert(data.STOOL_FREQUENCY, data.BLOOD_IN_STOOL),
      }
    },
  }

export const getAlert = (
  stoolFrequency: number,
  bloodInStool: number,
): boolean => {
  return stoolFrequency >= 2 || bloodInStool >= 1
}
