import type { CalculationOutputDefinition } from '../../../src/types/calculations.types'

export const MDS_UPDRS_OUTPUT: CalculationOutputDefinition[] = [
  {
    subresult_id: 'MDS_UPDRS_TOTAL',
    label: { en: 'Total score' },
    type: 'number',
  },
  {
    subresult_id: 'PART_1_NON_MOTOR_EXPERIENCES_OF_DAILY_LIVING',
    label: { en: 'Part I: non-motor experiences of daily living (nM-EDL)' },
    type: 'number',
  },
  {
    subresult_id: 'PART_2_MOTOR_EXPERIENCES_OF_DAILY_LIVING',
    label: { en: 'Part II: motor experiences of daily living (M-EDL)' },
    type: 'number',
  },
  {
    subresult_id: 'PART_3_MOTOR_EXAMINATION',
    label: { en: 'Part III: motor examination' },
    type: 'number',
  },
  {
    subresult_id: 'PART_4_MOTOR_COMPLICATIONS',
    label: { en: 'Part IV: motor complications' },
    type: 'number',
  },
]
