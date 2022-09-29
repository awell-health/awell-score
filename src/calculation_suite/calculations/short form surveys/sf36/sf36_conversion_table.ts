import { type StandardizationSerieType } from '../../../../types/calculations.types'

export const SF36_CONVERSION_TABLE: Array<StandardizationSerieType> = [
  {
    items: [
      'SF36_Q01',
      'SF36_Q02',
      'SF36_Q20',
      'SF36_Q22',
      'SF36_Q34',
      'SF36_Q36',
    ],
    conversion_table: [
      { raw: 1, std: 100 },
      { raw: 2, std: 75 },
      { raw: 3, std: 50 },
      { raw: 4, std: 25 },
      { raw: 5, std: 0 },
    ],
  },
  {
    items: [
      'SF36_Q03',
      'SF36_Q04',
      'SF36_Q05',
      'SF36_Q06',
      'SF36_Q07',
      'SF36_Q08',
      'SF36_Q09',
      'SF36_Q10',
      'SF36_Q11',
      'SF36_Q12',
    ],
    conversion_table: [
      { raw: 1, std: 0 },
      { raw: 2, std: 50 },
      { raw: 3, std: 100 },
    ],
  },
  {
    items: [
      'SF36_Q13',
      'SF36_Q14',
      'SF36_Q15',
      'SF36_Q16',
      'SF36_Q17',
      'SF36_Q18',
      'SF36_Q19',
    ],
    conversion_table: [
      { raw: 1, std: 0 },
      { raw: 2, std: 100 },
    ],
  },
  {
    items: ['SF36_Q21', 'SF36_Q23', 'SF36_Q26', 'SF36_Q27', 'SF36_Q30'],
    conversion_table: [
      { raw: 1, std: 100 },
      { raw: 2, std: 80 },
      { raw: 3, std: 60 },
      { raw: 4, std: 40 },
      { raw: 5, std: 20 },
      { raw: 6, std: 0 },
    ],
  },
  {
    items: ['SF36_Q24', 'SF36_Q25', 'SF36_Q28', 'SF36_Q29', 'SF36_Q31'],
    conversion_table: [
      { raw: 1, std: 0 },
      { raw: 2, std: 20 },
      { raw: 3, std: 40 },
      { raw: 4, std: 60 },
      { raw: 5, std: 80 },
      { raw: 6, std: 100 },
    ],
  },
  {
    items: ['SF36_Q32', 'SF36_Q33', 'SF36_Q35'],
    conversion_table: [
      { raw: 1, std: 0 },
      { raw: 2, std: 25 },
      { raw: 3, std: 50 },
      { raw: 4, std: 75 },
      { raw: 5, std: 100 },
    ],
  },
]
