import { type StandardizationSerieType } from '../../../../types/calculations.types'

export const SF12_CONVERSION_TABLE: Array<StandardizationSerieType> = [
  {
    items: ['SF12_Q01'],
    conversion_table: [
      { raw: 1, std: 5 },
      { raw: 2, std: 4.4 },
      { raw: 3, std: 3.4 },
      { raw: 4, std: 2 },
      { raw: 5, std: 1 },
    ],
  },
  {
    items: [
      'SF12_Q02',
      'SF12_Q03',
      'SF12_Q04',
      'SF12_Q05',
      'SF12_Q06',
      'SF12_Q07',
      'SF12_Q10',
      'SF12_Q12',
    ],
    conversion_table: [
      // No recoding
      { raw: 1, std: 1 },
      { raw: 2, std: 2 },
      { raw: 3, std: 3 },
      { raw: 4, std: 4 },
      { raw: 5, std: 5 },
    ],
  },
  {
    items: ['SF12_Q08', 'SF12_Q09', 'SF12_Q11'],
    conversion_table: [
      { raw: 1, std: 5 },
      { raw: 2, std: 4 },
      { raw: 3, std: 3 },
      { raw: 4, std: 2 },
      { raw: 5, std: 1 },
    ],
  },
]
