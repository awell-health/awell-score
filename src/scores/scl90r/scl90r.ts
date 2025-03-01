import { ScoreType } from '../../types'
import {
  SCL90R_INPUTS,
  SCL90R_OUTPUT,
  SCL90R_SUBSCALES,
  type SubscaleType,
} from './definition'
import { pick, sum } from 'lodash'

export const scl90r: ScoreType<typeof SCL90R_INPUTS, typeof SCL90R_OUTPUT> = {
  name: 'Symptom Checklist-90-Revised (SCL-90-R)',
  readmeLocation: __dirname,
  inputSchema: SCL90R_INPUTS,
  outputSchema: SCL90R_OUTPUT,
  calculate: ({ data }) => {
    const getValidInputs = (inputs: Record<string, number | undefined>) => {
      return Object.values(inputs).filter(value => value !== undefined)
    }

    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const subscaleItems = getValidInputs(
        pick(data, SCL90R_SUBSCALES[subscale]),
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
      TOTAL: totalScore,
      SOMATIZATION: calculateSubscaleScore('SOMATIZATION'),
      OBSESSIVE_COMPULSIVE: calculateSubscaleScore('OBSESSIVE_COMPULSIVE'),
      INTERPERSONAL_SENSITIVITY: calculateSubscaleScore(
        'INTERPERSONAL_SENSITIVITY',
      ),
      DEPRESSION: calculateSubscaleScore('DEPRESSION'),
      ANXIETY: calculateSubscaleScore('ANXIETY'),
      HOSTILITY: calculateSubscaleScore('HOSTILITY'),
      PHOBIC_ANXIETY: calculateSubscaleScore('PHOBIC_ANXIETY'),
      PARANOID_IDEATION: calculateSubscaleScore('PARANOID_IDEATION'),
      PSYCHOTICISM: calculateSubscaleScore('PSYCHOTICISM'),
      ADDITIONAL_ITEMS: calculateSubscaleScore('ADDITIONAL_ITEMS'),
    }
  },
}
