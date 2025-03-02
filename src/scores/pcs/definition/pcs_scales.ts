export type SubscaleType = 'RUMINATION' | 'MAGNIFICATION' | 'HELPLESSNESS'

export const PCS_SCALES: Record<SubscaleType, string[]> = {
  RUMINATION: ['question_8', 'question_9', 'question_10', 'question_11'],
  MAGNIFICATION: ['question_6', 'question_7', 'question_13'],
  HELPLESSNESS: [
    'question_1',
    'question_2',
    'question_3',
    'question_4',
    'question_5',
    'question_12',
  ],
}
