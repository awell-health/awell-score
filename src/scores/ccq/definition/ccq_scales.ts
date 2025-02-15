export type SubscaleType = 'SYMPTOMS' | 'FUNCTIONAL_STATE' | 'MENTAL_STATE'

export const CCQ_SCALES: Record<
  SubscaleType,
  { items: string[]; minAnswers: number }
> = {
  SYMPTOMS: { items: ['Q01', 'Q02', 'Q05', 'Q06'], minAnswers: 3 },
  FUNCTIONAL_STATE: { items: ['Q07', 'Q08', 'Q09', 'Q10'], minAnswers: 3 },
  MENTAL_STATE: { items: ['Q03', 'Q04'], minAnswers: 2 },
}
