export type SubscaleType =
  | 'SOMATIZATION'
  | 'OBSESSIVE_COMPULSIVE'
  | 'INTERPERSONAL_SENSITIVITY'
  | 'DEPRESSION'
  | 'ANXIETY'
  | 'HOSTILITY'
  | 'PHOBIC_ANXIETY'
  | 'PARANOID_IDEATION'
  | 'PSYCHOTICISM'
  | 'ADDITIONAL_ITEMS'

export const SCL90R_SUBSCALES: Record<SubscaleType, string[]> = {
  SOMATIZATION: [
    'Q01',
    'Q04',
    'Q12',
    'Q27',
    'Q40',
    'Q42',
    'Q48',
    'Q49',
    'Q52',
    'Q53',
    'Q56',
    'Q58',
  ],
  OBSESSIVE_COMPULSIVE: [
    'Q03',
    'Q09',
    'Q10',
    'Q28',
    'Q38',
    'Q45',
    'Q46',
    'Q51',
    'Q55',
    'Q65',
  ],
  INTERPERSONAL_SENSITIVITY: [
    'Q06',
    'Q21',
    'Q34',
    'Q36',
    'Q37',
    'Q41',
    'Q61',
    'Q69',
    'Q73',
  ],
  DEPRESSION: [
    'Q05',
    'Q14',
    'Q15',
    'Q20',
    'Q22',
    'Q26',
    'Q29',
    'Q30',
    'Q31',
    'Q32',
    'Q54',
    'Q71',
    'Q79',
  ],
  ANXIETY: [
    'Q02',
    'Q17',
    'Q23',
    'Q33',
    'Q39',
    'Q57',
    'Q72',
    'Q78',
    'Q80',
    'Q86',
  ],
  HOSTILITY: ['Q11', 'Q24', 'Q63', 'Q67', 'Q74', 'Q81'],
  PHOBIC_ANXIETY: ['Q13', 'Q25', 'Q47', 'Q50', 'Q70', 'Q75', 'Q82'],
  PARANOID_IDEATION: ['Q08', 'Q18', 'Q43', 'Q68', 'Q76', 'Q83'],
  PSYCHOTICISM: [
    'Q07',
    'Q16',
    'Q35',
    'Q62',
    'Q77',
    'Q84',
    'Q85',
    'Q87',
    'Q88',
    'Q90',
  ],
  ADDITIONAL_ITEMS: ['Q19', 'Q44', 'Q59', 'Q60', 'Q64', 'Q66', 'Q89'],
}
