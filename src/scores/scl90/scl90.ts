import { ScoreType } from '../../types'
import {
  SCL90_INPUTS,
  SCL90_OUTPUT,
  SCL90_SUBSCALES,
  type SubscaleType,
} from './definition'
import { pick, sum } from 'lodash'

export const scl90: ScoreType<typeof SCL90_INPUTS, typeof SCL90_OUTPUT> = {
  name: 'Symptom Checklist-90 (SCL-90)',
  readmeLocation: __dirname,
  inputSchema: SCL90_INPUTS,
  outputSchema: SCL90_OUTPUT,
  calculate: ({ data }) => {
    const getValidInputs = (inputs: Record<string, number | undefined>) => {
      return Object.values(inputs).filter(value => value !== undefined)
    }

    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const subscaleItems = getValidInputs(
        pick(data, SCL90_SUBSCALES[subscale]),
      )

      if (subscaleItems.length === 0) {
        return null
      }
      return sum(subscaleItems)
    }

    const totalScore = getValidInputs(data).length
      ? sum(getValidInputs(data))
      : null

    return {
      PSNEUR: totalScore,
      AGO: calculateSubscaleScore('AGO'),
      ANG: calculateSubscaleScore('ANG'),
      DEP: calculateSubscaleScore('DEP'),
      SOM: calculateSubscaleScore('SOM'),
      IN: calculateSubscaleScore('IN'),
      SEN: calculateSubscaleScore('SEN'),
      HOS: calculateSubscaleScore('HOS'),
      SLA: calculateSubscaleScore('SLA'),
      ADD: calculateSubscaleScore('ADD'),
    }
  },
}
