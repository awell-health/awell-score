import { round } from 'mathjs'

const BASE_ACTIVE_COPING = 12
const TOTAL_ACTIVE_COPING = 36

const BASE_PASSIVE_COPING = 21
const TOTAL_PASSIVE_COPING = 63

const ROUND_TO = 4

export type CopingScaleType = {
  id: string
  label: string
  subscale_ids: Array<string>
  score?: number
  normalization_function?: () => void
}

export const PCI_COPING_STRATEGIES: Array<CopingScaleType> = [
  {
    id: 'ACTIVE_COPING',
    label: 'Active coping',
    subscale_ids: ['PAIN_TRANSFORM', 'DISTRACTION', 'REDUCING_DEMANDS'],
  },
  {
    id: 'ACTIVE_COPING_PERCENTAGE',
    label: 'Active coping (%)',
    subscale_ids: ['PAIN_TRANSFORM', 'DISTRACTION', 'REDUCING_DEMANDS'],
    //@ts-expect-error to do
    normalization_function: score =>
      100 * round((score - BASE_ACTIVE_COPING) / TOTAL_ACTIVE_COPING, ROUND_TO),
  },
  {
    id: 'PASSIVE_COPING',
    label: 'Passive coping',
    subscale_ids: ['RETREATING', 'WORRYING', 'RESTING'],
  },
  {
    id: 'PASSIVE_COPING_PERCENTAGE',
    label: 'Passive coping (%)',
    subscale_ids: ['RETREATING', 'WORRYING', 'RESTING'],
    //@ts-expect-error to do
    normalization_function: score =>
      100 *
      round((score - BASE_PASSIVE_COPING) / TOTAL_PASSIVE_COPING, ROUND_TO),
  },
]
