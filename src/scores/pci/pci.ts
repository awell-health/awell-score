import { isNil, pick, sum } from 'lodash'
import { ScoreType } from '../../types'
import {
  PCI_OUTPUT,
  PCI_INPUTS,
  PCI_SUBSCALES,
  type SubscaleType,
  type CopingScale,
  PCI_COPING_STRATEGIES,
} from './definition'

export const pci: ScoreType<typeof PCI_INPUTS, typeof PCI_OUTPUT> = {
  name: 'Pain Coping Inventory (PCI)',
  readmeLocation: __dirname,
  inputSchema: PCI_INPUTS,
  outputSchema: PCI_OUTPUT,
  calculate: ({ data }) => {
    const calculateSubscaleScore = (subscale: SubscaleType) => {
      const subscaleInputs = PCI_SUBSCALES[subscale]
      const subscaleInputValues = pick(data, subscaleInputs)
      return sum(Object.values(subscaleInputValues))
    }

    const subscaleScores: Record<SubscaleType, number> = {
      PAIN_TRANSFORM: calculateSubscaleScore('PAIN_TRANSFORM'),
      DISTRACTION: calculateSubscaleScore('DISTRACTION'),
      REDUCING_DEMANDS: calculateSubscaleScore('REDUCING_DEMANDS'),
      RETREATING: calculateSubscaleScore('RETREATING'),
      WORRYING: calculateSubscaleScore('WORRYING'),
      RESTING: calculateSubscaleScore('RESTING'),
    }

    const calculateCopingScore = (copingScale: CopingScale) => {
      const { subscaleIds, normalizationFunction } =
        PCI_COPING_STRATEGIES[copingScale]
      const subscaleScoresForCopingScale = pick(subscaleScores, subscaleIds)
      const validSubscaleScores = Object.values(
        subscaleScoresForCopingScale,
      ).filter(v => !isNil(v))

      if (validSubscaleScores.length !== subscaleIds.length) return null

      const copingScore = sum(validSubscaleScores)

      if (normalizationFunction) return normalizationFunction(copingScore)

      return copingScore
    }

    return {
      PAIN_TRANSFORM: subscaleScores.PAIN_TRANSFORM,
      DISTRACTION: subscaleScores.DISTRACTION,
      REDUCING_DEMANDS: subscaleScores.REDUCING_DEMANDS,
      RETREATING: subscaleScores.RETREATING,
      WORRYING: subscaleScores.WORRYING,
      RESTING: subscaleScores.RESTING,
      ACTIVE_COPING: calculateCopingScore('ACTIVE_COPING'),
      ACTIVE_COPING_PERCENTAGE: calculateCopingScore(
        'ACTIVE_COPING_PERCENTAGE',
      ),
      PASSIVE_COPING: calculateCopingScore('PASSIVE_COPING'),
      PASSIVE_COPING_PERCENTAGE: calculateCopingScore(
        'PASSIVE_COPING_PERCENTAGE',
      ),
    }
  },
}
