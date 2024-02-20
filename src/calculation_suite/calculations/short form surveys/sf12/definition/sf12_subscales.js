// @flow

export type SubscaleType = 'PHYSICAL_HEALTH' | 'MENTAL_HEALTH'

export const SF12_SUBSCALES: {| [SubscaleType]: string[] |} = {
  PHYSICAL_HEALTH: [
    'SF12_Q01',
    'SF12_Q02',
    'SF12_Q03',
    'SF12_Q04',
    'SF12_Q05',
    'SF12_Q08'
  ],
  MENTAL_HEALTH: [
    'SF12_Q06',
    'SF12_Q07',
    'SF12_Q09',
    'SF12_Q10',
    'SF12_Q11',
    'SF12_Q12'
  ]
}
