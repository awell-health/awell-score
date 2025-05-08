export type SubscaleType =
  | 'PAIN'
  | 'SYMPTOMS'
  | 'ADL_FUNCTION'
  | 'SPORT_AND_RECREATION_FUNCTION'
  | 'QUALITY_OF_LIFE'

export const KOOS_SUBSCALES: Record<SubscaleType, string[]> = {
  PAIN: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9'],
  SYMPTOMS: ['Sy1', 'Sy2', 'Sy3', 'Sy4', 'Sy5', 'Sy6', 'Sy7'],
  ADL_FUNCTION: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17'],
  SPORT_AND_RECREATION_FUNCTION: ['SP1', 'SP2', 'SP3', 'SP4', 'SP5'],
  QUALITY_OF_LIFE: ['Q1', 'Q2', 'Q3', 'Q4'],
}
