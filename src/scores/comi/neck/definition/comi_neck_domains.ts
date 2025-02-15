export type DomainType =
  | 'PAIN'
  | 'NECK_RELATED_FUNCTION'
  | 'SYMPTOM_SPECIFIC_WELLBEING'
  | 'GENERAL_QOL'
  | 'DISABILITY'

export type DomainCalcType = 'mean' | 'max' | 'raw'

export const COMI_NECK_DOMAINS: Record<
  DomainType,
  {
    items: string[]
    calc: DomainCalcType
  }
> = {
  PAIN: {
    items: ['item_1a', 'item_1b'],
    calc: 'max',
  },
  NECK_RELATED_FUNCTION: {
    items: ['item_2'],
    calc: 'raw',
  },
  SYMPTOM_SPECIFIC_WELLBEING: {
    items: ['item_3'],
    calc: 'raw',
  },
  GENERAL_QOL: {
    items: ['item_4'],
    calc: 'raw',
  },
  DISABILITY: {
    items: ['item_5', 'item_6'],
    calc: 'mean',
  },
}
