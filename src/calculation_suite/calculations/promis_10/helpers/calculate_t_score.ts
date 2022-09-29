import { MISSING_MESSAGE } from '../../../PARAMETERS'

export const calculate_t_score =
  (raw_score: number | string) =>
  (conversion_table: any): number | string => {
    if (raw_score === MISSING_MESSAGE) return MISSING_MESSAGE

    return conversion_table[raw_score]
  }
