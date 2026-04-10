import { ScoreType } from '../../../../types'
import { BODY_Q_INFORMATION_INPUTS, BODY_Q_INFORMATION_OUTPUT } from './definition'
import { isNil, mean, round, sum } from 'lodash'

const RESCORED_ITEMS = ['BODY_Q_INFORMATION_Q03', 'BODY_Q_INFORMATION_Q06', 'BODY_Q_INFORMATION_Q07', 'BODY_Q_INFORMATION_Q10'] as const

const rescoreItem = (value: number): number => {
  if (value <= 2) return 1
  if (value === 3) return 2
  return 3
}

const CONVERSION_TABLE: Record<number, number> = {
  10: 0, 11: 14, 12: 20, 13: 24, 14: 28, 15: 31, 16: 33, 17: 36, 18: 38,
  19: 40, 20: 42, 21: 44, 22: 46, 23: 48, 24: 50, 25: 53, 26: 55, 27: 57,
  28: 60, 29: 63, 30: 66, 31: 69, 32: 73, 33: 77, 34: 83, 35: 90, 36: 100,
}

export const body_q_information: ScoreType<typeof BODY_Q_INFORMATION_INPUTS, typeof BODY_Q_INFORMATION_OUTPUT> = {
  name: 'BODY-Q Satisfaction with Information',
  readmeLocation: __dirname,
  inputSchema: BODY_Q_INFORMATION_INPUTS,
  outputSchema: BODY_Q_INFORMATION_OUTPUT,
  calculate: ({ data }) => {
    const entries = Object.entries(data)
    const values = entries.map(([key, value]) => {
      if (isNil(value)) return undefined
      return (RESCORED_ITEMS as readonly string[]).includes(key) ? rescoreItem(value) : value
    })

    const nonMissing = values.filter((v): v is number => !isNil(v))
    const totalItems = values.length
    const missingCount = totalItems - nonMissing.length

    if (missingCount >= totalItems / 2) {
      return { BODY_Q_INFORMATION_SCORE: null }
    }

    const completedMean = mean(nonMissing)
    const imputedValues = values.map(v => (isNil(v) ? completedMean : v))
    const rawSum = round(sum(imputedValues))

    const keys = Object.keys(CONVERSION_TABLE).map(Number).sort((a, b) => a - b)
    const clampedSum = Math.max(keys[0], Math.min(keys[keys.length - 1], rawSum))

    return { BODY_Q_INFORMATION_SCORE: CONVERSION_TABLE[clampedSum] ?? null }
  },
}
