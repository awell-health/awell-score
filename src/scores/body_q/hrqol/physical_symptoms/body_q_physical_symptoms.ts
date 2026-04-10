import { isNil, mean, round, sum } from 'lodash'
import { ScoreType } from '../../../../types'
import {
  BODY_Q_PHYSICAL_SYMPTOMS_INPUTS,
  BODY_Q_PHYSICAL_SYMPTOMS_OUTPUT,
} from './definition'

export const body_q_physical_symptoms: ScoreType<
  typeof BODY_Q_PHYSICAL_SYMPTOMS_INPUTS,
  typeof BODY_Q_PHYSICAL_SYMPTOMS_OUTPUT
> = {
  name: 'BODY-Q Physical Symptoms',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_PHYSICAL_SYMPTOMS_INPUTS,
  outputSchema: BODY_Q_PHYSICAL_SYMPTOMS_OUTPUT,
  calculate: ({ data }) => {
    const values: (number | undefined)[] = Object.values(data)
    const nonMissing = values.filter((v): v is number => !isNil(v))
    const totalItems = values.length
    const missingCount = totalItems - nonMissing.length

    if (missingCount >= totalItems / 2) {
      return { BODY_Q_PHYSICAL_SYMPTOMS_SCORE: null }
    }

    const completedMean = mean(nonMissing)
    const imputedValues = values.map(v => (isNil(v) ? completedMean : v))
    const rawSum = round(sum(imputedValues))

    return { BODY_Q_PHYSICAL_SYMPTOMS_SCORE: rawSum }
  },
}
