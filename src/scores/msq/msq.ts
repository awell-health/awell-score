import { isNil, sum } from 'lodash'
import { ScoreType } from '../../types'
import { MSQ_OUTPUT, MSQ_INPUTS } from './definition'
import { calculateDomainScore, interpretScore } from './helpers'

export const msq: ScoreType<typeof MSQ_INPUTS, typeof MSQ_OUTPUT> = {
  name: 'Medical Symptoms Questionnaire (MSQ)',
  readmeLocation: __dirname,
  inputSchema: MSQ_INPUTS,
  outputSchema: MSQ_OUTPUT,
  calculate: ({ data }) => {
    const HEAD_TOTAL = calculateDomainScore(data, 'HEAD')
    const EYES_TOTAL = calculateDomainScore(data, 'EYES')
    const EARS_TOTAL = calculateDomainScore(data, 'EARS')
    const NOSE_TOTAL = calculateDomainScore(data, 'NOSE')
    const MOUTH_THROAT_TOTAL = calculateDomainScore(data, 'MOUTH_THROAT')
    const SKIN_TOTAL = calculateDomainScore(data, 'SKIN')
    const HEART_TOTAL = calculateDomainScore(data, 'HEART')
    const LUNGS_TOTAL = calculateDomainScore(data, 'LUNGS')
    const DIGESTIVE_TRACT_TOTAL = calculateDomainScore(data, 'DIGESTIVE_TRACT')
    const JOINTS_MUSCLE_TOTAL = calculateDomainScore(data, 'JOINTS_MUSCLE')
    const WEIGHT_TOTAL = calculateDomainScore(data, 'WEIGHT')
    const ENERGY_ACTIVITY_TOTAL = calculateDomainScore(data, 'ENERGY_ACTIVITY')
    const MIND_TOTAL = calculateDomainScore(data, 'MIND')
    const EMOTIONS_TOTAL = calculateDomainScore(data, 'EMOTIONS')
    const OTHER_TOTAL = calculateDomainScore(data, 'OTHER')

    const allDomains = [
      HEAD_TOTAL,
      EYES_TOTAL,
      EARS_TOTAL,
      NOSE_TOTAL,
      MOUTH_THROAT_TOTAL,
      SKIN_TOTAL,
      HEART_TOTAL,
      LUNGS_TOTAL,
      DIGESTIVE_TRACT_TOTAL,
      JOINTS_MUSCLE_TOTAL,
      WEIGHT_TOTAL,
      ENERGY_ACTIVITY_TOTAL,
      MIND_TOTAL,
      EMOTIONS_TOTAL,
      OTHER_TOTAL,
    ]

    const GRAND_TOTAL = allDomains.every(domain => isNil(domain))
      ? null
      : sum(allDomains)

    return {
      MSQ_GRAND_TOTAL: GRAND_TOTAL,
      MSQ_HEAD_TOTAL: HEAD_TOTAL,
      MSQ_EYES_TOTAL: EYES_TOTAL,
      MSQ_EARS_TOTAL: EARS_TOTAL,
      MSQ_NOSE_TOTAL: NOSE_TOTAL,
      MSQ_MOUTH_THROAT_TOTAL: MOUTH_THROAT_TOTAL,
      MSQ_SKIN_TOTAL: SKIN_TOTAL,
      MSQ_HEART_TOTAL: HEART_TOTAL,
      MSQ_LUNGS_TOTAL: LUNGS_TOTAL,
      MSQ_DIGESTIVE_TRACT_TOTAL: DIGESTIVE_TRACT_TOTAL,
      MSQ_JOINTS_MUSCLE_TOTAL: JOINTS_MUSCLE_TOTAL,
      MSQ_WEIGHT_TOTAL: WEIGHT_TOTAL,
      MSQ_ENERGY_ACTIVITY_TOTAL: ENERGY_ACTIVITY_TOTAL,
      MSQ_MIND_TOTAL: MIND_TOTAL,
      MSQ_EMOTIONS_TOTAL: EMOTIONS_TOTAL,
      MSQ_OTHER_TOTAL: OTHER_TOTAL,
      MSQ_INTERPRETATION:
        GRAND_TOTAL !== null ? interpretScore(GRAND_TOTAL) : null,
    }
  },
}
