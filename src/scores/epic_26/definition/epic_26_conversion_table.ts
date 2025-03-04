type StandardizationSerieType = {
  items: string[]
  conversion_table: { raw: number; std: number }[]
}

export const EPIC_26_standardization: StandardizationSerieType[] = [
  {
    items: [
      'EPIC26_Q01',
      'EPIC26_Q08a',
      'EPIC26_Q08b',
      'EPIC26_Q10',
      'EPIC26_Q11',
    ],
    conversion_table: [
      { raw: 1, std: 0 },
      { raw: 2, std: 25 },
      { raw: 3, std: 50 },
      { raw: 4, std: 75 },
      { raw: 5, std: 100 },
    ],
  },
  {
    items: ['EPIC26_Q02', 'EPIC26_Q09'],
    conversion_table: [
      { raw: 1, std: 0 },
      { raw: 2, std: 33 },
      { raw: 3, std: 67 },
      { raw: 4, std: 100 },
    ],
  },
  {
    items: ['EPIC26_Q03'],
    conversion_table: [
      { raw: 0, std: 100 },
      { raw: 1, std: 67 },
      { raw: 2, std: 33 },
      { raw: 3, std: 0 },
    ],
  },
  {
    items: [
      'EPIC26_Q04a',
      'EPIC26_Q04b',
      'EPIC26_Q04c',
      'EPIC26_Q04d',
      'EPIC26_Q04e',
      'EPIC26_Q06a',
      'EPIC26_Q06b',
      'EPIC26_Q06c',
      'EPIC26_Q06d',
      'EPIC26_Q06e',
      'EPIC26_Q13a',
      'EPIC26_Q13b',
      'EPIC26_Q13c',
      'EPIC26_Q13d',
      'EPIC26_Q13e',
    ],
    conversion_table: [
      { raw: 0, std: 100 },
      { raw: 1, std: 75 },
      { raw: 2, std: 50 },
      { raw: 3, std: 25 },
      { raw: 4, std: 0 },
    ],
  },
  {
    items: ['EPIC26_Q05', 'EPIC26_Q07', 'EPIC26_Q12'],
    conversion_table: [
      { raw: 1, std: 100 },
      { raw: 2, std: 75 },
      { raw: 3, std: 50 },
      { raw: 4, std: 25 },
      { raw: 5, std: 0 },
    ],
  },
]
