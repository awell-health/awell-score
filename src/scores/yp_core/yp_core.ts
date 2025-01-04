import {
  YP_CORE_INPUTS,
  YP_CORE_INTERPRATION_TABLE,
  YP_CORE_OUTPUT,
} from './definition'
import { ScoreType } from '../../types'
import { sum } from 'lodash'

export const yp_core: ScoreType<typeof YP_CORE_INPUTS, typeof YP_CORE_OUTPUT> =
  {
    name: 'Simple Shoulder Test (SST)',
    readmeLocation: __dirname,
    inputSchema: YP_CORE_INPUTS,
    outputSchema: YP_CORE_OUTPUT,
    calculate: ({ data }) => {
      const validInputs = Object.values(data).filter(d => d !== undefined)

      if (validInputs.length === 0)
        return { YP_CORE_TOTAL_SCORE: null, YP_CORE_INTERPRETATION: null }

      const totalScore = (sum(validInputs) / validInputs.length) * 10

      return {
        YP_CORE_TOTAL_SCORE: totalScore,
        YP_CORE_INTERPRETATION:
          YP_CORE_INTERPRATION_TABLE[totalScore.toString()],
      }
    },
  }
