import type { CalculationOutputDefinition } from '../../../../types/calculations.types'

export const MINI_BEST_TEST_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'ANTICIPATORY_POSTURAL_ADJUSTEMENTS',
    label: { en: 'Anticipatory postural adjustments' },
    type: 'number',
  },
  {
    subresult_id: 'REACTIVE_POSTURAL_CONTROL',
    label: { en: 'Reactive postural control' },
    type: 'number',
  },
  {
    subresult_id: 'SENSORY_ORIENTATION',
    label: { en: 'Sensory orientation' },
    type: 'number',
  },
  {
    subresult_id: 'DYNAMIC_GAIT',
    label: { en: 'Dynamic gait' },
    type: 'number',
  },
  {
    subresult_id: 'TOTAL',
    label: { en: 'Total score' },
    type: 'number',
  },
]
