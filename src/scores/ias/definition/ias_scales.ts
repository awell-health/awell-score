export type SubscaleType = 'HEALTH_ANXIETY' | 'ILNESS_BEHAVIOUR'

export const IAS_SUBSCALES: Record<SubscaleType, string[]> = {
  HEALTH_ANXIETY: [
    'IAS_Q02',
    'IAS_Q03',
    'IAS_Q04',
    'IAS_Q06',
    'IAS_Q13',
    'IAS_Q14',
    'IAS_Q15',
    'IAS_Q16',
    'IAS_Q17',
    'IAS_Q19',
    'IAS_Q21',
  ],
  ILNESS_BEHAVIOUR: [
    'IAS_Q23',
    'IAS_Q24',
    'IAS_Q25',
    'IAS_Q27',
    'IAS_Q28',
    'IAS_Q29',
  ],
}
