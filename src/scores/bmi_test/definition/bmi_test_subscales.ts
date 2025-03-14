import { z } from 'zod'

export type SubscaleType = 'BMI_SUBSCALE'

export const BMI_TEST_SUBSCALES: Record<SubscaleType, string[]> = {
  BMI_SUBSCALE: ['weight', 'height'],
}
