import { round } from 'lodash'
import { type SubscaleType } from './pci_subscales'

const BASE_ACTIVE_COPING = 12
const TOTAL_ACTIVE_COPING = 36

const BASE_PASSIVE_COPING = 21
const TOTAL_PASSIVE_COPING = 63

const ROUND_TO = 4

export type CopingScale =
  | 'ACTIVE_COPING'
  | 'ACTIVE_COPING_PERCENTAGE'
  | 'PASSIVE_COPING'
  | 'PASSIVE_COPING_PERCENTAGE'

export const PCI_COPING_STRATEGIES: Record<
  CopingScale,
  {
    subscaleIds: Array<SubscaleType>
    normalizationFunction?: (param: number) => number
  }
> = {
  ACTIVE_COPING: {
    subscaleIds: ['PAIN_TRANSFORM', 'DISTRACTION', 'REDUCING_DEMANDS'],
  },
  ACTIVE_COPING_PERCENTAGE: {
    subscaleIds: ['PAIN_TRANSFORM', 'DISTRACTION', 'REDUCING_DEMANDS'],
    normalizationFunction: score =>
      100 * round((score - BASE_ACTIVE_COPING) / TOTAL_ACTIVE_COPING, ROUND_TO),
  },
  PASSIVE_COPING: {
    subscaleIds: ['RETREATING', 'WORRYING', 'RESTING'],
  },
  PASSIVE_COPING_PERCENTAGE: {
    subscaleIds: ['RETREATING', 'WORRYING', 'RESTING'],
    normalizationFunction: score =>
      100 *
      round((score - BASE_PASSIVE_COPING) / TOTAL_PASSIVE_COPING, ROUND_TO),
  },
}
